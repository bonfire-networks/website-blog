<div role="alert" class="alert alert-info text-sm">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span> This document is a work in progress. We invite you to share feedback or contributions.</span>
</div>

### 😰&nbsp; Tired of social networks that prioritize profit over people?

Today's digital landscape, dominated by a few major platforms, has led to social polarization and fragmentation, the rise of extremist ideologies, and rampant disinformation and harassment. It's time for a change. 

Beyond being a social network, Bonfire is a <em>toolkit</em> for creating digital spaces that empower communities. Designed with autonomy, safety, and meaningful interactions in mind, Bonfire enables communities to take control of their data as well as the features and design of their digital environment, free from algorithmic bias and corporate oversight. 

**🌈&nbsp; Embrace the power of federation**

Imagine a digital landscape where your community can exchange ideas, collaborate, and grow alongside others, not limited by your choice of app or platform, all while maintaining your autonomy and identity. With Bonfire, you're tapping into a vast, interconnected federation of communities (the "fediverse"), enriching your experience with diverse interactions, perspectives and possibilities.  
 
 🌟&nbsp; Imagine a digital space where...


 <div class="mx-auto grid max-w-screen-lg mt-8 grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
  <div class="card border-base-content/30 card-compact border text-left">
    <div class="card-body">
      <div class="flex text-base-content/100 text-base font-bold items-center gap-2">
        Communities set their own rules and co-create the features they need
      </div>
    </div> 
  </div>

  <div class="card border-base-content/30 card-compact border text-left">
    <div class="card-body">
      <div class="flex text-base-content/100 text-base font-bold items-center gap-2">
            Data privacy and autonomy are the norm, not the exception
      </div> 
    </div> 
  </div>

  <div class="card border-base-content/30 card-compact border text-left">
    <div class="card-body">
      <div class="flex text-base-content/100 text-base font-bold items-center gap-2">
      Diverse voices can flourish in a safe environment
      </div> 
    </div> 
  </div>


</div>



## 🤔&nbsp; Building with Bonfire

Bonfire is a framework designed for community-driven experimentation in creating and governing digital spaces. It goes beyond the usual platform mindset, encouraging communities to use its modular architecture for innovation, customization, and reimagined digital interaction.

The goal is that instead of users having to conform to digital ecosystems they can actively shape and build them. With Bonfire, communities write their own rules, constructing digital spaces that cater to their unique needs.

As we explore how to build with Bonfire, it's essential to understand some fundamental concepts that form the backbone of its digital ecosystem...

## ❓ Foundational concepts and glossary

<div class="flex flex-col gap-2">
<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div class="collapse-title text-xl font-medium">
    Fediverse
  </div>
  <div class="collapse-content"> 
    <p>The fediverse is a collective term for the network of interconnected federated <em>instances</em>, each powered by various social networking apps (such as Mastodon, Peertube, or Bonfire). It represents an ecosystem of interconnected yet independent platforms that communicate with each other using open protocols.</p>
  </div>
