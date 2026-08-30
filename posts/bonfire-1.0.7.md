---
title: "Bonfire Social 1.0.7: what's new and what's next"
description: "A fresh default interface, reworked discussions, faster feeds and dozens of fixes, plus where we're riding next: public federated groups, better notifications, and settings you can find."
date: 2026-08-30
tags: development
image: /img/banner107.png
layout: layouts/post.njk
author: Bonfire Builders

---

We’ve released Bonfire 1.0.7. This one is not built around a single headline feature. It is a broader pass over the interface and some of the parts people use most: feeds, discussions, circles, dashboards and navigation, along with a set of behind-the-scenes optimisations: faster local and remote feed queries, more efficient loading of discussions and dashboard content, and improvements to navigation state and caching to reduce unnecessary work as you move through the app.

## A new default interface

Bonfire now has two interface presets. The new default, **Stream**, is flatter and more compact, giving feeds and conversations more of the available space. **Typographic** keeps a more layered and editorial look, and remains available as an alternative in settings.

This work also prompted a wider visual cleanup. The dark palette has clearer contrast, layouts and interactions are improved for our Progressive Web App (including pull-down-to-refresh), and dashboard sections and widgets are now more consistent.

## Discussions have been reworked

The largest part of the release is the discussion experience.
Long threads should now be easier to scan. Busy reply branches can be folded into a short summary and opened when needed, and it's easier to start following thread participants.

These are mostly small changes on their own, but together they make a noticeable difference once a conversation becomes long, branches in several directions or is picked up again much later.

## Circles and the dashboard

Circles are now more visible from the dashboard and from there users can edit circles, adding more members to it or create new ones.

## Reliability and performance

1.0.7 also includes a substantial group of navigation fixes. Back and forward navigation, post previews, mobile back gestures and restoring your place in a feed should all behave more predictably, including after a lost connection or after the app has been in the background.

Local and remote feeds have been made faster, and you can now build new kinds of feeds, with presets and filters for local-instance-only activities, public activities, and activities with custom boundaries. Editing a post now properly federates the update to Mastodon, and the release includes further fixes and maintenance around mentions, quote requests, mobile use and administration.

Instances that federate with an allow-list (Archipelago mode) can now show the list of trusted instances and people on their about page, so anyone can see who the community federates with. There is also better support for the ActivityPub client-to-server API, a new monitoring page showing CPU use for app processes, and administrators can now transfer a profile between accounts when necessary.

For publishers: [Ghost](https://bonfirenetworks.org/ghost/) article import now supports importing into topics, articles show author bylines, and the [Telling](https://bonfirenetworks.org/telling/) embeddable comments got scrolling and publishing fixes.

We continued the ongoing accessibility improvements in feeds and threads and fixed image descriptions (alt text) which were not always federating correctly. Localisation coverage improved throughout the app too (thank you translators!).

This release also lays groundwork for federating groups: starting with better interop with remote groups and threadiverse apps. Federated groups remain our biggest priority, and we're designing them in the open with the [W3C groups task force](https://github.com/swicg/groups/issues).

> That is the overall shape of 1.0.7. The [full changelog](https://docs.bonfirenetworks.org/changelog.html) covers every individual change and fix.

If you run a Bonfire instance, we recommend upgrading. Bug reports and feedback are always welcome.

## What's next: the bikemap

Alongside the ongoing projects we're building with communities, and the usual stream of improvements and fixes, here's our bikemap for the next version: three chunks of work we want to focus on.

> A *bikemap* rather than a *roadmap*, because roads are usually for cars, and we prefer bikes. We picked up the term from our friends at [Co-op Cloud](https://coopcloud.tech/).


### Public federated groups

The next step for groups is opening public groups to the wider fediverse, compatible with how some apps already federate groups. People on Lemmy, PieFed, Mbin or NodeBB will see a Bonfire group as a native community in their own app, where they can join, post, and reply the way they already do, while on Mastodon and similar apps a Bonfire group will behave more like the discussion groups you may know from FediGroups (and previously Guppe): follow the group, mention it to post, and all posts in the group reach your feed as boosts. 

Alongside that, we're working on moderation tools made for groups whose members arrive from across the network: one inbox for group moderators to review join requests, posts awaiting approval, and flags. 

Private groups and the full cross-instance group experience will come later, because they need interoperable specs the fediverse hasn't agreed on yet. We're actively doing our bit to push that forward, drafting proposals from our implementation experience in the W3C groups task force mentioned above.

### Better notifications

Notifications should arrive reliably, arrive once, and only be about things you care about. We're reworking them so you choose exactly what reaches you wherever you are: in the browser, on your phone, or by email.

### Settings you can find

Bonfire has a lot of options, and over time they've ended up scattered. We're reorganising them into one clear, searchable place, so the setting you need is where you'd expect it to be.

## Get involved

These are plans, not finished designs, which makes now the best time to shape them. Feedback, suggestions, and co-design participation are all welcome: tell us what would make these work for your community.


