// Post URLs are slugified from the title (see posts/posts.11tydata.js), not from the
// filename, so /posts/<filename>/ would otherwise 404 (and does today, in production).
// GitHub Pages has no redirect config, so emit a small HTML stub at the filename form
// pointing at the real URL. rel="canonical" keeps one authoritative URL for search
// engines, and noindex keeps the stub itself out of the index.
//
// The same stub covers retitled posts: because the slug follows the title, editing a
// title moves the post and breaks every existing link to it. List the old path(s) under
// `aliases` in the post's front matter and they keep resolving:
//
//   aliases:
//     - /posts/the-old-slug/
//
// NOTE: the redirects are built by flattening posts into {from, to} pairs in
// `pagination.before` rather than by returning `permalink: false` for the ones that
// need no stub. In Eleventy 2.0.1 a paginated template whose permalink function returns
// false for any page silently suppresses output for ALL of its pages, so the whole set
// goes missing with no error.

const normalize = (path) => {
  const trimmed = String(path).trim();
  if (!trimmed) return null;
  const leading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return leading.endsWith("/") ? leading : `${leading}/`;
};

const aliasesFor = (post) => {
  const declared = post.data.aliases || [];
  const all = [`/posts/${post.fileSlug}/`, ...[].concat(declared)];
  return [...new Set(all.map(normalize).filter(Boolean))];
};

module.exports = class {
  data() {
    return {
      pagination: {
        data: "collections.posts",
        size: 1,
        alias: "redirect",
        addAllPagesToCollections: false,
        before: (posts) => {
          const seen = new Set();
          return posts
            .filter((post) => post && post.url)
            .flatMap((post) =>
              aliasesFor(post)
                .filter((from) => from !== post.url && !seen.has(from) && seen.add(from))
                .map((from) => ({
                  from,
                  to: post.url,
                  title: post.data.title || "Redirecting",
                }))
            );
        },
      },
      permalink: (data) => `${data.redirect.from}index.html`,
    };
  }

  render(data) {
    const { to, title } = data.redirect;
    const absolute = new URL(to, data.metadata.url).href;
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<link rel="canonical" href="${absolute}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
</head>
<body>
<p>This page has moved to <a href="${to}">${absolute}</a>.</p>
</body>
</html>
`;
  }
};
