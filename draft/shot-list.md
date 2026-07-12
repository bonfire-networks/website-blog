# Shot list — every missing image on the site

The layout already fixes each slot's aspect ratio and max rendered width, so file
dimensions are decided upfront. Capture at 2× the max rendered width, walk this list
top to bottom in one session per instance, tick as you go.

## The capture recipe (use the same one for every screenshot)

1. Chrome → DevTools → device toolbar → **Responsive**, custom size **1280 × 720**, **DPR 2**.
   (Viewport = target ratio, so zero cropping afterwards.)
2. Browser zoom 100 %, same theme for every shot in the same carousel.
3. `Cmd+Shift+P` → **Capture screenshot** → exact 2560 × 1440 PNG, no window chrome.
   The site adds the rounded corner + border, so raw edge-to-edge UI is correct.
4. Save with the slot ID below → replacing a placeholder is a one-line edit,
   and `ls img/jacobin/` shows progress.

**Set dressing first (this is what prevents ugly screenshots):** stage the content
once before capturing anything. Real-looking display names + avatars, German copy on
the Jacobin instance, one genuinely imported article, a thread with 3–4 nested
replies (one from a visibly-Mastodon handle), no empty states, no "test test",
no personal notifications visible. The captions below are the script — stage
exactly what the caption promises.

---

## 1 · case-studies/jacobin.njk  → save to `/img/jacobin/`

### Type key
- **S** staged screenshot (2560 × 1440, recipe above)
- **C** zoom-crop / detail (800 × 800 square, cropped from an S shot at 2× zoom)
- **A** artwork / illustration (commission or compose — not a screenshot)

### What we built — intro band
| ID | Type | Spec | Content |
|---|---|---|---|
| ✅ `j00-intro-artwork` | A | 21:9, ≥ 2560 × 1097 | Jacobin-style illustration introducing the community space (pairs with marxglass.png — same illustrator/red-black language) |

### Piece 01 · Publishing (grid: 1 wide + 2 half-width, all 16:9)
| ID | Type | Content — the caption is the brief |
|---|---|---|
| `j01-article-discussion` | S | **Wide slot.** A Jacobin article imported into Bonfire, discussion thread visible below it |
| ✅ `j02-sso` | S | The SSO sign-in screen (Jacobin-branded login) |
| ✅ `j04-article-in-feed` | S | The feed with an imported article card in it, visibility badge visible |
| ~~`j03-tiers-circles`~~ | — | Cut from layout (membership sync now told in the caption of j04); shoot only if it earns a slot back |

### Piece 02 · Engagement (grid: 1 wide + 2 half-width, all 16:9)
| ID | Type | Content |
|---|---|---|
| `j05-widget-under-article` | S | **Wide slot.** jacobin.de article page (Ghost) with the comments widget rendered beneath it |
| `j07-nested-thread` | S | A nested thread with boosts/upvotes visible — depth ≥ 2 |
| `j08-cross-network` | S | A reply where the author handle is clearly @someone@mastodon.social or a Bluesky bridge |
| ~~`j06-widget-anywhere`~~ | — | Cut from layout (visually duplicated j05); the "any CMS" message lives in the section intro |

### Piece 03 · Community (grid: 4 × 16:9, 2-col)
| ID | Type | Content |
|---|---|---|
| ✅ `j09-group-topics` | S | A Jacobin group's home, topic list prominent |
| ✅ `j10-boundary-presets` | S | Group creation/settings: the boundary presets (public / announcement / private / circle-restricted) |
| `j11-topic-follow` | S | Inside one topic, the follow control visible |
| `j12-community-rules` | S | The community rules extension: a group's rules screen |

### Co-design & identity
| ID | Type | Spec | Content |
|---|---|---|---|
| `j13-branded-wide` | S | 21:9 **+ 18 % vertical bleed → 2560 × 1295** (parallax crops it) | Hero shot: the Jacobin-branded instance home, wide |
| ✅ `j14-sq-colours` | C | 800 × 800 | Filled with the illustrated avatar set (red identity) |
| `j15-sq-masthead` | C | 800 × 800 | Detail crop: logo/masthead in the nav |
| `j16-sq-onboarding` | C/S | 800 × 800 | One onboarding step, cropped square |
| `j17-sq-german` | C | 800 × 800 | Any screen where the German UI copy is the star |
| `j18-sq-feed` | C | 800 × 800 | Feed/dashboard detail crop |

The five squares are crops, not new captures — take them from j01–j13 at 2× zoom
so the whole strip shares one visual temperature.

**Also missing on this page (not images):** the testimonial quote + name/role, and
the launch numbers promised by "we'll update this page with what the numbers show".

---

## 2 · Home — shape.njk carousel  → save to `/img/v2/`
4 × 16:9, same recipe, captured on campground.bonfire.cafe (generic Bonfire, not Jacobin):

| ID | Content |
|---|---|
| `shape-01-blocks` | Admin settings: switching feature blocks on/off |
| `shape-02-preset` | Setup flow: choosing a preset |
| `shape-03-theming` | Theme & branding settings |
| `shape-04-shaped-home` | A shaped community home with custom feeds |

## 3 · case-studies/index.njk — "More communities" cards  → save to `/img/v2/` or `/img/cases/`
4 × 16:9 (rendered ~550 px wide → 2560 × 1440 is more than enough, or capture at 1440 × 810):

| ID | Content | Note |
|---|---|---|
| `case-mentaal` | Private invite-only group, boundaries UI | Private community — stage a lookalike or blur names; don't screenshot real members |
| `case-totnes` | Town noticeboard / local feeds | |
| `case-osn` | Researcher profile with publications & DOIs | |
| `case-cineteca` | (card copy still "to fill" — decide the story first, then the shot) | |

---

## Order of work
1. Stage content on campground → shoot section 2 (generic, easiest, unblocks the home).
2. Stage content on jacobin.social → shoot j01–j13 in one session → crop j14–j18.
3. Section 3 depends on access to each community — ask each admin for one staged shot using this same recipe, or stage lookalikes on campground.
4. Commission/compose j00 last; the page works without it longer than without the carousels.
