---
title: Pioneering Safer Social Networks - Bonfire’s Recent Experiment with Prosocial Design Patterns 
description: In testing the Bonfire framework's modularity, our goal was to fully understand the workflow involved in studying, designing, implementing, and shipping a Bonfire extension from scratch. We chose to implement a design pattern from the Prosocial Design Network, a community dedicated to pioneering safer social networks.
date: 2024-01-26
tags: community
image: /img/labelbg.png
layout: layouts/post.njk
author: Bonfire Builders

---

## Introduction 

In testing the Bonfire framework's modularity, our goal was to fully understand the workflow involved in studying, designing, implementing, and shipping a Bonfire extension from scratch. We chose to implement a design pattern from the [Prosocial Design Network](https://www.prosocialdesign.org/), a community dedicated to pioneering safer social networks.

The results have been deeply encouraging. We successfully prototyped the researched pattern, packaged it as [a distinct Bonfire extension](https://github.com/bonfire-networks/bonfire_label), and integrated it into the Bonfire codebase within a matter of hours. This not only tested Bonfire's modularity but also aimed to initiate closer collaboration with researchers, foundations, and activists who are committed to designing and utilizing safer digital spaces.

Through Bonfire, we can challenge the limitations of current digital space platforms, which are often constrained by dark patterns, closed or profit-driven development. By partnering with communities and foundations whose mission is to improve digital spaces, and leveraging the open and interoperable nature of the Fediverse, Bonfire can significantly reduce development time and foster a more collaborative and open experimentation on building better digital spaces in such crucial times.

## Experiment Overview 

We chose to implement a feature allowing moderators to add content labels to posts, following the prosocial design pattern "[Label Misleading Content & Add Links to Reliable Related Content](https://www.prosocialdesign.org/library/label-misleading-content-add-links-to-reliable-related-content)". 

This pattern aims to reduce the spread of misinformation by enabling the provision of accurate information and sources alongside potentially misleading posts.


In the following example, a user publishes a fake news.

<img src="/img/posttolabel.png">


Our development process began with the creation of necessary components. We integrated a button in the activity dropdown menu to allow moderators to add a label to a post. Initially, the button is visible only to moderators, aligning with the pattern’s purpose. However, by utilizing custom roles, we plan to extend this functionality, optionally enabling dedicated users with right permissions to review and label content, thereby easing the load on moderators.

<img src="/img/labeltoaction.png">

Moderators can add labels and content through a modal. As outlined in the design pattern, we provided three label options: *“Stay Informed”*, *“Get the Latest”*, and *“Misleading”*. Additionally, a textarea is available for adding broader context, and up to three links can be included to offer reliable sources.

<img src="/img/labelmodal.png">

Once published, these notes become visible to all users. In this prototype, we focused on local users since moderators are tied to their specific instances, and Codes of Conduct and policies can vary. In the future, we may explore extending this feature to enable federated moderator teams, which would operate across multiple instances. This would allow users to choose or switch between different moderator teams, enhancing the flexibility and reach of this tool.

<img src="/img/labelled.png">

Incorporating the extension into Bonfire was straightforward. We simply added the GitHub repository to the selected flavor’s deps.git file (in our case, Classic). Relevant components were then integrated into the appropriate files (activity_live.ex and more_actions.ex). This design also facilitates easy management of the extension, as it can be enabled or disabled directly from the Bonfire settings.

## Results and Insights 
We are extremely pleased with the outcomes of our experiment and the opportunity to benefit from the design pattern libraries and researches conducted by organizations like [NewPublic](https://newpublic.org/), [Integrity Institute](https://integrityinstitute.org/), [Open Future](https://openfuture.eu/), and the [Prosocial Design Network](https://www.prosocialdesign.org/) and more we are not aware of.

While implementing the current design pattern, we encountered several thought-provoking questions that delve deeper into the nuances of the solution:
<ul>
    <li>How can users contribute feedback to the notes added by moderators?</li>
	<li>How can different moderators collaborate effectively on creating or improving these notes?</li>
	<li>How notes can efficiently work in a federated environment?</li>
	<li>What steps should be taken if a note is found to be inaccurate or misleading?</li>
</ul>
Although we have potential answers to these questions, we believe it would be highly beneficial to incorporate such considerations into the design pattern itself. This would provide a more comprehensive and holistic approach to managing such feature.

However, there is still some work to be done before we can include this feature in our [campground instance](https://campground.bonfire.cafe) and testing it live with our community. 

Key among these tasks is the ability to delete an existing content label and to create a dedicated page for moderators where all labeled contents can be listed and reviewed.

## Potential for Collaboration 

Our recent experiment with Bonfire not only showcases the platform's flexibility but also highlights its potential as a collaborative toolkit for organizations aiming to enhance digital spaces. The modularity and ease of use of Bonfire make it an ideal partner for testing and implementing innovative design patterns in the open. 

We are eager to explore partnerships that can leverage Bonfire’s capabilities, furthering our collective quest for safer, more engaging, and fun federated digital spaces.

