---
title: Building Bonfire Native Apps with LiveView Native
description: "Welcome to the first post of our development diary for the Bonfire native app. In this series, we'll journey together through the entire process of designing and publishing Bonfire on the Apple App Store using LiveView Native."
date: 2024-09-27
tags: development
image: /img/lvn1.png
layout: layouts/post.njk
author: Bonfire Builders

---

## Introduction

Welcome to the first post of our development diary for the Bonfire native app. In this series, we'll journey together through the entire process of designing and publishing Bonfire on the Apple App Store using [LiveView Native (LVN)](https://native.live), an experimental framework that enables developers to build native applications using Elixir.

We're focusing on iOS first because the current LVN release targets the Apple ecosystem (iOS and macOS, but also watches, TV, and vision pro), with Android support coming next. At the time of writing, LVN is at version 0.3, so some approaches and solutions will evolve over time. We aim to provide the most accurate and up-to-date information but encourage readers to check the docs for details and contribute their knowledge along the way. 

## Why LiveView Native and Elixir 

[LiveView Native](https://github.com/liveview-native) is an exciting new framework developed by [DockYard](https://dockyard.com/) that extends Phoenix LiveView to native platforms, enabling real-time, interactive native applications with a unified codebase. [As they mentions in the announcement](https://dockyard.com/blog/2024/09/09/liveview-native-is-here):

> "Because we are leveraging the LiveView programming model, if you already have a LiveView application built you already have 75% of the work done to build a LiveView Native application. State management and event handling are shared between target destinations."

This approach is a perfect match for an open-source project like Bonfire. By building upon existing code and staying within the Elixir ecosystem, we can invest more time in strengthening our codebase without needing a traditional client-server API or splitting efforts across different languages, while still using each platform's unique native UI framework (e.g. SwiftUI and Android Jetpack) to deliver a state-of-the-art user experience. 

Through this dev diary, we aim to open up our development process and share our challenges and progress with the wider Elixir community. We'll share code, lessons learned, and materials starting from the very first mock-ups, inviting the community to jump in, provide feedback, and ask questions along the way.

We also plan to experiment with existing Figma plugins to convert designs to code (SwiftUI) and later attempt to convert that code into LVN's Elixir syntax. There will be a lot of trial and error, especially since we don't have prior experience with SwiftUI, but that's part of the experiment.

## The journey begins: designing initial mock-ups with Figma

Using [Figma](https://www.figma.com/), we've created initial mockups that lay the groundwork for Bonfire's user interface and experience. While these mock-ups are still in the early stages, they represent our vision for the app's basic look and feel. We won't include all of Bonfire's functionalities in the first release of the native app; instead, we'll adopt an incremental approach. We'll publish a basic app that lets users perform essential social networking features, then expand its complexity and give more control to users as we become more confident using the LVN framework and as it becomes more stable.

![Figma](/img/figma.png)

## Setting up the Figma environment

Apple recently published the [iOS and iPadOS 18 UI Kit](https://www.figma.com/community/file/1385659531316001292/ios-18-and-ipados-18) for Figma—a set of components and assets, including variables and Apple's color palette, to use in our Figma mockups. This is essential for properly designing iOS mockups following Apple's design guidelines.

Before creating our first mockup, we also downloaded the latest [SF fonts and symbols](https://developer.apple.com/sf-symbols/) from the Apple Developer website to use them across all views and components. We also downloaded the Figma desktop app to benefit from local fonts installed on our machines. 

With the standard iOS assets, icons, and fonts in place, we've created our first view using the iPhone 14 & 15 Pro frame as a reference.

Before building our mock-ups, we found it helpful to define layout grids. Layout grids help maintain order and structure, ensuring all elements are well-aligned and proportionate by defining both row and column configurations.

- **Columns:** A common grid column configuration for iPhone is 6 columns with a 16px gutter and margin. Set the columns to "Stretch" to automatically adapt to different screen sizes.
- **Rows:** We set the count to "Auto," type to "Top," height to 44 (the standard touch target size in iOS), and offset to 54 (to start the grid just below the status bar) with a gutter of 16 points.

This configuration results in a view like this:

![Figma](/img/grids.png)

## Bonfire's basic views

In our initial design, we've defined the following basic app views:

- **Main timeline**
- **Profile**
- **Search**
- **Notifications**
- **Discussion**
- **Compose form**

There's nothing too fancy; we've mostly used standard iOS assets where possible and Apple's color palette and typography for all the custom components we've created.

We've added a **Components** page listing all the component instances, which we clone to include in our views. We detach components from the main instance when custom edits are needed.

We're striving to keep things clean and maintain our Figma files in an organized and well-structured manner. We can't promise adherence to all best practices, as our experience with Figma is quite limited. However, we've loved using the auto layout feature to create more structured components, and we highly recommend building components using auto layout—it may seem daunting at first, but it's very easy to work with once you delve into it.

In the next post, we'll expand on these mockups, adding more details and including interactive flows, additional screens, and animations.

**Access the Figma document here:** [Bonfire iOS App Mockups](https://www.figma.com/design/BwQln11Fccd6alJeNe53EW/iOS?node-id=0-1&t=jq5jEWSN9gFUqOkP-1)

_By clicking the link, you can view the current designs, leave comments directly on the mockups, and provide suggestions to design a better Bonfire native app. Your feedback is invaluable, whether it's about aesthetics, user experience, or features you'd like to see._

## What's next?

In the upcoming posts, we'll dive into:

- **Enhancing the mock-ups:** Adding user flows, interactive components and animations, and more detailed screens - eventually publishing the Bonfire design library in Figma for anyone to use and build upon.
- **Translating designs to SwiftUI:** Once we're satisfied with the design, we'll start converting them into SwiftUI code, discussing challenges and learnings along the way.
- **Exploring LiveView Native:** Attempting to port SwiftUI code to LVN, including the hurdles and triumphs of using an evolving pre-1.0 framework to implement a federated social network's moving parts and design patterns.
- **Putting AI to work:** Experimenting with LLMs to automate parts of the translation from SwiftUI to LVN.
- **Publishing on the Apple App Store:** Documenting the process and requirements to publish the app.

## Join the journey

Beyond sharing our experience, we aim for Bonfire to become a place where both beginner and experienced developers can learn, build, experiment, and collaborate using the Elixir programming language to design open and federated social networks. We invite developers to dive into the framework, provide feedback, ask questions, and help push the boundaries of federated and open-source digital spaces.

Here's how you can get involved:

- **Feedback and suggestions:** Follow us on the [Fediverse](https://indieweb.social/@bonfire) and join our discussions on the [Elixir Forum](https://elixirforum.com/t/bonfire-networks-an-open-source-framework-for-building-federated-digital-spaces/65587), [#Bonfire room in Elixir Slack](https://app.slack.com/client/TMQ3PKXT9/C077S4K94CV) or our [Matrix space](https://matrix.to/#/%23bonfire-networks:matrix.org) to stay updated.
- **Collaborate:** If you're interested in contributing code or ideas, you can have a look at our ["good first issues"](https://github.com/bonfire-networks/bonfire-app/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen+label%3A%22Good+first+issue%22) or check out our [open bounties](https://github.com/bonfire-networks/bounties).
