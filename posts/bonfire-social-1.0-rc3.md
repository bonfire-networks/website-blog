---
title: Bonfire Social 1.0rc3
description: "Bonfire’s latest release puts data portability (moving and taking your data with you) and anti-enshittification (avoiding manipulative platform tricks) front and center."
date: 2025-10-02
tags: development
image: /img/cover.jpg
layout: layouts/post.njk
author: Bonfire Builders

---

Bonfire’s latest release puts *data portability* (moving and taking your data with you) and *anti-enshittification* (avoiding manipulative platform tricks) front and center. Whether you’re moving from/to another fediverse app or between Bonfire instances, you can now bring along your posts, bookmarks, block lists, circles — and of course, your followers. 

This release also includes consent-based quoting, new dashboards for migration and federation status, improvements for using Bonfire on mobile, a smoother interface for boundaries, and new guides to help you get started.

We encourage all instance operators to upgrade and explore these new capabilities. Your feedback on this release candidate will help us refine these features before the stable release.

Here are more details on some of these...

## Consent-based quoting 

Bonfire now supports consent-based quoting, introduced through the new ActivityPub extension [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md). With this first iteration released alongside Mastodon’s, it marks an important step toward making quoting work smoothly — and respectfully — across the fediverse.

With Bonfire, you can now:
- Use boundaries to define who can quote your post, who must request first, or who cannot request at all.
- Quote — or request consent to quote — someone else’s post.
- Give or withdraw consent at any time.

![quote](/img/quote.png)

![quote2](/img/quote2.jpg)

## Import your old posts when moving instances 

