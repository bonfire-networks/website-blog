---
title: "Bonfire 1.0.3: Stability, Clarity, and Federated Publishing"
description: "Since the 1.0 release of Bonfire Social, we've been heads-down listening to our our pilot communities, beta testers, and co-design partners. Version 1.0.3 is the result: a release focused on stability and polish, which fixes a wide range of bugs and brings meaningful usability improvements, especially around feeds, boundaries, and more advanced features."
date: 2026-05-15
tags: development
image: /img/103.png
layout: layouts/post.njk
author: Bonfire Builders

---

Since the 1.0 release of Bonfire Social, we've been heads-down listening to our our pilot communities, beta testers, and co-design partners. Version 1.0.3 is the result: a release focused on stability and polish, which fixes a wide range of bugs and brings meaningful usability improvements, especially around feeds, boundaries, and more advanced features. It also ships a set of new capabilities born from our ongoing collaboration with Jacobin DE.

## Stability first

This release addresses dozens of issues reported by communities actively using Bonfire day to day. The progressive web app experience is smoother on mobile. Federation is more reliable. Dozens of reported bugs have been fixed and UX improvements made based on community feedback: tooltips, focus states, icon labels, layout glitches, and accessibility issues across the board.

## Making power feel approachable

This release gave particular design attention to one of Bonfire's most powerful (and sometimes daunting) areas: boundaries and post permissions. 

Those features are an example of where Bonfire's depth and breadth of options can feel overwhelming at first: a lot of choices, many possible combinations, and real user empowerment that deserves to be surfaced carefully. 

We've been working on a layered design pattern that we're calling *calm empowerment*: 

1. a handful of simple defaults that cover most users;
2. a middle layer of curated overrides for people who want some control without being overwhelmed by all possible options;
3. finally, a full advanced matrix of options behind an explicit "expand" gesture for power users.

<div style="clear: both;"></div>

For boundaries, this means the screen now leads with the presets (Public, Local, Mentions, Follows), followed by a small set of controls for the most common adjustments: "allow replies?", "allow quote posts?", each of which works across all relevant audience circles at once, without requiring you to understand the full permission matrix. All options are still available, but exposed only after a conscious choice, for the cases that genuinely need it.

