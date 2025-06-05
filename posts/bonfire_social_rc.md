---
title: Announcing the Bonfire Social 1.0 Release Candidate
description: "After a long stretch of co-design, development, and reflection, we’re excited to share the Bonfire Social 1.0 Release Candidate — a version ready for real-world testing and feedback before the official 1.0 release."
date: 2025-06-04
tags: announcement
image: /img/banner.png
layout: layouts/post.njk
author: Bonfire Builders

---

After a long stretch of co-design, development, and reflection (see [Slow Software for a Burning World](https://bonfirenetworks.org/posts/slow_software_for_a_burning_world/)), we’re excited to share the Bonfire Social 1.0 Release Candidate — a version ready for real-world testing and feedback before the official 1.0 release.

We invite communities to install their own instances, explore the features, and help identify any remaining bugs or usability issues. Reach us at [@bonfire@bonfire.cafe](https://bonfire.cafe/@Bonfire) or through [our issue tracker](https://github.com/bonfire-networks/bonfire-app/issues/new?template=bug_report.md&milestone=1.0%20release). Your input will help ensure Bonfire Social 1.0 is stable, accessible, and genuinely community-ready.

## What is Bonfire Social?

While _Bonfire_ isn’t just another federated social app — it’s a modular framework for building digital spaces governed by communities – [_Bonfire Social_](/app/social) is the first "flavour" of Bonfire to reach 1.0, and is a starting point for communities who want a space of their own, that's locally governed and fully customizable, yet connected to the wider fediverse. It’s ideal for people who value self-determination and meaningful connection, balancing local autonomy with global conversation.
 
> A flavour is a pre-configured bundle of Bonfire extensions that defines which features are included, how they behave, and what defaults are in place. Each flavour can have its own governance group, extensions, roadmap, and priorities. Besides Bonfire Social, [other flavours](https://bonfirenetworks.org/apps/) like Bonfire Community and Open Science are already in development, and any community can create their own. 

Many features in Bonfire Social will feel familiar: feeds, profiles, following users, sharing posts, flagging or blocking content. Others might be new: rich-text posts, feed customization, nested discussions, multiple profiles per user, and fine-grained access control.

Let’s explore some of the key features:

## Key features in this release

### Custom feeds

Bonfire puts users in charge of what they see. Instead of relying on hidden algorithms, you can easily create your own custom feeds using a simple interface—no coding required. Filter and sort content by type, circle, date, engagement level, source instance, and more to surface what matters most to you.&#x20;

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Custom feeds" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/9J3Q3hzFjW8KZqu7CB3Uv9?title=0&amp;warningTitle=0&amp;peertubeLink=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

Save presets and choose which ones to see in your sidebar and in what order. 

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Organize feeds" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/9kQt5v7jBCo7jqR2fvQ9x2?title=0&amp;warningTitle=0&amp;peertubeLink=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Circles

A [circle](https://bonfirenetworks.org/posts/introducing_boundaries/) is simply a list of people. Bonfire includes default circles like “local users” or “people I follow”, and you can define your own, e.g. "friends", "mutual aid crew" or "monster movie fans."

Circles are private by default but can be shared with others. 

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Circles" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/kTvp9pgePdZzwBawo3pSQq?title=0&amp;warningTitle=0&amp;peertubeLink=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Boundaries

[Boundaries](https://bonfirenetworks.org/posts/introducing_boundaries/) help you control who can see and interact with your content. E.g. you can share a post with several circles but only allow replies from a specific circle, or make a post public but invisible to specific people. 

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Boundaries" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/s8XPXLzv31hJ1m3YgCjtXK?title=0&amp;warningTitle=0&amp;peertubeLink=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Nested discussions

Bonfire supports threaded conversations, where replies can branch into focused sub-threads without losing context. It’s ideal for deep discussions, collaborative work, or simply following a conversation’s collective train of thought. This structure is especially useful in communities that value dialogue over noise — where replies build on one another rather than compete for attention.

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Nested discussions" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/7YTH3Q4KjdsfxiJK85zMyk?title=0&amp;warningTitle=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Themes and customization

Bonfire ships with 16 colourful themes — but you can go further. Design your own colors, fonts, and layout styles. Do you prefer a sleek minimalist space or want to recreate the GeoCities era? Go for it.

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Custom themes" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/2MYBYXN295Pk1atzQprRA7?title=0&amp;warningTitle=0&amp;peertubeLink=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Multiple users profiles

In Bonfire, accounts and profiles are separate. One account can create multiple **independent profiles**, each with its own followers, content, and settings.

**Shared profiles** can also be managed by multiple accounts — ideal for collectives, publications, or project teams.

<div style="position: relative; padding-top: 56.25%;"><iframe title="Bonfire Social: Shared user" width="100%" height="100%" src="https://tube.tchncs.de/videos/embed/wDXxMXUMbC12ern22a9VES?title=0&amp;warningTitle=0&amp;peertubeLink=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Additional features

* Install Bonfire (as a Progressive Web App) on mobile devices.
* Import community-curated blocklists  to ease moderation.
* Migrate your data and connections across instances and platforms.
* [Custom roles and permissions](https://bonfirenetworks.org/posts/custom_roles/) to distribute admin powers 
* Custom emoji support
* Direct messages and private group discussions, with the same nested threads and discussion features as regular posts
* Full-text search across posts, discussions, and profiles (users can opt out from being indexed)
* Federates  with **Mastodon, Peertube, Mobilizon**, and many more
* **Extensions** can be enabled or disabled by admins *and by users* — for example, you can disable likes or boosts if they don’t suit your needs

You can find more [details on Bonfire Social](/app/social) on our website or have a play on the [demo instance](http://campground.bonfire.cafe).

## What’s not included

These features are *not* part of Bonfire Social 1.0:

* [Mastodon API compatibility](https://github.com/bonfire-networks/bonfire-app/issues/1260)
* [Content labeling](https://bonfirenetworks.org/posts/content_labelling_in_bonfire/) (needs co-design and interoperability work)
* Emoji reactions (needs better federation)
* [Groups and topics](https://bonfirenetworks.org/posts/dev_diary_groups_1/) (coming in Bonfire Community flavour)
* [Federated coordination tools](https://bonfirenetworks.org/posts/bonfire_coordination/) (coming in Bonfire Coordination flavour)
* Many other [feature ideas](https://github.com/bonfire-networks/bonfire-app/issues?q=is%3Aissue%20state%3Aopen%20milestone%3A%22Potential%20new%20extensions%20or%20features%22) (add your own!)

## Getting started

* [Install Bonfire Social](https://docs.bonfirenetworks.org/deploy.html) or [try our demo instance](http://campground.bonfire.cafe)
* Report bugs: mention [@bonfire@bonfire.cafe](https://bonfire.cafe/@Bonfire) or [open an issue](https://github.com/bonfire-networks/bonfire-app/issues/new?template=bug_report.md&milestone=1.0%20release)
* [Need managed hosting?](https://bonfirenetworks.org/hosting/)
* [Want to collaborate on a custom flavour?](https://bonfirenetworks.org/mosaic/)

## What’s next?

The release of Bonfire Social 1.0 will mark both an ending and a beginning. After building a foundation for federated community infrastructure — no more one-size-fits-all platforms, we’ll focus on: 

* Improvements based on community feedback 
* Co-designing other extensions and flavours with communities (e.g. [Open Science Network](https://bonfirenetworks.org/posts/openscience_network/))
* Ensuring sustainability for maintainers and contributors
* Expanding our moderation tools in collaboration with [Erin Kissane](https://erinkissane.com/), [Jaz](https://mastodon.iftas.org/@jaz), and the [IFTAS moderator community](https://connect.iftas.org/)

Your feedback, ideas, and use cases will shape what comes next. Let’s build it — together.