</div>
<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Instance
  </div>
  <div class="collapse-content"> 
    <p>An instance is a specific installation of a federated platform. Each instance can be independently operated and customized, running the software and features of its choice, with its own rules and team of <em>admins</em> and <em>moderators</em>. Instances are the building blocks of the <em>fediverse</em>.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Group
  </div>
  <div class="collapse-content"> 
    <p>In Bonfire, users can create groups that span across different instances. They can be closed groups reserved for members of an organisation or collective, or open to all who share common interests or goals. Groups are often self-governing within the framework of the larger ecosystem, such as having their own rules and moderators.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Community
  </div>
  <div class="collapse-content"> 
    <p>A community is more of social concept than a technical one, and could refer to the users associated with a particular instance or within a specific group that span across different instances, or to the fediverse at large.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Code of Conduct
  </div>
  <div class="collapse-content"> 
    <p>A Code of Conduct is a set of guidelines and rules that govern behaviour and interactions within a community. It serves to establish expected standards of conduct, helping to create a safe and civil environment for all members.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Admin
  </div>
  <div class="collapse-content"> 
    <p>Admins are responsible for the overall maintenance of an instance, ensuring its smooth operation and security. Especially when a new instance is being set up, the user with admin role can configure the instance, choose the default <em>settings</em>, and define and assign roles (such as promoting more admins and establishing a <em>moderator</em> team).</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Moderator
  </div>
  <div class="collapse-content"> 
    <p>Moderators are responsible for facilitating day-to-day interactions within a community. They enforce the Code of Conduct and address issues among users to maintain a healthy and engaging environment. For example they may respond to a flagged post by trying to resolve a misunderstanding, or deleting an offending comment, or blocking a troll account. </p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Settings
  </div>
  <div class="collapse-content"> 
    <p>Settings in Bonfire offer users the flexibility to customize their experience, from privacy controls such as whether their posts appear in search engines to appearance such as colors or fonts. While administrators can set defaults for each instance, individual users have the freedom to override these settings, ensuring a personalized and adaptable experience.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Extension
  </div>
  <div class="collapse-content"> 
    <p>An extension (also commonly called a plugin or add-on) in Bonfire is a software component that can be installed on an instance to enhance or introduce new functionality. These allow for customization and expansion of the platform's capabilities according to the specific needs of a community. 
    <p>In Bonfire extensions are not reserved for bonus features contributed by third parties (as is typically the case for many platforms), but every piece of the core software is packaged in an extension so it can easily be <em>forked</em> or swapped out for another extension with a different design or value proposition. 
    <p>Extensions installed on an instance can be disabled at any time by an admin, or even by an individual user (while remaining active for other users on the instance).</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Fork
  </div>
  <div class="collapse-content"> 
    <p>In software engineering, a fork happens when developers take a copy of source code from one piece of software and start independent development on it, creating a distinct and separate piece of software. </p>
    <p>Bonfire is composed of numerous small software components (<em>extensions</em>), as opposed to the more common approach of having just one or two large software packages. This structure enables forking of a specific piece without the need to maintain one's own version of the entire software package.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Circle
  </div>
  <div class="collapse-content"> 
    <p>Circles are a way to manage and understand various relationships in a user's network. They can represent the different layers of intimacy, trust, and context-specific connections one might have with others. Circles enable users to categorize their relationships based on factors like closeness or shared interests, aiding in building and maintaining stronger, more meaningful connections. This tool is especially useful for organizing contacts according to different areas of one's life, enhancing the personalization and relevance of interactions within the Bonfire network.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Role
  </div>
  <div class="collapse-content"> 
    <p>Roles in Bonfire are a way to define a set of permissions, that can allow users to perform specific actions. Roles play a crucial role in defining the scope of engagement and participation. 
    <p>By assigning roles, users can establish specific permissions and restrictions, ensuring that users or circles have appropriate levels of access and abilities based on their relationship with you or the purpose of the boundary or nature of the content on which they're applied.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-2" /> 
  <div class="collapse-title text-xl font-medium">
    Boundary
  </div>
  <div class="collapse-content"> 
    <p>By assigning roles to users and/or circles, you define a boundary (as an example, everyone can read but only members of my team can comment).</p>
    
    <p>Users can define preset boundaries, which can include several users and circles each with their own roles assigned, which can be re-used when making a post or to set the permissions of other activities or spaces (such as <em>groups</em>).</p>

    <p>The boundaries of a specific post can also be defined or modified on the fly, before or after publishing it. 

  </div>
</div>



</div>



## ⚗️&nbsp; A framework for experimenting

Every Bonfire instance can be tailored to the unique needs of its community. Choose from a variety of extensions, and configure the extensive settings to create your own flavour of Bonfire. This flexibility allows each community to create a digital space that truly reflects its character, needs, and goals.

However, creating new features from scratch or modifying existing ones does require diving into the Bonfire codebase. Thankfully, the code is open source and AGPL licensed. This means that any development becomes available to all, fostering a collaborative environment where communities can either take it upon themselves to build upon the framework or coordinate with others to fund and co-create specific features.

But technical skills are not required to design new digital spaces. Social networks should be a common good where everyone with skin in the game can voice their needs and have an impact on how to shape their digital spaces. 


## 🔥&nbsp; Bonfire case studies

While Bonfire is still in its early days, it's already inspiring communities and enthusiasts to design their ideal digital spaces. Here are a few examples...


### Open Science

<img src="/img/hwd1.png" class="object-cover rounded-lg mx-auto w-full" />

One notable example is Niboe, a scientific community of researchers and activists. They approached Bonfire with a vision to create a digital space focused on scientific divulgation and collaboration.
Leveraging Bonfire's extensible framework, they're designing a platform that facilitates streamlined academic processes and collaborative research. Key features include the integration of ORCID (professional credentials for login), a fine-grained way of sharing and classifying research papers, and an open and more transparent peer-review system. Their goals include both boosting productivity and fostering open and transparent scientific communication and collaboration. <a href="/open_science" target="blank">Read more about the case study</a>

### Learners community

<img src="/img/hwd2.png" class="object-cover rounded-lg mx-auto w-full" />

Bonfire opens up exciting possibilities for learning communities. Imagine a space where learners collaboratively assemble, curate and rate study materials, and engage in discussions and collaborative exercises. Bonfire can enable the formation of thematic collections containing links, documents, and various media, all classified by themes, difficulty levels, and more. Specific groups can be created for study and practice, encouraging peer-to-peer learning and experimentation. Furthermore, the integration of <em>open badges</em> in Bonfire could help users have their learning and achievements be recognised.

### Fablabs Network

<img src="/img/hwd3.png" class="object-cover rounded-lg mx-auto w-full" />

Students at the Milwaukee School of Engineering used Bonfire to experiment with collaboration within the network of Fablabs in their area.
They envisioned a digital space tailored for inventory tracking across different Fablabs, enabling resource exchange and promoting collaboration. They prototyped a Bonfire extension where each Fablab could manage its inventory, making it easier for users to share resources. Additionally, they aimed to implement features for collaborative task management, enhancing the productivity and interconnectedness of the Fablabs network.


---

