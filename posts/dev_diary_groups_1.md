---
title: Dev Diary Implementing federated groups in Bonfire
description: "As part of our commitment to empower communities with tools to foster coordination, we are thrilled to announce the development of federated groups in Bonfire."
date: 2023-06-08
tags: [groups, nlnet, extension]
image: /img/groups1.png
layout: layouts/post.njk
author: Bonfire Builders

--- 

As part of our commitment to empower communities with tools to foster coordination, meaningful communications and a greater sense of caring and belonging, we are thrilled to announce the development of federated groups in Bonfire. In this blog post, we'll delve into the work in progress of implementing the core features of groups and explore the potential benefits this feature will bring to the whole fediverse.

Group development is made possible by the Nlnet Entrust Grant. The grant will let us research and develop an MVP with an intial set of features to create and manage groups, as well as federate them with ohter platforms, such as mastodon and lemmy.

## The Power of Groups

Groups allow users to create context specific and cross-instances spaces, with their own rules and governance, that allows users to better organize their participation  across the fediverse. Current key Features and functionalities of bonfire groups include:

### Creation and Discovery

Bonfire users will have the ability to create their own groups, specifying the group's purpose, rules, and settings.  Each group will have its unique username, based on the instance it was created (e.g., @climatenews@zomia.zone). However, it will be discoverable (accordingly to their privacy settings) across the whole fediverse to allow users to find and join groups aligned with their interests, ensuring that everyone can find their niche in the fediverse.

![](https://i.imgur.com/PQIQXMh.png)



### Privacy

Group caretakers will have granular control over privacy settings, allowing them to determine whether a group is open, visible, or private. This flexibility ensures that users can participate in groups that suit their comfort levels and maintain control over their personal data. Private groups will only show their activities to members, while open or visible groups may allow guests to read group contents without the possibility to participate in conversations unless they become members.
![](https://i.imgur.com/KwTGMEb.png)

### Roles and Moderation

Group caretakers will have the ability to create and assign custom roles to other members, simplifying the management of groups. Members with appropriate permissions can identify and address flagged activities, invite other users, edit the group appearance and details, create and edit roles, publish announcements and so on. In the case a flagged activity or flagged user surpasses the scope of the group, moderators can always escalate the flag at the instance level, ensuring proper management and maintaining a healthy and respectful environment.

![](https://i.imgur.com/GE1cDgt.png)


To ensure the best possible user experience, we intend to launch an initial version on groups within one of our testing instances. This will enable us to gather valuable feedback from our community and engage in collaborative discussions to refine and enhance the platform as we progress.

In our upcoming post, we will delve into the details of our plans for federating groups, the technical challenges we're facing. Stay tuned 😎