<!--
============================================================
BONFIRE CASE STUDY TEMPLATE
============================================================
Modeled on the case-study structure used by the leading product/design
agencies (Work & Co, MetaLab, Instrument, BASIC/DEPT). The through-line
in all of them: a case study is a STORY, not a report.

The arc every one of them follows:
  Hero → At-a-glance → Challenge → Approach → Solution modules
       → Results → Testimonial → Credits / next project

FIVE PRINCIPLES (keep these in mind while filling it in):
  1. Show, don't tell. Lead with the work and the outcome, not with
     "we are a framework that...". Every claim earns a visual or a number.
  2. One spine, one sentence. If you can't say the whole story in a single
     line (the hero tagline), the case study isn't focused yet.
  3. Decisions over features. Explain WHY you chose an approach, not just
     what you built. That's what a prospective client is buying.
  4. Metrics are non-negotiable. Even for open-source / community work,
     find the numbers (users, instances, adoption, launch date) and the
     qualitative wins (a quote, a behaviour change).
  5. Make it scannable. Short sections, alternating text + visual, a
     pull-quote, an at-a-glance box. A publisher should get the gist in
     30 seconds and the full story in 4 minutes.

HOW TO USE: replace every {{TOKEN}}, fill each <!-- guidance --> section,
delete the comments you don't need, and drop it into /posts or /draft.
Aim for 700–1,100 words of prose plus visuals.
============================================================
-->
---
layout: /layouts/post.njk
title: "{{HEADLINE — outcome-led, not company-led. e.g. 'From audience to community: how Jacobin built a home its readers own'}}"
description: "{{50–75 word standalone summary. Who the client is, what they needed, what you built, the result. This is what appears in listings and social cards.}}"
image: /img/{{HERO_IMAGE.png — a real screenshot of the delivered work, not a generic graphic}}
tags: case-study
date: {{YYYY-MM-DD}}

---

<!-- ============ HERO ============
One line that captures the whole story, then the hero visual.
Agencies open with the punchline, not a preamble. -->

> **{{ONE-LINE TAGLINE — the outcome in a single sentence.}}**

![{{Alt text describing the hero screenshot}}](/img/{{HERO_IMAGE.png}})


<!-- ============ AT A GLANCE ============
The scannable metadata box. A prospect reads this first to decide if
you've done work like theirs. Keep it tight. -->

## At a glance

