---
title: Open source meets open science - announcing the Open Science Network initiative
description: "We’re excited to present the Open Science Network initiative, a first step towards open and federated digital spaces designed to push the boundaries of open science and scholarly communication."
date: 2024-02-27
tags: community
image: /img/osbg.png
layout: layouts/post.njk
author: Bonfire Builders

---

The scientific method must be liberated. In an era marked by misinformation, mass surveillance and political propaganda, corporate monopolies and platforms hinder scientific innovation and knowledge sharing. Scientists, researchers, academics and their affiliated organisations must have control over the tools and medium they use to publish, review, share, study and discuss their work. 

Today, we’re excited to present the [Open Science Network](https://openscience.network) initiative, a first step towards open and federated digital spaces designed to push the boundaries of open science and scholarly communication. You can read more about it on the [official website](https://openscience.network). 

## What is an open science ‘digital space’

A digital space is an online place where people gather and interact with one another. Some digital spaces are home to only one community, while others are platforms that host multiple communities. The organisation or individuals who set up and maintain the digital space control the user experience and the governance of that space.  

An ‘open science digital space’ includes a set of bespoke features and UX paired with a community dedicated to fostering open science practices. This means the space is intentionally designed to support the sharing of scientific knowledge, collaboration, and transparency in scientific research, promoting open reviews and production of scientific knowledge. 


## Our journey so far

The idea of building a federated tool for sharing research on the social web started with [Nibö](https://niboe.info), a science communication collective, wanting to build a social tool for academics and researchers. Nibö contacted the Bonfire team with innovative ideas on how a federated digital space specifically designed for scientific communities could benefit open science – promoting better practices and knowledge sharing for both scientists and users, and moving beyond the conventional use of social media as a mere content broadcasting tool. They wondered if such a federated digital space could be built atop Bonfire's modular and extensible architecture.

Since this initial collaboration, we've outlined a preliminary set of features, primarily catering to Nibö’s community while also considering the broader needs of the open science community. 

We soon discovered that the fediverse is an incredibly fertile ground for discussions on open science, where open science advocates, activists, researchers and communities have been increasingly gathering to share knowledge, collaborate or simply discuss how to foster open science practices. 

Driven by aligned visions and needs, together with [Björn Brembs](http://brembs.net/) (author of [Replacing Academic Journals](https://royalsocietypublishing.org/doi/10.1098/rsos.230206) and [Mastodon over Mammon: towards publicly owned scholarly knowledge](https://royalsocietypublishing.org/doi/10.1098/rsos.230207)), [Ulrike Hahn](https://fediscience.org/@UlrikeHahn) (a coordinator of [SciBeh](https://scibeh.org/), an initiative that has been thinking about [new digital infrastructure for science](https://write.as/ulrikehahn/some-thoughts-on-social-media-for-science), including online workshops) and Nibö, we started the open science network. Its mission is to co-design, develop, study, iterate and disseminate tools to improve open science practices on federated digital spaces. 

The Open Science Network has been shaped by many contributions and ideas and benefited immensely from discussions over the fediverse. 
With such an amount of grey matter in place, the next logical step was to validate the feasibility of these ideas and how they would play in a federated network.


## The open science extension prototype

<img src="/img/ospreview.png" />

We decided to start by tackling a (technically) low-hanging fruit to demonstrate the benefits of co-designing digital spaces with communities bottom-up and the feasibility of adding tailored features in Bonfire without messing with the rest of the codebase. We introduced a custom preview feature for posts containing links to papers or publications. 


This widget not only displays the paper's title and abstract (like standard link previews in other social networks) but also details the publication journal, co-authors, topics, publication date, and relevant links such as the [DOI](https://en.wikipedia.org/wiki/Digital_object_identifier) and the PDF when available - - with data automatically fetched from various open repositories. This feature enriches the context provided by linked papers, enhancing users' understanding of the publication. [The prototype was shared across the fediverse, receiving a wave of feedback and encouraging reactions](https://indieweb.social/@bonfire/111793274037434384).

Based on that enthusiastic response, we ventured further to develop other features requested including:

### ORCID single sign-on
Researchers can sign in to their open science digital space using either their email and password or their [ORCID](https://orcid.org/) credentials. This integration simplifies the login process and ensures that users can have a trusted provider to log into their digital space.

<iframe class="w-full rounded-xl ring-4 ring-base-content/40" title="orcid single sign on in Bonfire" width="560" height="400" src="https://tube.tchncs.de/videos/embed/0ebcbb97-6c23-43c1-801b-320ba81129de" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>

### Automatic import of publications using ORCID credentials
Linking a user's ORCID profile also enables the automatic import of their publications, using the ORCID API, which are then showcased on a dedicated "publications" tab within their profiles. This feature not only highlights the researcher's work but also facilitates easy access to their scientific contributions - evolving their social profile into a professional one.

<iframe class="w-full rounded-xl ring-4 ring-base-content/40" title="Automatic Import of Publications using ORCID credentials" width="560" height="400" src="https://tube.tchncs.de/videos/embed/b2f258f9-fe4e-477f-b721-b67978e73939" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>

### Publications feed
A new "publications" feed aggregates all papers fetched via users’ ORCID profiles or added via post links, so users can discover publications of other members of their digital space, including those from followed users on remote instances. This fosters a wide-ranging view of scientific contributions within a digital space federated network. 

<iframe class="w-full rounded-xl ring-4 ring-base-content/40" title="Publications feed" width="560" height="400" src="https://tube.tchncs.de/videos/embed/b758c6c2-4975-4d21-bc50-bae6d8fa2918" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups"></iframe>

### Conduct a discussion around a publication
Beyond reading publications, users can start discussing them with authors and amongst themselves. This means going beyond content distribution and fostering academic discourse and open collaboration, enriching scientific cooperation within the community and beyond.  

<img src="/img/osreply.png" />


All the code is open source and available for anyone to pick up and try out or extend. We published a new [Open Science extension for Bonfire](https://github.com/bonfire-networks/bonfire_open_science) that includes code for most of the features requested (other bits live in different extensions as they are transversal to different use cases, such as federated groups and topics).

We did enough work to confidently say.... 


<img src="/img/itcouldwork.jpeg" />


We **can** develop an open science extension that academics and scientists can include in their Bonfire instances - we hope it can nurture and promote a novel paradigm of scientific practices.


## Next steps

We have now launched the [Open Science Network website](https://openscience.network) to try gathering together more communities, organisations and researchers to co-design features and support the project.

Moving forward, our plans include refining the current features in collaboration with scientific communities, moving from prototypes to reliable and tested features and incorporating additional ones if necessary.

We will iteratively test the open science digital space with pilots to ensure that new communities can set up their own digital space with confidence.


## How to contribute
- If you wish to propose a new feature or refine an existing one, please [open an issue](https://github.com/bonfire-networks/bonfire-app/milestone/56). 
- To join the network or participate as a pilot community, contact us at team@openscience.network 
- If you're interested in contributing through coding, design, facilitation, social media, or other tasks, please get in touch at team@openscience.network 
- We won’t take private capital or venture funds, but we do need more resources to onboard additional collaborators to partner with pilot projects to test and iterate features. We would greatly appreciate support for our work through donations or grants. Please reach out to us at team@openscience.network or donate directly via our [Open Collective account](https://opencollective.com/bonfire-networks/projects/open-science-network). 
- Please spread the word about these initiatives to broaden their impact.