You can now bring your posts (and optionally their replies) with you when moving to Bonfire from another instance. Imported posts keep their original dates and links, and are added to your timeline in the right order, so your history looks complete. Replies and threads are preserved, as are like/boost counts. This works by automatically "boosting" your old posts (but without flooding people's feeds or notifications with old activities).

<iframe style="border:0;" width="800" height="450" src="https://www.tella.tv/video/cmg57she8000b0bju3osx89uy/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0" allowfullscreen allowtransparency></iframe>

## Other data portability improvements

Instance migration is now more robust. In addition to follows, blocks, and posts, you can now export and import circles/lists, bookmarks, likes, and boosts.

![export](/img/export.jpg)


A dedicated dashboard helps you follow the progress of data imports and migrations, so you always know what's happening with your data.

![importstatus](/img/importstatus.jpg)


## Federation status dashboard 

Similarly, you can now easily track your outgoing and incoming federated activities with a new dashboard, making it simpler to monitor federation health and troubleshoot issues.

![fedstatus](/img/fedstatus.jpg)

<iframe style="border:0;" width="800" height="450" src="https://www.tella.tv/video/cmg58kqnd000i0bl25mb40yi5/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0" allowfullscreen allowtransparency></iframe>

## RSS/Atom feeds
Access your data beyond the fediverse: Subscribe to Bonfire feeds via your preferred RSS/Atom client. You can subscribe to specific users or to a feed of your choice, including bookmarks, likes, etc, all available as RSS.

<iframe style="border:0;" width="800" height="450" src="https://www.tella.tv/video/cmg57fu7u00050bjj2skigzpn/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0" allowfullscreen allowtransparency></iframe>

## Boundary UI & usability improvements: 

Boundaries (who can see or interact with your posts) are now easier to use. For example, you can share a post publicly but limit who can reply or quote it. Bonfire’s boundaries now also connect with GoToSocial’s interaction controls and Mastodon's quote authorisations, making them more interoperable across the fediverse. We also drafted a guide about [how you can start using circles and boundaries](https://docs.bonfirenetworks.org/boundaries.html) (feedback welcome!)

![boundary](/img/boundary.jpg)

## Mobile web app improvements

The progressive web app experience has been refined with UI and UX enhancements that make Bonfire feel more native on mobile devices. Whether you're installing Bonfire to your home screen or using it directly in your mobile browser, the interface now responds more smoothly and adapts better to different screen sizes.

![pwa](/img/pwa.jpg)

## Single sign-on

Bonfire supports OpenID Connect and OAuth2 authentication, allowing instance administrators to configure their preferred identity providers for login and signup. We've tested integration with GitHub, ORCID, Zenodo, and more, making it easier for communities to align authentication with their existing workflows and trust networks. 

Each instance can define which providers to enable and whether to allow new signups through SSO, giving administrators flexibility in how their communities access Bonfire. Bonfire can also act as an SSO provider itself, so other applications can authenticate users through your instance.  

<iframe style="border:0;" width="800" height="450" src="https://www.tella.tv/video/cmg55xx3q007u0cl80ps2hrcj/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0" allowfullscreen allowtransparency></iframe>

## Federation interoperability guide 

Published [interoperability docs](https://docs.bonfirenetworks.org/federation-interoperability.html) to ensure compatibility with other ActivityPub software.

## User guides

[New guides](https://docs.bonfirenetworks.org/user-guides.html) and documentation help you get started and make the most of Bonfire's features, whether you're new to the fediverse or exploring advanced capabilities like boundaries and circles. This is a work in progress, so feedback on how things would be better explained or what's missing would be very helpful! 

These guides are designed to help you understand, use, and configure Bonfire. 

### Core Concepts

- [What is Bonfire?](https://docs.bonfirenetworks.org/what-is-bonfire.html)
- [What is Federation, the Fediverse, and ActivityPub?](https://docs.bonfirenetworks.org/what-is-federation.html)
- [Choosing a Bonfire Flavour](https://docs.bonfirenetworks.org/flavours.html)
- [Choosing a Bonfire Instance](https://docs.bonfirenetworks.org/choosing-an-instance.html)
- [Your Bonfire Profile and Identity](https://docs.bonfirenetworks.org/your-profile.html)

### Using Bonfire

- [Getting Started: Signing Up and Profiles](https://docs.bonfirenetworks.org/getting-started.html)
- [Finding people & Following](https://docs.bonfirenetworks.org/finding-following.html)
- [Posting, Sharing, and Interacting](https://docs.bonfirenetworks.org/posting-and-interacting.html)
- [Attachments and Media](https://docs.bonfirenetworks.org/attachments-and-media.html)
- [Privacy & Sharing Controls: Circles & Boundaries](https://docs.bonfirenetworks.org/boundaries.html)
- [Sensitive Content & Content Warnings](https://docs.bonfirenetworks.org/content-warnings.html)
- [Custom Feeds & Filters](https://docs.bonfirenetworks.org/custom-feeds.html)
- [Circles as Shared Lists](https://docs.bonfirenetworks.org/shared-circles.html)
- [Messaging](https://docs.bonfirenetworks.org/messages.html)
- [Search](https://docs.bonfirenetworks.org/searching.html)
- [Notifications](https://docs.bonfirenetworks.org/notifications.html)
- [Settings & Customizing your Experience](https://docs.bonfirenetworks.org/settings-customisation.html)
- [Blocking & Moderation Tools](https://docs.bonfirenetworks.org/moderation.html)
- [RSS Feeds](https://docs.bonfirenetworks.org/rss.html)

### Data & Identity Portability

- [Managing your data](https://docs.bonfirenetworks.org/data-manage.html)  
    - [Moving your information](https://docs.bonfirenetworks.org/data-manage.html#moving-your-information)  
    - [Deleting your data](https://docs.bonfirenetworks.org/data-manage.html#deleting-your-data)  
    - [Frequently Asked Questions](https://docs.bonfirenetworks.org/data-manage.html#frequently-asked-questions)
- [Moving to a Bonfire instance](https://docs.bonfirenetworks.org/instance-immigration.html)
- [Moving away from your Bonfire instance](https://docs.bonfirenetworks.org/instance-emigration.html)

### Advanced guides

- [Remote Interactions and the Fediverse](https://docs.bonfirenetworks.org/remote-interactions.html)
- [Bonfire Extensions/Plugins](https://docs.bonfirenetworks.org/extensions.html)
- [Running Your Own Instance](https://docs.bonfirenetworks.org/running-your-own.html)
- [Moderator Tools](https://docs.bonfirenetworks.org/moderator-tools.html)
- [Admin Tools](https://docs.bonfirenetworks.org/admin-tools.html)

For a full list of changes, you can read the [changelog](https://docs.bonfirenetworks.org/changelog.html). 

## What's next

 - We're eager to dive deeper with you and gather feedback [during the next FediForum](https://mastodon.social/@fediforum/115203362012720253) on Oct 7-8th, where we'll paricipate in a session along with our friends from the [NewsMast Foundation](https://www.newsmastfoundation.org/).
- In November, we'll be [presenting at SFSCON](https://www.sfscon.it/talks/bonfire-public-interest-social-networks/) in Bolzano, Italy. We'd love to connect and hang out with those of you who'll be there, if you're planning to attend, please reach out!
 - Beyond Bonfire Social, we're also working on the Open Science Network flavour, which is shaping up to address critical needs in academic and research communities. 

## Support the project

Building truly autonomous digital spaces requires community and solidarity.

If Bonfire’s vision speaks to you, there are many ways to help. Financial support via [Open Collective](https://opencollective.com/bonfire-networks) helps us dedicate time to maintenance rather than just features. But contributions aren’t only financial — testing this release candidate, [translating the interface](https://app.transifex.com/bonfire/bonfire/dashboard/), reporting bugs, or spreading the word are equally valuable. Every action strengthens the commons we’re building together.

Anti-enshittification is a collective effort to create digital commons that serves people, not platforms.
