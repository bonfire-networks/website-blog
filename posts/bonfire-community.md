---
title: "Announcing Bonfire Community"
description: "Groups, topics, events, shared organisation profiles, embedded comments and governance tools — Bonfire Community is here, and from now on it's our main track."
date: 2026-07-DD
tags: announcement
image: /img/community.png
layout: layouts/post.njk
author: Bonfire Builders

---

Today we're announcing **Bonfire Community** — the flavour of Bonfire built for groups that need to organise together, not just post at each other. It brings groups and topics, events, shared organisation profiles, embeddable federated comments, custom themes, and a first set of governance tools.

It's also a shift in direction. From now on, Bonfire Community is our main development track.

## Why community, not social

[Bonfire Social](/posts/bonfire_social/) reached 1.0 and it does what it set out to do: a well-made, locally-governed, federated social app where people control their feeds, their boundaries, and who can reach them. We'll keep maintaining it, and everything we build for Community lands in Social too — they share the same foundations.

But the last year of working with real communities taught us something we should probably have seen earlier. Nobody came to us asking for a better microblog.

They came asking how to hold a group together. A magazine whose readers wanted to debate each other, not just the article. A mental health network that needed spaces where people could speak safely. A town that wanted its events, its notices, and its arguments in one place it owned. In every case the timeline was the least interesting part of the answer.

Feeds are built around individuals. That's fine for chatter and discovery, and it is genuinely bad for organising. When you need *specific* people to see something, act on it, and follow through, a feed is the wrong shape. You need a group — with membership, with rules, with a calendar, with a way to decide things.

That's what Bonfire Community is for. It's the same argument we made when we [started building groups](/posts/groups/), and after a year of building it with communities rather than for them, we're confident enough to make it the centre of the project.

## What's in it

### Groups and topics

Groups are spaces with their own membership, permissions, and rules. Because they're built on Bonfire's [boundaries](/posts/introducing_boundaries/) system, a group isn't a single fixed thing: you can run a public group, an announcement-only space, a private invite-only room, or a group visible only to a particular [circle](/posts/introducing_boundaries/) — and change your mind later without migrating anywhere.

**Topics** live inside groups and keep conversations from collapsing into one undifferentiated stream. You can follow a group *or* a single topic, so updates reach your feed without you having to visit every group page to check whether anything happened.

Each group can also define its own **community rules**, drawing on governance research we've been integrating through our work with Princeton HCI and the [CrowCards](http://crowcards.org) tool.

One honest caveat: **groups and topics are local-only for now.** They work within an instance, and they don't yet federate. That's deliberate — we're working through the design with the [W3C task force on federated groups](https://swicg.github.io/) so that when Bonfire groups do federate, they're compatible across the fediverse rather than being one more incompatible dialect. More on this below.

### Events

Communities run on gatherings. Bonfire Community includes events with dedicated views for browsing what's coming up and managing attendance.

<!-- TODO Ivan: describe the actual event views here — calendar view? list? map? — I couldn't verify this from the repo -->

We've also been working with [Lauti](https://lauti.org/blog/lauti-updates-2026/#cooperation-with-bonfire), the open source community calendar project, on publishing and discovering events across tools rather than trapping them in one app.

### Organisation profiles

