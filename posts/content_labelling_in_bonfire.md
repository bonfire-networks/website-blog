---
title: Safer social networking - Bonfire's recent experiment with Prosocial Design Patterns 
description: "To better understand the workflow involved in building Bonfire extension from scratch, we implemented a design pattern from the Prosocial Design Network: label misleading content; add links to reliable, related content."
date: 2024-01-26
tags: community
image: /img/labelbg.png
layout: layouts/post.njk
author: Bonfire Builders

---

## Introduction 

As we gear up for the release of Bonfire Classic 1.0 – which includes not just the software but also extensive documentation and tutorials for people to customise and extend functionality in-depth – we're testing the framework's modularity. Our goal is to understand the workflow involved in planning, designing, implementing, and shipping a Bonfire extension from scratch. Our first experiment involved implementing a design pattern from the [Prosocial Design Network](https://www.prosocialdesign.org/), a community dedicated to pioneering safer social networks.

The results were quite encouraging. We were able to prototype the researched pattern, package it as [a distinct Bonfire extension](https://github.com/bonfire-networks/bonfire_label), and integrate it with the Bonfire codebase, all within a matter of hours. This not only demonstrates the power of Bonfire's modularity but also aims to initiate closer collaboration with researchers, activists, and organisations that are committed to designing and fostering safer digital spaces.

Through Bonfire, we can challenge the limitations of current digital platforms, which are often constrained by dark patterns, closed and centralised (not just in terms of interoperability but also in terms of design choices) and/or profit-driven. By partnering with communities, foundations, and anyone whose mission is to truly improve our digital tools and environments, and leveraging the open and interoperable nature of the Fediverse, Bonfire can significantly reduce development time, making it easier to experiment with alternative patterns and foster a more collaborative and open experimentation on building better digital spaces in such crucial times.

## Experiment overview 

We chose to implement a feature allowing moderators to add content labels to posts, following a design pattern documented by the Prosocial Design Network: [label misleading content; add links to reliable, related content](https://www.prosocialdesign.org/library/label-misleading-content-add-links-to-reliable-related-content). 

This pattern aims to reduce the spread of misinformation by adding context to potentially misleading posts, by displaying accurate information and sources alongside them.

In the following example, a user has published a misleading post.

<img src="/img/posttolabel.png">

Our development process began with the creation of necessary user interface (UI) components. The first was simply adding a button in the dropdown menu next to every activity on Bonfire to allow moderators to add a label to a post. 

<img src="/img/labeltoaction.png">

Moderators can then select a label in a modal. As outlined in the design pattern, we provided three default options: *Stay informed*, *Get the latest*, and *Misleading*, though instance admins or moderators could add their own labels as well. Additionally, a text box is available for adding broader context, and up to three links can be included to offer reliable sources.

<img src="/img/labelmodal.png">

Once published, these notes become visible underneath the post for all instance users or visitors, and a preview is included for each of the reference links. 

<img src="/img/labelled.png">

Once the UI components were built, along with the necessary backend functionality, it was just a matter of adding the new extension into the desired Bonfire flavour.

## Results and insights 

We are extremely pleased with the outcomes of our experiment and the opportunity to benefit from the design patterns and research conducted by organizations like [NewPublic](https://newpublic.org/), [Integrity Institute](https://integrityinstitute.org/), [Open Future](https://openfuture.eu/), and the [Prosocial Design Network](https://www.prosocialdesign.org/) and others. 

While implementing the design pattern, we encountered several thought-provoking questions, such as:
<ul>
    <li>How can users suggest notes and reference links to moderators?</li>
    <li>How can users contribute feedback to those added by moderators?</li>
	<li>How can different moderators collaborate effectively on creating or improving these notes?</li>
	<li>What steps should be taken if a note or reference links are found to be inaccurate or misleading?</li>
	<li>Initially, only moderators can add labels. Should we leverage Bonfire's custom roles to enable specific users review and label content, easing the load on instance moderators?</li>
	<li>How can labels be used in a federated environment? At the moment moderators are tied to specific instances, at least until groups are introduced. Should we extend this feature to enable federated content labelling teams, so users (or entire instance) could subscribe to several trusted teams? </li>
</ul>

Although we have potential answers to these questions, we believe it would be much more beneficial to open up the discussion and start a feedback loop where research, experimentation, and community feedback are all incorporated into both the documented design pattern and our implementation of it. This would provide a more comprehensive and holistic approach to building and evolving such features.

However, there is still some work to be done before we can include this feature in our [campground instance](https://campground.bonfire.cafe) and testing it live with our community. Key among these tasks is the ability for moderators to edit or remove a content label and to adding a dedicated page for moderators where all labelled content is listed and can be reviewed, as listed in [the relevant issue](https://github.com/bonfire-networks/bonfire-app/issues/831).

## Potential for collaboration 

This experiment showcases Bonfire's extensibility and highlights its potential as a collaborative toolkit for organizations aiming to improve our digital environments and discourse. The modularity and ease of use of Bonfire make it an ideal playground for testing and implementing innovative design patterns in the open. 

We are eager to explore partnerships that can leverage Bonfire’s capabilities, furthering our collective quest of creating safer, more engaging, and enjoyable federated digital spaces.

