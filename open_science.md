---
layout: /layouts/post.njk
title: "Toward an open-science ecosystem"
description: "Dive into Bonfire Networks' case studies to witness the power of autonomous social networks in empowering digital and local communities."
image: /img/gaia.jpg
tags: flavour
date: 2023-10-04

---

## Authors:
- [Niboe](https://red.niboe.info/@equipo)
- [Bonfire](https://bonfirenetworks.org/)
- [Layla Axul, UNAM](https://biogarabatos.blogspot.com/)

## Why an open science platform

Email  is ubiquitous in academia and research and we use it on a daily-basis to communicate with our colleagues and peers. An email from `*@usb.edu.co` is more reliable to us than an email coming from `*@gmail.com`.  If all academics had to use Gmail- it would made things more complicated, right? We trust the sender because of the server it originated from. Messages and calendar invitations are among the supported formats that email can handle. But imagine for a moment that other functions were possible, like posting a review on a pre-print service, adding a comment, or voting in a poll on a research topic - all with a verifiable identity supported by your institution. If all of it sounds far-fetched, you might be underestimating the power of federated social media protocols, like ActivityPub, the protocol behind apps like Mastodon, Bonfire and others.

A large amount of science communicators and researchers use commercial social media to share research outputs, news and to exchange with their peers. The most commonly used platforms for this purpose are currently Twitter and LinkedIn. The shares are usually linked to external resources like peer-reviewed papers, research news and job posts, as well as platform-based media content, including charts, videos and also written content, which is commonly shared as post threads on Twitter, given the 280 character limit that the platform imposes. All these media-sharing features, in addition to the fact that the platforms host a large amount of peers, make them quite attractive for users to keep using them instead of trying alternative options.

However, researchers also actively use traditional online communication means like email distribution lists and discussion forums. Federated social media protocols offer the opportunity to build an ecosystem for peer-review and networking that if adopted by universities and reasearch centres, could revolutionize academic publishing and collaboration.

Institutional fediverse servers are still not so common but there are already some online. The German government is hosting [their own Mastodon server](https://social.bund.de/public) for institutional accounts. From the academic community there are Mastodon servers set up by researchers at [MIT](https://mastodon.mit.edu) and [UNIPAR](https://unipar.online). Although these initatives are a teaser of what will come in the next years, they are still limited to microblogging. The uses of federated protocols like ActivityPub are unlimited and different projects are exploiting its potential.

[Bonfire](https://bonfirenetworks.org/) is building a modular framework for federated social applications, including microblogging, task management, or AI-assisted content moderation. Within Bonfire, different plugins could be created for purposes like research collaboration, pre-print publishing and peer-review. Additionally, a clear and verifiable recognition and verification system could support the creation of a federated open-science ecosystem.

## A day in the life of a scientist in the fediverse

Imagine a day in the life of a group of scientists at a university. They wake up, and instead of sifting through a cluttered email inbox or navigating multiple disconnected platforms, they open Bonfire.

They log in using their ORCID credentials, a unique identifier that integrates their professional information with their social presence. Their homepage greets them with a dashboard featuring the latest updates from the various research groups they're part of and other topics they've subscribed to. Their feed is not cluttered with algorithmically-driven content, but instead it is focused on the topics and projects they care about.

One researcher shares a pre-print of her latest paper on Bonfire. The system immediately imports the document's metadata, generates a DOI, and displays it in a clean, easy-to-read format. A built-in PDF viewer allows her colleagues to read the paper instantly.

The paper is available as a thread now in Bonfire, where fellow researchers - depending on what permissions were granted - can easily leave comments, ask questions, or suggest edits; turning the conventional, closed-door review process into an open and collaborative journey. A group of fellow scientists from a trusted instance can assign badges to posts, facilitating a more organized peer-review process. The paper at the end of the review, will be shared in one or several Groups, which act as federated open scientific journals.

Throughout the day, scientists use Bonfire to coordinate their work, share new findings with a broader audience, and engage in meaningful discussions. The platform not only enhances their individual productivity but also blurs the lines between academia and open communities, building bridges for knowledge and participation to traverse freely and seamlessly.  
 

## Open Science Features

The following are some of the features we would like to include in the development of Open Science, a bonfire extension to empower universities, collectives and researchers with tools to build federated research networks.


**ORCID credential login**

This milestone involves developing an authentication and authorization system that allows users to log in to the Bonfire platform using their ORCID credentials. It includes setting up secure connections with ORCID's APIs, retrieving user details, and managing user sessions. The objective is to make the login process seamless and to provide an integrated experience for scientists, as their professional information and social presence will be tied to their ORCID identifiers.


**ORCID publication import**
This feature will enable users to import their publication history from ORCID. It involves creating scripts to extract publication details from ORCID, convert and display this data into a format compatible with the Bonfire platform. This way, scientists can showcase their research outputs in their profile pages.


**DOI metadata import for sharing existing research articles**
For this feature, the platform will need to be able to fetch metadata from a DOI (Digital Object Identifier). This process involves using APIs to gather bibliographic details, such as the title, authors, abstract, publication date, and publisher. Once imported, this metadata can be used to create a new post or update an existing one, making it easy for researchers to share and discuss existing research articles.


**Pre-print sharing system (including PDF viewer, DOI generation via  Crossref's REST API, versioning)**
This involves building a subsystem where users can upload their pre-print papers in PDF format. The system will use Crossref's or DataCite's REST API to generate a new DOI for each pre-print. It will also include a built-in PDF viewer to read the paper directly on the platform. Additionally, the system will allow different versions of the pre-print paper to be uploaded and managed, facilitating the process of incorporating updates and corrections.


**Topic groups that could act as journals.**
This feature will enable users to create and join groups focused on specific topics, akin to individual scientific journals. Each group will have its own feed where members can post, comment, and interact. This feature will include group management options, such as invitations, membership approval processes, and content moderation.


**Editor roles specific to the different groups.**
This involves creating a system of user permissions and roles within each group. The "editor" role will be introduced to manage the content within a group, approve posts, and facilitate discussions. Editors will have the power to moderate, edit, and delete posts within their group, thereby maintaining the quality and relevance of the group's content.


**Badging system for posts in order to organize a peer-review process.**
A badging system will be implemented to tag and classify posts based on their content and status in the review process. Badges can be assigned to posts by editors or by a trusted group of scientists to signify stages of peer review, content types, or other noteworthy attributes. This feature will be crucial in organizing the peer-review process and guiding users through the flow of content.


## Stretch goals

**Backlinks**
Backlinks will allow posts to reference other posts, fostering an interrelated network of content. This will involve creating a system to easily generate links within the platform, and also to track and display where backlinks are used, creating a network of connected information and facilitating citation.



**Taxonomy**
The taxonomy feature will provide a structured way to categorize and tag content on the platform. This involves creating a hierarchical system of categories and subcategories that users can assign to their posts. This will facilitate content discovery and navigation, making it easy for users to find relevant content based on their interests.


**Resources and Collections**
This will involve creating a system where users can group related posts into collections and designate specific posts or documents as resources. This will facilitate the organization of content, making it easier for users to curate and manage relevant information.


**Audio posting for podcasts and oral documentation**
This involves integrating an audio posting system into the platform. Users will be able to upload audio files, like podcasts or oral documentation, with an accompanying thumbnail. Other users can play these directly in the platform, expanding the types of media that can be shared and discussed within the scientific community on Bonfire.


---

## Final words

A massive adoption of federated protocols by academic institutions will help to boost open-science implementations and to include non-academic communities in the knowledge production process. We envision these implementations being crafted in the open, through a co-designing process that unites scientists, researchers, and activists. This collective effort will ensure that the developed features meet the meticulous standards of academic tools while leveraging the user experience of social networks. It is our aspiration that this will spark meaningful conversations and broaden the accessibility of scientific discussions to a wider audience, fostering a vibrant, inclusive, and interconnected global knowledge community.

