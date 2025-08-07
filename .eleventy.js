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

  eleventyConfig.addNunjucksFilter("keys", function(obj) {
    return Object.keys(obj);
  });

  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

  eleventyConfig.addNunjucksAsyncFilter('fetchRepoData', async (repo, callback) => {
    const slug = typeof repo === 'string' ? repo : repo.name;
      try {
        const response = await axios.get(`https://api.github.com/repos/bonfire-networks/${repo.name}`, {
          headers: {
            'Authorization': `token ${process.env.API_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        callback(null, response.data);
      } catch (error) {
        console.error('GitHub API error:', error);
        callback(error);
      }
    
    
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateStr => {
    const date = DateTime.fromISO(dateStr, {zone: 'utc'});
    if (date.isValid) {
      return date.toFormat("dd LLL yyyy");
    } else {
      console.error(`Invalid date: ${dateStr}`);
      return dateStr;  // Return the original string if it can't be parsed
    }
  });

  eleventyConfig.addFilter('remoteMarkdown', async function(url) {
    const response = await axios.get(url).catch(function (error) {
      console.log(url)
      console.log(error.toJSON());
    }) || {};

    return md.render(response.data || "");
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
    }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#"
    });
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
      "liquid"
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

