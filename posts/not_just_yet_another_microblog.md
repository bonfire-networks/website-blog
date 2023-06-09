---
title:  Not Just 'Yet Another Microblog'
description: We're now days away from the beta release of Bonfire, a federated app toolkit. When beta users get their hands on it, however, they might be confused wait, this looks like just another microblogging app! haven't we already got enough of those? 
date: 2022-06-18
tags: [product]
image: /img/1a.jpg
layout: layouts/post.njk
author: Bonfire Builders

---

We’re days away now from the beta release of our [Bonfire](/) federated app toolkit. So close to the launch, we thought it’d be a great opportunity to write to future beta users - especially those whose first impressions of it might be something along the lines of: *wait, this looks like just another microblogging app! haven't we already got enough of those?* 

Well, our reasoning is that everything is social. Political activities are social. Economic activities are social. Artistic activities are social. The way we work and coordinate activities... is social. That's why at the heart of Bonfire is a set of social components that underpins what is yet to come. 

## Bonfire is a toolkit for assembling federated apps
In a [previous post](https://bonfirenetworks.org/posts/let_thousand_bonfires_bloom/), we wrote:

> Social networking plays a critical role in our lives, and everyone should be able to decide how to define their online identities and how to interact with others, without an app imposing the boundaries of their experience in one way or another.

An app built with Bonfire is a preset configuration describing how a collection of extensions should plug and play together. And users can then add more extension to end up with an app that fits their specific needs. For example, imagine installing an extension that adds end-to-end encryption to the messaging functionality, or an extension that adds a calendar view showing any-date based information from other extensions (like the kanban app, or events federated from [Mobilizon](https://joinmobilizon.org/)). 

With this beta launch we're looking to test both the user experience of the social components of Bonfire, and also to ask for help (from the [ActivityPub](https://activitypub.rocks/) savvy people who are willing to set up test instances) to ensure Bonfire instances are first-class citizens of the Fediverse. By this we mean that federation works as expected with other networks such as [Mastodon](https://joinmastodon.org/), [Peertube](https://joinpeertube.org/), and [Pixelfed](https://pixelfed.org/). 

## Other apps
We have plenty of ideas and work-in-progress for Bonfire apps within the existing team and the wider network of people and organisations around us. For example: 

* [Kanban](https://bonfirenetworks.org/posts/bonfire_coordination/) - federated project coordination.
* [Zappa](https://bonfirenetworks.org/tags/zappa/) - empowering communities to tackle online misinformation.
* [Offers & needs](https://bonfirenetworks.org/posts/notes_on_neapoletan_meeting/#suggestions-for-next-extensions) - a federated way for people to share offers and requests, as one of the many apps that will use [ValueFlows](https://valueflo.ws), an open protocol for economic activities 

And we'd love to see many other apps emerge, for example:

* Collective decision-making - perhaps in a similar way to [Ukuvota](https://ukuvota.world/) or [Loomio](https://www.loomio.com/)
* Federated calendar & scheduling tool - to help plan and coordinate intitiatives across different communities and timezones. 

We're also excited to see ideas coming from the community, including designers or developers who may have the expertise to collaborate on making some of these ideas into reality! 

## Customisation
Everything in Bonfire is customisable at one level or another, a nice example is how the whole UI is themeable, but it goes much further than that. 

In general, we're getting into the habit where any hesitation or disagreement about a feature is used as an opportunity to add a *user setting* for it, meaning that the user is the one to decide how it should work. Developers and instance admins still hold power in setting the defaults, but ultimately it should be up to the people using Bonfire.

### "Forkability"
From the beginning, we've built Bonfire to be extremely customisable and configurable. One of the great things about Free Software is the ability to fork the project and take it in your own direction. However, a fork of a big complex app is a lot of work to maintain by one person or a small group, let alone someone who isn't very technical (or not experienced in the particular tech stack).

By separating the code in dozens of different extensions (each in their own git repository), the maintainance burden is greatly reduced. By putting data models, backend functionality and user interfaces in separate extensions, it’s easier to, for example, fork an UI extension to customise the experience (or create a completely different one) while retaining the same functionality.

## Next steps
We couldn't be more excited about the first release of Bonfire and we hope it can truly revolutionise the way online communities are formed and maintained. If you’re interested in helping us test the upcoming beta version of Bonfire, please add your email address below and we’ll get back to you very soon. 