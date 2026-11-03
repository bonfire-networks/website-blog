const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveActivityThread } = require("./activityThread");

const LOOKUP = "https://bonfire.cafe/comments/embed?media_uri=https%3A%2F%2Fexample.org%2Fp%2F";

function stubFetch(status, headers = {}, body = "") {
  const calls = [];
  const fetch = async (url, opts) => {
    calls.push({ url, opts });
    return new Response(status >= 300 && status < 400 ? null : body, { status, headers });
  };
  return { fetch, calls };
}

test("302 with absolute Location returns it", async () => {
  const { fetch } = stubFetch(302, { Location: "https://bonfire.cafe/pub/objects/X" });
  assert.equal(await resolveActivityThread(LOOKUP, { fetch }), "https://bonfire.cafe/pub/objects/X");
});

test("302 with relative Location resolves against the request url", async () => {
  const { fetch } = stubFetch(302, { Location: "/pub/objects/X" });
  assert.equal(await resolveActivityThread(LOOKUP, { fetch }), "https://bonfire.cafe/pub/objects/X");
});

test("200 returns null, even with a JSON id", async () => {
  const { fetch } = stubFetch(200, { "Content-Type": "application/activity+json" }, JSON.stringify({ id: "https://bonfire.cafe/pub/objects/X" }));
  assert.equal(await resolveActivityThread(LOOKUP, { fetch }), null);
});

test("302 without Location returns null", async () => {
  const { fetch } = stubFetch(302);
  assert.equal(await resolveActivityThread(LOOKUP, { fetch }), null);
});

test("404 returns null", async () => {
  const { fetch } = stubFetch(404, {}, "Not found");
  assert.equal(await resolveActivityThread(LOOKUP, { fetch }), null);
});

test("fetch throwing returns null", async () => {
  const fetch = async () => { throw new Error("ECONNREFUSED"); };
  assert.equal(await resolveActivityThread(LOOKUP, { fetch }), null);
});

test("sends the ActivityPub Accept header and does not follow redirects", async () => {
  const { fetch, calls } = stubFetch(302, { Location: "https://bonfire.cafe/pub/objects/X" });
  await resolveActivityThread(LOOKUP, { fetch });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, LOOKUP);
  assert.equal(calls[0].opts.headers.Accept, "application/activity+json");
  assert.equal(calls[0].opts.redirect, "manual");
});