- **Client:** {{Who they are, in one phrase — sector matters here}}
- **Sector:** {{e.g. Independent media / publishing}}
- **Engagement:** {{e.g. Bonfire Mosaic co-design}}
- **Timeline:** {{e.g. 6 months of co-design & development, launched July 2026}}
- **What we delivered:** {{3–5 word summary list, e.g. Ghost↔Bonfire integration, federated comments, community spaces}}
- **Live at:** [{{domain}}](https://{{domain}})
- **Everything built is free software in the commons.**


<!-- ============ THE CHALLENGE ============
Set the scene. What did the client face, and why did it matter?
Paint the stakes so the reader feels the problem before the solution.
2–3 short paragraphs. End on the specific, hard ask. -->

## The challenge

{{What the client wanted and why it was hard. Ground it in their world —
the pressure they were under, what they'd tried, what wouldn't work.
Name the real constraint: they didn't want to leave their existing tools,
they didn't want a walled platform, they wanted to own the relationship
with their people, etc.}}

{{The sharp version of the ask, in one line. What they were really asking
for beneath the feature request.}}


<!-- ============ THE APPROACH ============
Your method and the thinking behind it. This is where you sell judgement,
not just output. Why this path over the obvious alternatives? -->

## The approach

{{How you worked (e.g. co-design, not spec-and-deliver) and the principle
behind it. Explain the strategic choice — e.g. "integrate, don't replace":
keep the tools that work, connect them to the open social web. State the
reusability up front: nothing here is bespoke and locked away.}}


<!-- ============ SOLUTION MODULES ============
The heart of the case study. Break the work into 2–4 named pieces.
Each gets a subheading, 1–2 tight paragraphs, and ideally its own visual.
Alternate text and image so it reads like a walkthrough, not a wall.
Use a bold lead-in for each sub-capability. -->

## What we built

### {{Module 1 — the headline feature}}

{{What it does, from the user's point of view, and the outcome it creates.}}

**{{Sub-capability}}.** {{One or two sentences.}}

**{{Sub-capability}}.** {{One or two sentences.}}

![{{Alt text}}](/img/{{module-1.png}})

<!-- Optional objection-handler: pre-empt the obvious "but doesn't X already
do this?" question. Agencies use this to show depth of understanding. -->
> **{{Anticipated objection, e.g. "Doesn't Ghost already federate?"}}** {{Honest answer that acknowledges the alternative, then shows why you went further.}}

### {{Module 2}}

{{Text.}}

![{{Alt text}}](/img/{{module-2.png}})

### {{Module 3}}

{{Text.}}


<!-- ============ WHY IT MATTERS ============
Zoom out. Turn the specific build into a general offer the reader can see
themselves in. This is the "so what?" that converts a story into a lead.
Connect to the mission/values here (federation, ownership, anti-enshittification)
and to the wider industry trend so it feels timely, not niche. -->

## Why this matters for {{audience — e.g. other publishers}}

{{The reusability paragraph: this is a foundation, not a one-off; it extends
to {{adjacent tools/use-cases}}.}}

{{The trend paragraph: who else in the industry is moving this way, with a
link or two, so the reader knows they're not early-and-alone.}}

{{The values paragraph: why the model itself is the differentiator —
AGPL / no VC / no ads / federation / owned infrastructure — and what that
means concretely for the reader.}}


<!-- ============ RESULTS ============
The payoff. TWO MODES — pick the one that fits:

  MODE A — POST-LAUNCH (metrics exist): lead with 2–3 hard numbers
  (users, instances, engagement, adoption), then the qualitative win.
  This is what Instrument/Work&Co do. Use it once you have data.

  MODE B — LAUNCH DAY (no metrics yet): you're publishing on the day of
  launch, so there are no outcomes to report. Do NOT invent or imply them.
  Instead, prove credibility with three other things — scale, achievements,
  and goals — and promise a follow-up. Delete Mode A and use the blocks below.

Golden rule for launch day: state what you BUILT and what you're AIMING FOR.
Never phrase a goal as if it already happened. "We built X so that Y can
happen" reads as confident; "Y happened" reads as hype the day a reader
can check. -->

## At launch

<!-- The verifiable facts available on day one — scale and scope, not outcomes. -->

{{Concrete, checkable facts: community size (e.g. 3,000+ members), build
duration (e.g. 6 months of co-design), what's now live and where, and any
tangible artefacts (e.g. a complete new language translation contributed
back to the commons). These are real on day one and need no metrics.}}

## What we shipped

<!-- The achievements framed as deliverables. Building it IS the result. -->

{{A tight list of what was delivered — the integration, the widget, the
community spaces. This is the accomplishment; you don't need adoption data
to claim you built the thing. Keep it factual and specific.}}

## What success looks like

<!-- Goals, stated forward-looking and honestly. Sets up a follow-up post. -->

{{What this is designed to achieve and how you'll know it worked — framed
as intent, not fact. e.g. "The aim is to turn readers into participants;
we'll share adoption and engagement numbers as the community grows." This
is honest, sets expectations, and gives you a reason to publish a Part Two.}}

<!-- Close by restating the reusable-template angle: what began as one
client's need is now something others can adopt, adapt, and fork. -->
{{Closing line on reusability.}}


<!-- ============ TESTIMONIAL ============
ONE quote, from the client, human not corporate. 25–40 words. Optional but
high-impact — every top agency case study has one. Leave it out rather than
fake it; add it once you have a real line from the client. -->

> "{{Client quote — vision or relief or delight, in their voice.}}"
>
> — {{Name, role, organisation}}


<!-- ============ CREDITS / CTA ============
Agencies close with credits (who did the work) and a clear next step.
For Bonfire, the CTA is the lead-gen: invite the reader to talk. -->

## Talk to us

{{One line inviting the specific reader — "If you're running Ghost..." —
to get in touch. Restate that the work is in the commons.}}

- **Email:** [team@bonfire.cafe](mailto:team@bonfire.cafe)
- **Fediverse:** @bonfire@bonfire.cafe
- **Web:** [bonfirenetworks.org](https://bonfirenetworks.org)

*Built by {{team / credits}}.*
