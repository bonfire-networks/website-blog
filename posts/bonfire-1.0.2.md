---
title: "Bonfire 1.0.2: Shaping Your Space"
description: "We just released Bonfire 1.0.2, an update focused on giving you a more stable and reliable experience. We're also heads-down working with several communities who are setting up their own Bonfire servers in the coming months. Plus end to end encryption and federated groups development updates."
date: 2026-03-17
tags: development
image: /img/bonfire1.0.2.png
layout: layouts/post.njk
author: Bonfire Builders

---

We just released Bonfire 1.0.2, an update focused on giving you a more stable and reliable experience.

> Now is a good time to update your instance or discover Bonfire firsthand at [campground.bonfire.cafe](https://campground.bonfire.cafe).

We're also heads-down working with several communities who are setting up their own Bonfire servers. Plus updates on end to end encryption and federated groups. More below.

## What's new in Bonfire 1.0.2

### Keyword filtering

You can now filter out posts containing specific words, phrases, or hashtags. Useful for tuning out topics you'd rather not see. Instance admins can set filters that apply across the whole instance, and per-user filtering is coming in a future release.

### Translate posts with one click

A translate button now appears under posts, making it easy to read content written in other languages. Translation works in Chrome using built-in local translation system; for other browsers instance admins or individual users can also set up LibreTranslate or DeepL APIs, configurable in translation extension settings.

### Feed markers

Your place in the feed is now saved when you navigate away, so you can pick up exactly where you left off, without scrolling back through posts you've already seen.

### New dashboard widgets

Weather, instance stats, and user summary are now available for your customisable dashboard. Bonfire's homepage is moving toward a widget-based layout that goes well beyond the classic microblogging feed, to become a space you can genuinely shape around what matters to you. 

Currently available widgets include:

- **Highlighted posts**: Pinned or featured content from your community
- **Weather**: Local conditions at a glance
- **Instance info**: An overview of your instance's key defaults: federation behaviour, open vs invite-only registration, and known servers
- **User summary**: Surfaces your account info and highlights safety defaults at a glance, including discoverability and search indexing settings
- **Recent articles**: Discover long-form content and blog posts from across your network.
- **Suggested profiles**: Instance admins can curate recommendations to help newcomers find interesting people to follow.

[We'd love your feedback on what kind of widgets you'd find most useful](https://github.com/bonfire-networks/bonfire-app/issues/1758). What would make Bonfire feel even more like home?

### Better mobile experience and keyboard shortcuts

The composer is smoother on mobile, and you can now press `Cmd+Enter` (or `Ctrl+Enter` on Windows/Linux) to publish a post without reaching for the button. Keyboard shortcuts for opening the composer (`n`) and minimising it (`-`) are also available.

### Stronger federation

We added support for RFC 9421 HTTP Message Signatures, a newer and more robust standard for verifying messages between instances. This improves trust across the fediverse by making it harder to spoof messages between servers, and was added in collaboration with the broader ActivityPub community (big thanks to Hong Minhee from [Fedify](https://fedify.dev/)!) 

### Bug fixes

This release squashes a long list of bugs around federation behaviour, threading, user interface, polls, content warnings, and more. See the [full changelog](https://docs.bonfirenetworks.org/changelog.html) for the complete list.

---
> **Update your instance or try Bonfire at [campground.bonfire.cafe](https://campground.bonfire.cafe)**
---

## Ongoing projects

Several communities are actively working toward launching their own Bonfire instances, and we're supporting them through setup, co-design, and customisation:

- [**Jacobin DE**](https://www.jacobin.de/) chose Bonfire as their community space for readers and contributors, putting community-governed infrastructure in the hands of Germany's most prominent independent left media outlets, tightly connected with their publication. In collaboration with [Newsmast Foundation](https://newsmastfoundation.org/) for the mobile app and [Klasse & Methode](https://klasse-methode.it/) for hosting. 
- [**Totnes Pulse**](https://www.totnespulse.co.uk/): a local app for Totnes, a pioneering transition town in Devon, UK, experimenting with Bonfire as local social infrastructure for community events and discussions. In collaboration with [Newsmast Foundation](https://newsmastfoundation.org/) for mobile apps and [Lauti](https://lauti.org/) for events publishing. 
- [**Bida**](https://bida.im/) and [nobigtech.social](https://nobigtech.social/): An Italian collective and fediverse pioneer, they've set up a bonfire instance for their community with the goal of codesigning together new features focused for collectives and grassroots organisations.
- **University of Warwick's [Centre for Interdisciplinary Methodologies](https://warwick.ac.uk/fac/cross_fac/cim/)**: A higher education institution joining in co-designing and piloting Bonfire's [Open Science Network](https://openscience.network/) for academic community building and open knowledge exchange.
- **Princeton University's [Human-Computer Interaction](https://hci.princeton.edu/)**: Collaborating on protocol-based UX research into community-governed social platforms, with a project to help communities better define and communicate their governance structure and rules, like "nutrition labels" for online communities. 
- **Federated groups** are taking shape. Proper groups are a [critical missing piece of the fediverse](https://bonfirenetworks.org/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/), and although the crowdfunding stretch goal for groups didn't quite reach its target, our collaboration with Jacobin DE (and potentially other communities down the line) is giving us the momentum to push forward. We're currently working together to co-design and improve the UX of our groups prototypes. In parallel, we're collaborating with other ActivityPub developers through the [Groups task force of the W3C Social Web Incubator Community Group](https://github.com/swicg/groups/issues) to ensure federated groups will be interoperable across the fediverse. If your community would benefit from federated groups and you'd like to help co-design and co-fund this work, please [get in touch](mailto:team@bonfire.cafe), the more communities involved, the better the result!
- We're also making progress on **end-to-end encrypted messaging** as part of the project initiated by the [Social Web Foundation](https://socialwebfoundation.org/2025/12/19/implementing-encrypted-messaging-over-activitypub/) to bring interoperable secure messaging using the MLS standard to the fediverse. We'll be testing this over the coming months and will release it when a secure and interoperable implementation is ready.

## Crowdfunding update

Thanks again to everyone who backed us, your contributions will go a long way in making Bonfire more usable and stable for everyone! 

We're now preparing to fulfil rewards. If you selected a physical reward (printed or screenprinted artwork), please [make sure to check your shipping address](https://www.indiegogo.com/en/users/pledgesandorders) on Indiegogo so we can get it to you. You'll hear from us soon either way.

## Thank you

Every message, bug report, translation, and contribution moves us closer to the fediverse we want to inhabit. Thank you for being part of it. We can't wait to see what we grow together.

Follow us at [@bonfire@bonfire.cafe](https://bonfire.cafe/@Bonfire) · Email: team@bonfire.cafe · [Docs](https://docs.bonfirenetworks.org)
