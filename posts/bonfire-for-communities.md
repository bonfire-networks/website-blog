---
title: "Announcing Bonfire for communities: groups and tools to organise together"
description: "Groups and topics, community rules and decision-making, events, organisation profiles, federated comments, custom themes: built with the communities who needed them, ready to use as-is, or to shape into a flavour of your community's own."
date: 2026-07-27
permalink: /posts/bonfire-for-communities/
tags: announcement
image: /img/group_over.png
layout: layouts/post.njk
author: Bonfire Builders

---

Bonfire was never meant to be one more feed that grabs your attention. Today it takes the shape we've been building toward: **Bonfire for communities**. A tool for groups that need to organise together, not just post at each other. Shipping today: **groups and topics, events, shared organisation profiles, embeddable federated comments, customisable themes, and a first set of governance tools**. It comes as a ready-to-use space with everything included, to then be reshaped block by block: add what's missing, swap or fork what almost fits, switch off what you don't need.

It's also a **shift in focus: from social to community features**.

## Why community comes first

When [Bonfire Social](/posts/bonfire-social-1-0-is-here-back-the-community-funded-roadmap/) reached 1.0 in November last year, it delivered a polished, locally-governed, federated social app where people control their feeds, their boundaries, and who can reach them. Some spaces may stick to that (with individuals following each other and sharing not much more than a server), and we'll keep maintaining it for them.

But social was step one of a longer plan. While open source tools for decision making, events, or mutual aid have existed for years, they struggle because they sit apart from where people like to talk. Built into a social space instead, alongside the people you already follow, your groups and your feeds, the same tools gain the everyday pull that keeps communities on the big platforms. And those relationships belong to you: every tool shares them, and they travel with you across the open web. 

A year with real communities confirmed it. Nobody came to us asking for a better microblog. They came wanting to give their community a home. A magazine whose readers wanted to debate each other, not just the articles. A mental health network that needed spaces where people could speak safely. A town that wanted its events, its announcements, and its discussions in a place that's locally governed. In every case the feed was the least interesting part of the answer.

Feeds are built around individuals: fine for chatter and discovery, but the wrong shape for organising. When you need *specific* people to see something, act on it, and follow through, you need a group: with membership, with rules, with a calendar, with a way to decide things together.

It's the same argument we made when we [put groups on the crowdfunding roadmap](/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/), and now we're confident enough to **make community the centre of the project**.

## Main community features

