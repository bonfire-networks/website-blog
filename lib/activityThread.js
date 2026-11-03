/**
 * Resolves a Telling thread lookup URL to the thread's exact ActivityPub address.
 *
 * Mastodon only follows a link that is the object's exact id, not one that redirects there, so this asks the server with an ActivityPub Accept header and returns the redirect target. Only a 3xx with a Location counts as resolved. Any other status, or a network error, returns null so the caller can fall back.
 *
 * @param {string} url Lookup URL, e.g. https://bonfire.cafe/comments/embed?media_uri=<encoded page url> or https://bonfire.cafe/post/<id>.
 * @param {object} [options]
 * @param {typeof fetch} [options.fetch] Fetch implementation, injectable for tests.
 * @returns {Promise<string|null>} Absolute redirect target, or null.
 */
async function resolveActivityThread(url, { fetch = globalThis.fetch } = {}) {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/activity+json" },
      redirect: "manual",
    });
    const location = res.status >= 300 && res.status < 400 && res.headers.get("location");
    return location ? new URL(location, url).href : null;
  } catch (e) {
    return null;
  }
}

module.exports = { resolveActivityThread };
