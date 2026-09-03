---
title: "Building shared infrastructure for the Fediverse"
description: "Bonfire is working with Mastodon to make remote media storage and automated content detection interoperable across the fediverse."
date: 2026-09-03
tags: [development, federation]
image: /img/fasp.png
layout: layouts/post.njk
author: Bonfire Builders

---

We’re happy to share that Bonfire is working with [Mastodon](https://joinmastodon.org/) and a couple of other free software projects on two pieces of shared fediverse infrastructure: **remote media storage** and **automated content detection**. This work is part of a [Mastodon grant from the Sovereign Tech Agency](https://blog.joinmastodon.org/2026/04/sovereign-tech-agency-funding/).

Both projects will build on the open [Fediverse Auxiliary Service Provider (FASP) API specifications](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications). FASPs give fediverse servers a standardised way to connect to independent external services, so every platform does not have to build and operate the same capabilities on its own.

This approach could support a wide range of services that improve the scalability, safety, accessibility, sustainability, and user experience of the fediverse. 

Our collaboration will initially focus on two areas:

## Remote media storage

Shared services for processing, storing, and hosting media from remote posts can reduce the need for every server to keep its own copies or requiring users’ browsers to fetch media directly from external servers (which can otherwise reveal the reader’s IP address to those servers).

## Automated content detection

Open interfaces for content detection will make it easier for server operators and moderators to connect services that flag potential spam, illegal material, and other abuse for review. Operators will be able to choose services that fit their communities’ needs and policies instead of depending on a closed, platform-specific system.

Whatever shape these services take, communities should always know what is being scanned and by whom; automated detection should flag things for human review rather than acting on its own; and any such service must be easy to audit and to swap out.

## Building infrastructure together

Our role is to help shape the specifications and implement them in Bonfire so that any Bonfire server can plug in to compatible services. Implementing the same open specifications across different platforms will help ensure that FASPs become genuinely shared infrastructure rather than something controlled by a single project or provider.

For us this follows directly from how Bonfire is built: composable building blocks from the bottom up, with modularity and extensibility at every level. FASPs extend the same principle to the whole ecosystem, turning common capabilities into shared infrastructure that any platform can benefit from and any community can enable or swap out. On a closed platform, capabilities like these are usually built in-house and imposed on everyone, or negotiated behind closed doors with a chosen vendor, and either way would answer to data harvesting and profiteering instead of the people who rely on them.

Thanks to the Mastodon team for taking the open path and inviting us to build this together. We're excited to collaborate with all the teams involved, and we'll share updates as the project progresses.

## Going forward

The FASP approach already reaches beyond these two areas: the [Fediscovery](https://www.fediscovery.org/) project has been designing pluggable search and discovery providers, which we'd like to bring to Bonfire as well, so communities can choose which services index and surface their public content and how they can search and discover content beyond their server's bubble.

More widely, this can lead to an ecosystem of mutualised services a community can easily plug into. Today, anyone setting up an instance often implies separately choosing and setting up external services for domain name and DNS, hosting, email delivery, file storage and CDN, spam protection and more, usually from big commercial providers. Imagine instead enabling each of those with a one-click toggle in your Bonfire settings, provided by co-ops in a [cooperative hosting network](/hosting/), governed democratically and transparently, and shaped through co-design the way everything in [Bonfire Mosaic](/mosaic/) is: what one community needs and builds becomes a service every community can benefit from.

We'd also love to hear from you: what would you want from media storage or content detection services, and who would you like to see providing them (e.g. [IFTAS](https://about.iftas.org/))? What other services could this approach make possible? How should this infrastructure be run and governed? And how might it be funded sustainably? [Get in touch](/contact/) and share your ideas.
