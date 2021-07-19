---
title: Let's thousand bonfires bloom
description: In March 2021, the Bonfire project was fortunate enough to be chosen for a “Next Generation Search & Discovery” grant from NLNet Foundation...
date: 2021-07-20
tags: [flavour, coordination, valueflows]
image: /img/flowers.png
layout: layouts/post.njk
---

### tl;dr
In March 2021, the Bonfire project was fortunate enough to be chosen for a “Next Generation Search & Discovery” grant from NLNet Foundation, and since then the team has been working on a series of Bonfire extensions to help create the next generation of content on the fediverse.

This is the second of a series of posts discussing the development process, work coordination strategies and the challenges we are currently facing.

[Read the first post here](https://bonfirenetworks.org/posts/bonfire_coordination/)

[One of the funded milestones](https://github.com/bonfire-networks/bonfire-app/milestone/10) was about creating themeable User Interface modules.


## Why building themeable apps ?

Dopamine and attention economies are not inherent properties of a social network. They can be replaced by healthier behaviours and other ways of connecting humans and exploring collective intelligence.

1 - What is relevant to appear in your feed?

2 - Are number of likes and followers important to you?

3 - What do you want to be notified about?

4 - Does the UX reflects your spirit and identity?

5 - How do you want to take decisions within your community?

We do have opinions about all of this. But we also think that our opinions are valid mostly for ourselves and that there are a plurality of valid answers worth of building and exploring.
We do not want to impose our views upon the others. Social networking plays a critical role in our life, and each of us should be able to decide how to define their online identities and how to interact with others, without a software imposing the experience and the boundaries in one way or another.


## How we're building it

A Bonfire app is basically a configuration that describes how a bunch of extensions should plug and play together.

Extensions can include new sections in an existing page (a widget that shows the user most used hashtags, displayed in the user profile page), whole new pages (a Map page that shows where my friends are located) or new set of data stored in the database.
Such widgets can make use of existing data: aggregating, transforming and filtering them to create meaningful and new information for the user. 
But they can also be backed by new data.
Imagine installing an identity extension that would let the user define how to represent themselves online, according to parameter defined by the user itself.
Or installing the [bonfire_valueflows](https://github.com/bonfire-networks/bonfire_valueflows) extension. 
This module would give the instance economic superpower: letting the users transfer any kind of physical or non-physical resources among them, keeping track of inventories and effort done, assign tasks and reward the community based on a set of parameters previously defined. 
Based on each instance, a community may need the bonfire_valueflows extenstion for totally different purposes. 
An instance may only need a todo list, and the whole economic network idea would definitively be overwhelming for them.
A mutual aid network on the other side, they are looking for a way to define and keep track of different types of economic activities within their community. They would need a more detailed dashboard and set of pages, widgets and relationships between the data produced to deal with such level of complexity. 

That's how modularity really makes a difference: the valueflow extension does not impose also the user experience and the user interface.
Based on each specific usecase infact, users can pick (or create) a compatible UI extension that better fit their exact needs.
From a todo list, to a trello clone and [beyond](https://write.as/economic-networks/how-to-model-resource-flows-in-networks).
And federation is just one extension away, with [Bonfire ActivityPub](https://github.com/bonfire-networks/activity_pub).

## Federation will be a mess
Yes, and it will be fun!
Each instance will likely have to deal with different and sometime unknown data types to federate and properly render within their feeds. 
Imagine an instance that let users catalog and review books and anime.
They will likely have their default way to represent such activities in feeds with a set of actions to perform over them (bookmark, review, reply, ...).
Other instances mayb not have that extension installed, but they will have to decide anyway how to handle unknown activities, if and how represent them (within the fediverse, users from different instances can follow each other anyway, indipendently from the activities they perform over their own instances). 
An instance can decide to render the activities, using the preview made available by the extension itself and added to a common activity_preview extension, or it may decide to deal with unknown activities using a default component, showing only the main information formatted in a standard way,  or just not allowing extra activities to show in feeds.

That's quite a new usability challenge, that is inevitable when dealing with the fediverse and open networks more in general, a way of welcoming and embrace diversity and plurality - rather than cancel or hide them away.
