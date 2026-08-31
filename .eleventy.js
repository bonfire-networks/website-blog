require('dotenv').config()
const { API_TOKEN } = process.env
const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const EleventyFetch = require("@11ty/eleventy-fetch");
const axios = require('axios');
const matter = require('gray-matter');

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Build-time logo fetch via logo.dev → cached, inlined as a data URI so nothing
  // loads from a third party at runtime.  Usage: {{ "circle.so" | logo }}
  //   optional 2nd arg = size (px), 3rd arg = greyscale (default true)
  eleventyConfig.addNunjucksAsyncFilter("logo", async function (domain, callback) {
    if (!domain) return callback(null, "");
    const token = process.env.LOGODEV_TOKEN || "pk_Q9vswM0BS5ivkJAiin1dHQ";
    const url = `https://img.logo.dev/${encodeURIComponent(domain)}?token=${token}&greyscale=true&format=png&size=128&retina=true`;
    try {
      const buffer = await EleventyFetch(url, { duration: "30d", type: "buffer" });
      callback(null, `data:image/png;base64,${buffer.toString("base64")}`);
    } catch (e) {
      callback(null, "");
    }
  });

  // Build-time fetch of an arbitrary remote image → cached, inlined as a data
  // URI, so nothing loads from a third party at runtime and a dead host can't
  // break the page. Returns "" on failure, so callers must handle the empty
  // case. Usage: {{ "https://example.org/avatar.jpg" | inlineImage }}
  eleventyConfig.addNunjucksAsyncFilter("inlineImage", async function (url, callback) {
    if (!url) return callback(null, "");
    const ext = (url.split("?")[0].split(".").pop() || "").toLowerCase();
    const mime = { png: "png", gif: "gif", webp: "webp", svg: "svg+xml" }[ext] || "jpeg";
    try {
      const buffer = await EleventyFetch(url, { duration: "30d", type: "buffer" });
      callback(null, `data:image/${mime};base64,${buffer.toString("base64")}`);
    } catch (e) {
      callback(null, "");
    }
  });

  eleventyConfig.addNunjucksFilter("keys", function(obj) {
    return Object.keys(obj);
  });

  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

  eleventyConfig.addNunjucksAsyncFilter('fetchRepoData', async (repo, callback) => {
      try {
        const data = await EleventyFetch(`https://api.github.com/repos/bonfire-networks/${repo.name}`, {
          duration: '1d',
          type: 'json',
          fetchOptions: {
            headers: {
              'Authorization': `token ${API_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json'
            },
            signal: AbortSignal.timeout(8000)
          }
        });
        callback(null, data);
      } catch (error) {
        console.error(`GitHub API error for ${repo.name}:`, error.message);
        // Fall back to the data we already have so a slow/unreachable API
        // doesn't fail (or hang) the whole build.
        callback(null, repo);
      }
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    // Handle both Date objects and ISO strings
    let date;
    if (dateObj instanceof Date) {
      date = DateTime.fromJSDate(dateObj, { zone: 'utc' });
    } else if (typeof dateObj === 'string') {
      date = DateTime.fromISO(dateObj, { zone: 'utc' });
    } else {
      console.error(`Invalid date: ${dateObj}`);
      return dateObj;
    }

    if (date.isValid) {
      return date.toFormat("dd LLL yyyy");
    } else {
      console.error(`Invalid date: ${dateObj} for ${date}`);
      return dateObj;
    }
  });


  eleventyConfig.addFilter('remoteMarkdown', async function(url) {
    const content = await fetchRemoteMarkdown(url).catch(function (error) {
      console.error(`remoteMarkdown fetch failed for ${url}:`, error.message);
      return "";
    });

    return md.render(content || "");
});

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

    // Customize Markdown library and settings:
    const markdownLibrary = markdownIt({
      html: true,
      breaks: true,
      linkify: true
    })
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#"
    });

    // Add target="_blank" and rel="noopener" to all links
    const defaultRender = markdownLibrary.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    markdownLibrary.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      const aIndex = tokens[idx].attrIndex('target');
      if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank']); // add new attribute
      } else {
        tokens[idx].attrs[aIndex][1] = '_blank';    // replace value
      }
      // Add rel="noopener"
      const relIndex = tokens[idx].attrIndex('rel');
      if (relIndex < 0) {
        tokens[idx].attrPush(['rel', 'noopener']);
      } else {
        tokens[idx].attrs[relIndex][1] = 'noopener';
      }
      return defaultRender(tokens, idx, options, env, self);
    };

    eleventyConfig.setLibrary("md", markdownLibrary);

    
  // Return the smallest number argument
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  eleventyConfig.addFilter("filterTagList", tags => {
    // should match the list in tags.njk
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  })

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return [...tagSet];
  });


  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("archives");
  eleventyConfig.addPassthroughCopy("prints");
  eleventyConfig.addPassthroughCopy("fediforum");
  eleventyConfig.addPassthroughCopy(".well-known");

  // NOTE: should we instead watch the PostCSS output so regenerated CSS is copied to _site and the browser reloads? 
  eleventyConfig.watchIgnores.add("css/style_v2.css");

  const md = new markdownIt();
  
  eleventyConfig.addFilter('markdown', function(value) {
    return markdownLibrary.render(value);
});

  eleventyConfig.addNunjucksShortcode(
    "markdown",
    content => `<div class="prose md-block">${markdownLibrary.render(content)}</div>`
  );

  eleventyConfig.addAsyncShortcode("remote_markdown", async function (url) {
    const res = await fetchRemoteMarkdown(url);
    // console.log(res)
    if (!res || !(typeof res === 'string' || res instanceof String)) {
      return "";
    }
    return `${markdownLibrary.render(res)}`;
  });

  eleventyConfig.addAsyncShortcode("remote_markdown_content", async function () {
    try {
      // Access the page's remoteUrl from the context
      const url = this.page?.data?.remoteUrl || this.ctx?.remoteUrl;
      
      if (!url) {
        return "";
      }
      
      const res = await fetchRemoteMarkdown(url);
      
      if (!res || !(typeof res === 'string' || res instanceof String)) {
        return "";
      }
      
      // Fix YAML issues before parsing
      const fixedContent = res.replace(/^(title:\s*)(.+)$/m, (match, prefix, title) => {
        if (title.includes(':') && !title.startsWith('"') && !title.startsWith("'")) {
          return `${prefix}"${title}"`;
        }
        return match;
      });
      
      // Parse the frontmatter
      const parsed = matter(fixedContent);
      
      // Return only the content, not the frontmatter
      const rendered = markdownLibrary.render(parsed.content);
      
      return rendered;
    } catch (error) {
      console.error("Error in remote_markdown_content:", error);
      return "";
    }
  });


  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });


  eleventyConfig.addFilter("split", function (str, separator) {
    if (!str) return [];
    return str.split(separator);
  });


  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid",
      "11ty.js"
    ],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};


async function fetchRemoteMarkdown(url) {
  if (!url) {
    return;
  }
  return EleventyFetch(url, {
    duration: "1d",
    type: "text",
    fetchOptions: {
      signal: AbortSignal.timeout(8000)
    }
  });
}

async function fetchRemotePostWithMetadata(url) {
  const content = await fetchRemoteMarkdown(url);
  if (!content) {
    return null;
  }
  
  // Fix YAML issues: empty values and unquoted strings with colons
  const fixedContent = content.replace(/^(title:\s*)(.+)$/m, (match, prefix, title) => {
    // Quote title if it contains a colon
    if (title.includes(':') && !title.startsWith('"') && !title.startsWith("'")) {
      return `${prefix}"${title}"`;
    }
    return match;
  });
  
  const parsed = matter(fixedContent);
  return parsed;
}
