# Post-Mortem: MeiliSearch Overload on fi1.bonfire.cafe

**Date:** 2026-03-28 (updated 2026-04-04)

## Symptoms

- MeiliSearch process (PID 5721, `bonfire_cafe_search`) at 101% CPU, ~15.6GB RAM
- 167+ hours accumulated CPU time since Mar 28
- `prod_closed` index perpetually indexing, never reaching idle state

## Root Causes

### 1. Redundant index init on every document operation

Bug in `extensions/bonfire_search/lib/indexer.ex:100-103` — every document indexing call passed `init_index_first=true`, triggering `create_index` + `set_facets` + `set_searchable_fields` before each document. The `create_index` failed every time with "Index already exists", but the settings updates still got queued and processed.

**Partial fix deployed** ([bonfire_search@3d38db4](https://github.com/bonfire-networks/bonfire_search/commit/3d38db4a9eab01b5a0ecc30d51303e72f9a703f2)): moved index initialization to app startup with health-check retry, removed `init_index_first` from per-document calls. This eliminates the 3 redundant HTTP calls per document.

### 2. Unbounded index size + one-at-a-time indexing (still active)

As of 2026-04-04, `prod_closed` contains **2,142,167 documents** (12.6 GB index size) and is perpetually indexing. The Bonfire app sends individual document PUTs every few seconds via federation activity, and each single-document update takes 4-6 seconds to process against the 2.1M document index.

The indexing is synchronous in the Epic pipeline (no Oban), so every post/update action pays the cost of:
- DB preloads (activity tags, creator, replied, creator settings)
- Synchronous HTTP PUT to MeiliSearch
- MeiliSearch re-indexing 2.1M documents for each single-document addition

`prod_closed` contents:
- ~2.09M posts (`post_content`, `created`, `replied`)
- ~50K profiles (`character`, `profile`)
- ~173 other items

For comparison, `prod_public` has 193K documents (164 MB), indexes in 1-2 seconds, and reaches idle state normally.

### 3. Five MeiliSearch instances with no resource limits

| Container | RAM | CPU% |
|-----------|-----|------|
| `bonfire_cafe_search` | ~15.6 GB | 101% |
| `demo_bonfire_cafe_search` | ~4.5 GB | 0.4% |
| `playground_bonfire_cafe_search` | ~3.3 GB | 0% |
| `openscience_network_search` | ~1.3 GB | 0% |
| `campground_bonfire_cafe_search` | ~1.2 GB | 0% |

Total MeiliSearch footprint: **~26 GB RAM** with no memory or CPU limits configured.

## Actions Taken

| Action | Status |
|--------|--------|
| Fix redundant index init per document ([3d38db4](https://github.com/bonfire-networks/bonfire_search/commit/3d38db4a9eab01b5a0ecc30d51303e72f9a703f2)) | Done |

## TODO

### Critical

1. **Reduce `prod_closed` index size** — 2.1M documents is excessive. Options:
   - Only index local posts; skip federated content unless a local user interacts with it (likely 90%+ reduction)
   - Add a TTL to remove old posts from the search index (keep in Postgres, just not searchable)
2. **Batch indexing** — buffer document updates and send to MeiliSearch in batches (e.g. every 10-30 seconds) instead of one at a time
3. **Cap MeiliSearch resources** — add `--max-indexing-memory 4GiB --max-indexing-threads 1` to prevent runaway memory/CPU usage
4. **Add Docker resource limits** for MeiliSearch containers (`--memory`, `--cpus`)
