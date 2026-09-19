---
title: "Making Community Governance Legible: A Semester with Bonfire"
description: "A collaboration with Princeton explores how Governance Cards can help communities explain how they organise, make decisions, and care for their shared spaces."
date: 2026-09-19
image: /img/commrules.png
tags: [community, research]
layout: layouts/post.njk
author: Sohyeon Hwang, Andrés Monroy-Hernández
---

*Originally published on [Princeton’s Center for Information Technology Policy blog](https://blog.citp.princeton.edu/2026/09/18/making-community-governance-legible-a-semester-with-bonfire/), this article by Sohyeon Hwang and Andrés Monroy-Hernández reflects on a semester of collaboration with Bonfire. Together, we explored how Governance Cards could help communities describe how they organise and govern their shared spaces.*

Most of us have spent the last two decades living inside platforms we have little control over. A handful of companies tune algorithms, moderate content, and set policies. Operating at ["unfathomable" scales](https://logicmag.io/scale/the-scale-is-just-unfathomable/), this comes at a cost: it constrains diverse communities to a single set of rules, leaves little room for local values or context, and gives people almost no visibility — or voice — into decision-making. 

An exciting new wave of networks and systems have sought to create alternative spaces for digital life. But alternatives that are not only viable but also sustainable demands moving beyond software. It means rethinking how we organize on these spaces, govern them, and make decisions about them collectively; it also means building tools that support iteration, deliberation, and experimentation along those lines, rather than presuming what should come next. In the Spring 2026 semester course "Designing Protocols" (EGR 373), students had the chance to dig into exactly that problem in collaboration with community partners, including [Bonfire](https://bonfirenetworks.org/posts/bonfire-for-communities/). 

## Creating an interface for "Governance Cards"

One of the EGR 373 projects, “Community Governance Cards,” was led by <span class="tooltip article-acronym" data-tip="Electrical and Computer Engineering"><abbr tabindex="0" aria-label="Electrical and Computer Engineering" class="cursor-help underline decoration-dotted underline-offset-4">ECE</abbr></span> major Prishaa Kapasi (‘29), with support from <span class="tooltip article-acronym" data-tip="Materials Science and Engineering"><abbr tabindex="0" aria-label="Materials Science and Engineering" class="cursor-help underline decoration-dotted underline-offset-4">MSE</abbr></span> student Michelle Le (‘27). As part of our broader project CROW (“Community Rules for an Open Web,”) this project was based on research findings from design workshops with fediverse folks that the <span class="tooltip article-acronym" data-tip="Princeton Human-Computer Interaction (HCI) lab"><a href="https://hci.princeton.edu/" aria-label="Princeton Human-Computer Interaction (HCI) lab" style="text-decoration: underline dotted; text-underline-offset: 4px;">Princeton HCI lab</a></span> ran last year, published at [CHI’26](https://dl.acm.org/doi/10.1145/3772318.3790855). A key idea in the workshops was inspired by tools like CC licenses or Model Cards: give communities a concise, structured way to document how they govern themselves, across core dimensions like infrastructure, membership, rules, and so on. Whereas this information is typically informal, scattered, or entirely undocumented, Governance Cards become a simple and consistent way of sharing norms and context.

We were lucky enough to team up with Bonfire to translate Governance Cards from an abstract idea into a prototype that can be used in actual communities. The student team met with the Bonfire team periodically throughout the semester, with our conversations circling back to two central questions.


**What do people actually need to set up and articulate?** Intuitively, we know that governance isn’t one-size-fits-all! Neither is the language communities use to describe what they do. A big part of this work was simply figuring out which dimensions of governance actually matter to communities and finding vocabulary flexible enough to fit diverse communities that might be wildly different, specific, or distinct. Regular discussions to iterate on the schema pushed us to sync up social and organizational dimensions with the actual affordances the software provides, as well as raised new ideas of what the software might support. 
The rule-selection interface was a good example of this in practice. We started with the fuzzy question of "what does a community allow or disallow?" After analyzing 200 or so rule sets from a random sample of Fediverse communities, we developed a structured, comparable set of choices, adding options that still made it possible for communities to express nuance about their own specific norms. In a test version, Bonfire was able to implement this interface into the platform software, making it much easier for Bonfire communities to draft an initial set of rules.

![bonfire screenshot](/img/commrules.png)

The rule-selection interface was a good example of this in practice. We started with the fuzzy question of “what does a community allow or disallow?”. After analyzing 200 or so rule sets from a random sample of Fediverse communities, we developed a structured, comparable set of choices, adding options that still made it possible for communities to express nuance about their own specific norms. In a test version, Bonfire was able to implement this interface into the platform software, making it much easier for Bonfire communities to draft an initial set of rules.

![crowcards screenshot](/img/crow_rules_screenshot-1.jpeg)

**How should the data actually be shared?** Once people fill out a Governance Card, a question that remained was how that information should be stored. Governance Cards are a kind of documentation, and documentation is only useful if it’s usable (for example, by the administrators filling it out, by prospective members trying to evaluate a community, and eventually by other tools and platforms assessing compatibility). That meant thinking hard about data formats (Bonfire suggested JSON-LD as a way to make Governance Cards both machine-readable and interoperable across systems) and about privacy (governance information can be sensitive). In future extensions of this project, we’ll experiment with how to support multiple levels of visibility rather than treating all governance data as equally public.

## What’s next
Working with Bonfire gave us a testbed for this work, grounded in the real constraints of software and their experience with communities using their platform. We’re excited to continue working with them to finalize a data schema and define privacy settings for card-sharing, as well as to design a visual representation of a Governance Card that people can display on their communities.

Stay tuned for:

- The release of the prototype, which will live at [crowcards.org](https://crowcards.org)
- Our announcement for community workshops that you can sign up for!

## Further Reading: 
- [Sohyeon’s work and research](https://www.sohyeonhwang.com/)
- [Andres’ work and research](https://www.andresmh.com/)