These features are available today as **1.0 beta**: ready to use and already running in real communities, though groups are not yet federating between instances. Consider it an invitation for more communities to shape these building blocks into whatever each of them actually needs. Want to poke at it first? Groups and everything else below are now live on [the campground](https://campground.bonfire.cafe), our open testing instance.

### Groups and topics

In Bonfire, **groups** are spaces where communities, organisations, and teams can define their own membership, permissions, and rules. Because they're built on our flexible [boundaries](/posts/introducing_boundaries/) system, a group can take whatever shape you need: you can run a public group, an announcement-only space, a private invite-only room, or a group visible only to a particular circle. You're free to change your mind later when the group evolves. 

Additionally, **topics** live inside groups and keep conversations from geting lost in one undifferentiated stream. You can follow a group *or* a single topic, so updates reach your feed without you having to visit every group page to check if there's anything new.

![Screenshot of groups on jacobin.social, showing a community's public groups for reading circles, practice reports, backstage, and debate](/img/jacobin/groups-list.png)

> Two notes for the fediverse-curious: groups and topics are local-only for now (while we work out how to make them interoperable with other apps), and they can take different shapes from threadiverse groups. More details in the [FAQ](#faq) below.

### Community rules

Every space needs shared expectations. Both servers and individual groups can define their own **community rules**, so newcomers know what kind of space they're entering and moderators have something concrete to point to rather than making judgement calls from scratch.

The design draws on governance research from [Princeton HCI](https://hci.princeton.edu/), including [CrowCards](http://crowcards.org), a tool that helps communities document and share how they govern themselves, which we co-designed with Princeton students and researchers, based on [design workshops with fediverse organisers](https://doi.org/10.1145/3772318.3790855), published at CHI 2026, exploring how independent communities can govern together rather than in isolation. 

### Decision-making

Deciding things together is a first-class feature. Bonfire for communities ships with decision-making tools that range from quick polls to structured consensus processes, so groups can use the lightest process that fits the decision:

1. **Single or multiple choice:** familiar polls where voters simply pick one or more options.
2. **Proposal and consensus**, for decisions that need discussion before a vote, drawing on sociocratic practice: collect proposals, discuss and amend, integrate objections, then move forward.
3. **Weighted score voting:** voters rate each option rather than picking just one, and objections can optionally count more than approvals (up to outright blocking or veto), so the choice with the strongest support and least resistance wins.

![Screenshot of Bonfire's decision-making: weighted score voting on a group decision, where voters rate each option rather than picking just one](/img/polls_wsv.png)

The design draws on sociocratic practice and on tools like [Ukuvota](https://ukuvota.xyz/) and [Loomio](https://www.loomio.com). Polls federate as ActivityPub `Question` polls, so people on Mastodon and elsewhere can also take part.

### Events

Communities run on gatherings. Bonfire for communities includes events with calendar and list views for browsing what's coming up.

![Screenshot of Bonfire's events page, showing federated events from other instances, filterable by category](/img/event.png)

Rather than create yet-another events management app, we've been working with [Lauti](https://lauti.org/blog/lauti-updates-2026/#cooperation-with-bonfire), an open source community calendar built and maintained by our friends at [Klasse & Methode](https://klasse-methode.it/). Bonfire is modular by design, and that modularity doesn't stop at our own extensions: rather than succumb to "not invented here" syndrome, we interconnect with dedicated tools across the ecosystem, so events can be published and discovered across apps instead of locked inside one.

### Organisation profiles

A community is rarely one person. You can now create a **shared organisation profile** (a magazine, a collective, a working group, a moderation team) co-managed by several accounts. From the outside it looks like any other profile: it posts, it can be followed, and it federates as an ActivityPub `Organization`. Behind it, people can come and go without anyone handing over a password.

![Screenshot of Bonfire's profile switcher, showing several profiles on one account, including shared organisation profiles](/img/press/screenshots/multiple_profiles.png)

### Announcements

When something needs to reach everyone (e.g. a proposal to vote on, an update to the code of conduct, a call to action), admins and moderators can broadcast an announcement that lands in every member's notifications, and as a push notification on mobile, rather than hoping it surfaces in the feed.

### Embedded comments and Ghost integration

We built an **embeddable comments widget** that turns any web page into a federated conversation. Paste a piece of code into your theme on [Ghost](https://ghost.org) (an open source publishing platform popular with independent magazines and newsletters) or into any other content management system (CMS) or static site, and the page gets a comment thread that lives on your Bonfire instance and federates out to the fediverse. Someone can reply from Mastodon or any fediverse app (or the ATmosphere/Bluesky, via [bridging](https://fed.brid.gy/)) and it appears under your article; someone can comment on your article and it appears in the fediverse.

![Screenshots of Bonfire's embeddable comments widget shown under a recipe and a governance proposal](/img/comments.png)

The discussion doesn't live in a box under the page, either: it lives in the community, optionally in a group or topic. A thread stays discoverable after the article scrolls off the homepage, and a conversation that outgrows its article can keep going in the group where it belongs.

We call this feature the **[Telling](/telling/)**, after Ursula K. Le Guin's book [*The Telling*](https://en.wikipedia.org/wiki/The_Telling), because telling is what people do, what people always did: sharing what they know, in words, in signs, in stories, in songs.

> Comments are the first embeddable widget. Another can display your instance's featured posts on any site, so visitors to your regular website get a preview of what's happening in the fediverse, with more to come.

For [Ghost](https://ghost.org) we went further: since it had no single sign-on support, we built an API-level integration (webhooks and magic-link login) to sync a publisher's members and membership tiers into their Bonfire space, alongside automatic article import, so a publisher's articles arrive in their community as an invitation to discuss rather than a dead end. The same approach could be extended to WordPress or any other CMS or Patreon-style membership tool. [See how the Ghost integration works →](/ghost)

### It looks like your community, not an off-the-shelf product or someone else's platform 

Bonfire comes with different themes, and you can build your own, customising colours, fonts, and layout without writing code. And it goes further than a theme: your domain, your name, your masthead, your typography: the whole space reads as yours, with nothing of ours wedged between you and your people. Even [commercial community platforms-as-a-service like Mighty Networks](/compare) rarely go that far: your community still lives in their app, with their name on it, on their terms. (See [how Bonfire compares](/compare).)

![Screenshot of jacobin.social and the Jacobin Ghost site side by side: Bonfire carrying Jacobin's branding end to end](/img/jacobin/ghostbonfire.png)

When Jacobin's readers arrive at [jacobin.social](https://jacobin.social) they see Jacobin, end to end, with no sign of a different platform underneath. That mattered enough to be one of the reasons they chose Bonfire in the first place: a community space should feel like *their* space, not a precarious corner of a platform you don't control.

### Single sign-on, both directions

Bonfire supports SSO with OpenID Connect and OAuth2 as both a client *and* a provider: members can sign in with an account they already have, or Bonfire can itself act as the identity provider that signs them into other apps. One less barrier to showing up, and one less password to manage.

### Fast and reliable

After over a year of real communities putting real load on Bonfire, we've focused heavily on load testing and performance improvements, so a space stays fast and reliable as it grows from a handful of people to thousands.

## Built hand in hand with communities

Late last year our community [crowdfunded a maintenance goal](/posts/matters-of-care-why-maintenance-comes-first/), the one that mattered: keeping Bonfire's foundations solid and sustainable. That's what made everything since possible. With maintenance sorted, we could say yes to co-design partnerships focused on building new things, confident the ground under them was stable. Bonfire for communities is what grew in that space.

None of this came out of a product planning meeting. It came out of our [Mosaic](/mosaic/) collaborations, where we co-design a space with a community and everything we build goes back into the commons as free software. What one community funds, every community inherits: Jacobin's readers funded federated comments, and now every publisher can benefit; Mentaal's need for safety produced archipelago mode, and now any community can raise the drawbridge. Whatever gets built next, you inherit too, as another building block you can choose to include or leave out.

**[Jacobin](https://www.jacobin.de/)** (the German edition of a socialist magazine, publishing a daily essay and a quarterly print issue) asked its readers to fund ["Jacobin 2.0"](https://www.startnext.com/jacobin2-0/mehr-infos). 1,015 backers funded the website relaunch and kept going until they'd unlocked the next tier: a community platform, "a calmer, protected space for political debate" where readers go backstage with the editorial team and suggest and discuss topics, free of any tech billionaire's algorithm. Six months of discussions and co-design produced the Ghost integration, the comments widget, and much of the groups-and-topics design. [jacobin.social](https://jacobin.social) opens its doors today to a community of 3,000+ readers, and the collaboration also produced a complete German translation of Bonfire. The full story is in our [case study](/case-studies/jacobin/).

**[Mentaal](https://mentaal.nl)** (a Dutch "public meeting place for mental health") needed spaces where people could speak safely: a network of four instances deliberately kept apart from the open fediverse. It's an initiative by an alliance of mental health organisations ([Ypsilon](https://www.ypsilon.org/), [Stichting Borderline](https://stichtingborderline.nl/), [Boven Jan](https://www.boven-jan.nl/)) within [TheNextSocials](https://thenextsocials.nl/en), a Dutch movement for social media that is truly social, with partners like [Waag](https://waag.org/en/about-waag/) and [PublicSpaces](https://english.publicspaces.net/about-publicspaces/). Co-designing with them shaped [archipelago mode](/posts/bonfire-social-1-0-5-archipelago/): an instance can federate only with a hand-picked, mutually-agreed network of trusted servers, instead of connecting to the whole fediverse by default. For safety-critical communities, federation needs to be a deliberate choice: when the time is right they can decide whether to connect at all, and with whom. They call it "the portal to a different kind of internet", and we intend to live up to that.

![Screenshot of Bonfire's Archipelago federation settings, where an instance allowlists the servers and people it federates with](/img/archipelago.png)

**[Totnes Pulse](https://www.totnespulse.co.uk/about-the-totnes-pulse/)** (a volunteer-run independent local newspaper) curates news and happenings for Totnes, and its events listing already powers the [official town events page](https://visittotnes.co.uk/visit-totnes-events/). Totnes is the Devon market town that launched the [transition towns](https://en.wikipedia.org/wiki/Transition_town) movement, and today neighbours are gathering in [community assemblies](https://timetoassemble.org/totnes) to shape local decisions. That kind of organising (local, deliberate, neighbour to neighbour) is exactly what Bonfire for communities is built to support: it carries the work between in-person gatherings, without replacing them. Together with Lauti on events, we're building it out into social infrastructure for a place: notices, discussions, and gatherings in a space the town owns.

Three very different communities: a publisher, a care network, a town. Each of them wanted more than a passive audience, they wanted active participants.

## What's next

**Federated groups and topics.** Groups are local-only for now ([see FAQ](#when-will-groups-and-topics-federate%3F)), which makes this the biggest gap and the biggest priority. Wiring groups up between Bonfire instances would be easy, but our goal is for groups to work across the whole open social web, where someone on Mastodon or any other fediverse app can join and take part. That's why we're contributing our implementation experience to the [W3C groups task force](https://github.com/swicg/groups/issues) (Join/Leave semantics, moderation queues, sub-groups, migration), working towards a common standard. If you're into fediverse protocols and software, come join the task force: this only works if we design it together, in the open.

**Better federated events.** Deeper integration with Lauti, plus repeating events, sub-events, multilingual event content, and interop with Mobilizon, gancio, and gath.io.

**A federated moderation toolkit.** Together with IFTAS and Erin Kissane, we've mapped out an evidence-based safety initiative: shared moderation workflows and a cross-platform dashboard, ready to be co-designed with a community of 200+ practising moderators, with specs any ActivityPub platform can adopt. We're [seeking funding to build it](/moderation-toolkit).

**And beyond.** Our [crowdfunding campaign](/posts/matters-of-care-why-maintenance-comes-first/) sketched more ideas for the map: end-to-end encrypted messaging with MLS (which we've since prototyped in collaboration with [Emissary and the Social Web Foundation](https://socialwebfoundation.org/2025/12/19/implementing-encrypted-messaging-over-activitypub/)), a guided setup wizard and co-op hosting pathways, local gifting and mutual aid, identity and data migration from/to ATproto/Bluesky, mobile apps, federated community archives so grassroots histories stay alive, and Gaia for environmental data to flow into feeds as stories and alerts. But these are ideas, not a set roadmap. What gets built next is decided with the communities who show up to co-design it, the same way everything in this post came to be.

## Try it

Bonfire is free software, AGPL-licensed, no investors, no ads, no advertising business waiting to be switched on later, and if we ever sold out, the code is already yours to take. You can [install an instance](https://docs.bonfirenetworks.org), try the [demo](https://campground.bonfire.cafe), browse [everything in the kit](/features), or [talk to us about co-designing a space for your community](/mosaic/).

And you don't have to host it alone: host it yourself, or rely on our [cooperative hosting network](/hosting/) we're building with allied co-ops (more on that in the [FAQ](#faq)).

This work runs on community support. If you want it to keep going, please [chip in on OpenCollective](https://opencollective.com/bonfire-networks).

Find us at [@bonfire@bonfire.cafe](https://bonfire.cafe/@Bonfire), on the [issue tracker](https://github.com/bonfire-networks/bonfire-app/issues), or at team@bonfire.cafe.

## FAQ

### Doesn't the fediverse already have groups?

Sort of! The threadiverse ([Lemmy](https://join-lemmy.org/), [PieFed](https://piefed.social/), [Mbin](https://joinmbin.org/)) does communities reddit-style: public forums organised around a topic, where strangers gather to discuss a shared interest. That's a valuable shape, but the one communities kept describing to us goes beyond that, closer to the Facebook, Discord, or WhatsApp groups they're trying to leave: membership-first spaces where you know who's in the room, that can be private or public, and that hold your calendar, your decisions, and your running conversations. And there's a third shape both do poorly: the announcement channel, where a few people post and everyone else follows along. Bonfire's groups and topics stretch across all of these: a public forum around a subject, a private room around a set of people, a broadcast channel where only your team posts and other members can follow and respond, and the range in between. We fully intend to interoperate with the threadiverse: the task-force work is about filling in the capabilities ActivityPub still lacks for groups to work like this across platforms. More in [our groups FAQ](/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/#faq-(frequently-asked-questions)).

### When will groups and topics federate?

Not yet. Today they work within an instance. That's a deliberate sequencing choice, not an oversight: we're working through the design with the [W3C task force on federated groups](https://swicg.github.io/) so that when Bonfire groups do federate, they're compatible across the fediverse rather than being one more incompatible dialect. We [wrote about that goal when we started](/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/#faq-(frequently-asked-questions)), and it still holds: maximum compatibility over first-mover speed.

### Do we have to host it ourselves or is this a SaaS service?

There's no SaaS to sign up for: we don't sell it, and we're not going to become everyone's landlord (see the next question). But that doesn't mean you're on your own with the setup, maintenance, upgrades, and support. You absolutely can [self-host](https://docs.bonfirenetworks.org): it's free software and it always will be, and running your own is a first-class path we support and document. For a community that already has its own technical infrastructure or people with the skills, self-hosting makes real sense (and it's a different proposition from an individual running Bonfire Social solo for themselves). And you needn't figure it out alone: there's free peer support in our community channels, and we can help hands-on (up to setting it up with you, on your own infra) as a paid engagement if you'd rather have us help with it. But not every community has that, and going it alone isn't the only way to have autonomy: what matters is who governs, not just where the machines sit. People fending for themselves often end up renting from some big company's cloud anyway, each instance idling away rare-earth minerals and energy that sharing would spare. So there's a third option between "run everything yourself" and "pay a SaaS landlord": shared community infrastructure. We're members of [Co-op Cloud](https://coopcloud.tech/), a federation sharing deployment tools and recipes, alongside hosting co-ops like [CoQuest](https://coquest.coop/en), who are hosting [jacobin.social](https://jacobin.social). Together we're building a [cooperative hosting network](/hosting/) on the model of community-supported agriculture: communities sustain shared infrastructure, and it sustains them. Self-host, join a co-op, or start one: the point is that it's your call.

### Why don't you run a public flagship instance?

Because we want an ecosystem: hosting, governance, moderation, and revenue spread across many co-ops and communities, each answering to its own members, rather than the winner-take-all default, where the people who write the software become everyone's landlord, their flagship instance captures the roadmap, moderates the network by default, and collects everyone's hosting fees.

---

None of these groups wanted an audience. They wanted a world of their own, somewhere to come together as a community. If that's you, come build it with us. We're not looking for users; we're looking for **participants**.