A community is rarely one person. You can now create a **shared organisation profile** — a magazine, a collective, a working group, a moderation team — co-managed by several accounts. It behaves like a normal profile (it posts, it's followed, it federates) but the people behind it can come and go without anyone handing over a password.

<!-- TODO Ivan: confirm before publishing — does the org profile federate as an ActivityPub `Organization` type yet? The plan doc has this as partly landed. -->

### Embedded comments and Ghost integration

We built an **embeddable comments widget** that turns any web page into a federated object. Paste a snippet into a Ghost theme — or any CMS, or a static site — and the page gets a comment thread that lives on your Bonfire instance and federates out to the fediverse. Someone can reply from Mastodon and it appears under your article; someone can comment on your article and it appears in the fediverse.

For [Ghost](https://ghost.org) specifically we went further, with single sign-on, membership tier sync, and automatic article import — so a publisher's articles arrive in their community as an invitation to discuss rather than a dead end.

### Custom themes

Bonfire ships with 16 themes, and you can build your own colours, fonts, and layout without writing code. A community space should look like the community, not like a product.

### Governance

Deciding things together is a feature, not an afterthought. Bonfire Community ships with three kinds of polls:

<!-- TODO Ivan: I couldn't find the three poll types named anywhere in the repo or docs. The 1.0.3 post mentions "single or multiple choice… proposal phases, consensus building, ranked choice voting". Please fill in the actual three: -->

1. **[type one]** — ...
2. **[type two]** — ...
3. **[type three]** — ...

The design draws on sociocratic practice and on tools like [Ukuvota](https://ukuvota.world) and [Loomio](https://www.loomio.com), developed with Princeton HCI. Polls federate as ActivityPub `Question` objects, so people on Mastodon and elsewhere can take part.

## Built with communities, not for them

None of this came out of a product meeting. It came out of [Bonfire Mosaic](/mosaic/), where we co-design a space with a community and everything we build goes back into the commons as free software.

**[Jacobin](https://www.jacobin.de/)** — the German-language edition of the socialist magazine — came to us after its readers crowdfunded a demand for a community space rather than a nicer website. Six months of co-design produced the Ghost integration, the comments widget, and much of the groups-and-topics design. [jacobin.social](https://jacobin.social) is live for a community of 3,000+ readers, and the collaboration also produced a complete German translation of Bonfire. The full story is in our [case study](/case-studies/jacobin/).

**[Mentaal](https://mentaal.nl)** — a Dutch mental health community run with the Ypsilon organisation — has 500+ people on Bonfire, and is planning a set of instances deliberately kept apart from the open fediverse. They arrived at that design independently, before we shipped [Archipelago mode](/posts/bonfire-1.0.5/); it's a good reminder that safety-critical communities need federation to be a choice, not a default.

<!-- TODO Ivan: check the numbers and the framing here — how many instances, and how much do we want to say publicly about their plans? -->

**[Totnes Pulse](https://totnespulse.co.uk)** — a local network for Totnes, a pioneering transition town in Devon — is using Bonfire as social infrastructure for a place: local events, notices, discussions. Built with the Newsmast Foundation on mobile and Lauti on events.

<!-- TODO Ivan: is Totnes Pulse live? Any user numbers worth citing? -->

Three very different communities — a publisher, a care network, a town. What they share is that none of them wanted an audience. They wanted somewhere to be a group.

## What's next

**Federated groups and topics.** The biggest gap, and the biggest priority. We're contributing to the [SWICG](https://swicg.github.io/) work on Join/Leave semantics, group interaction policies, moderation queues, sub-groups, and group migration — because a group you can't move is a group you don't own. We'd rather ship this interoperably in a few months than ship it incompatibly now.

**Native and federated events.** Deeper integration with Lauti, plus repeating events, sub-events, multilingual event content, and interop with Mobilizon, gancio, and gath.io.

<!-- TODO Ivan: add the rest of your roadmap items here. Candidates from tier-descriptions: federated moderation toolkit (IFTAS + Erin Kissane), decision-making tools (Ukuvota, coopcloud), channel curation (Newsmast), federated publishing / wikis (Unbreaking). Pick what's actually committed vs. still fundraising. -->

## Try it

Bonfire Community is free software, AGPL-licensed, no VC money, no ads, no advertising business waiting to be switched on later. You can [install an instance](https://docs.bonfirenetworks.org), try the [demo](/demo/), or talk to us about co-designing a space for your community.

Find us at [@bonfire@bonfire.cafe](https://bonfire.cafe/@Bonfire), on the [issue tracker](https://github.com/bonfire-networks/bonfire-app/issues), or at team@bonfire.cafe.
