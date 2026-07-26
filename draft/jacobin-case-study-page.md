# Jacobin × Bonfire — From audience to community

*Plain-text copy of the case study page (`case-studies/jacobin.njk`), broken into sections for reading, review, and translation. Image filenames are noted in italics where the page shows a screenshot.*

**Page description:** How Jacobin's German edition connected Ghost to Bonfire to give 3,000+ readers a federated community space they own. The result is a reusable foundation other publishers can adopt.

---

## 1. Hero

**From audience to community**

This independent publisher wanted more than a comment section. We connected Ghost and Bonfire and gave their writers and readers a next-generation federated community space.

*Image: `/img/jacobin/marxglass.png` — Marx reflected in a mirror.*

---

## 2. Overview — jacobin.social, a community space its readers own

| | |
|---|---|
| **Client** | Jacobin (German-language edition) |
| **Sector** | Independent media / publishing |
| **Timeline** | 6 months · live July 2026 |

Link out: [View live site → jacobin.social](https://jacobin.social)

### The challenge

It all started with a crowdfunding campaign, which the readers of Jacobin's German-language edition backed with a clear demand: not just a nicer website, but a place where they could debate, organise, and build solidarity together — to go beyond an audience that reads the same articles and become a real community.

A traditional comment section wasn't going to cut it, and neither was pointing readers to yet another platform owned by Big Tech. Jacobin wanted a community space of their own, with the ability to connect to the wider open social web.

### Our approach

This is part of an initiative we call [Bonfire Mosaic](/mosaic): we work with a community to design a space around how they actually work, and everything we build is free software that contributes to the commons. Jacobin wanted to use Ghost's publishing tools, but tightly integrated with a community space. The goal was not to replace the CMS, but to bring a federated social layer to where the team already works.

Nothing here is Jacobin-specific and locked away. It's a reusable foundation any publisher can adopt.

---

## 3. What we built — three pieces, one integrated experience

Over six months of co-design we built the publishing bridge, the conversation layer, and the community spaces. Each is usable on its own, but they're designed to work as a single seamless whole. Together they turn an audience into a community that debates, organises, and belongs.

1. **Publishing** — a deep Ghost ↔ Bonfire integration
2. **Engagement** — federated comments on any page
3. **Community** — intentional spaces & governance

*Image: `/img/jacobin/j00-intro-artwork.png`*

---

### 01 · Publishing — a deep Ghost ↔ Bonfire integration

Jacobin liked publishing on Ghost, so rather than replace the CMS, we brought a federated social layer to where the team already works — so publishing and community feel like one integrated experience.

- **Integrated experience.** A Jacobin article automatically appears in Bonfire, with rich tools for discussion and sharing. *(`/img/jacobin/ghostbonfire.png`)*
- **Single sign-on** across Ghost and Bonfire: readers move between the two without friction. *(`/img/jacobin/j02-sso.png`)*
- **Article import** that respects visibility settings based on the Ghost tiers. *(`/img/jacobin/ghost.png`)*

#### Doesn't Ghost already federate?

Ghost has the ability to broadcast articles into the fediverse and pull replies back. That's a great start. But Jacobin wanted to go further: a structured community space with groups, topics, polls, and specialised moderation and governance tools. Each tool does what it does best — Ghost publishes, Bonfire hosts the community.

---

### 02 · Engagement — where the conversation lives

Ghost gives every article a comment thread. Jacobin wanted those threads to belong to something larger.

We built an embeddable widget that ties a discussion to each article, but the discussion doesn't live in a box under the page. It lives in the community, inside groups and topics, alongside everything else being discussed there.

That changes what a comment is. A thread stays discoverable long after the article scrolls off the homepage, and a conversation that outgrows its article can keep going in the group where it belongs. It's conversation with a place to go, not a comment section that fills up and empties out.

- **Real discussion.** Nested, boostable, upvotable threads — not a flat comment box bolted onto the page. *(`/img/jacobin/discussion.png`)*
- **Cross-network.** Readers can join the conversation from Mastodon, other Bonfire instances, or Bluesky via bridging, and all replies appear together on the article page. *(`/img/jacobin/interop.png`)*

---

### 03 · Community — intentional spaces, not a noisy feed

Jacobin didn't want its community lost in a noisy feed, or an algorithm deciding what surfaces. They wanted intentional spaces organised around groups and topics, organised and governed by the community itself.

- **A space of their own.** A Jacobin group, organised around topics rather than a single noisy feed. *(`/img/jacobin/j09-group-topics.png`)*
- **Flexible boundaries.** Public groups, announcement-only spaces, private invite-only rooms, or circle-restricted groups. *(`/img/jacobin/creategroup.png`)*
- **Topics & following.** Organise discussions by topic; follow a group or topic to get updates without visiting each page. *(`/img/jacobin/groups-list.png`)*
- **Community rules.** Each group defines its own rules, grounded in governance research with Princeton HCI and CrowCards. *(`/img/jacobin/widgets.png`)*

---

## 4. Co-design — a space that looks and feels like Jacobin, not like a generic platform

The features matter, but so does ownership of the experience. Through co-design with [Bonfire Mosaic](/mosaic), we tailored the entire space to Jacobin's identity, so members feel they're home — not on a Big Tech platform or an off-the-shelf SaaS app.

*Images: `/img/jacobin/banners-04.png` (wide banner), then a scrollable strip of `/img/jacobin/j14-sq-colours.png`, `/img/jacobin/logo.png`, `/img/jacobin/about.png`.*

**Co-designed, not configured.** We didn't just hand over a settings panel or ask for a CSS file. We ran research and workshops with the Jacobin team to shape the space around how their community actually works and feels.

**Their identity, through and through.** Colours, typography, iconography, layout, and tone: the experience wears Jacobin's brand throughout, delivered as a distinct Bonfire flavour rather than just a theme skin.

**In their language.** A complete German translation, done in collaboration with their team and contributed to the commons for every German-speaking community that follows.

---

## 5. Why this matters for publishers — connected with your readers, on your own terms

All of this forms a reusable foundation for other publishers and membership organisations that want a federated social space. The way we integrated Ghost can also be extended to WordPress, Drupal, or any other CMS.

Publishers like The Verge, 404 Media, and the New York Times are already exploring deeper social integration into their articles. The reason is familiar to anyone whose reach depends on a platform they don't control: rented audiences can be throttled, de-ranked, or lost overnight.

Bonfire offers a different premise. AGPL-licensed, no VC, no ads, no incentive to enshittify the space over time. Every instance federates over ActivityPub, so the community can connect with the open social web on its own terms. And because it runs on infrastructure the publisher controls, the relationship with readers isn't mediated by a third party that can revoke it.

*Image: `/img/jacobin/Layer.png` — line-art figure in a plumed hat holding the world, sun in hand.*

---

## 6. The launch

**jacobin.social is live, and 3,000+ readers now have a community space of their _own_ — not one they rent.**

What began as a reader-funded demand for something better than a comments section is now a working foundation other publishers can adopt, adapt, and fork. We'll share what we learn, and update this page as the community grows and things evolve.

---

## 7. Testimonial

> "Client quote — a line from the Jacobin team on why they built this."
>
> — Name, role, Jacobin DE

**Still a placeholder.** Needs the real quote; a note in the template also says this block should move to the top of the page.

---

## 8. Our role

| Co-design | Product & design | Engineering | Federation |
|---|---|---|---|
| Community research | UX & UI | Ghost integration | ActivityPub |
| Requirements & workshops | Boundary system | Comments widget | Bluesky bridging |
| Governance design | Onboarding flows | Membership sync | Groups & topics |

---

## 9. Call to action

**Running Ghost, WordPress, or Drupal?**

Thinking about where your community conversation should live? Everything we built for Jacobin is in the commons and available to build on.

- [Let's chat](https://cal.com/bonfire-networks/meet)
<!-- - [bonfirenetworks.org](https://bonfirenetworks.org) -->

<!-- Next case study → [Open Science Network](/open_science) -->
