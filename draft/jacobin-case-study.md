---
layout: /layouts/post.njk
title: "From audience to community: how Jacobin built a home its readers own"
description: "Jacobin's German edition asked for more than a better website — a community space where readers debate, organise, and build solidarity. Over six months of co-design, we connected Ghost to Bonfire and built a reusable foundation any publisher can adopt."
image: /img/jacobin/j09-group-topics.png
tags: case-study
date: 2026-07-09

---

> **A reader-funded magazine wanted more than a comment section. We connected Ghost to Bonfire and gave 3,000+ readers a federated community space they own.**

![Jacobin's community space on Bonfire](/img/jacobin/ghostbonfire.png)

## At a glance

- **Client:** Jacobin — the German-language edition of The independent media
- **Sector:** Independent media / publishing
- **Engagement:** Bonfire Mosaic co-design
- **Timeline:** 6 months of co-design & development; jacobin.social live July 2026
- **What we delivered:** Ghost↔Bonfire integration, federated comments widget, community spaces
- **Live at:** [jacobin.social](https://jacobin.social)
- **Everything built is free software in the commons.**

## The ask: not a better website, a community

It started with a crowdfunding campaign. The readers of [Jacobin](https://www.jacobin.de/)'s German-language edition backed it with a clear demand: not just a nicer website, but a place where they could debate, organise, and build solidarity together — to go beyond an audience that reacts to articles and become a real community.

For a publisher, that is a harder problem than it sounds. A traditional comment section wasn't going to cut it, and neither was pointing readers to yet another platform owned by someone else. Jacobin wanted a space its community would actually own, connected to the wider open social web rather than walled off inside it.

So they reached out to Bonfire to co-design something better. This is part of an initiative we call **Bonfire Mosaic**: we work with a community to design a space around how they actually work, and everything we build is free software that belongs in the commons. Nothing here is Jacobin-specific and locked away — it's a reusable foundation, and this is the story of what it does and why it matters for any publisher.

## What we built

Over six months of co-design and development, three things came together into a single integrated experience.

### A deep integration between Ghost and Bonfire

Jacobin publishes on [Ghost](https://ghost.org), the open-source publishing platform, and had no interest in leaving it. That was the right instinct: our goal was never to replace the CMS, but to bring a federated social layer to where the team already works. The integration has three parts.

**Single sign-on.** Members sign in on Ghost and Bonfire with the same email address and move between the two without friction. To a reader, it's one product, not two.

**Gated login and membership sync.** Ghost membership tiers sync directly with Bonfire circles and groups, so new members land in the right spaces automatically. Someone who tries to sign in but isn't yet a member receives a registration link — the paywall and the community space enforce the same membership, with no manual list-keeping.

**Automatic article import.** Ghost articles flow into Bonfire attached to the author's profile and placed in the relevant groups and topics, with full content, images, and captions. Visibility is set automatically from the Ghost tier — public, members-only, or paid — so every piece reaches exactly the right audience, and each article arrives in the community as an invitation to discuss rather than a dead end.

> **Doesn't Ghost already federate?** It does — Ghost broadcasts articles into the fediverse and pulls replies back as comments, and WordPress has a plugin that does the same. That's a great start. But Jacobin's needs pushed further: a structured community space with groups, topics, polls, moderation, and governance tools. Each tool does what it does best — Ghost publishes, Bonfire hosts the community — and readers experience one seamless whole.

### Federated comments on any page

We built an embeddable comments widget that drops into Ghost — or any CMS, static site, or web page. Paste a snippet into a template and the page gets a federated comment thread tied to its URL. Readers comment right from the article; the same conversation also lives on the Bonfire instance, where it can be moderated and followed like any other content.

Because it's federated, people can join the discussion from Mastodon, other Bonfire instances, and even Bluesky via bridging — and their replies appear back under the article. One unified conversation, wherever the reader happens to be.

### Intentional community spaces, not a noisy feed

Jacobin didn't want its community lost in a feed where everything competes for attention and an algorithm decides what surfaces. They wanted intentional spaces organised around groups and topics. Bonfire's flexible boundary system lets a community run public groups, announcement-only spaces, private invite-only rooms, or groups restricted to a particular circle — and each group can define its own rules, drawing on governance research we've been integrating through our work with Princeton HCI and the [CrowCards](http://crowcards.org) tool.

Along the way, the Jacobin team also contributed a complete German translation of Bonfire — now available to every German-speaking community that wants it.

## Why this matters for other publishers

None of this is a bespoke, one-off build. It's a reusable foundation for any publisher or membership organisation that wants a fully integrated, federated social space — a newsletter, a magazine, a media co-op, an advocacy group. The same approach extends to other publishing tools such as WordPress or Drupal.

The stakes are increasingly clear across the industry. Publishers like [The Verge and 404 Media](https://digiday.com/media/why-publishers-are-preparing-to-federate-their-sites/), the New York Times, and [others](https://deadsuperhero.com/integrating-a-news-publication-into-the-fediverse/) are all exploring deeper social integration into their articles. The reasons are familiar to anyone who has watched their reach depend on a platform they don't control: audiences rented from social networks can be throttled, de-ranked, or lost overnight when the platform changes its mind.

Bonfire offers a different premise. Because it's AGPL-licensed free software with no VC backers and no ads, there's no incentive to enshittify the space over time. Because every instance federates over ActivityPub, a publisher's community stays connected to the wider open social web on its own terms. And because the community lives on infrastructure the publisher controls, the relationship with readers isn't mediated by a third party that can revoke it.

For a publisher, that turns readers from an audience you broadcast to into a community you actually hold — and own.

## At launch

Jacobin's community space, [jacobin.social](https://jacobin.social), goes live in July 2026 as the home for a community of more than 3,000 readers, running on infrastructure Jacobin controls. Along the way, the collaboration produced a complete German translation of Bonfire — contributed back to the commons and now available to every German-speaking community.

## What we shipped

A deep Ghost↔Bonfire integration with single sign-on, membership sync, and automatic article import; an embeddable federated comments widget that works on any web page; and intentional community spaces built on Bonfire's groups, topics, and boundary system, with modular community rules. Each piece is a reusable foundation, not a bespoke build.

## What success looks like

The aim is straightforward: turn an audience that reacts to articles into a community that debates, organises, and builds solidarity together — on a space it owns rather than rents. We'll share adoption and engagement numbers as the community grows. What began as a reader-funded demand for something better than a comment section is now a working template that other publishers can adopt, adapt, and fork.

<!-- Add a real Jacobin quote here before publishing — a line from the team on why they built this. High impact; leave out rather than fabricate. -->

## Talk to us

If you're running Ghost — or WordPress, or Drupal — and thinking about where your community conversation should live, we'd love to talk. Everything we built for Jacobin is in the commons and available to build on.

- **Email:** [team@bonfire.cafe](mailto:team@bonfire.cafe)
- **Fediverse:** @bonfire@bonfire.cafe
- **Web:** [bonfirenetworks.org](https://bonfirenetworks.org)

— Ivan & Mayel
