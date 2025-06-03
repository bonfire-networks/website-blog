### Summary

Open Science Network (OSN) will develop a breakthrough federated social infrastructure connecting researchers directly with FAIR data objects across open science infrastructures—including archives, publishers, data warehouses, software repositories, and research information providers. OSN enhances traditional repository experiences by embedding social interaction within scientific workflows, creating a virtuous cycle where discussions become properly attributed, machine-readable FAIR objects with persistent identifiers. 

Unlike isolated commercial platforms, OSN leverages Bonfire' extensible federated architecture to ensure researchers and their organizations maintain complete digital sovereignty while creating comprehensive provenance chains between discussions and referenced data. By transforming informal knowledge exchange that typically disappears in email threads or closed platforms into an identified and searchable part of the scientific record, OSN addresses critical gaps in the current research ecosystem.

### Project Consortium
- Bonfire (Project Coordinator)
- Université de Lorraine
- eLife/sciety
- Physikalisch-Technische Bundesanstalt
- HCommons (Michigan State University)
- UNIF

### **Key Challenges** 

Current scientific infrastructure faces critical barriers measurably impeding research impact: 

* **Engagement Crisis**:   
  Repository silos experience 69% fewer citations over 5 years compared to social platforms, with academic repositories failing to generate interaction metrics needed for discovery [^2];  
* **Commercial Capture**:   
  Academic networks like ResearchGate dominate with 54.3% researcher participation while truly open science platforms attract only 15%, creating walled gardens that extract value while limiting FAIR principles adoption[^3] ;  
* **Lost Discourse and Knowledge Fragmentation** :   
  Valuable scientific dialogue occurs in scattered, non-FAIR environments where domain silos create "significant barriers to interdisciplinarity"[^4], limiting cross-domain discovery with one study revealing 86% of medical research data is never reused after publication[^5].

### **Proposed Solution** 

