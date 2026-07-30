// Post URLs are slugified from the title (see posts/posts.11tydata.js), not from the
// filename, so /posts/<filename>/ would otherwise 404 (and does today, in production).
// GitHub Pages has no redirect config, so emit a small HTML stub at the filename form
// pointing at the real URL. rel="canonical" keeps one authoritative URL for search
// engines, and noindex keeps the stub itself out of the index.
//
// NOTE: the posts needing a stub are filtered in `pagination.before` rather than by
// returning `permalink: false` for the rest. In Eleventy 2.0.1 a paginated template
// whose permalink function returns false for any page silently suppresses output for
// ALL of its pages, so the whole set goes missing with no error.

const aliasFor = (post) => `/posts/${post.fileSlug}/`;

module.exports = class {
  data() {
    return {
      pagination: {
        data: "collections.posts",
        size: 1,
        alias: "post",
        addAllPagesToCollections: false,
        before: (posts) =>
          posts.filter((post) => post && post.url && aliasFor(post) !== post.url),
      },
      permalink: (data) => `${aliasFor(data.post)}index.html`,
    };
  }

  render(data) {
    const to = data.post.url;
    const absolute = new URL(to, data.metadata.url).href;
    const title = data.post.data.title || "Redirecting";
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