![Screenshot of Bonfire's boundaries settings, showing layered presets and expandable controls](/img/calmempowerment.png)

Feed filtering is next on the list, as something we can simplify while retaining all its power. More broadly, calm empowerment is becoming a guiding pattern across Bonfire extensions. We're experimenting with it for two upcoming beta features: group creation, where simple defaults get you started but the full range of visibility and membership controls is there when you need it; and poll creation, where the surface is as simple as single or multiple choice, but opens up into proposal phases, consensus building, ranked choice voting, and more.

The goal is simple by default, endlessly configurable for those who want it, without making anyone feel like they have to decipher or fight the interface. We're working on applying this pattern consistently across Bonfire, and plan to write more about the thinking behind it: both as a design reference and as a broader conversation about what it means to feel genuinely empowered by a social network rather than managed by one.

## New dashboard widgets

![Screenshot of Bonfire's configurable dashboard showing new community widgets](/img/widgets.png)

The dashboard (what you see when signing in, instead of being thrown straight into a feed) is now significantly more useful. New configurable widgets focus on community building and participation:

- **Spotlight**: posts pinned by instance moderators surfaced prominently for all members  
- **Getting started**: an onboarding widget to help new users find their feet  
- **Polls closing soon**: keeps active decisions visible at a glance  
- **Top discussions**: the 3 most-replied local posts from the last few days, for a pulse on what's alive in your community

## Federated discussions, anywhere on the web

<img width="1570" height="975" alt="Screenshots of Bonfire's embeddable comments widget shown under a recipe and a governance proposal" src="/img/comments.png" />

Paste a script into any web page (a blog article, a portfolio, a recipe, a funding proposal, a research draft) and it instantly gets a federated comment thread tied to that URL. The page becomes a post on your Bonfire profile, and people can respond from anywhere on the fediverse, and even from Bluesky and the ATmosphere thanks to bridging via [BridgyFed](https://fed.brid.gy/).

**Bonfire-powered comments embedded on your web page** means nested discussion threads that are boostable, upvotable, and most importantly, federated. Readers can engage from within the webpage, and the conversation also lives on the linked Bonfire instance, where it can be moderated like any other content and followed or replied to from across the fediverse.

We're continuing to refine the embeddable comments widget over the coming weeks as part of our collaboration with [Jacobin DE](https://www.jacobin.de/). More soon.

## Community publishing with Ghost

Working with Jacobin DE also pushed forward a set of features we're genuinely excited about for any community that publishes content alongside social interaction: a deep integration between Bonfire and [Ghost](https://ghost.org), the open source publishing platform.

We demoed what this looks like in practice at FediForum: [watch the recording here.](https://spectra.video/w/hV9wzGzsXvNjgXtVg3uS2i)

**Single sign-on.** Members sign in on Ghost and Bonfire using the same email address, and move between the two without friction.

**Gated login and membership sync.** Ghost membership tiers sync directly with Bonfire circles and groups. New members land in the right spaces automatically. If a user tries to sign in but isn't yet a member on Ghost, they receive a registration link.

**Article import.** Ghost articles are imported into Bonfire automatically, attached to the author's profile and placed in the relevant groups and topics, with full content, images, and captions included, ready to be discussed across the fediverse. Visibility is set automatically based on the Ghost tier (public, members-only, or paid), so each piece reaches the right audience without manual intervention.

> **But doesn't Ghost already federate?** Ghost has built-in federation, and WordPress has a plugin for it, broadcasting articles into the fediverse and pulling replies back as comments. That's a great start. But Jacobin's needs pushed us further: a structured community space where your content is an invitation for people to go from audience to participants, with groups, topics, polls, moderation and governance tools, etc. So each tool focuses on what it does best. 

This isn't a Jacobin-specific feature set, it's a reusable foundation for any publisher or community who wants a fully-integrated federated social space, whether that's a newsletter, a media outlet, or a membership organisation. Publishers like [The Verge and 404 Media](https://digiday.com/media/why-publishers-are-preparing-to-federate-their-sites/), the New York Times, and [others](https://deadsuperhero.com/integrating-a-news-publication-into-the-fediverse/) are all exploring deeper social integration into their articles.

If you're running Ghost and thinking about where your community conversation should live, we'd love to talk. The same approach could be extended to other publishing tools: WordPress, Drupal, or whatever your community already uses. 

More broadly, this reflects something we care about in how Bonfire relates to other tools: we're not trying to replace your CMS, your event platform, or your preferred workflow. Bonfire can publish articles natively, but if Ghost already meets your publishing needs, or you organise events with another tool, the goal is integration: bringing the federated social layer to where people already are, rather than asking them to start over. The same thinking is behind our [LAUTI integration for events](https://lauti.org/blog/lauti-updates-2026/#cooperation-with-bonfire). Keep the tools that work, and connect them to the open social web.

## tags.pub integration

Bonfire now can integrate with [tags.pub](https://tags.pub), making it easier to use hashtags to discover and participate in conversations across different servers. Thanks to Papiris and Ozoned for the testing and feedback that made this happen. 

## First translation complete

Thanks to the Jacobin DE team, Bonfire now has a complete German translation. If your community is German-speaking, it's a good time to give Bonfire a try. 

Contributions to other languages are always welcome, [join the effort](https://app.transifex.com/bonfire/bonfire/) to contribute to an existing language or start a new one.

![Screenshot of Bonfire's translation progress, showing languages ranked by percentage completed](/img/transl.png)


## Also in this release

Modular community rules (the first step in bringing research and co-design with Princeton HCI students and researchers into Bonfire), per-user and per-instance keyword filtering, smarter nested thread sorting that surfaces the most active discussion branches, and the usual round of performance improvements and dependency updates.

Read the [full changelog](https://docs.bonfirenetworks.org/changelog.html#bonfire-social-1-0-3-2026-05-14) for details.

---

**Get involved.** If you're running a Bonfire instance, now is a good time to upgrade. If you've been curious about Bonfire for your community or organisation, [get in touch](mailto:team@bonfire.cafe), we'd love to hear what you're building.

— Ivan & Mayel  