Open Science Network implements a federated social layer through established W3C standard protocols ([ActivityPub](https://www.w3.org/TR/activitypub/)[^6] and [OAI-PMH](https://www.openarchives.org/pmh/)[^7]). This server-to-server federation enables real-time interconnection between research actors, institutions, and outputs, all properly identified through ORCID, ROR, and DOI persistent identifiers. Authenticated interactions become citable and searchable FAIR objects with complete attribution chains and machine-readable licensing. Through ORCID/OpenAlex API integration, the platform connects researchers' social interactions with their professional profiles, creating an open alternative to platforms like ResearchGate and Academia.edu without compromising data ownership or research integrity.

Our system strategically focuses on developing: 

* **Repository Connector Framework**: Specialized connectors for Dataverse and Knowledge Commons Works with modular design for future expansion to additional research infrastructures   
* **Scientific Federation Protocol**: Extending ActivityPub with formal JSON-LD scientific metadata representations   
* **FAIR Discussion Engine**: Automating transformations of scientific discussions into FAIR digital objects   
* **Federated Research Groups**: Domain-specific collaborative spaces with granular permission controls   
* **Software Preservation Integration**: Bidirectional connections with Software Heritage for scientific software preservation   
* **Cross-Repository Knowledge Graph**: Citation networks spanning multiple repositories to discover connections between datasets, publications, software, and discussions

### **Scientific Impact** 

Open Science Network will transform research practices through a rigorous co-design process with our diverse pilot partners—representing key stakeholders across the scientific production, distribution, preservation, and consumption ecosystem. This consortium-driven approach ensures OSN addresses real-world needs while integrating all angles of the scientific workflow.

Our consortium's strength lies in bringing together complementary expertise from consolidated scientific communities, data repositories,  universities, and open journals, creating a comprehensive solution that will deliver four measurable impacts: 

* Substantial increase in cross-domain dataset discovery and reuse through social connections, measured against established baselines in partner institutions  
* Creation of a significant corpus of new FAIR discussion objects within the first year, each with complete provenance chains linking to source materials  
* Measurable reduction in knowledge loss by surfacing pre-publication insights that typically disappear in private channels  
* Enhanced reproducibility through direct connections between discussions, papers, data, and code

## **Scientific and Innovation Objectives**

Open Science Network (OSN) will establish a federated, FAIR, open-source infrastructure for scientific collaboration that transforms social interactions into formal research outputs. Through three strategic pilot deployments, we will validate this approach across diverse institutional contexts.

Our five measurable scientific objectives are:

**1\. Create an Interoperable Federation Layer**

We will connect scientific open research infrastructures through standardized APIs and protocols, enabling researchers to interact with FAIR objects across institutional boundaries while maintaining digital sovereignty. Our implementation will include repository-specific connectors for:

* **CERN's InvenioRDM[^8]**: Utilizing REST APIs and JSON-LD schemas  
  * **Dataverse[^9]**: Leveraging OAI-PMH and native REST APIs with DataCite metadata  
  * **Zenodo[^10]**: Integrating with its established API ecosystem  
  * **DocMaps[^11]**: Integrating with its established API ecosystem  
  * **HAL.science[^12]** and any others that offer standards-based interoperability or APIs can be added in the future

### **2\. Transform Scientific Discourse into FAIR Data Objects**

We will develop concrete methods to encode discussions as machine-readable, citable research outputs. Our FAIR Discussion Engine will:

* Assign persistent identifiers (DOIs with DataCite integration)  
  * Apply standardized machine-readable licenses (such as CC-BY 4.0)  
  * Preserve complete provenance chains linking discussions to source data (W3C PROV-O[^13])  
  * Implement review process transparency and contribution attribution using DocMaps protocol  
  * Generate structured metadata compatible with OpenAIRE Guidelines 4.0  
  * Ensure metadata remains accessible even if data becomes unavailable  
  * Support incremental FAIRness with feedback metrics for improvement

### **3\. Extend ActivityPub Federation Protocols for Scientific Collaboration**

We will implement or write new Federation Extension Proposals (FEPs) to handle:

* Scientific metadata exchange with FAIR vocabularies (DataCite, Dublin Core)  
  * Digital object persistent identifier integration (DOI, ORCID, ROR)  
  * Typed links for scientific relationships and activities (cites, reviews, reproduces, etc.)  
  * Permission models for pre-publication discussions supporting models like the *Interactive Public Peer Review* by Copernicus Publications.

### **4\. Build and Pilot a Community-Governed Alternative to Commercial Platforms**

We will establish clear governance mechanisms including:

* Federation Governance Framework with explicit decision-making processes  
* Cross-instance moderation protocols respecting institutional autonomy  
* Transparent, documented code of conduct with reporting and appeals processes  
* Integration with existing Bonfire extensions for moderation, article previews and document handling  
* Co-design process with researchers from pilot partners and initiatives like Niboe collective and SciBeh

Our project will be validated through several strategic pilots:

1. **Michigan State University**: Leveraging their vibrant Knowledge Commons**[^14]** community (50,000+ researchers) and integrating with "KC Works" repository (powered by InvenioRDM)  
2. **Physikalisch-Technische Bundesanstalt[^15]**:  Germany's national metrology institute will pilot specialized scientific discussions around measurement standards and calibration datasets, demonstrating our platform's adaptability to rigorous data quality requirements and metrology research workflows  
3. **UNIF[^16]:** The Paris Region Digital University (Université Numérique Île-de-France) will provide technical infrastructure and hosting expertise for our federation model, leveraging their experience with open and FAIR infrastructure systems. Their participation will facilitate integration with French academic networks and ensure compliance with European digital infrastructure standards.  
4. **Université de Lorraine[^17]**: University is one of the largest universities in France, scoping most of the research disciplines. With Université de Strasbourg, it hosts a French labelled technical infrastructure. It will provide technical hosting for Bonfire instances. It will also provide its expertise in open science, the relevant infrastructures, the link with the research communities.  
5. **eLife/Sciety[^18]:** This collaboration will implement DocMaps protocol integration, demonstrating how peer review processes and evaluations can be captured as structured, machine-readable data across the federation, enhancing transparency in scientific assessment while preserving institutional review policies  
6. **Software Heritage[^19]**: Connecting papers, data, and software for reproducible science, supporting their mission as a global archive of software source code

These partners represent diverse governance models (public university, national research institution, global archive) to validate adaptability across contexts.

## **Benefits to the Scientific Community, European Society, and the European Research Area**

Open Science Network will deliver four concrete benefits:

**For individual researchers:**

* Consistent digital identity across repositories via ORCID integration  
* Full attribution for all contributions, including discussions  
* Enhanced discovery of relevant datasets and software through social connections  
* Career advancement through documented impact of contributions  
* Access controls that balance openness with confidentiality for sensitive data 

OSN addresses platform lock-in by making scholarly social capital—profiles, discussions, and relationships—portable, persistent, and formally recognized through ORCID and DOIs attribution.

**For institutions:**

* Ability to host instances that maintain institutional codes of conduct and data sovereignty  
* Analytics on research engagement and impact  
* Integration with existing institutional repositories  
* Support for institutional open science policies  
* Customizable functionality, user experience, and branding  
* No vendor lock-in and reduced costs compared to commercial platforms  
* Enhanced digital interaction between researchers

**For the European Research Area:**

* Federated infrastructure aligned with Europe's digital sovereignty strategy  
* Full compatibility with EOSC standards and services  
* Support for multilingual scientific discussion with translation capabilities  
* Enhanced competitiveness through accelerated knowledge exchange  
* Implementation of European values in scientific communication platforms

Our open-source, federated, portable, interoperable, and community-governed design ensures resilience against commercial capture, safeguarding long-term sustainability, trust, and academic freedom.

**For the general public:**

* Increased transparency of scientific processes  
* Enhanced interfaces between specialized communities and broader stakeholders  
* Accelerated scientific response to societal challenges  
* Support for citizen science engagement  
* More effective knowledge transfer to policy and practice

Whereas platforms like Bluesky may be 'federatable in theory,' OSN is federated in practice from day one, with multi-institutional pilots, open protocols, and no single controlling authority. OSN provides both the technical and social means needed to overcome the fragmentation and inertia that have undermined previous platform migrations by academics. While other platforms come with lock-in or high switching costs, OSN’s federation and open standards ensure that researchers, institutions, and communities can move, fork, or self-host their networks and data at any time—eliminating lock-in and returning control to the academic sector.

## **Addressing Questions of High Societal Relevance**

### **1\. Establishing Community-Governed Scientific Networks**

Recent studies show approximately 75% of researchers use commercial and closed academic platforms despite growing concerns about data ownership and privacy[^20].

The Open Science Network demonstrates a viable federation model where governance is distributed across institutions while maintaining interoperability. Our pilot partners represent diverse governance models (public university, national research institution, global archive, open access publisher) to validate adaptability across contexts.

### **2\. Enhancing Reproducibility Across Disciplines**

The European Commission has recognized research waste as a critical challenge, establishing Open Research Europe specifically to "implement Open Science practices and to support research integrity, transparency and reproducibility as well as to prevent 'research waste'" (Open-access.network, 2021). By connecting discussions directly to data objects, code, and methods, Open Science Network creates environments where reproducibility challenges can be documented and addressed collaboratively. Our Software Heritage integration specifically enables linking discussions to preserved code versions, enhancing computational reproducibility.

### **3\. Accelerating Interdisciplinary Collaboration on Complex Challenges**

Climate change, pandemic response, and sustainable development require cross-disciplinary approaches that current siloed repositories hinder. Our cross-repository discovery mechanisms will enable researchers to find relevant data through human social connections rather than keyword searches alone.

By addressing these questions, Open Science Network provides the technical foundation for researcher-governed scientific discourse that connects directly to research outputs, enabling a more integrated, transparent, and collaborative scientific process. This aligns with the 2020 Leiden Manifesto's emphasis on community governance of research evaluation and the European Open Science Cloud's mission to make research more discoverable, accessible, interoperable, and reusable.

# Scientific impacts

Open Science Network (OSN) will fundamentally transform scientific collaboration by creating the missing bridge between data repositories and scientific discourse—addressing critical gaps in the current research ecosystem while generating substantial new scientific knowledge through interconnected innovations that go beyond the state of the art.

## **Extending Scientific Knowledge Beyond Current Boundaries**

Currently, platforms like ResearchGate facilitate social interaction around publications but create closed ecosystems where valuable discussions remain inaccessible and non-FAIR. Conversely, data repositories store FAIR objects but lack the social engagement capabilities that drive scientific discovery. OSN resolves this contradiction by pioneering a federated social layer that preserves the context in which scientific insights emerge.

By implementing W3C Web Annotation standards and RDA's Data Citation guidelines, OSN will transform ephemeral scientific discussions into properly attributed, machine-readable FAIR data objects with permanent identifiers. This advancement preserves valuable scientific context that is currently lost in private communications, creating a new category of scientific objects that capture the genesis of ideas and critiques.

OSN pioneers federated group structures that enable multidisciplinary, cross-institutional research teams to collaborate seamlessly across traditional boundaries. Unlike existing tools that require centralized platforms or formal institutional agreements, our federation protocols allow spontaneous formation of research communities around emerging scientific questions, preserving both institutional autonomy and individual attribution while generating new FAIR data objects.

## **Engaging Multiple Scientific Communities**

OSN is uniquely positioned to engage diverse scientific ecosystems through our targeted pilot implementations:

1. **Knowledge Commons at Michigan State University** (humanities/social sciences) with its community of 50,000+ active users  
2. **Physikalisch-Technische Bundesanstalt** (Germany's national metrology institute)  
3. **UNIF** (French University Digital Infrastructure)  
4. **Université de Lorraine** (Large multidisciplinary French university)  
5. **eLife/Sciety** (implementing DocMaps protocol integration)  
6. **Software Heritage** (global code archive) containing 12+ billion source files

This multi-domain approach ensures OSN addresses varying needs across research disciplines, facilitating collaboration across traditionally siloed fields. By connecting repositories from different domains through a unified social layer, we enable researchers to discover and engage with data outside their immediate field—a capability critical for addressing complex societal challenges requiring interdisciplinary approaches.

The federated architecture of OSN respects the diversity of scientific practice by allowing communities to maintain autonomy while participating in the broader network. Unlike centralized platforms that impose uniform policies, OSN enables communities to establish their own moderation policies and collaboration norms while ensuring interoperability—a critical consideration for cross-disciplinary engagement.

OSN also specifically addresses the "long tail of science" by providing open-source software that can be deployed with minimal requirements (single virtual machine). This democratizes access to sophisticated collaboration tools, enabling smaller research groups, individual researchers, and resource-constrained institutions to participate in the scientific ecosystem on equal footing with larger entities.

Our tiered authentication systems accommodate citizen scientists while maintaining verification standards, and our contribution taxonomies properly attribute diverse forms of participation. This inclusive approach broadens the scientific community and leverages diverse perspectives that enrich scientific discourse.

## **Supporting Research Infrastructures Beyond Science Clusters**

* OSN extends beyond current Science Clusters through its extensible repository connector framework. While our initial implementation focuses on specific repositories (InvenioRDM, Dataverse, Zenodo, Software Heritage), we are developing a generalized connector framework allowing integration with any standards-compliant repository. This ensures OSN can support additional ESFRI RIs without requiring complete redevelopment.  
* By enabling researchers to discover and engage with data across multiple RIs through a unified social interface, OSN addresses the fragmentation currently limiting cross-RI collaboration. Researchers can discuss climate datasets alongside social impact data from entirely different sources, creating interdisciplinary insights difficult to achieve through existing isolated interfaces.  
* Emerging Research Infrastructures gain particular value from OSN by obtaining immediate connectivity to the broader scientific ecosystem without requiring massive investment in custom social tools. Our lightweight deployment options require minimal infrastructure, allowing resource-constrained RIs to participate fully.

## **Measurable Scientific Impacts**

OSN will deliver five significant scientific impacts that will be systematically measured throughout the project:

1. **Enhanced Data Discovery and Reuse:** We will establish baseline discovery rates through pre-project surveys and target substantial increases in dataset accesses and citations for connected repositories. This will be measured through access logs, DOI resolution statistics, and citation tracking via DataCite, with measurements at key project milestones.  
2. **Accelerated Cross-Disciplinary Collaboration:** Based on initial bibliometric analysis, we aim to significantly increase cross-disciplinary dataset utilization, measured through network analysis of researcher interactions and citation patterns across disciplinary boundaries. We will track this progress regularly throughout the project lifecycle.  
3. **Democratized Access to Scientific Discourse:** Building from current geographic and institutional diversity in repository usage, we target broad international participation with particular focus on Global South inclusion. We will conduct regular diversity tracking from launch with quarterly progress reports.  
4. **Improved Scientific Transparency and Reproducibility:** The connection between discussions and data objects will enhance scientific transparency by making the context around datasets explicitly visible. We will measure this by tracking how often dataset reuse incorporates references to Open Science Network discussions, with a focus on improved reproducibility confirmation rates for datasets with active discussions.  
5. **New Research Question Generation:** We will document the emergence of novel research questions spanning multiple disciplines by analyzing discussion threads and coding for question novelty and cross-disciplinarity, with validation from an independent expert panel. This qualitative and quantitative assessment will demonstrate how connected conversations around scientific objects spark new research directions.

These impact measurements will be incorporated into our regular reporting and final deliverables, providing concrete evidence of how OSN transforms scientific collaboration and knowledge creation.

## **Alignment with European Science Policy Objectives**

OSN directly supports multiple European science policy priorities:

**Digital Sovereignty:** By providing a community-governed alternative to commercial platforms, OSN advances European digital sovereignty in scientific infrastructure, aligning with the European Strategy for Data's emphasis on developing alternatives to dominant platforms.

**Open Science Implementation:** OSN contributes directly to EOSC by providing social infrastructure that enhances the utility of existing EOSC resources, supporting the goal of making open science the new normal by embedding FAIR principles in researchers' daily collaborative practices.

**Responsible Research Assessment:** By developing attribution mechanisms that recognize diverse contributions to scientific knowledge, OSN supports the transition toward more nuanced research assessment models beyond simple bibliometric measures.

**Research Integrity Enhancement:** The transparency afforded by connecting discussions directly to data objects enhances research integrity by making methodological considerations explicitly visible, fostering environments where critical engagement with methods and results is preserved.

Through this comprehensive approach to transforming scientific discourse, OSN creates lasting infrastructure for cross-disciplinary, cross-institutional collaboration that accelerates scientific discovery while ensuring equitable participation across the research ecosystem—directly supporting the European Open Science Cloud's mission to make research more discoverable, accessible, interoperable, and reusable.

**Digital resources**  
Describe how the project pilots the use of data and services already on-boarded to the Science Clusters Open Science platforms and/or to the EOSC platform and/or bring new research digital objects and RI services to the EOSC Exchange. Illustrate, if applicable, the technological innovation potential of the proposed project and the capacity to strengthen the multi-domain/multi- competences cross-fertilization and/or training. Describe in detail the expected needs in terms of computing resources.(Max 6000 chars)

Open Science Network will integrate with established Science Clusters' repositories and contribute innovative FAIR digital objects to the EOSC ecosystem through a federated social layer that transforms scientific discourse into properly attributed data objects with complete provenance chains.

### **Integration with Research Repositories and EOSC Platforms**

Our project will pilot integration with several key repositories that are essential components of the Science Clusters' infrastructure:

**Knowledge Commons Works Integration:**

* Implementation of REST API connections to InvenioRDM backend  
* Development of metadata mappers for research object types  
* Creation of bidirectional linking between discussions and KC Works objects

**Dataverse Integration:**

* Implementation of OAI-PMH harvesting for metadata synchronization  
* Development of Dataverse API client for direct object referencing  
* Creation of dataset preview capabilities within discussion threads

**Zenodo Integration:**

* Implementation of REST API client for FAIR object deposit  
* Development of DOI registration and metadata mapping  
* Creation of automated preservation workflows for discussions  
* Building of configurable export filters for different discussion types

**Sciety/eLife Integration:**

* Implementation of preprint and open review connectors  
* Development of cross-platform conversation synchronization  
* Creation of specialized citation mechanisms for preprints  
* Implementation of DocMaps protocol integration for review process transparency

**Software Heritage Integration:**

* Implementation of SWHID persistent identifier support  
* Creation of provenance tracking between discussions and code versions  
* Support for scientific software preservation across domains

By connecting with these repositories, OSN creates seamless interoperability between diverse scientific resources, enabling researchers to engage with data across disciplinary boundaries while maintaining FAIR principles and proper attribution.

### **Contribution to EOSC Exchange**

Open Science Network will bring new digital objects to the EOSC Exchange platform through:

**FAIR Discussion Objects:** Our key innovation transforms scientific discussions into properly attributed, machine-readable FAIR data objects that will:

* Include structured metadata (DataCite Schema 4.6)  
* Receive permanent DOIs (DataCite integration)  
* Apply standardized machine-readable licenses to new metadata and discussions  
* Be automatically deposited on Zenodo and institutional repositories federated with EOSC  
* Be automatically indexed for discovery via specialized feeds and filters  
* Include machine-readable access controls for restricted data  
* Maintain metadata accessible even when underlying data is restricted or unavailable

**Scientific Federation Extensions:** As outlined in our WP3 (Federation Protocol Implementation), we will develop and publish ActivityPub extensions for scientific contexts, creating reusable components that can be adopted by other EOSC services:

* JSON-LD contexts for scientific metadata exchange using FAIR vocabularies  
* Persistent identifier integration patterns  
* Scientific contribution attribution models  
* Provenance tracking using W3C PROV-O  
* Support for domain-specific metadata standards  
* Registration with community standards resources

### **Technological Innovation Potential**

Open Science Network introduces several technological innovations that strengthen cross-domain scientific collaboration:

**Cross-Repository Discussion Protocol:** As part of our WP4 (FAIR Discussion Engine), we are developing a system that:

* Builds upon individual repository connectors to implement unified workflows  
* Implements standardized machine-readable licensing applicable to all integrations  
* Develops provenance tracking using W3C PROV-O connecting objects across repositories  
* Builds citation graph visualization spanning all integrated platforms

**ORCID-Integrated Federation Authentication:** 

* Support institutional identity providers while maintaining federation capabilities  
* Create open and public researcher identity and profile through ORCID and OpenAlex integration  
* Implement cross-instance group functionality with domain-specific permissions  
* Document federation protocols with specification drafts (FEP)

**Metadata-Aware Social Graph:** Unlike general-purpose social networks, our network architecture natively understands scientific metadata through:

* Domain-specific relationship types using FAIR vocabularies  
* Citation-aware connection traversal  
* Specialized discovery feeds with filters for topic, language, and research area

### **Multi-Domain/Multi-Competence Cross-Fertilization**

Open Science Network strengthens cross-domain collaboration by:

**Interdisciplinary Connection Points:** Our federation architecture creates intersection points between different repositories and Science Clusters:

* Connecting Michigan State University (humanities/social sciences), PTB (metrology/physical sciences), UNIF (computer sciences), Université de Lorraine (multidisciplinary university) and Sciety/eLife  
* Enabling repository metadata sharing across institutional boundaries  
* Tracking citation patterns and knowledge flow across connected repositories (WP6)  
* Creating discovery mechanisms that leverage social connections to enhance data reuse

**Multi-Competence Engagement:** By integrating diverse repositories, we enable researchers with different expertise to collaborate around related data, as reflected in our WP6 (User Testing & Refinement):

* Supporting interdisciplinary teams working on complex societal challenges  
* Enabling serendipitous discovery of relevant datasets through social connections  
* Creating bridges between specialized domains through shared discussion objects  
* Providing structured attribution for diverse forms of contribution

This cross-fertilization directly supports the Science Clusters' mission of breaking down silos between research domains and enhancing interdisciplinary collaboration.


## Project implementation and final deliverables

Open Science Network will be implemented over a 18 months period using an agile methodology and co-design processes and validation with our pilots.  
Our implementation strategy balances technical development with community engagement to ensure both technical excellence and meaningful adoption.

### Preparation & Co-Design 

* Establish formal collaboration frameworks with our pilot partners:   
  * Michigan State University  
  * UNIF  
  * Université de Lorraine  
  * Sciety/eLife   
  * PTB (metrology/physical sciences)  
* Document each repository's technical specifications, APIs, and metadata schemas  
* Establish common infrastructure and containerized development environments  
* Define integration success metrics with each partner institution  
* Create workshops with each pilot to gather needs and establish a shared foundation


##  Repository connector development

* **Knowledge Commons Works Integration**:   
  * Implement REST API connections to InvenioRDM backend   
  * Develop metadata mappers for research object types   
  * Create bidirectional linking between discussions and KC Works objects  
* **Dataverse Integration**:   
  * Implement OAI-PMH harvesting for metadata synchronization  
  * Develop Dataverse API client for direct object referencing  
  * Create dataset preview capabilities within discussion threads  
* **Zenodo Integration**:   
  * Implement REST API client for FAIR object deposit  
  * Develop DOI registration and metadata mapping  
  * Create automated preservation workflows for discussions  
  * Build configurable export filters for different discussion types  
* **Sciety/eLife Integration**:   
  * Implement preprint and open review connectors  
  * Develop cross-platform conversation synchronization  
  * Create specialized citation mechanisms for preprints  
* **Software Heritage Integration**:   
  * Implement SWHID persistent identifier support   
  * Create provenance tracking between discussions and code versions

## Federation implementation 

* Implement cross-instance group functionality with domain-specific permission management. This feature will enable users to create new groups with customizable visibility settings (invite-only, local, or public). Group creators can establish community guidelines and appoint moderators to enforce them. Members will have different interaction capabilities based on their assigned permission levels, including the ability to join groups, view content, and publish new activities across federated instances.  
* Create open researcher profiles through ORCID authentication and OpenAlex API integration, enabling verified academic identities with automatically populated publication histories.   
* Document federation protocols with specification drafts (FEP)

##  Fair discussion engine

**Cross-Repository Transformation System**: 

* Builds upon individual repository connectors to implement unified workflows   
* Implements standardized machine-readable licensing applicable to all integration  
* Develops provenance tracking using W3C PROV-O connecting objects across repositories

## Pilot deployment

* Deploy fully-functional federation servers at all pilot institutions  
* Configure repository connectors for each partner's specific environment  
* Import initial repository metadata across all connected platforms  
* Conduct integration testing with real data across all partners  
* Document integration patterns and cross-repository workflows

## User testing & Measurement

* Conduct structured user testing with diverse researcher groups at all pilot sites  
* Measure cross-domain discovery metrics and repository engagement increases  
* Track citation patterns and knowledge flow across connected repositories  
* Implement platform refinements based on user feedback  
* Produce detailed case studies documenting integration benefits at each site

## Dissemination & Community building

* Present project findings in at least 3 strategic conferences (Europe, North America, South America)  
* Conduct hands-on workshops at each pilot institution with invited external participants  
* Create comprehensive documentation for all integration patterns  
* Release complete source code under AGPLv3 license  
* Publish integration guides for additional repository types

## Sustainability Framework

* Establish community governance structure with representation from pilot partners  
* Create technical sustainability roadmap for ongoing development  
* Document institutional hosting requirements and federation management  
* Develop contributor guidelines and community processes  
* Finalize knowledge transfer materials for new adopters  
* Reach out to universities and institutions to setup new OSN instances


## Deliverables & Open Science Commitment 

INTEGRATION DELIVERABLES:

1\. **Repository Connector Suite**: Modular connectors for:

* Knowledge Commons Works (InvenioRDM)  
* Dataverse  
* Zenodo  
* Sciety/eLife  
* Software Heritage

2\. **Federation Protocol Implementation**: Extended ActivityPub protocols for scientific contexts

3\. **FAIR Discussion Engine**: System for:

* Converting discussions to FAIR objects  
* Assigning persistent identifiers  
* Preserving to Zenodo and institutional repositories

4\. **Integration Documentation Package**: Comprehensive technical guides for all supported repository types

SCIENTIFIC IMPACT DELIVERABLES:

1. **Pilot Case Studies:** Reports from all 5 pilot institutions measuring:  
   1. Number of cross-repository discussions created  
   2. Increase in dataset citations through social discovery  
   3. Time reduction in finding relevant data  
2. **Cross-Repository Knowledge Flow Analysis:** Network analysis showing:  
   1. Citation patterns between different domains (before/after)  
   2. New interdisciplinary collaborations formed  
   3. Dataset reuse metrics across repositories  
3. **Scientific Paper:** Published article containing:  
   1. Federation protocol specifications  
   2. API integration patterns  
   3. Measured usage statistics and adoption rates

KNOWLEDGE PRESERVATION COMMITMENT:

* All discussions will be preserved as FAIR objects through:  
  * **Primary storage**; In each institution's OSN instance with complete metadata  
  * **Long-term archiving**: Via Zenodo deposit with DOI assignment  
  * **Institutional deposit**: Optional integration with local repositories  
  * **Code preservation**: Through Software Heritage for software references  
- Each institution can configure preservation workflows based on local requirements while maintaining:  
  * Complete provenance chains linking discussions to source data  
  * Machine-readable licensing information  
  * Comprehensive attribution of all contributors

Open Dissemination Strategy

Our project features a comprehensive open dissemination strategy:

1. **Open Source Development**: All code will be developed openly on GitHub from day one, under the AGPLv3 license, enabling community involvement throughout development.  
2. **Public Development Blog**: We will maintain a public development blog documenting technical decisions, challenges, and solutions.  
3. **Regular Demo Sessions**: Monthly open demo sessions will be held to showcase progress and gather feedback from potential users.  
4. **Integration Workshops**: We will host quarterly integration workshops to help interested repositories implement Open Science Network connectors.  
5. **Digital Object Publication**: All discussion objects generated through the platform will be publicly accessible with proper metadata and licensing.  
6. **FAIR Alignment Reports**: Regular public reports documenting our FAIR alignment and federation logic.  
7. **Community Standards Registration**: Formal documentation of all extensions for scientific metadata exchange and registration with community resources like FAIRsharing and ActivityPub FEPs.

Through this structured implementation approach and comprehensive dissemination strategy, Open Science Network will deliver both technical innovation and community adoption, creating lasting infrastructure for open science collaboration.



[^2]:  [Unveiling Engagement Metrics: Social Media Platforms vs. Community Spaces](https://www.likeminds.community/blog/unveiling-engagement-metrics-social-media-platforms-vs-community-spaces) 

[^3]:  Use of author identifier services (ORCID, ResearcherID) and academic social networks (Academia.edu, ResearchGate) by the researchers of the University of Caen Normandy (France): A case study, Christophe Boudry, Manuel Durand-Barthez, PLOS (2020), [https://doi.org/10.1371/journal.pone.0238583](https://doi.org/10.1371/journal.pone.0238583)

[^4]:  [Breaking down barriers to data sharing \- Research Information](https://www.researchinformation.info/feature/breaking-down-barriers-data-sharing/) quoting Donaldson, D.R., Koepke, J.W. A focus groups study on data sharing and research data management. *Sci Data* **9**, 345 (2022). [https://doi.org/10.1038/s41597-022-01428-w](https://doi.org/10.1038/s41597-022-01428-w) 

[^5]:  [6 Repositories to Share Research Data | Teamscope Blog](https://www.teamscopeapp.com/blog/6-repositories-to-share-your-research-data) 

[^6]:  [ActivityPub](https://www.w3.org/TR/activitypub/) protocol

[^7]:  [Open Archives Initiative Protocol for Metadata Harvesting](https://www.openarchives.org/pmh/) 

[^8]:  [InvenioRDM — inveniosoftware.org](https://inveniosoftware.org/products/rdm/) 

[^9]:  [The Dataverse Project](https://dataverse.org/) 

[^10]:  [Zenodo](https://zenodo.org/) 

[^11]:  [DocMaps](https://docmaps.knowledgefutures.org/) 

[^12]:  [Archive ouverte HAL](https://hal.science/?lang=en) 

[^13]:  [PROV-O: The PROV W3C Ontology](https://www.w3.org/TR/prov-o/) 

[^14]:  [Humanities Commons](https://hcommons.org/) (also known as Knowledge Commons) and their repository [KC Works](https://works.hcommons.org/), hosted by [Michigan State University](https://msu.edu/) 

[^15]:  [Physikalisch-Technische Bundesanstalt](https://www.ptb.de/cms/en.html) 

[^16]:  [UNIF](https://unif.fr/en/) 

[^17]:  [Université de Lorraine](https://www.univ-lorraine.fr/) 

[^18]:  [Sciety](https://sciety.org/) 

[^19]:  [Software Heritage](https://www.softwareheritage.org/) 

[^20]:  Meishar-Tal, H., & Pieterse, E. (2017). Why Do Academics Use Academic Social Networking Sites?. The International Review of Research in Open and Distributed Learning, 18(1). [https://doi.org/10.19173/irrodl.v18i1.2643](https://doi.org/10.19173/irrodl.v18i1.2643)

