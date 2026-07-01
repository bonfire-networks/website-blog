---
title: "Bonfire Social 1.0.5: Archipelago!"
description: "1.0.5 introduces Archipelago mode: opt-in, allow-list federation for communities who want to choose exactly who they connect with, plus broadcast announcements, embeddable widgets, encrypted emails, faster search, and a lot of polish."
date: 2026-06-30
tags: development
image: /img/105.png
layout: layouts/post.njk
author: Bonfire Builders

---

We've shipped two releases since our last post, so here's a quick roundup of what's new across 1.0.4 and 1.0.5. As always, the full, detailed list lives in the [changelog](https://docs.bonfirenetworks.org/changelog.html).

## 1.0.5: Archipelago mode

The headline feature is **Archipelago mode**. The usual way to federate is "open": you connect with the entire fediverse by default and block bad actors as they show up, a never-ending game of whack-a-mole since anyone can spin up a new account or server. Archipelago mode flips this around: you can choose to **federate *only* with a hand-picked allow-list** of trusted people, groups and servers, and keep everything else out by default.

Trusted communities can in turn agree to federate with each other, forming an "archipelago" of like-minded "islands" with common rules and safety expectations. It's a great fit for tight-knit communities who only want to connect with their friends and allies, and for groups who federate together by choice (neighbourhoods, towns, assemblies, cooperatives, movements, or not-for-profit organisations) and want to stay connected to one another without necessarily being open to the wider internet. (Credit for the concept goes to [Oliphant](https://writer.oliphant.social/oliphant/islands-an-opt-in-federated-network) and [Nora Tindall](https://nora.codes/post/the-fediverse-is-already-dead/).)

![Screenshot of Bonfire's instance federation settings, showing the choice of federation mode](/img/archi.png)

### Calm empowerment, applied to your server

In the [1.0.3 post](https://bonfirenetworks.org/posts/bonfire-1-0-3-stability-clarity-and-federated-publishing/) we described a design pattern we're calling *calm empowerment*: simple defaults, a middle layer of curated controls, and a full advanced view behind an explicit gesture. In 1.0.5 we applied it to **background-processing throughput**, so admins can keep a busy instance responsive by experimenting with different settings without touching config files or restarting the app:

- Layer 1, simple defaults: pick an overall speed preset, such as Eco / Default / Turbo (thank you to the [ActivityPub for WordPress plugin](https://activitypub.blog/2026/06/12/9-0-0-growing-up/) for the inspiration)
- Layer 2, useful overrides: prioritise particular kinds of activity
- Layer 3, advanced mode: fine-tune each individual task queue

![Screenshot of Bonfire's background task throughput settings, showing preset, prioritise, and advanced layers](/img/finetune.png)

### Also new in 1.0.5

- **Faster search**, now powered by [Sonic](https://github.com/valeriansaliou/sonic#sonic) (existing instances are encouraged to migrate; see the [changelog](https://docs.bonfirenetworks.org/changelog.html) for details)
- **Broadcast announcements**: admins and moderators can push a message (or boost an activity) to everyone on the instance, delivered as a notification
- **Embeddable widgets**: drop your instance's pinned posts into any external website
- **PGP-encrypted system emails** for recipients who support it
- **Clearer federation UI**: when federation is off or set to manual, the app now tells you when something can't be done rather than failing silently
- A long list of improvements and fixes across federation, polls, UI, media viewing, accessibility, and mobile UX

## 1.0.4: Security patches & hardening

A more under-the-hood release that set the stage for 1.0.5:

- **Security:** patched a [Linked Data Signatures vulnerability](https://w.on-t.work/activitypub/may-2026-vulnerability) and hardened MFM parsing (thanks to ozone and to Oneric of Akkoma)
- **CIMD support** for OAuth authentication
- Added **rate limits** on more API surfaces
- Plus a round of bug fixes

## Read more

📖 Full details for both releases are in the [changelog](https://docs.bonfirenetworks.org/changelog.html).

## Get involved

If you're running a Bonfire instance, now is a good time to upgrade. If you've been curious about Bonfire for your community or organisation, please [get in touch](mailto:team@bonfire.cafe).