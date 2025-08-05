const EleventyFetch = require("@11ty/eleventy-fetch");
const matter = require('gray-matter');

module.exports = {
  tags: ["posts"],
  layout: "layouts/post.njk",
  eleventyComputed: {
    // Fetch remote content if remoteUrl is specified
    title: async (data) => {
      if (data.remoteUrl && !data.title) {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        return parsed?.data?.title || data.title;
      }
      return data.title;
    },
    
    description: async (data) => {
      if (data.remoteUrl && !data.description) {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        // If remote description is empty, use first 240 chars of content
        if (!parsed?.data?.description && parsed?.content) {
          // Strip markdown and get first 240 chars
          const plainText = parsed.content
            .replace(/#{1,6}\s+/g, '') // Remove headers
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
            .replace(/[*_~`]/g, '') // Remove formatting
            .replace(/\n+/g, ' ') // Replace newlines with spaces
            .trim();
          return plainText.substring(0, 240) + (plainText.length > 240 ? '...' : '');
        }
        return parsed?.data?.description || data.description;
      }
      return data.description;
    },
    
    date: async (data) => {
      if (data.remoteUrl && !data.date) {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        return parsed?.data?.date || data.date;
      }
      return data.date;
    },
    
    author: async (data) => {
      if (data.remoteUrl && !data.author) {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        return parsed?.data?.author || data.author;
      }
      return data.author;
    },
    
    tags: async (data) => {
      if (data.remoteUrl && data.tags && data.tags.length === 1 && data.tags[0] === "posts") {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        if (parsed?.data?.tags && Array.isArray(parsed.data.tags)) {
          return ["posts", ...parsed.data.tags];
        }
        return ["posts"];
      }
      return data.tags;
    },
    
    // Generate permalink from title if not specified
    permalink: async (data) => {
      if (data.permalink) return data.permalink;
      
      let title = data.title;
      if (data.remoteUrl && !title) {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        title = parsed?.data?.title;
      }
      
      if (title) {
        const slug = title.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');
        return `/posts/${slug}/`;
      }
      return data.permalink;
    },
    
    image: async (data) => {
      if (data.remoteUrl && !data.image) {
        const parsed = await fetchRemotePostWithMetadata(data.remoteUrl);
        return parsed?.data?.image || "/img/banner.png";
      }
      return data.image || "/img/banner.png";
    }
  }
};

async function fetchRemotePostWithMetadata(url) {
  try {
    const content = await EleventyFetch(url, {
      duration: "1d",
      type: "text",
    });
    
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
  } catch (error) {
    console.error(`Error fetching remote content from ${url}:`, error);
    return null;
  }
}