---
title: "Dev Diary: Implementing federated groups in Bonfire"
description: "As part of our commitment to empower communities with tools to foster coordination, we are thrilled to announce the development of federated groups in Bonfire."
date: 2023-06-08
tags: [tech]
image: /img/groups1.png
layout: layouts/post.njk
author: Bonfire Builders

--- 

As part of our commitment to empower communities with tools to foster coordination, meaningful communications and a greater sense of caring and belonging, we are thrilled to announce the development of federated groups in Bonfire. In this blog post, we'll delve into the work in progress of implementing the core features of groups and explore the potential benefits this feature can bring to the whole fediverse.

> Group development is made possible by the NLnet Entrust Grant. The grant will let us research and develop an intial set of features to create and manage groups, as well as federate them with other platforms, such as [Guppe](https://a.gup.pe/), Mobilizon, Lemmy, and Mastodon.

## The Power of Groups

With groups users can create context-specific and cross-instances spaces, define their own rules and governance, to better organize their participation across the fediverse. Key features of groups in Bonfire so far include:

### Creation & Discovery

Bonfire users will have the ability to create their own groups, specifying the group's purpose, rules, and other settings. Each group will have a unique username, based on the instance where it was created (e.g., @climatenews@zomia.zone), and will be discoverable (depending on its privacy settings) across the whole fediverse to enable users to find and join groups aligned with their interests, ensuring that everyone can find or build their communities on the fediverse. 

![](https://i.imgur.com/PQIQXMh.png)


### Boundaries & Privacy

Group caretakers will have granular control over privacy settings, allowing them to determine whether a group is open, visible, or private. This flexibility ensures that users can participate in groups that suit their comfort levels and maintain control over their personal data. Private groups will only show their activities to members, while open or visible groups allow anyone to read group contents, and members can add posts or participate in conversations.
![](https://i.imgur.com/KwTGMEb.png)

### Roles & Moderation

Group caretakers will also have the ability to define custom roles and assign to certain members, thus simplifying and decentralising the management and moderation of groups. Members who are granted a relevant role may see and address flagged activities, invite other users, edit the group appearance and details, create and edit roles, or publish announcements, etc. 

When a user flags an activity or a member of the group, the group moderators are the first to be notified. This helps distribute the moderation workload and reduces the burden on instance moderators. If a flagged user breaks not only the group rules but also those of their respective instances, group moderators have the option to escalate the case to instance moderators, to help maintain a healthy and respectful environment across the fediverse. 

![](https://i.imgur.com/GE1cDgt.png)

To ensure the best possible user experience, we intend to launch an initial version on groups to be tested within our playground instance. This will enable us to gather valuable feedback from our community and engage in collaborative discussions to refine and enhance the platform as we progress.

In an upcoming post, we will delve into more details, including our ideas for federating groups and the technical challenges we're facing. Stay tuned 😎
