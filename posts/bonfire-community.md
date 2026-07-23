---
title: "Announcing Bonfire Community"
description: "Groups and topics, community rules and decision-making, events, organisation profiles, federated comments, custom themes: Bonfire Community is here, built with the communities who needed it, and now the focus of our work."
date: 2026-07-DD
tags: announcement
image: /img/community.png
layout: layouts/post.njk
author: Bonfire Builders

---

Today we're announcing **Bonfire Community** — the flavour of Bonfire built for groups that need to organise together, not just post at each other: groups and topics, events, shared organisation profiles, embeddable federated comments, custom themes, and a first set of governance tools.

It's also a shift in focus: from now on, community features come before social ones.

## Why community, not social

[Bonfire Social](/posts/bonfire_social/) reached 1.0 and it does what it set out to do: a well-made, locally-governed, federated social app where people control their feeds, their boundaries, and who can reach them. We'll keep maintaining it, and everything we build for Community lands in Social too — they share the same foundations.

But the last year of working with real communities taught us something we should probably have seen earlier. Nobody came to us asking for a better microblog.

They came asking how to hold a group together. A magazine whose readers wanted to debate each other, not just the article. A mental health network that needed spaces where people could speak safely. A town that wanted its events, its notices, and its arguments in one place it owned. In every case the timeline was the least interesting part of the answer.

Feeds are built around individuals. That's fine for chatter and discovery, and it is genuinely bad for organising. When you need *specific* people to see something, act on it, and follow through, a feed is the wrong shape. You need a group — with membership, with rules, with a calendar, with a way to decide things.

That's what Bonfire Community is for. It's the same argument we made when we [started building groups](/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/), and after a year of building it with communities rather than for them, we're confident enough to make it the centre of the project.

## What's in it

### Groups and topics

Groups are spaces with their own membership, permissions, and rules. Because they're built on Bonfire's [boundaries](/posts/introducing_boundaries/) system, a group isn't a single fixed thing: you can run a public group, an announcement-only space, a private invite-only room, or a group visible only to a particular [circle](/posts/introducing_boundaries/) — and change your mind later without migrating anywhere.

**Topics** live inside groups and keep conversations from collapsing into one undifferentiated stream. You can follow a group *or* a single topic, so updates reach your feed without you having to visit every group page to check whether anything happened.