But most of the time you don't want to create a whole new platform from scratch, instead you may want to add a new feature to your Bonfire instance, modify an existing feature, or tweak the settings in new ways...

<div class="flex flex-col gap-2">
<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div class="collapse-title text-xl font-medium">
    Design and build a new feature
  </div>
  <div class="collapse-content"> 
    <p>If there's a functionality you feel is missing from Bonfire, you can introduce a new feature. This could be anything from a unique tool for community engagement to a specialized feature for content sharing. </p>
     <p>For instance, you might envision a feature that facilitates collaborative storytelling or a new method for organizing community-driven projects. The goal here is to think creatively and propose features that bring fresh dynamics and capabilities to social networking which can empower communities.</p>
    <p>This would typically be a new <em>extension</em> or could be proposed as an addition to an existing one.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Change, add, or remove something in an existing feature
  </div>
  <div class="collapse-content"> 
    <p>If there's an existing feature in Bonfire that almost meets your needs but requires tweaking, you can make or propose modifications. For example, you might want to add an extra layer of privacy to a messaging feature, or hide certain elements from a community dashboard that aren't relevant to your group. This is your chance to refine Bonfire’s features to better align with your community's specific requirements.</p>
    <p>This would typically be proposed as a modification to an existing <em>extension</em>, or the extension could be <em>forked</em> (copied), in which case if the changes are useful for the wider ecosystem it can be published as an extension under a new name.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Find a new way to use a feature
  </div>
  <div class="collapse-content"> 
    <p>Sometimes, innovation lies not in changing the feature itself, but in altering how it is used. For instance, a feature originally designed for event planning could be repurposed for organising volunteer efforts in a crisis response situation. This is all about creative reimagining of existing tools for new, unexpected uses.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Improve the user interface or user experience of a feature
  </div>
  <div class="collapse-content"> 
    <p>User interfaces (UI) and user experience (UX) play a crucial role in how interactively and comfortably users engage with their digital space. If you believe a feature's UI could be more intuitive, accessible, or visually appealing, or you envision a different user journey to perform the same action, you can suggest or directly implement those changes. Perhaps it's as simple as increasing font size for better readability or restructuring a page layout for fostering specific outcomes.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Disable or remove an existing feature
  </div>
  <div class="collapse-content"> 
    <p>In some cases, less is more. If you feel a certain feature is redundant, not useful, or even counterproductive for your community, proposing its removal (or the addition of a <em>setting</em> so it can be enabled/disabled as needed) can streamline and improve the user experience. The key here is to explain why removing this feature will benefit the overall functionality and usability of the platform.</p>
  </div>
</div>

<div class="collapse collapse-arrow border border-base-content/20">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Make something configurable
  </div>
  <div class="collapse-content"> 
    <p>This involves introducing new options or preferences in Bonfire's <em>settings</em> to give users more control over how they use Bonfire. For instance, adding a setting that enables users to customize the frequency of notifications or to choose different fonts for their interface can enhance personalisation and user satisfaction. This is about empowering users with more choices to tailor their experience on the platform.</p>
  </div>
</div>


</div>



## 📢&nbsp; Participating in the Bonfire ecosystem
Effectively sharing your insights and discoveries with the Bonfire community is crucial for the collaborative development and improvement of the ecosystem. Here are steps to ensure your findings reach the right audience and have the desired impact:

### Identify the appropriate channel
- <a href="https://campground.bonfire.cafe" target="blank">Campground instance</a>: For broad discussions or feedback, our test instance of Bonfire is ideal. It allows for open dialogues with a wide range of users and the Bonfire designers/developers.
- <a href="https://github.com/bonfire-networks/bonfire-app/issues" target="blank">Issue Tracker</a>: If your finding is related to a bug or a specific technical issue, using the project's issue tracker is the most direct way to report it.
- Mention or message <a href="https://indieweb.social/@bonfire" target="blank">@bonfire@indieweb.social</a> on the fediverse or email us at *team@bonfire.cafe* to chat and exchange ideas with the team 

### Share your findings or proposals
- **Be concise:** Please describe them clearly and concisely, and avoid jargon to ensure comprehensibility by all community members.
- **Provide context:** Explain the circumstances or actions that led to you to this point. Context can help others understand its relevance and importance.
- **Suggest implications or solutions:** If applicable, suggest what this may imply for the Bonfire ecosystem or propose potential solutions or improvements.

### Engage in discussion
- **Be open to feedback:** Community feedback is invaluable. Please keep <a href="/conduct/">our code of conduct</a> in mind and engage constructively.
- **Collaborate on solutions:** Please be open to collaborating with other community members.

### Follow up
- **Track progress:** Keep an eye on things. This could involve monitoring issue resolution or staying updated with community discussions.
- **Update the community:** If you discover additional information or if the situation evolves, please update the community. Continuous communication ensures everyone is informed.
- **Create documentation:** Please consider writing documentation or creating guides or tutorials. This can be beneficial for future reference and for new community members.

This isn't just about contributing to Bonfire — but pouring our hearts into a passionate community-driven endeavour. Remember, the strength of our federated network comes from the ties we forge, so let's keep the fire burning!  