---
title: Bonfire 1.0.1 Building Momentum
description: "We're back with Bonfire 1.0.1, an update focused on making your social web experience livelier, more connected, and truly yours."
date: 2026-01-16
tags: development
image: /img/bg_101.png
layout: layouts/post.njk
author: Bonfire Builders

---

We're back with Bonfire 1.0.1, an update focused on making your social web experience livelier, more connected, and truly yours.

> Now is a good time to update your instance or discover Bonfire firsthand at [campground.bonfire.cafe](https://campground.bonfire.cafe).

We’ve moved our main presence from indieweb.social to bonfire.cafe! Be sure to follow us at [**@bonfire@bonfire.cafe**](https://bonfire.cafe/@Bonfire). Our deep thanks go to [indieweb.social](https://indieweb.social/) for being a warm and welcoming home as we found our footing in the fediverse.

## What the new release includes

### New features

- **Follow hashtags**: Discover and join conversations that matter to you, bringing relevant posts into your feed without needing to follow specific people. *(Note: You'll see tagged posts known to your instance, for example, if someone on your server follows the author or boosted the post.)*
- **Scheduled posts**: Plan ahead and have your posts published at just the right moment for your community.
- **Language & translation**: Choose your preferred language(s), set a language for your posts, and translate content from other languages. *(Translation currently works in some Chromium-based browsers, using a local translation engine. Support for other browsers, using LibreTranslate or DeepL, is coming soon.)*
- **Replies in feeds**: Choose what to display above a reply in your feeds: the direct parent post being replied to, the original post that started the thread, or just a label indicating that it is a reply. Set your preference in settings.
- **Polls** _(work in progress)_: Ask questions and gather input from your community. You can now view and vote on remote polls, creating them locally is coming soon. 
- **Mastodon-compatible API** _(work in progress)_: This will make it possible to interact with Bonfire through dozens of fediverse clients available on mobile and desktop. We're gradually adding support for more parts of the API and will be testing it with different third-party clients (please report any issues if you test it with your favourite app!).
- **ActivityPub client-to-server (C2S) API** _(work in progress)_: Opening new possibilities for how you can interact with fediverse through third-party apps.
- **Widgets**: Configure your homepage to display widgets highlighting what interests you most, rather than being dropped straight into a feed of activities. Head to "configure your dashboard" in settings to choose your widgets and switch between a composable widget layout or the standard "my following" feed. Reorder them by dragging and dropping directly on the dashboard (tip: you can also do that with navigation menu items on the left or widgets on the right of most screens).

### Widgets

Currently available widgets include:

- **Trending links**: Discover the latest news and what's generating conversation across your instance.
- **Recent articles**: Discover long-form content and blog posts from across your network.
- **Suggested profiles**: Instance admins can curate recommendations to help newcomers find interesting people to follow.

[We’d love your feedback on which widgets you’d find most useful](https://github.com/bonfire-networks/bonfire-app/issues/1758). Let us know what you’d like to see on your dashboard. What would make Bonfire feel even more like home?
 
### Performance

- **Prioritised federation queues**: Processing of mentions and DMs is now prioritised over regular posts, so direct conversations arrive without delay.
- **Database improvements**: Added more indexes and improved queries for snappier responses.
- **Server-to-server federation**: Various optimisations for smoother communication between instances.

### UI and UX enhancements

We've put work into smoothing out the interface and improving design patterns across the app: small touches that add up to a better experience.

### Bug fixes

This release squashes bugs around federation behaviour, threading, user interface, composer states, and more. See the [full changelog](https://docs.bonfirenetworks.org/changelog.html) for the complete list.

---
> **Update your instance or try Bonfire at [campground.bonfire.cafe](https://campground.bonfire.cafe)**
---

## Crowdfunding update
As you may know, we ran a [crowdfunding campaign](https://www.indiegogo.com/projects/bonfire/community?refcode=c5aSQvu800edVSDdNwzumA) in December. We raised €32,467, surpassing our primary goal of €30,000 for [maintenance](https://bonfirenetworks.org/posts/matters-of-care-why-maintenance-comes-first/). 

We’re deeply grateful to everyone who chipped in, your support genuinely moved us. Seeing so many people rally behind Bonfire, all through grassroots word-of-mouth, was both encouraging and humbling. We're energised by seeing this vision of a more caring, community-based social web resonate so widely. Thank you for believing in what we’re building, together.

We're now working on fulfilling rewards, so if you backed the campaign, you'll hear from us soon!
 
And if you didn't get a chance to pledge in December, or want to help us level up, you're in luck: [the campaign is **now open for a limited time** for late pledges](https://www.indiegogo.com/projects/bonfire/community?refcode=c5aSQvu800edVSDdNwzumA) for anyone who wants to boost our progress toward the first stretch goal of €25,000 for [**federated groups**](https://www.indiegogo.com/projects/bonfire/community?refcode=c5aSQvu800edVSDdNwzumA#/section/what-were-building-next-4672931), which are a foundational feature to empower communities across the fediverse and make Bonfire even stronger for community organising and collaboration.

--> Read our blog post about [why groups matter as the next step for the fediverse](https://bonfirenetworks.org/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/) and [**contribute to building groups in Bonfire**](https://www.indiegogo.com/projects/bonfire/community?refcode=c5aSQvu800edVSDdNwzumA).

## What's next

We’re already hard at work on the next release. We’re excited to make it even easier to organise, share, and stay safe together, with expanded API compatibility to open Bonfire to more third-party apps, along with poll creation, new widgets, and the usual bug hunting and interoperability improvements. 

We've also started work on end-to-end encrypted messaging as part of the [Social Web Foundation's project to bring interoperable secure messaging to the fediverse](https://socialwebfoundation.org/2025/12/19/implementing-encrypted-messaging-over-activitypub/), a meaningful step toward private, secure communication on the open social web. We'll be testing this over the next few months and releasing it when a secure and interoperable implementation is ready.

## From the community

[Ozoned](https://btfree.social/@ozoned) recorded a [video walk-through](https://tubefree.org/w/3pATRDsqiBu99aVUwBTvUf) of setting up a Bonfire instance from scratch, a great resource if you're thinking about self-hosting. Thanks for your contribution, Ozoned!

Meanwhile, The Fulcrum wrote a [thoughtful article exploring Bonfire](https://www.thefulcrum.dev/grab-a-seat-at-our-bonfire-the-revolutionary-community-platform/) and its potential. We're eager to see how they'll experiment with the framework and what emerges from their work.

We're working with [Newsmast Foundation](newsmastfoundation.org) to setup a Bonfire server for one of their existing communities, stay tuned!

Have you made something with Bonfire or written about it? We'd love to hear from you and feature community projects in future updates.


## See you at FOSDEM?

On January 30th and February 1st, the Bonfire team will be at [FOSDEM](https://fosdem.org/2026/), a free software event in Brussels that brings together more than 8000 people every year. We're running two sessions: one in the Social Web track titled [Building Modular, Consentful, and Federated Social Networks](https://fosdem.org/2026/schedule/event/3QHALR-bonfire_building_modular_consentful_and_federated_social_networks/) and another in the Decentralised Communication track: [Modular Communication Tools on the Open Social Web](https://fosdem.org/2026/schedule/event/LSUYXG-bonfire_modular_communication_tools_on_the_open_social_web/).

We’ll also have some exciting announcements about new collaborations and projects, stay tuned!

Besides the talks, we’re eager to catch up with friends old and new from across the open source and fediverse communities. If you’re attending, we hope you’ll find us and say hi! We’d love to connect, answer your questions, and share ideas, whether you’re a hacker, organiser, or just curious about the fediverse.

Thank you for making Bonfire what it is. Every message, suggestion, and act of cooperation moves us closer to a more caring fediverse. Can’t wait to see what we grow together!