A status note: **groups and topics are local-only for now.** They work within an instance, and they don't yet federate. That's a deliberate sequencing choice, not an oversight — we're working through the design with the [W3C task force on federated groups](https://swicg.github.io/) so that when Bonfire groups do federate, they're compatible across the fediverse rather than being one more incompatible dialect. We [wrote about that goal when we started](/posts/why-community-matters-groups-as-the-next-step-for-the-fediverse/#faq-(frequently-asked-questions)), and it still holds: maximum compatibility over first-mover speed.

### Community rules

Every space needs shared expectations. Both an instance and each group within it can define their own **community rules**, so newcomers know what kind of space they're entering and moderators have something concrete to point to rather than making judgement calls from scratch.

The design draws on our governance research with [Princeton HCI](https://hci.princeton.edu/), including [CrowCards](http://crowcards.org), a tool that helps communities document and share how they govern themselves — built by Princeton students, on a design shaped together with the researchers and our team. It follows [design workshops with fediverse organisers](https://doi.org/10.1145/3772318.3790855), published at CHI 2026, exploring how independent communities can govern together rather than in isolation.

### Decision-making

Deciding things together is a feature, not an afterthought. Bonfire Community ships with decision-making tools that range from quick polls to structured consensus processes, so groups can use the lightest process that fits the decision:

1. **Single or multiple choice** — familiar polls where voters simply pick one or more options.
2. **Proposal and consensus** — for decisions that need discussion before a vote, drawing on sociocratic practice: collect proposals, discuss and amend, integrate objections, then move forward.
3. **Weighted score voting** — voters rate each option rather than picking just one, and objections can optionally count more than approvals — up to outright blocking or veto — so the choice with the strongest support and least resistance wins.

The design draws on sociocratic practice and on tools like [Ukuvota](https://ukuvota.xyz/) and [Loomio](https://www.loomio.com). Polls federate as ActivityPub `Question` polls, so people on Mastodon and elsewhere can also take part.

### Events

Communities run on gatherings. Bonfire Community includes events with calendar and list views for browsing what's coming up.

Rather than create yet-another events management app, we've been working with [Lauti](https://lauti.org/blog/lauti-updates-2026/#cooperation-with-bonfire), an open source community calendar built and maintained by friends and allies. Bonfire is modular by design, and that modularity doesn't stop at our own extensions: rather than succumb to "not invented here" syndrome, we interconnect with dedicated tools across the ecosystem, so events can be published and discovered across apps instead of locked inside one.

### Organisation profiles

A community is rarely one person. You can now create a **shared organisation profile** — a magazine, a collective, a working group, a moderation team — co-managed by several accounts. It behaves like a normal profile (it has posts, it can be followed, and federates as an ActivityPub `Organization`) but the people behind it can come and go without anyone handing over a password.

### Announcements

When something needs to reach everyone — a call to action, an urgent update, a downtime warning — admins and moderators can broadcast an announcement that lands in every member's notifications, and as a push notification on mobile, rather than hoping it surfaces in the feed.

### Embedded comments and Ghost integration

We built an **embeddable comments widget** that turns any web page into a federated conversation. Paste a snippet into a Ghost theme — or any CMS, or a static site — and the page gets a comment thread that lives on your Bonfire instance and federates out to the fediverse. Someone can reply from Mastodon or any fediverse app — or ATproto/Bluesky, via [bridging](https://fed.brid.gy/) — and it appears under your article; someone can comment on your article and it appears in the fediverse.

The discussion doesn't live in a box under the page, either: it lives in the community, inside groups and topics. A thread stays discoverable after the article scrolls off the homepage, and a conversation that outgrows its article can keep going in the group where it belongs.

Comments were the first embeddable widget; a second drops your instance's pinned posts into any site, so visitors to your regular website get a preview of what's happening in the fediverse.

For [Ghost](https://ghost.org) specifically we went further, with single sign-on, membership tier sync, and automatic article import — so a publisher's articles arrive in their community as an invitation to discuss rather than a dead end.

We call it **[Bonfire Telling](/telling/)**, after Ursula K. Le Guin's *The Telling* — because telling is what people do, what people always did: sharing what they know, in words, in signs, in stories, in songs.

### Custom themes

Bonfire ships with 16 themes, and you can build your own colours, fonts, and layout without writing code. A community space should look like the community, not like a product.

## Built with communities, not for them

Late last year our community [crowdfunded a maintenance goal](/posts/matters-of-care-why-maintenance-comes-first/) — not a flashy one, but the one that mattered: keeping Bonfire's foundations solid and sustainable. That's what made everything since possible. With maintenance sorted, we could say yes to co-design partnerships focused on building new things, confident the ground under them was stable. Bonfire Community is what grew in that space.

None of this came out of a product meeting. It came out of [Bonfire Mosaic](/mosaic/), where we co-design a space with a community and everything we build goes back into the commons as free software. What one community funds, every community inherits: Jacobin's readers paid for federated comments, and now every publisher has them; Mentaal's need for safety produced Archipelago mode, and now any community can raise the drawbridge. Whatever gets built next, you inherit too.

**[Jacobin](https://www.jacobin.de/)** — the German edition of a socialist magazine, publishing a daily essay and a quarterly print issue with Berlin's [Brumaire Verlag](https://brumaireverlag.de/) — asked its readers to fund ["Jacobin 2.0"](https://www.startnext.com/jacobin2-0/mehr-infos). 1,015 backers funded the website relaunch and kept going until they'd unlocked the next tier: a community platform, "a calmer, protected space for political debate" where readers go backstage with the editorial team and vote on topics, free of any tech billionaire's algorithm. Six months of discussions and co-design produced the Ghost integration, the comments widget, and much of the groups-and-topics design. [jacobin.social](https://jacobin.social) is [now/soon going] live for a community of 3,000+ readers, and the collaboration also produced a complete German translation of Bonfire. The full story is in our [case study](/case-studies/jacobin/).

**[Mentaal](https://mentaal.nl)** — a Dutch "public meeting place for mental health" — needed spaces where people could speak safely: a network of four instances deliberately kept apart from the open fediverse. It's an initiative of an alliance of mental health organisations ([Ypsilon](https://www.ypsilon.org/), [Stichting Borderline](https://stichtingborderline.nl/), [Boven Jan](https://www.boven-jan.nl/)) within [TheNextSocials](https://thenextsocials.nl/en), a Dutch movement for social media that is truly social, with partners like [Waag](https://waag.org/en/about-waag/) and [PublicSpaces](https://english.publicspaces.net/about-publicspaces/). Co-designing with them shaped [Archipelago mode](/posts/bonfire-social-1-0-5-archipelago/): an instance can federate only with a hand-picked, mutually-agreed network of trusted servers, instead of connecting to the whole fediverse by default. Safety-critical communities need federation to be a choice, not a default. They call it "the portal to a different kind of internet", and we intend to live up to that.

**[Totnes Pulse](https://www.totnespulse.co.uk/about-the-totnes-pulse/)** — a volunteer-run independent local newspaper — curates news and happenings for Totnes, and its events listing already powers the [official town events page](https://visittotnes.co.uk/visit-totnes-events/). Totnes itself is the Devon market town that launched the [transition towns](https://en.wikipedia.org/wiki/Transition_town) movement, and today neighbours are gathering in [community assemblies](https://timetoassemble.org/totnes) to shape local decisions. That kind of organising — local, deliberate, neighbour to neighbour — is exactly what Bonfire Community is built to support: not replacing gathering in person, but carrying the work between gatherings. Together with Lauti on events, we're building it out into social infrastructure for a place: notices, discussions, and gatherings in a space the town owns.

Three very different communities — a publisher, a care network, a town. What they share is that none of them wanted just an audience.

## What's next

**Federated groups and topics.** The biggest gap and the biggest priority. We're contributing our implementation experience to the [SWICG groups task force](https://github.com/swicg/groups/issues) — on Join/Leave semantics, group interaction policies, moderation queues, sub-groups, and group migration — so groups can move between servers and stay interoperable across the fediverse. If you're into fediverse protocols and software, come join the task force — this only works if we design it together, in the open.

**Better federated events.** Deeper integration with Lauti, plus repeating events, sub-events, multilingual event content, and interop with Mobilizon, gancio, and gath.io.

**A federated moderation toolkit.** Together with IFTAS and Erin Kissane, we've mapped out an evidence-based safety initiative: shared moderation workflows and a cross-platform dashboard, ready to be co-designed with a community of 200+ practising moderators, with specs any ActivityPub platform can adopt. We're [seeking funding to build it](/moderation-toolkit).

<!-- TODO Ivan: remaining roadmap candidates from tier-descriptions: decision-making tools (Ukuvota, coopcloud), federated publishing / wikis (Unbreaking). Include as committed or as seeking-funding? -->

## Try it

Bonfire Community is free software, AGPL-licensed, no VC money, no ads, no advertising business waiting to be switched on later — and if we ever go bad, the code is already yours to take. You can [install an instance](https://docs.bonfirenetworks.org), try the [demo](/demo/), browse [everything in the kit](/features), or [talk to us about co-designing a space for your community](/mosaic/).

And you don't have to host it alone. Self-hosting promises autonomy, and "sovereign infrastructure" a friendlier flag — but what matters is who governs, not just where the machines sit, and every community fending for itself is just neoliberalism with extra servers (usually rented from some big company's cloud, each idling away rare-earth minerals and energy that sharing would spare). The answer is shared community infrastructure: we're members of [Co-op Cloud](https://coopcloud.tech/), a federation sharing deployment tools and recipes, alongside hosting co-ops like [CoQuest](https://coquest.coop/en), who are hosting jacobin.social. Together we're building a [cooperative hosting network](/hosting/) on the model of community-supported agriculture: communities sustain shared infrastructure, and it sustains them.

It's also why we don't run public instances ourselves. We want an ecosystem: hosting, governance, moderation, and revenue spread across many co-ops and communities, each answering to its own members — rather than the winner-take-all default, where the people who write the software become everyone's landlord, their flagship instance captures the roadmap, moderates the network by default, and collects everyone's hosting fees.

No VC money also means this work runs on community support, if you want it to keep going, please [chip in on OpenCollective](https://opencollective.com/bonfire-networks).

Find us at [@bonfire@bonfire.cafe](https://bonfire.cafe/@Bonfire), on the [issue tracker](https://github.com/bonfire-networks/bonfire-app/issues), or at team@bonfire.cafe.

None of these groups wanted an audience, they wanted somewhere to come together as a community. If that's you, come build it with us.