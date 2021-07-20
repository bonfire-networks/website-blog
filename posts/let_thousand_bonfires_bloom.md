---
title: Let a thousand bonfires bloom
description: Dopamine and attention manipulation are not inherent properties of a social network. It is time to reconsider some fundamental questions.
date: 2021-07-20
tags: [flavour, nlnet, valueflows]
image: /img/flowers.png
layout: layouts/post.njk
---

### tl;dr
In March 2021, the Bonfire project was awarded a ["Next Generation Search & Discovery" grant](https://nlnet.nl/discovery/) from NLNet Foundation, and since then the team has been working on a series of Bonfire extensions to help create the next generation of federated software. 

This is the second of a series of posts discussing the development process, work coordination strategies and the challenges we are currently facing.

The first post was about [creating a coordination tool.](/posts/bonfire_coordination/). 

The second [funded milestone](https://github.com/bonfire-networks/bonfire-app/milestone/10) was about creating themeable User Interface modules.


## Why building themeable apps ?

Dopamine and attention manipulation are not inherent properties of a social network. They can be replaced by healthier behaviours and other ways of connecting humans and exploring collective intelligence. 

It is time to reconsider questions like:
- What should appear in my feed?
- Are number of likes and followers important to me?
- What do I want to be notified about?
- How do we want to take decisions within our community?
- Does the UX reflects our identity and priorities?

Of course the Bonfire team have opinions about all of this. But we think our opinions are valid mostly for ourselves, and we do not want to impose our views upon others. There is a diversity of valid answers worth exploring.

Social networking plays a critical role in our lives, and everyone should be able to decide how to define their online identities and how to interact with others, without an app imposing the boundaries of their experience in one way or another. 


## How we're building it

A Bonfire [app (or flavour)](/apps/) is basically a set of configurations that describes how a bunch of [extensions](/extensions/) should plug and play together.

Extensions can include new sections in an existing page (e.g. a widget that shows one's most used hashtags on a user's profile page), whole new pages (e.g. a map page that shows me where my friends are located). They can use existing data from any extension (aggregating, transforming and filtering it to create meaningful and new information for the user), or new sets of information stored in the database.

Imagine installing an identity extension that enables every user to define how to represent themselves online with fined-grained controls. 

Or installing the [ValueFlows](/extensions/valueFlows.html) extension, which can give the instance economic superpowers: users can now record the production or transfer of any kind of physical or non-tangible resource, keep track of inventories, assign tasks, record work done, and reward the community based on a set of parameters previously defined. 

Each community may need the ValueFlows extension for very different purposes. One instance may only need a [shared todo list](/posts/bonfire_coordination/), and the whole economic network idea might be overwhelming for them. A mutual aid network on the other hand, may be looking to define and keep track of different types of economic resources and activities within their community, and would need a more detailed dashboard and set of pages, widgets and relationships between the data produced to deal with such level of complexity. 

That's how modularity really makes a difference: the ValueFlows extension does not impose a user experience or user interface. Based on each specific use case, users can pick (or create) a compatible UI extension that better fits their exact needs. Using the ValueFlows example, it means that so far we have more than 4 extensions: with data schemas and application logic in [bonfire_valueflows](/extensions/valueFlows.html), reusable/customisable UI components in [bonfire_ui_valueflows](/extensions/ui_valueflows.html), todo/coordination UI in [bonfire_ui_coordination](/extensions/ui_coordination.html), mutual aid UI in [bonfire_breadpub](/extensions/breadpub.html)...

## Federation will be a mess

Yes, and it will be fun!

Each instance will likely have to deal with different and sometime unknown data types that will come through federation from users of other instances.

Imagine an extension for book lovers, used to catalog, recommend, and review books. It will likely have a specific way to represent such activities in feeds with a set of actions to perform over them (add to reading list, review, reply...).

Other instances may not have that extension installed, so they will have to decide how to handle unknown activities, if and how display them (this is because on the "fediverse", users from different instances running different software can all follow each other).

An instance (or individual user) could choose to display the unknown activities, using a preview widget contributed by the authors of the book lovers extension (and added to a shared Bonfire extension used by all instance, such as [bonfire_social](/extensions/social.html)), or deal with unknown activities using a default component which shows only the main information (such as a title, summary and link) formatted in a standard way, or just not displaying extra activities in feeds.

That's quite a new usability challenge, which seems inevitable when dealing with the fediverse and open networks in general, and one we are embracing as a way of welcoming and encouraging diversity and plurality - rather than hiding them away for the sake of "clean UX".
