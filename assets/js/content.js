/* =====================================================================
   SITE CONTENT — the only file you need to edit to update the website.
   ---------------------------------------------------------------------
   Empty values ("" / null / []) are simply not displayed.
   Dates: "YYYY-MM" (or "YYYY-MM-DD") so they can be sorted.

   HOW TO ADD…
   • a publication  → copy one object in `publications`, edit it.
   • a course       → add an object in the `courses` list of a teaching year.
   • a project      → add an object in `projects` (stage: ongoing|completed).
   • an event/talk  → add an object in `activities`.
   ===================================================================== */

window.SITE = {
  person: {
    name: "Samawel Jaballi",
    firstName: "Samawel",
    lastName: "Jaballi",
    honorific: "PhD",
    position: "ATER — Temporary Teaching and Research Fellow in Computer Science",
    shortPosition: "ATER in Computer Science",
    affiliations: [
      { short: "University of Bordeaux", name: "University of Bordeaux — College of Science and Technology, Computer Science Unit", url: "https://www.u-bordeaux.fr/" },
      { short: "LaBRI", name: "LaBRI — Bordeaux Computer Science Research Laboratory (CNRS / University of Bordeaux)", url: "https://www.labri.fr/" }
    ],
    city: "Bordeaux",
    timezone: "Europe/Paris",
    /* Portrait: leave `photo` empty to show the initials instead.
       photoPosition = CSS object-position used to frame the face in the card.
       Earlier portraits kept as assets/img/portrait*.jpg, portrait-talk*.jpg and portrait-stage*.jpg. */
    photo: "assets/img/portrait-session.jpg",
    photoSmall: "assets/img/portrait-session-420.jpg",
    photoWebp: "assets/img/portrait-session.webp",
    photoSmallWebp: "assets/img/portrait-session-420.webp",
    photoAvatar: "assets/img/portrait-poster-avatar.jpg",
    photoBadge: "assets/img/portrait-poster-badge.jpg",   // small face crop for the navigation-bar circle
    photoWidth: 800, photoHeight: 521,
    photoPosition: "50% 50%",
    photoAlt: "Samawel Jaballi speaking into a microphone during a conference session, with a presentation slide projected behind him",
    cv: "files/Samawel_Jaballi_CV.pdf",
    email: "samawel.jaballi@u-bordeaux.fr",
    homeStatement:
      "I develop natural language processing methods for low-resource and dialectal settings: Maghrebi Arabic and Arabizi, informal multilingual text, and speech.",
    intro:
      "I am a researcher in natural language processing and a Temporary Teaching and Research Fellow (ATER) at the University of Bordeaux, working at LaBRI. I hold a joint PhD in Computer Science from the University of Bordeaux and the University of Monastir (2025).",
    researchStatement:
      "My research focuses on multimodal learning and social media analysis, with an emphasis on robustness and interpretability. I work on low-resource and dialectal languages — in particular Maghrebi Arabic and Arabizi — on informal multilingual content, and on speech and text processing.",
    teachingStatement:
      "I teach core undergraduate computer science — algorithms, data structures, programming in Python and OCaml, compilation — and supervise student projects and theses at bachelor's and master's level.",
    serviceStatement:
      "I contribute to the scientific community as a track chair, programme committee member and journal reviewer, and through the organization of doctoral events."
  },

  profiles: [
    { icon: "googlescholar", label: "Google Scholar", short: "Scholar", url: "https://scholar.google.com/citations?user=E26mCFgAAAAJ" },
    { icon: "dblp", label: "DBLP", short: "DBLP", url: "https://dblp.org/pid/329/2078.html" },
    { icon: "orcid", label: "ORCID", short: "ORCID", url: "https://orcid.org/0000-0002-6096-6048" },
    { icon: "github", label: "GitHub", short: "GitHub", url: "https://github.com/SAMAWELJABALLI" },
    { icon: "linkedin", label: "LinkedIn", short: "LinkedIn", url: "https://www.linkedin.com/in/samaweljaballi" },
    { icon: "credly", label: "Credly (certificates)", short: "Credly", url: "https://www.credly.com/users/samawel-jaballi" }
  ],

  /* Main journal card — rotating highlights. */
  highlights: [
    { date: "2027-04", place: "ACIIDS 2027 · Bali", tag: "Service",
      html: "<b>Track Chair</b> of TRUST4NLP, on trustworthy LLMs for <b>low-resource, multimodal and informal NLP</b>.",
      link: "#service", linkLabel: "Academic service" },
    { date: "2026-11", place: "LaBRI", tag: "Research",
      html: "Ongoing work on <b>cross-script transfer</b> between Arabic script and <b>Arabizi</b> in Maghrebi Arabic.",
      link: "#projects", linkLabel: "Ongoing projects" },
    { date: "2026-09", place: "ICCCI 2026 · Heraklion", tag: "Talk",
      html: "Presented <b>When Silence Matters</b>, on voice-activity detection in <b>low-resource multilingual ASR</b>.",
      link: "#pub-iccci26-vad", linkLabel: "See the paper" }
  ],

  /* Research axes — `id` tags publications and projects. */
  axes: [
    { id: "dialect", short: "Arabizi & dialectal Arabic", title: "Dialectal Arabic, Arabizi & code-switching",
      text: "Models and protocols for informal, dialectal and code-switched text: dialect normalization, transliteration and cross-script transfer for Maghrebi Arabic.",
      keywords: ["Arabizi", "Cross-script transfer", "Normalization", "Few-shot transfer"] },
    { id: "speech", short: "Low-resource speech", title: "Multilingual & low-resource speech",
      text: "Transcription and keyword spotting in continuous multilingual speech, voice activity detection, and data augmentation for low-resource speech recognition.",
      keywords: ["ASR", "Keyword spotting", "VAD", "Whisper"] },
    { id: "multimodal", short: "Multimodal learning", title: "Multimodal learning & reliability",
      text: "Foundation models for text and audio, speech–text fusion and cross-modal alignment; vision–language models and reliability assessment for medical report generation.",
      keywords: ["Self-supervised learning", "Speech–text fusion", "Vision–language", "Reliability"] },
    { id: "social", short: "Social media analysis", title: "Opinion & discourse in social media",
      text: "Sentiment analysis with enriched signals, topic and trend modeling of public discourse, and discourse dynamics with graph neural networks.",
      keywords: ["Sentiment analysis", "Topic modeling", "Time series", "GNNs"] }
  ],

  /* Current research directions (ATER at LaBRI). */
  currentDirections: [
    { title: "Dialect normalization", text: "Adaptive neural models to normalize and process informal and dialectal content.", keywords: ["Meta-learning", "Zero/few-shot transfer", "Self-regularizing decoders"] },
    { title: "Multimodal self-supervised analysis", text: "Foundation models for multilingual text and audio, building universal representations for large-scale informal content analysis.", keywords: ["Foundation models", "Cross-modal alignment", "Speech–text fusion"] },
    { title: "Sentiment analysis with enriched signals", text: "Dynamic knowledge graphs and prosodic features in opinion analysis, with graph neural networks modeling discourse in polarized contexts.", keywords: ["GNNs", "Prosody", "Discourse-aware modeling"] }
  ],

  /* -------------------------------------------------------------------
     PUBLICATIONS
     status: "published" | "accepted" | "under-review" | "submitted" | "preprint"
             ("submitted" is displayed as Under review)
     authors: array in original order; [] when the CV does not give them.
     authorsComplete: true only when the full list was verified on the
             publisher's page or DBLP; together with `cite` it enables
             "Copy citation".
     cite: { book | journal, series, volume, pages | article, publisher, year }
             year = year printed by the publisher (may differ from the
             conference year shown in the list).
     links: paper, doi (bare DOI), pdf, preprint, code, data, slides, video
     summary: short contribution statement, only when supported by sources.
     coverImage / coverImage2x: official cover of the proceedings volume or
             journal volume (published items only), served by the publisher;
             coverWidth / coverHeight: intrinsic size of coverImage;
             coverAlt, coverUrl (official volume page), coverCredit.
     coverShow:    true to display a cover on a non-published item (set by the site owner).
     coverGeneric: true for the preprint pictogram used on work under review.
     openAccess:   true if the full text is free to read: adds the "Open Access"
                   text label (the Preprint + padlock figure is shown for all preprints).
     ------------------------------------------------------------------- */
  publications: [
    { id: "iccci26-vad", year: 2026, date: "2026-09", status: "published", type: "Conference",
      coverImage: "https://media.springernature.com/w92/springer-static/cover/book/978-3-032-36868-3.jpg", coverImage2x: "https://media.springernature.com/w153/springer-static/cover/book/978-3-032-36868-3.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Computational Collective Intelligence — ICCCI 2026, Proceedings, Part I (LNAI 16908)", coverUrl: "https://link.springer.com/book/10.1007/978-3-032-36868-3", coverCredit: "© Springer Nature",
            authors: ["Samawel Jaballi", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "When Silence Matters: How VAD-Driven Whisper Architectures Reshape Temporal Alignment in Low-Resource Multilingual ASR",
      venue: "Computational Collective Intelligence (ICCCI 2026), Lecture Notes in Computer Science (LNAI), vol. 16908, pp. 362–375", venueShort: "ICCCI 2026",
      cite: { book: "Computational Collective Intelligence (ICCCI 2026)", series: "LNAI", volume: "16908", pages: "362–375", publisher: "Springer", year: "2027" },
      summary: "Examines how voice-activity detection combined with optimized Whisper pipelines affects temporal alignment in multilingual, low-resource speech recognition.",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-36868-3_25", doi: "10.1007/978-3-032-36868-3_25" }, axes: ["speech"] },
    { id: "coopis26-mcrs", year: 2026, date: "2026-09", status: "accepted", type: "Conference",
      coverShow: true, coverImage: "assets/img/covers/coopis-2025.jpg", coverImage2x: "assets/img/covers/coopis-2025@2x.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Cooperative Information Systems — CoopIS 2025, 31st International Conference, Proceedings (LNCS 15535)", coverUrl: "https://link.springer.com/book/10.1007/978-3-032-15538-2", coverCredit: "© Springer Nature",
            authors: ["Wala Tlili", "Samawel Jaballi", "Mounir Zrigui", "Henri Nicolas"], authorsComplete: true,
      title: "Quantifying Clinical Risk in Generative Radiology Reporting: MCRS, A Medical Composite Reliability Score",
      venue: "32nd International Conference on Cooperative Information Systems (CoopIS 2026)", venueShort: "CoopIS 2026",
      summary: "", links: {}, axes: ["multimodal"] },
    { id: "iccci26-elearn", year: 2026, date: "2026-09", status: "published", type: "Conference",
      coverImage: "https://media.springernature.com/w92/springer-static/cover/book/978-3-032-37933-7.jpg", coverImage2x: "https://media.springernature.com/w153/springer-static/cover/book/978-3-032-37933-7.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Advances in Computational Collective Intelligence — ICCCI 2026, Proceedings, Part I (CCIS 3043)", coverUrl: "https://link.springer.com/book/10.1007/978-3-032-37933-7", coverCredit: "© Springer Nature",
            authors: ["Manar Joundy Hazar", "Samawel Jaballi", "Mohsen Maraoui", "Mounir Zrigui", "Henri Nicolas"], authorsComplete: true,
      title: "A Hybrid E-Learning Recommendation System Incorporating User Reviews and Ratings for Enhanced Course Selection",
      venue: "Advances in Computational Collective Intelligence (ICCCI 2026), Communications in Computer and Information Science, vol. 3043, pp. 49–69", venueShort: "ICCCI 2026",
      cite: { book: "Advances in Computational Collective Intelligence (ICCCI 2026)", series: "CCIS", volume: "3043", pages: "49–69", publisher: "Springer", year: "2027" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-37933-7_4", doi: "10.1007/978-3-032-37933-7_4" }, axes: ["social"] },
    { id: "codit26-cxr", year: 2026, date: "2026-07", status: "published", type: "Conference",
      coverImage: "assets/img/covers/codit-2026.jpg", coverImage2x: "assets/img/covers/codit-2026@2x.jpg", coverWidth: 92, coverHeight: 130,
      coverAlt: "Cover of the proceedings of the 2026 12th International Conference on Control, Decision and Information Technologies (CoDIT)", coverUrl: "https://ieeexplore.ieee.org/xpl/conhome/11630702/proceeding", coverCredit: "© 2026 IEEE",
            authors: ["Adjia Ndeye Penda Dieng", "Samawel Jaballi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Toward a Unified Multimodal Framework for Chest X-ray Analysis: A Hybrid Convolutional–State Space Approach",
      venue: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT), pp. 3034–3039", venueShort: "CoDIT 2026",
      cite: { book: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT)", pages: "3034–3039", publisher: "IEEE", year: "2026" },
      summary: "", links: { paper: "https://ieeexplore.ieee.org/document/11631022", doi: "10.1109/CoDIT70676.2026.11631022" }, axes: ["multimodal"] },
    { id: "codit26-tuniprod", year: 2026, date: "2026-07", status: "published", type: "Conference",
      coverImage: "assets/img/covers/codit-2026.jpg", coverImage2x: "assets/img/covers/codit-2026@2x.jpg", coverWidth: 92, coverHeight: 130,
      coverAlt: "Cover of the proceedings of the 2026 12th International Conference on Control, Decision and Information Technologies (CoDIT)", coverUrl: "https://ieeexplore.ieee.org/xpl/conhome/11630702/proceeding", coverCredit: "© 2026 IEEE",
            authors: ["Azer Mahjoubi", "Samawel Jaballi", "Mounir Zrigui"], authorsComplete: true,
      title: "TUNIPROD: An Optimized ProdLDA-Based Multi-Stage Framework for Cross-Lingual Topic Modeling of Code-Switched Public Discourse",
      venue: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT), pp. 3298–3303", venueShort: "CoDIT 2026",
      cite: { book: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT)", pages: "3298–3303", publisher: "IEEE", year: "2026" },
      summary: "", links: { paper: "https://ieeexplore.ieee.org/document/11631297", doi: "10.1109/CoDIT70676.2026.11631297" }, axes: ["social", "dialect"] },
    { id: "iccci25-kws", year: 2025, date: "2025-11", status: "published", type: "Conference",
      coverImage: "https://media.springernature.com/w92/springer-static/cover/book/978-3-032-10209-6.jpg", coverImage2x: "https://media.springernature.com/w153/springer-static/cover/book/978-3-032-10209-6.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Advances in Computational Collective Intelligence — ICCCI 2025, Proceedings, Part II (CCIS 2748)", coverUrl: "https://link.springer.com/book/10.1007/978-3-032-10209-6", coverCredit: "© Springer Nature",
            authors: ["Samawel Jaballi", "Manar Joundy Hazar", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "ResNet-Based Pandemic Keyword Spotting in Continuous Multilingual Speech: A Study in UNESCO's Audio Messages for Rapid Health Response",
      venue: "Advances in Computational Collective Intelligence (ICCCI 2025), Communications in Computer and Information Science, vol. 2748, pp. 76–91", venueShort: "ICCCI 2025",
      cite: { book: "Advances in Computational Collective Intelligence (ICCCI 2025)", series: "CCIS", volume: "2748", pages: "76–91", publisher: "Springer", year: "2026" },
      note: "Nominated for the Best Student Paper Award",
      summary: "Combines a ResNet architecture with acoustic (MFCC) and contextual (M-BERT) representations to detect critical keywords in continuous multilingual speech, using UNESCO public-health audio messages.",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-10209-6_6", doi: "10.1007/978-3-032-10209-6_6" }, axes: ["speech"] },
    { id: "aciids24-embed", year: 2024, date: "2024-04", status: "published", type: "Conference",
      coverImage: "https://media.springernature.com/w92/springer-static/cover/book/978-981-97-4985-0.jpg", coverImage2x: "https://media.springernature.com/w153/springer-static/cover/book/978-981-97-4985-0.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Intelligent Information and Database Systems — ACIIDS 2024, Proceedings, Part II (LNAI 14796)", coverUrl: "https://link.springer.com/book/10.1007/978-981-97-4985-0", coverCredit: "© Springer Nature",
            authors: ["Samawel Jaballi", "Salah Zrigui", "Manar Joundy Hazar", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Exploring Unsupervised Word Representations Models and Neural Networks for Informal Multilingual Text Against Covid-19 Social Media Content",
      venue: "Intelligent Information and Database Systems (ACIIDS 2024), Lecture Notes in Computer Science (LNAI), vol. 14796, pp. 347–359", venueShort: "ACIIDS 2024",
      cite: { book: "Intelligent Information and Database Systems (ACIIDS 2024)", series: "LNAI", volume: "14796", pages: "347–359", publisher: "Springer", year: "2024" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-981-97-4985-0_27", doi: "10.1007/978-981-97-4985-0_27" }, axes: ["dialect", "social"] },
    { id: "jece24-topics", year: 2024, date: "2024-01", status: "published", type: "Journal",
      coverImage: "https://onlinelibrary.wiley.com/cms/asset/5c331351-edcb-4156-a32b-21a0536fa092/jece.v2024.1.cover.gif", coverImage2x: "", coverWidth: 104, coverHeight: 150,
      coverAlt: "Cover of Journal of Electrical and Computer Engineering, volume 2024", coverUrl: "https://onlinelibrary.wiley.com/toc/1742/2024", coverCredit: "© Wiley · Hindawi",
            authors: ["Samawel Jaballi", "Manar Joundy Hazar", "Salah Zrigui", "Azer Mahjoubi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Decoding Multilingual Topic Dynamics and Trend Identification through ARIMA Time Series Analysis on Social Networks: A Novel Data Translation Framework Enhanced by LDA/HDP Models",
      venue: "Journal of Electrical and Computer Engineering, vol. 2024, article 6669491", venueShort: "J. Electr. Comput. Eng.",
      cite: { journal: "Journal of Electrical and Computer Engineering", volume: "2024", article: "6669491", year: "2024" },
      summary: "Analyses about 160K informal, code-switched social media texts through hybrid translation into English, topic modeling (LDA, HDP) and ARIMA-based trend analysis.",
      links: { paper: "https://onlinelibrary.wiley.com/doi/10.1155/2024/6669491", doi: "10.1155/2024/6669491", preprint: "https://arxiv.org/abs/2403.15445" }, axes: ["social", "dialect"] },
    { id: "iccci23-bilstm", year: 2023, date: "2023-09", status: "published", type: "Conference",
      coverImage: "https://media.springernature.com/w92/springer-static/cover/book/978-3-031-41774-0.jpg", coverImage2x: "https://media.springernature.com/w153/springer-static/cover/book/978-3-031-41774-0.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Advances in Computational Collective Intelligence — ICCCI 2023, Proceedings (CCIS 1864)", coverUrl: "https://link.springer.com/book/10.1007/978-3-031-41774-0", coverCredit: "© Springer Nature",
            authors: ["Samawel Jaballi", "Manar Joundy Hazar", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Deep Bidirectional LSTM Network Learning-Based Sentiment Analysis for Tunisian Dialectical Facebook Content During the Spread of the Coronavirus Pandemic",
      venue: "Advances in Computational Collective Intelligence (ICCCI 2023), Communications in Computer and Information Science, vol. 1864, pp. 96–109", venueShort: "ICCCI 2023",
      cite: { book: "Advances in Computational Collective Intelligence (ICCCI 2023)", series: "CCIS", volume: "1864", pages: "96–109", publisher: "Springer", year: "2023" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-41774-0_8", doi: "10.1007/978-3-031-41774-0_8" }, axes: ["dialect", "social"] },
    { id: "iccci22-tunisian", year: 2022, date: "2022-09", status: "published", type: "Conference",
      coverImage: "https://media.springernature.com/w92/springer-static/cover/book/978-3-031-16014-1.jpg", coverImage2x: "https://media.springernature.com/w153/springer-static/cover/book/978-3-031-16014-1.jpg", coverWidth: 92, coverHeight: 139,
      coverAlt: "Cover of Computational Collective Intelligence — ICCCI 2022, Proceedings (LNAI 13501)", coverUrl: "https://link.springer.com/book/10.1007/978-3-031-16014-1", coverCredit: "© Springer Nature",
            authors: ["Samawel Jaballi", "Salah Zrigui", "Mohamed Ali Sghaier", "Dhaou Berchech", "Mounir Zrigui"], authorsComplete: true,
      title: "Sentiment Analysis of Tunisian Users on Social Networks: Overcoming the Challenge of Multilingual Comments in the Tunisian Dialect",
      venue: "Computational Collective Intelligence (ICCCI 2022), Lecture Notes in Computer Science (LNAI), vol. 13501, pp. 176–192", venueShort: "ICCCI 2022",
      cite: { book: "Computational Collective Intelligence (ICCCI 2022)", series: "LNAI", volume: "13501", pages: "176–192", publisher: "Springer", year: "2022" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-16014-1_15", doi: "10.1007/978-3-031-16014-1_15" }, axes: ["dialect", "social"] },

    { id: "tip-mafnet", year: 2026, date: "2026-04", status: "submitted", type: "Journal",
      coverGeneric: true, openAccess: false, coverImage: "assets/img/covers/preprint.svg", coverImage2x: "", coverWidth: 88, coverHeight: 133,
      coverAlt: "Preprint icon — manuscript under review, not yet published", coverUrl: "", coverCredit: "",
            authors: ["Adjia Ndeye Penda Dieng", "Samawel Jaballi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "MAF-Net: A Unified Hybrid Convolutional–SSM Framework for Multimodal Chest X-ray Triage, Segmentation, and Automated Reporting",
      venue: "Submitted to IEEE Transactions on Image Processing", venueShort: "IEEE TIP (submitted)", summary: "", links: {}, axes: ["multimodal"] },
    { id: "eswa-triple", year: 2026, date: "2026-04", status: "submitted", type: "Journal",
      coverGeneric: true, openAccess: false, coverImage: "assets/img/covers/preprint.svg", coverImage2x: "", coverWidth: 88, coverHeight: 133,
      coverAlt: "Preprint icon — manuscript under review, not yet published", coverUrl: "", coverCredit: "",
            authors: ["Adjia Ndeye Penda Dieng", "Samawel Jaballi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Breaking the Multimodal Shortcut: A Triple-Memory Decoder with Constrained Gating for Radiology Report Generation",
      venue: "Submitted to Expert Systems with Applications", venueShort: "ESWA (submitted)", summary: "", links: {}, axes: ["multimodal"] },
    { id: "csl-augment", year: 2025, date: "2025-06", status: "under-review", type: "Journal",
      coverGeneric: true, openAccess: false, coverImage: "assets/img/covers/preprint.svg", coverImage2x: "", coverWidth: 88, coverHeight: 133,
      coverAlt: "Preprint icon — manuscript under review, not yet published", coverUrl: "", coverCredit: "",
            authors: ["Samawel Jaballi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Unsupervised Approach for Augmenting Low-Resource UNESCO Multilingual COVID-19 Audio Dataset for Speech Recognition Tasks (from ~30 Minutes to 6 Hours)",
      venue: "Under review at Computer Speech & Language", venueShort: "CSL (under review)", summary: "", links: {}, axes: ["speech"] },
    { id: "mtap-adaboost", year: 2024, date: "2024-02", status: "under-review", type: "Journal",
      coverGeneric: true, openAccess: false, coverImage: "assets/img/covers/preprint.svg", coverImage2x: "", coverWidth: 88, coverHeight: 133,
      coverAlt: "Preprint icon — manuscript under review, not yet published", coverUrl: "https://www.researchgate.net/publication/378498085_Analyzing_Multilingual_Conversations_During_COVID-19_An_Imbalanced_Class-Ensemble_Learning_Approach_with_Reweighted_AdaBoost-SVM_for_Code-Switched_Text_Classification", coverCredit: "",
            authors: ["Samawel Jaballi", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Analyzing Multilingual Conversations During COVID-19: An Imbalanced Class-Ensemble Learning Approach with Reweighted AdaBoost-SVM for Code-Switched Text Classification",
      venue: "Under review at Multimedia Tools and Applications", venueShort: "MTAP (under review)",
      summary: "Hybrid architecture combining Bi-LSTM and a reweighted AdaBoost-SVM ensemble with cost-sensitive learning, for opinion classification in imbalanced, multilingual and dialectal data.",
      links: { preprint: "https://www.researchgate.net/publication/378498085_Analyzing_Multilingual_Conversations_During_COVID-19_An_Imbalanced_Class-Ensemble_Learning_Approach_with_Reweighted_AdaBoost-SVM_for_Code-Switched_Text_Classification" }, axes: ["dialect", "social"] }
  ],

  /* -------------------------------------------------------------------
     PROJECTS — stage: "ongoing" | "completed"
     Statuses are quoted from the repositories / CV; nothing is inferred.
     page: optional presentation page (e.g. "research/formal.html"): the title and a "Learn more" button link to it.
     ------------------------------------------------------------------- */
  projects: [
    { id: "formal", stage: "ongoing", period: "2026", title: "FORMAL — pair provenance and cross-script transfer in Maghrebi Arabic",
      status: "Submitted — manuscript submitted to an international journal, under review", page: "research/formal.html",
      problem: "Multilingual sentence encoders place Arabic-script and Latin-script (Arabizi) renderings of Maghrebi Arabic in partly separate regions, so classifiers trained on Arabic script lose accuracy on Arabizi.",
      approach: "A lightweight projection removes the leading directions of paired embedding differences. The study asks where the pairs should come from, comparing human renderings of 998 Algerian Arabizi sentences with rule-based, dictionary-based and neural transliterations, on three frozen encoders and four classification tasks, under a pre-registered protocol with a single test evaluation.",
      role: "Author of the manuscript and of the research code",
      axes: ["dialect"],
      resources: [{ label: "Code, protocols & archived results (MIT licence)", url: "https://github.com/SAMAWELJABALLI/formal-cross-script-transfer" }] },
    { id: "selectnorm", stage: "ongoing", period: "2026", title: "SelectNorm — per-input normalization for Arabizi with frozen encoders",
      status: "Submitted — paper submitted to an international conference", page: "research/selectnorm.html",
      problem: "Transliterating Arabizi into Arabic script repairs some inputs and damages others (French and English tokens, negation, rare spellings, dialect differences), so unconditional normalization can help one corpus and hurt another.",
      approach: "Decides per input whether to classify the original or the normalized view, by factorizing the expected benefit into disagreement detection, which needs no labels, and conditional advantage, with a cost-aware decision rule. Evaluated with four frozen encoders on Tunisian, Algerian and Moroccan test sets.",
      role: "",
      axes: ["dialect"],
      resources: [{ label: "Research code & archived evidence", url: "https://github.com/SAMAWELJABALLI/-SelectNorm" }] },
    { id: "diafuse", stage: "ongoing", period: "2026", title: "DiaFuse-PRC — cross-script and cross-dialect sentiment transfer in Maghrebi Arabic",
      status: "Submitted — manuscript submitted to an international journal, under review", page: "research/diafuse-prc.html",
      problem: "Sentiment models trained on Arabic-script Tunisian data and synthetic transliterations must hold up on human-written Arabizi and on other Maghrebi varieties.",
      approach: "Variety-aware fusion of several encoders with hierarchical class–variety prototypes, rebalanced contrastive learning, linguistic consistency and variety-wise calibration, evaluated along a fixed chain of increasingly shifted test sets (Tunisian, Algerian, Moroccan).",
      role: "",
      axes: ["dialect"],
      resources: [{ label: "Research code & model cards", url: "https://github.com/SAMAWELJABALLI/DiaFuse-PRC" }] },
    { id: "phd", stage: "completed", period: "2022 – 2025", title: "Multilingual public opinion on social media (joint PhD)",
      status: "Completed — joint PhD, University of Bordeaux & University of Monastir",
      problem: "Extracting, transcribing and analysing public opinion expressed in informal, multilingual and code-switched content, in text and speech.",
      approach: "Topic and trend modeling (LDA, HDP, ARIMA); multilingual transcription and keyword spotting (FasterWhisper, WhisperX, Silero and Pyannote VAD, ResNet with MFCC and M-BERT features); code-switched sentiment analysis (Bi-LSTM, AdaBoost-SVM).",
      role: "Doctoral researcher, supervised by Nicolas Henri and Mounir Zrigui",
      axes: ["social", "speech", "dialect"],
      resources: [{ label: "PhD thesis (HAL, in French)", url: "https://tel.archives-ouvertes.fr/tel-05228560" }, { label: "Related publications", url: "#publications" }] },
    { id: "nlqcta", stage: "completed", period: "May – Oct. 2022", title: "NLQCTA — a linguistic–quantitative corpus on COVID-19 governance in France",
      status: "Completed research internship, Institut de Mathématiques de Toulouse",
      problem: "Linking press coverage of public-health policies with health indicators over time.",
      approach: "A data pipeline combining over 8,000 French press articles (March 2020 – December 2021) with longitudinal public-health data such as hospitalizations and intensive-care admissions.",
      role: "Data engineer intern, supervised by Frederic Ferraty",
      axes: ["social"],
      resources: [{ label: "Exploratory figures (corpus not included)", url: "https://github.com/SAMAWELJABALLI/NLQCTA-New-Linguistic-Quantitative-Corpus-based-on-Temporal-Analysis---Data-Analysis" }] }
  ],

  /* Released software & resources (public repositories). */
  releases: [
    { title: "formal-cross-script-transfer", kind: "Research code", text: "Code, pre-registered protocols and archived results for the FORMAL study.", licence: "MIT", url: "https://github.com/SAMAWELJABALLI/formal-cross-script-transfer" },
    { title: "SelectNorm", kind: "Research code", text: "Code and archived predictions to reproduce the SelectNorm tables and paired tests.", licence: "", url: "https://github.com/SAMAWELJABALLI/-SelectNorm" },
    { title: "DiaFuse-PRC", kind: "Research code", text: "Training and evaluation code, model cards and execution status of each system.", licence: "", url: "https://github.com/SAMAWELJABALLI/DiaFuse-PRC" },
    { title: "NLQCTA data analysis", kind: "Analysis", text: "Exploratory figures for the NLQCTA corpus; the corpus itself is not included in the repository.", licence: "", url: "https://github.com/SAMAWELJABALLI/NLQCTA-New-Linguistic-Quantitative-Corpus-based-on-Temporal-Analysis---Data-Analysis" }
  ],

  /* -------------------------------------------------------------------
     TEACHING — one block per academic year (newest first), then per
     institution. Courses are grouped by `semester` (1 or 2) on the site.
     Each course (empty fields are not displayed):
       code, title, officialName (official course name, e.g. "Informatique 1")
       semester:    1 | 2
       levels:      ["L1"] … ["M1", "M2"] — only confirmed levels
       levelText:   level outside the L/M system (e.g. engineering school)
       languages:   ["Python"], ["C"], ["OCaml"] …
       tools:       ["dbt"] … (tools, shown separately from languages)
       roles:       any of "CI", "CM", "TD", "TDM", "TP", "Supervision" (only if documented)
                    CI = integrated lectures, TDM = computer-lab tutorials (TD machine)
       roleNote:    short precision on the role
       illustration: "ds" | "py-basics" | "py-functions" | "trees-graphs" |
                    "compilation" | "projects" | "warehouse" | "ml" | "databases" | "oop"
       description, objectives: ["…"], topics, hours (always null), page
       resources:   [{ label, url, kind: "slides" | "exercises" | "solutions" | "notebook" | "project" | "other" }]
       scheduled:   true for upcoming teaching (shows a "Scheduled teaching" badge)
       track:       programme/track shown with the level (e.g. "MIAGE track")
       draft:       true hides the course (kept in the file, not displayed)
     Course page (course.html?c=<slug>) — only for courses with a `slug`:
       slug:          "4tin302u-2025" — URL identifier, unique and permanent
       intro:         "Overview" paragraph (audience, place in the curriculum, main idea)
       objectives:    learning objectives (action verbs)
       approach:      "Teaching approach" paragraph
       prerequisites: ["…"] (optional)
       assessment:    assessment, only as documented (no weights)
       team:          [{ name, role, me: true }] — course coordinator(s) (and lecturer if different), then me
       moodle:        { url, note: "University login required" } — no url = no button
       website:       { url, label: "Course website" } — official course page, optional
       chat:          { url, platform, note } — "Course discussion" button; no url = no button
       sessions:      [{ n, title, type: "CI"|"CM"|"TD"|"TDM"|"TP"|"Project", summary,
                         files: [{ label, url, kind, pages }] }]
                      kind: slides | handout | exercises | solutions | code | data | reminder | other
       parts:         [{ title, sessions: [...] }] — instead of `sessions` when the course is split in parts
       extras:        [{ label, url, kind, pages, icon, badge, description, credit }] — course-wide resources;
                      kind "tool" = featured resource shown under the introduction
       extrasTitle, extrasIntro: heading and intro line of the extras section (default "Course resources")
       specs:         [{ label, url, kind: "spec" }] + specsCredit — "Project specifications" section
       materialsFrom: slug of another edition that hosts the materials (shows a link instead of files)
     A year with `draft: true` is NOT displayed (useful to prepare a future year).
     ------------------------------------------------------------------- */
  teaching: [
    { year: "2026–2027",
      institutions: [
        { institution: "University of Bordeaux", unit: "College of Science and Technology — Computer Science Unit", role: "ATER (full-time)",
          courses: [
            { code: "4TTV109U", title: "Fundamentals of Algorithms and Programming", officialName: "Principes de base de l'algorithmique et de la programmation", semester: 1, levels: ["L1"], languages: ["Python"], roles: ["CI", "TDM"], illustration: "py-basics", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4ttv109u-2026",
              intro: "A first-year bachelor's course (L1) whose aim is to learn to program and to reason about a simple algorithm, in Python. Content: first steps, lists and for loops, typing and complexity, indexed access, files, image processing and while loops.",
              objectives: [
                "Write simple Python programs with variables, functions, lists and loops",
                "Reason about a simple algorithm and its cost",
                "Use indexed access and process data read from files",
                "Manipulate images as matrices of pixels"
              ],
              approach: "In integrated lectures, each notion is presented and then programmed straight away in the computer lab. Image processing serves as a visual application field for loops and arrays.",
              assessment: "Three tests, one every four chapters, then a computer-lab exam on Virtual Programming Lab (VPL), under Moodle.",
              team: [
                { name: "Christophe Casseau", role: "Course coordinator" },
                { name: "Jean-Pierre Gruselle", role: "Co-coordinator" },
                { name: "Samawel Jaballi", role: "Lecturer — integrated lectures and computer labs", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=28244", note: "University login required" },
              sessions: [
                { n: 1, title: "Premiers pas en Python", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S01-CI-premiers-pas.pdf", kind: "slides", pages: 105 }] },
                { n: 2, title: "Listes et boucles for", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S02-CI-listes-for.pdf", kind: "slides", pages: 143 }] },
                { n: 3, title: "Compléments : typage, complexité et révisions", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S03-CI-typage-complexite.pdf", kind: "slides", pages: 135 }] },
                { n: 4, title: "Accès indexé", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S04-CI-acces-indexe.pdf", kind: "slides", pages: 89 }] },
                { n: 5, title: "Fichiers : lecture, écriture et analyse de données", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S05-CI-fichiers.pdf", kind: "slides", pages: 107 }] },
                { n: 6, title: "Images PGM et PPM : pixels, matrices et pixel art", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S06-CI-images.pdf", kind: "slides", pages: 108 }] },
                { n: 7, title: "Boucle conditionnelle while", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4ttv109u-2026/S07-CI-while.pdf", kind: "slides", pages: 143 }] }
              ],
              extras: []
            },
            { code: "4TPU146U", title: "Computer Science 1", officialName: "Informatique 1", semester: 1, levels: ["L1"], languages: ["Python"], roles: ["CI", "TDM"], illustration: "py-functions", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4tpu146u-2026",
              intro: "A first-year bachelor's course (L1) whose aim is to learn to program and to reason about a simple algorithm, in Python: first steps, lists and for loops, typing and complexity, indexed access, image processing and while loops. It adds four chapters introducing graphs and logic: vertices, basic logic, the handshake formula, paths and connectivity.",
              objectives: [
                "Write simple Python programs with variables, functions, lists and loops",
                "Reason about a simple algorithm and its cost",
                "Process images as arrays of pixels",
                "Use basic logic and first notions of graph theory: degrees, paths, connectivity"
              ],
              approach: "In integrated lectures, each notion is presented and then programmed straight away in the computer lab. Image processing serves as a visual application field for loops and arrays.",
              assessment: "Three tests, one every four chapters, then a computer-lab exam on Virtual Programming Lab (VPL), under Moodle.",
              team: [
                { name: "Christophe Casseau", role: "Course coordinator" },
                { name: "Samawel Jaballi", role: "Lecturer — integrated lectures and computer labs", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=25908", note: "University login required" },
              parts: [
                { title: "Programmation", sessions: [
                  { n: 1, title: "Premiers pas en Python", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S01-CI-premiers-pas.pdf", kind: "slides", pages: 80 }] },
                  { n: 2, title: "Listes et boucles for", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S02-CI-listes-boucles-for.pdf", kind: "slides", pages: 71 }] },
                  { n: 3, title: "Compléments : typage, complexité et exercices de révisions", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S03-CI-typage-complexite.pdf", kind: "slides", pages: 69 }] },
                  { n: 4, title: "Accès indexé", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S04-CI-acces-indexe.pdf", kind: "slides", pages: 65 }] },
                  { n: 5, title: "Dessin d'images", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S05-CI-dessin-images.pdf", kind: "slides", pages: 73 }] },
                  { n: 6, title: "Manipulations d'images", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S06-CI-manipulations-images.pdf", kind: "slides", pages: 66 }] },
                  { n: 7, title: "Boucle conditionnelle, représentation des nombres", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S07-CI-while-nombres.pdf", kind: "slides", pages: 64 }] }
                ] },
                { title: "Initiation aux graphes et à la logique", sessions: [
                  { n: 8, title: "Sommets d'un graphe", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S08-CI-sommets-graphe.pdf", kind: "slides", pages: 78 }] },
                  { n: 9, title: "Logique de base", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S09-CI-logique-base.pdf", kind: "slides", pages: 94 }] },
                  { n: 10, title: "Formule des poignées de mains, graphes simples", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S10-CI-poignees-mains.pdf", kind: "slides", pages: 90 }] },
                  { n: 11, title: "Chaînes et connexité", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tpu146u-2026/S11-CI-chaines-connexite.pdf", kind: "slides", pages: 77 }] }
                ] }
              ],
              extras: []
            },
            { code: "", title: "Master's Programming Projects", semester: 2, draft: true, scheduled: true, levels: ["M2"], languages: ["Java", "Python"], roles: ["Supervision"], roleNote: "Supervision of master's programming projects in Java and Python.", illustration: "projects", description: "", objectives: [], topics: [], hours: null, resources: [] },
            { code: "4TIN402U", title: "Tree Data Structures and Algorithms", officialName: "Algorithmique des structures de données arborescentes", semester: 2, scheduled: true, levels: ["L2"], languages: ["OCaml"], roles: ["CI", "TDM"], illustration: "trees-graphs", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4tin402u-2026",
              intro: "A second-year bachelor's course (L2) on tree data structures, in OCaml, shared with the course Algorithmique et programmation fonctionnelle (APF). Its thirteen sheets cover the vocabulary and traversals of binary trees, perfect trees and reasoning by induction, binary search trees (search, insertion, deletion, validation), height and AVL trees, red–black trees, binary and binomial heaps, planar trees and Huffman coding.",
              objectives: [
                "Define tree structures inductively and reason by structural induction",
                "Program traversals, search, insertion and deletion on trees in OCaml",
                "Prove properties on small examples and analyse complexity",
                "Implement balanced trees (AVL, red–black), heaps and Huffman coding"
              ],
              approach: "Each structure is first defined inductively, then programmed and proved on small examples.",
              assessment: "Continuous assessment: tests, a written mid-term exam (DS), a computer-lab exam, a final written exam and VPL exercises on Moodle.",
              team: [
                { name: "Stefka Gueorguieva", role: "Course coordinator" },
                { name: "Marc Zeitoun", role: "Lectures (CM), shared with APF" },
                { name: "Samawel Jaballi", role: "Lecturer — integrated lectures and computer labs", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=24843", note: "University login required" },
              chat: { url: "https://moodle.u-bordeaux.fr/mod/forum/view.php?id=726597", platform: "Moodle forum", note: "Any question about the course is welcome here. Please be respectful; do not share personal data." },
              sessions: [
                { n: 0, title: "Premiers pas en OCaml", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S00-CI-premiers-pas-ocaml.pdf", kind: "slides", pages: 117 }] },
                { n: 1, title: "Types paramétrés et vocabulaire des arbres binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S01-CI-types-parametres-vocabulaire.pdf", kind: "slides", pages: 74 }] },
                { n: 2, title: "Arbres parfaits, complets, quasi-parfaits et induction structurelle", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S02-CI-arbres-parfaits-induction.pdf", kind: "slides", pages: 126 }] },
                { n: 3, title: "Parcours d'arbres binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S03-CI-parcours.pdf", kind: "slides", pages: 150 }] },
                { n: 4, title: "Arbres binaires et arbres binaires de recherche : construction, recherche, insertion", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S04-CI-abr-recherche-insertion.pdf", kind: "slides", pages: 157 }] },
                { n: 5, title: "Arbres binaires de recherche : suppression, validation, intervalle et prédécesseur", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S05-CI-abr-suppression-validation.pdf", kind: "slides", pages: 156 }] },
                { n: 6, title: "Hauteur des arbres binaires et arbres AVL", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S06-CI-hauteur-avl.pdf", kind: "slides", pages: 145 }] },
                { n: 7, title: "Arbres rouges et noirs", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S07-CI-rouges-noirs.pdf", kind: "slides", pages: 145 }] },
                { n: 8, title: "Chemins dans les arbres binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S08-CI-chemins.pdf", kind: "slides", pages: 163 }] },
                { n: 9, title: "Tas binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S09-CI-tas-binaires.pdf", kind: "slides", pages: 166 }] },
                { n: 10, title: "Arbres planaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S10-CI-arbres-planaires.pdf", kind: "slides", pages: 192 }] },
                { n: 11, title: "Codage de Huffman", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S11-CI-huffman.pdf", kind: "slides", pages: 173 }] },
                { n: 12, title: "Tas binomiaux", type: "CI", files: [{ label: "Slides", url: "files/courses/2026-2027/4tin402u-2026/S12-CI-tas-binomiaux.pdf", kind: "slides", pages: 197 }] }
              ],
              extras: []
            },
            { code: "4TYG602U", title: "Object-Oriented Programming", officialName: "Programmation orientée objet", semester: 2, scheduled: true, levels: ["L3"], track: "MIAGE track", languages: ["C++"], roles: ["TD"], illustration: "oop", description: "", objectives: [], topics: [], hours: null, resources: [] }
          ] }
      ] },
    { year: "2025–2026",
      institutions: [
        { institution: "University of Bordeaux", unit: "College of Science and Technology — Computer Science Unit", role: "ATER (full-time)",
          courses: [
            { code: "4TIN302U", slug: "4tin302u-2025", title: "Elementary Data Structures & Algorithms", officialName: "Algorithmique des structures de données élémentaires", semester: 1, levels: ["L2"], languages: ["C"], roles: ["CI", "TD", "TDM"], illustration: "ds",
              description: "",
              intro: "A second-year bachelor's course (L2) on elementary data structures, taught in C. It aims at mastering abstract data types (ADTs) and the cost of algorithms. The move from pseudo-code to C links the abstraction (the ADT) to its realisation in memory.",
              objectives: [
                "Master the abstract data types stack, queue, linked list and hash table",
                "Analyse the cost of algorithms: complexity and recursion",
                "Implement these structures in C, including singly and doubly linked lists",
                "Choose the appropriate structure for a given problem"
              ],
              approach: "The course follows a competency-based approach with constructive alignment: exercises work on the learning outcomes one by one, and assessment targets exactly these outcomes. Data structures are first used as abstract data types, then implemented in C with the course library libasde.",
              assessment: "The semester ends with a computer-lab exam on Virtual Programming Lab (VPL), under Moodle.",
              team: [
                { name: "Carole Blanc", role: "Course coordinator" },
                { name: "Samawel Jaballi", role: "Lecturer — integrated lectures, tutorials and computer labs", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=22335", note: "University login required" },
              parts: [
                { title: "Utiliser les structures : types abstraits", sessions: [
                  { n: 1, title: "Les fondations : tableaux, récursivité et complexité", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S01-CI-fondations.pdf", kind: "slides", pages: 71 }] },
                  { n: 2, title: "Le type abstrait Pile", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S02-CI-pile.pdf", kind: "slides", pages: 68 }] },
                  { n: 3, title: "Le type abstrait File, et choisir entre pile et file", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S03-CI-file.pdf", kind: "slides", pages: 62 }] },
                  { n: 4, title: "Le type abstrait Liste chaînée", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S04-CI-liste-chainee.pdf", kind: "slides", pages: 58 }] }
                ] },
                { title: "Implémenter les structures en C", sessions: [
                  { n: 5, title: "Implémentation concrète de la pile et de la file", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S05-CI-implementation-pile-file.pdf", kind: "slides", pages: 48 }] },
                  { n: 6, title: "Implémentation concrète des listes chaînées : SList et DList", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S06-CI-slist-dlist.pdf", kind: "slides", pages: 55 }] },
                  { n: 7, title: "Les tables de hachage", type: "CI", summary: "Hash tables and collisions.", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S07-CI-hachage.pdf", kind: "slides", pages: 99 }] }
                ] },
                { title: "Synthèse", sessions: [
                  { n: 8, title: "Synthèse : choisir une structure, préparer le TP noté", type: "CI", summary: "Each problem calls for a structure: undo and redo (two stacks), round-robin scheduling (queue), duplicate removal (linked list and hash table).", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin302u-2025/S08-CI-synthese.pdf", kind: "slides", pages: 68 }] }
                ] }
              ],
              extras: [
                { label: "DList Visualizer — interactive pointer visualiser (C)", url: "https://dlist-visualizer.ai.studio", kind: "tool", icon: "pointer", badge: "Interactive tool",
                  description: "An interactive, step-by-step visualiser of the libasde function asde_dlist_insert_before: the C source runs line by line, the current line is highlighted and each step is explained in plain language. The doubly linked list is drawn as cells holding data, with next and previous pointers, the L and p cursors, and NULL shown as ground." }
              ],
              topics: [], hours: null, resources: [] },
            { code: "4TPU146U", title: "Computer Science 1", officialName: "Informatique 1", semester: 1, levels: ["L1"], languages: ["Python"], roles: ["CI", "TDM"], illustration: "py-functions", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4tpu146u-2025",
              intro: "A first-year bachelor's course (L1) whose aim is to learn to program and to reason about a simple algorithm, in Python: first steps, lists and for loops, typing and complexity, indexed access, image processing and while loops. It adds four chapters introducing graphs and logic: vertices, basic logic, the handshake formula, paths and connectivity.",
              objectives: [
                "Write simple Python programs with variables, functions, lists and loops",
                "Reason about a simple algorithm and its cost",
                "Process images as arrays of pixels",
                "Use basic logic and first notions of graph theory: degrees, paths, connectivity"
              ],
              approach: "In integrated lectures, each notion is presented and then programmed straight away in the computer lab. Image processing serves as a visual application field for loops and arrays.",
              assessment: "Three tests, one every four chapters, then a computer-lab exam on Virtual Programming Lab (VPL), under Moodle.",
              team: [
                { name: "Christophe Casseau", role: "Course coordinator" },
                { name: "Samawel Jaballi", role: "Lecturer — integrated lectures and computer labs", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=20815", note: "University login required" },
              parts: [
                { title: "Programmation", sessions: [
                  { n: 1, title: "Premiers pas en Python", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S01-CI-premiers-pas.pdf", kind: "slides", pages: 80 }] },
                  { n: 2, title: "Listes et boucles for", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S02-CI-listes-boucles-for.pdf", kind: "slides", pages: 71 }] },
                  { n: 3, title: "Compléments : typage, complexité et exercices de révisions", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S03-CI-typage-complexite.pdf", kind: "slides", pages: 69 }] },
                  { n: 4, title: "Accès indexé", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S04-CI-acces-indexe.pdf", kind: "slides", pages: 65 }] },
                  { n: 5, title: "Dessin d'images", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S05-CI-dessin-images.pdf", kind: "slides", pages: 73 }] },
                  { n: 6, title: "Manipulations d'images", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S06-CI-manipulations-images.pdf", kind: "slides", pages: 66 }] },
                  { n: 7, title: "Boucle conditionnelle, représentation des nombres", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S07-CI-while-nombres.pdf", kind: "slides", pages: 64 }] }
                ] },
                { title: "Initiation aux graphes et à la logique", sessions: [
                  { n: 8, title: "Sommets d'un graphe", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S08-CI-sommets-graphe.pdf", kind: "slides", pages: 78 }] },
                  { n: 9, title: "Logique de base", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S09-CI-logique-base.pdf", kind: "slides", pages: 94 }] },
                  { n: 10, title: "Formule des poignées de mains, graphes simples", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S10-CI-poignees-mains.pdf", kind: "slides", pages: 90 }] },
                  { n: 11, title: "Chaînes et connexité", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tpu146u-2025/S11-CI-chaines-connexite.pdf", kind: "slides", pages: 77 }] }
                ] }
              ],
              extras: []
            },
            { code: "4TIN402U", title: "Tree Data Structures and Algorithms", officialName: "Algorithmique des structures de données arborescentes", semester: 2, levels: ["L2"], languages: ["OCaml"], roles: ["CI", "TDM"], illustration: "trees-graphs", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4tin402u-2025",
              intro: "A second-year bachelor's course (L2) on tree data structures, in OCaml, shared with the course Algorithmique et programmation fonctionnelle (APF). Its thirteen sheets cover the vocabulary and traversals of binary trees, perfect trees and reasoning by induction, binary search trees (search, insertion, deletion, validation), height and AVL trees, red–black trees, binary and binomial heaps, planar trees and Huffman coding.",
              objectives: [
                "Define tree structures inductively and reason by structural induction",
                "Program traversals, search, insertion and deletion on trees in OCaml",
                "Prove properties on small examples and analyse complexity",
                "Implement balanced trees (AVL, red–black), heaps and Huffman coding"
              ],
              approach: "Each structure is first defined inductively, then programmed and proved on small examples.",
              assessment: "Continuous assessment: tests, a written mid-term exam (DS), a computer-lab exam, a final written exam and VPL exercises on Moodle.",
              team: [
                { name: "Stefka Gueorguieva", role: "Course coordinator" },
                { name: "Marc Zeitoun", role: "Lectures (CM), shared with APF" },
                { name: "Samawel Jaballi", role: "Lecturer — integrated lectures and computer labs", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=24843", note: "University login required" },
              chat: { url: "https://moodle.u-bordeaux.fr/mod/forum/view.php?id=726597", platform: "Moodle forum", note: "Any question about the course is welcome here. Please be respectful; do not share personal data." },
              sessions: [
                { n: 0, title: "Premiers pas en OCaml", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S00-CI-premiers-pas-ocaml.pdf", kind: "slides", pages: 117 }] },
                { n: 1, title: "Types paramétrés et vocabulaire des arbres binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S01-CI-types-parametres-vocabulaire.pdf", kind: "slides", pages: 74 }] },
                { n: 2, title: "Arbres parfaits, complets, quasi-parfaits et induction structurelle", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S02-CI-arbres-parfaits-induction.pdf", kind: "slides", pages: 126 }] },
                { n: 3, title: "Parcours d'arbres binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S03-CI-parcours.pdf", kind: "slides", pages: 150 }] },
                { n: 4, title: "Arbres binaires et arbres binaires de recherche : construction, recherche, insertion", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S04-CI-abr-recherche-insertion.pdf", kind: "slides", pages: 157 }] },
                { n: 5, title: "Arbres binaires de recherche : suppression, validation, intervalle et prédécesseur", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S05-CI-abr-suppression-validation.pdf", kind: "slides", pages: 156 }] },
                { n: 6, title: "Hauteur des arbres binaires et arbres AVL", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S06-CI-hauteur-avl.pdf", kind: "slides", pages: 145 }] },
                { n: 7, title: "Arbres rouges et noirs", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S07-CI-rouges-noirs.pdf", kind: "slides", pages: 145 }] },
                { n: 8, title: "Chemins dans les arbres binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S08-CI-chemins.pdf", kind: "slides", pages: 163 }] },
                { n: 9, title: "Tas binaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S09-CI-tas-binaires.pdf", kind: "slides", pages: 166 }] },
                { n: 10, title: "Arbres planaires", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S10-CI-arbres-planaires.pdf", kind: "slides", pages: 192 }] },
                { n: 11, title: "Codage de Huffman", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S11-CI-huffman.pdf", kind: "slides", pages: 173 }] },
                { n: 12, title: "Tas binomiaux", type: "CI", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin402u-2025/S12-CI-tas-binomiaux.pdf", kind: "slides", pages: 197 }] }
              ],
              extras: []
            },
            { code: "4TIN603U", title: "Compilation", semester: 2, levels: ["L3"], languages: ["OCaml"], roles: ["TDM"], roleNote: "Computer-lab tutorials are taught in OCaml.", illustration: "compilation", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4tin603u-2025",
              intro: "A third-year bachelor's course (L3) whose objective is to understand and build the stages of a compiler, in OCaml: semantics on paper, then an interpreter; lexical analysis; LR parsing; simplification and typing; generation of three-address code.",
              objectives: [
                "Explain the stages of a compiler and the semantics of a language",
                "Write lexers by hand and with ocamllex",
                "Build LR parsers with Menhir and Cairn",
                "Implement simplification, type checking and translation to three-address code"
              ],
              approach: "Each tutorial alternates a session on paper and an implementation session on the course compiler. The common thread is the mini-ML project, in three parts: interpreter, parsing, typing.",
              team: [
                { name: "Vincent Penelle", role: "Course coordinator and lecturer (CM)" },
                { name: "Samawel Jaballi", role: "Computer lab tutorials (TD machine)", me: true }
              ],
              moodle: { url: "https://moodle.u-bordeaux.fr/course/view.php?id=12583", note: "Submission platform · University login required" },
              website: { url: "https://vpenelle.pages.emi.u-bordeaux.fr/compilation/", label: "Course website" },
              sessions: [
                { n: 1, title: "TD 1 — Remise en jambe OCaml et concepts utiles", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S01-TDM-ocaml.pdf", kind: "slides", pages: 70 }] },
                { n: 2, title: "TD 2 (1/2) — Sémantique : exercices papier", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S02-TDM-semantique-papier.pdf", kind: "slides", pages: 75 }] },
                { n: 3, title: "TD 2 (2/2) — Interpréteur du langage du cours", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S03-TDM-interpreteur.pdf", kind: "slides", pages: 70 }] },
                { n: 4, title: "TD 3 (1/2) — Lexeur à la main, introduction à ocamllex", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S04-TDM-lexeurs.pdf", kind: "slides", pages: 66 }] },
                { n: 5, title: "TD 3 (2/2) — Lexeur du langage du cours, lexeur interpréteur, sérialisation", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S05-TDM-lexeur-du-cours.pdf", kind: "slides", pages: 67 }] },
                { n: 6, title: "TD 4 (1/3) — Parsing LR avec Menhir et Cairn", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S06-TDM-parsing-lr.pdf", kind: "slides", pages: 71 }] },
                { n: 7, title: "TD 4 (2/3) — Parseur du langage du cours, partie 1", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S07-TDM-parseur-1.pdf", kind: "slides", pages: 62 }] },
                { n: 8, title: "TD 4 (3/3) — Parseur du langage du cours, partie 2", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S08-TDM-parseur-2.pdf", kind: "slides", pages: 65 }] },
                { n: 9, title: "TD 5 (1/2) — Simplification d'AST et vérification de types", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S09-TDM-simplification-typage.pdf", kind: "slides", pages: 62 }] },
                { n: 10, title: "TD 5 (2/2) — Traduction en code à trois adresses", type: "TDM", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin603u-2025/S10-TDM-code-3-adresses.pdf", kind: "slides", pages: 69 }] },
                { n: 11, title: "Projet mini-ML : présentation et méthode", type: "Project", summary: "The common thread of the course, in three parts: interpreter, parsing, typing.", files: [{ label: "Project method", url: "files/courses/2025-2026/4tin603u-2025/S11-PROJET-mini-ml.pdf", kind: "handout", pages: 67 }] }
              ],
              extras: []
            },
            { code: "4TIN802U", title: "Programming Project", officialName: "Projet de programmation", semester: 2, levels: ["M1"], languages: ["Java", "Python"], roles: ["TD"], roleNote: "Taught jointly with Mathieu Hilaire: student teams building Scrabble and Carcassonne in Python and Java.", illustration: "projects", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "4tin802u-2025",
              intro: "A first-year master's project course (M1) on two subjects, Scrabble and Carcassonne; student teams build the game in Python and in Java.",
              objectives: [
                "Design and build a complete board game as a team, in Python or Java",
                "Organise and share the work with Scrum",
                "Collaborate with Git and deliver at regular milestones",
                "Apply good programming practices, including with code assistants"
              ],
              approach: "Project-based learning, taught in pairs: supervision covers design, division of work, version control and deliverables. Projects are followed on GitLab with weekly milestones.",
              assessment: "A mid-term progress report after six weeks, a final report, a code review (quality, compliance with the specifications, optimisation, documentation) and a defence.",
              team: [
                { name: "Emmanuel Fleury", role: "Course coordinator" },
                { name: "Mathieu Hilaire", role: "Lecturer — project supervision" },
                { name: "Samawel Jaballi", role: "Lecturer — project supervision", me: true }
              ],
              sessions: [
                { n: 1, title: "Projet Scrabble – Python : lancement du projet", type: "Project", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin802u-2025/S01-PROJET-scrabble-python.pdf", kind: "slides", pages: 32 }] },
                { n: 2, title: "Projet Scrabble – Java : lancement du projet", type: "Project", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin802u-2025/S02-PROJET-scrabble-java.pdf", kind: "slides", pages: 32 }] },
                { n: 3, title: "Projet Carcassonne – Python : lancement du projet", type: "Project", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin802u-2025/S03-PROJET-carcassonne-python.pdf", kind: "slides", pages: 32 }] },
                { n: 4, title: "Projet Carcassonne – Java : lancement du projet", type: "Project", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin802u-2025/S04-PROJET-carcassonne-java.pdf", kind: "slides", pages: 32 }] },
                { n: 5, title: "Git en équipe et Scrum : branches, revues et sprints", type: "Project", files: [{ label: "Slides", url: "files/courses/2025-2026/4tin802u-2025/S05-PROJET-git-equipe-scrum.pdf", kind: "slides", pages: 36 }] }
              ],
              specs: [
                { label: "Scrabble — project specifications", url: "files/courses/2025-2026/4tin802u-2025/scrabble-specs.pdf", kind: "spec" },
                { label: "Carcassonne — project specifications", url: "files/courses/2025-2026/4tin802u-2025/carcassonne-specs.pdf", kind: "spec" }
              ],
              specsCredit: "4TIN802U teaching team",
              extrasTitle: "Team support kit",
              extrasIntro: "Bonus good-practice sheets written to help project teams, beyond the course materials.",
              extras: [
                { label: "Git", url: "files/courses/2025-2026/4tin802u-2025/fiche-git.pdf", kind: "handout", pages: 2, icon: "git", badge: "Bonus", description: "Branches, commits, merge requests and resolving conflicts as a team." },
                { label: "Code assistants (vibe coding)", url: "files/courses/2025-2026/4tin802u-2025/fiche-vibe-coding.pdf", kind: "handout", pages: 2, icon: "bot", badge: "Bonus", description: "Using code assistants well: small requests, tests first, then reviewing and checking the generated code before committing it." },
                { label: "Python project", url: "files/courses/2025-2026/4tin802u-2025/fiche-python.pdf", kind: "handout", pages: 2, icon: "code", badge: "Bonus", description: "Project structure, conventions, typing, tests and tools (pytest, coverage, logging, Sphinx)." },
                { label: "C project", url: "files/courses/2025-2026/4tin802u-2025/fiche-c.pdf", kind: "handout", pages: 2, icon: "cpu", badge: "Bonus", description: "Organising a C project, compilation with CMake, memory management and debugging (Valgrind, gdb)." }
              ]
            },
            { code: "4TIN001U", title: "Master's Internship", officialName: "Stage", semester: 2, draft: true, levels: ["M2"], languages: [], roles: [], roleNote: "M2 internship — academic referent (follow-up, remote site visit, assessment).", illustration: "projects", description: "", objectives: [], topics: [], hours: null, resources: [] }
          ] }
      ] },
    { year: "2023–2024",
      institutions: [
        { institution: "Private Polytechnic School of Monastir", unit: "Software Engineering programme", role: "Part-time lecturer",
          courses: [
            { code: "", title: "Data Warehousing", officialName: "Data Warehouse", semester: 2, levels: [], levelText: "Engineering — Year 5", termNote: "Evening course", languages: ["Python", "SQL"], tools: ["dbt"], roles: ["CI", "TDM"], illustration: "warehouse", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "dw-polytech-2023",
              intro: "An evening course for final-year students of the software-engineering programme (Engineering — Year 5). It follows the chain of a modern data warehouse as practised in industry: dimensional modelling, fact and dimension tables, ingestion, analytical SQL, transformation with dbt, tests and documentation, industrialisation.",
              objectives: [
                "Design a dimensional model with fact and dimension tables",
                "Ingest data and control its quality with Python",
                "Write analytical SQL queries",
                "Build, test and document transformations with dbt",
                "Industrialise a data-warehouse pipeline"
              ],
              approach: "Integrated lectures and computer-lab tutorials, over eleven chapters. The course ends with a capstone project that implements the whole chain end to end.",
              team: [
                { name: "Samawel Jaballi", role: "Course coordinator and lecturer", me: true }
              ],
              sessions: [
                { n: 1, title: "Fondamentaux du Data Warehouse", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S01-CI-fondamentaux.pdf", kind: "slides", pages: 68 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S01-TDM-fondamentaux.pdf", kind: "exercises", pages: 30 }] },
                { n: 2, title: "Modélisation dimensionnelle", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S02-CI-modelisation.pdf", kind: "slides", pages: 55 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S02-TDM-modelisation.pdf", kind: "exercises", pages: 26 }] },
                { n: 3, title: "Dimensions et historisation", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S03-CI-dimensions.pdf", kind: "slides", pages: 46 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S03-TDM-dimensions.pdf", kind: "exercises", pages: 26 }] },
                { n: 4, title: "Tables de faits", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S04-CI-faits.pdf", kind: "slides", pages: 45 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S04-TDM-faits.pdf", kind: "exercises", pages: 29 }] },
                { n: 5, title: "Ingestion avec Python", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S05-CI-ingestion.pdf", kind: "slides", pages: 48 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S05-TDM-ingestion.pdf", kind: "exercises", pages: 23 }] },
                { n: 6, title: "SQL analytique", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S06-CI-sql-analytique.pdf", kind: "slides", pages: 46 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S06-TDM-sql-analytique.pdf", kind: "exercises", pages: 25 }] },
                { n: 7, title: "dbt pour l'analytics engineering", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S07-CI-dbt.pdf", kind: "slides", pages: 47 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S07-TDM-dbt.pdf", kind: "exercises", pages: 22 }] },
                { n: 8, title: "Tests, documentation et qualité", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S08-CI-tests-docs.pdf", kind: "slides", pages: 46 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S08-TDM-tests-docs.pdf", kind: "exercises", pages: 23 }] },
                { n: 9, title: "Industrialisation", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S09-CI-industrialisation.pdf", kind: "slides", pages: 61 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S09-TDM-industrialisation.pdf", kind: "exercises", pages: 15 }] },
                { n: 10, title: "Projet", type: "Project", summary: "Capstone project implementing the whole chain end to end.", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S10-CI-projet.pdf", kind: "slides", pages: 52 }, { label: "Lab", url: "files/courses/2023-2024/dw-polytech-2023/S10-TDM-projet.pdf", kind: "exercises", pages: 16 }] },
                { n: 11, title: "Révisions", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/dw-polytech-2023/S11-CI-revisions.pdf", kind: "slides", pages: 44 }] }
              ],
              extras: []
            },
            { code: "", title: "Machine Learning", semester: 2, levels: [], levelText: "Engineering — Year 4", languages: ["Advanced Python"], roles: ["CI", "TDM"], illustration: "ml", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "ml-polytech-2023",
              intro: "A course for fourth-year students of the software-engineering programme (Engineering — Year 4), from statistical foundations to current architectures, in nine chapters.",
              objectives: [
                "Formalise a learning problem and the bias–variance trade-off",
                "Preprocess data and build pipelines",
                "Evaluate models rigorously: cross-validation, ROC and PR curves, imbalanced data",
                "Use linear models, k-NN, naive Bayes, SVMs, trees and ensemble methods",
                "Apply unsupervised learning (PCA, k-means, EM), neural networks, CNNs and transformers"
              ],
              approach: "Integrated lectures and computer-lab tutorials: each chapter has its lab in Python.",
              team: [
                { name: "Samawel Jaballi", role: "Course coordinator and lecturer", me: true }
              ],
              sessions: [
                { n: 1, title: "Introduction au Machine Learning", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S01-CI-introduction.pdf", kind: "slides", pages: 74 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S01-TDM-introduction.pdf", kind: "exercises", pages: 30 }] },
                { n: 2, title: "Données, prétraitement et pipelines", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S02-CI-pretraitement.pdf", kind: "slides", pages: 79 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S02-TDM-pretraitement.pdf", kind: "exercises", pages: 28 }] },
                { n: 3, title: "Modèles linéaires et optimisation", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S03-CI-modeles-lineaires.pdf", kind: "slides", pages: 100 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S03-TDM-modeles-lineaires.pdf", kind: "exercises", pages: 28 }] },
                { n: 4, title: "Évaluation et sélection de modèle", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S04-CI-evaluation.pdf", kind: "slides", pages: 77 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S04-TDM-evaluation.pdf", kind: "exercises", pages: 29 }] },
                { n: 5, title: "kNN, Bayes naïf, SVM et noyaux", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S05-CI-knn-bayes-svm.pdf", kind: "slides", pages: 100 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S05-TDM-knn-bayes-svm.pdf", kind: "exercises", pages: 28 }] },
                { n: 6, title: "Arbres et méthodes d'ensemble", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S06-CI-arbres-ensembles.pdf", kind: "slides", pages: 116 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S06-TDM-arbres-ensembles.pdf", kind: "exercises", pages: 27 }] },
                { n: 7, title: "Apprentissage non supervisé", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S07-CI-non-supervise.pdf", kind: "slides", pages: 85 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S07-TDM-non-supervise.pdf", kind: "exercises", pages: 27 }] },
                { n: 8, title: "Réseaux de neurones et PyTorch", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S08-CI-reseaux-neurones.pdf", kind: "slides", pages: 96 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S08-TDM-reseaux-neurones.pdf", kind: "exercises", pages: 29 }] },
                { n: 9, title: "CNN, transfer learning et transformers", type: "CI", files: [{ label: "Slides", url: "files/courses/2023-2024/ml-polytech-2023/S09-CI-cnn-transformers.pdf", kind: "slides", pages: 85 }, { label: "Lab", url: "files/courses/2023-2024/ml-polytech-2023/S09-TDM-cnn-transformers.pdf", kind: "exercises", pages: 27 }] }
              ],
              extras: [
                { label: "Project", url: "files/courses/2023-2024/ml-polytech-2023/projet-presentation.pdf", kind: "handout", pages: 38 },
                { label: "Revision", url: "files/courses/2023-2024/ml-polytech-2023/revisions.pdf", kind: "slides", pages: 136 }
              ]
            }
          ] }
      ] },
    { year: "2022–2023",
      institutions: [
        { institution: "Faculty of Sciences, University of Monastir", unit: "Department of Computer Science", role: "Part-time lecturer",
          courses: [
            { code: "", title: "Advanced Python Programming", officialName: "Programmation Python avancée", semester: 1, levels: ["L3"], languages: ["Python"], roles: ["TP"], illustration: "py-functions", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "pyav-fsm-2022",
              intro: "A third-year bachelor's course (L3). Lab sessions cover the development environment, data structures, functions, decorators, iterators, object-oriented programming, dataclasses. Students move from an elementary use of the language to structured, reusable code.",
              objectives: [
                "Set up a professional Python development environment",
                "Use advanced data structures, functions, closures and decorators",
                "Write iterators, generators and object-oriented code with dataclasses and typing",
                "Handle exceptions, files and tests, and measure performance"
              ],
              approach: "Each lab session comes with a short course reminder.",
              team: [
                { name: "Mohsen Maraoui", role: "Course coordinator" },
                { name: "Samawel Jaballi", role: "Labs (TP)", me: true }
              ],
              sessions: [
                { n: 1, title: "Environnement et outils du développeur Python", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S01-TP-environnement.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S01-rappel-environnement.pdf", kind: "reminder", pages: 14 }] },
                { n: 2, title: "Structures de données avancées", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S02-TP-structures.pdf", kind: "exercises", pages: 27 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S02-rappel-structures.pdf", kind: "reminder", pages: 14 }] },
                { n: 3, title: "Fonctions avancées", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S03-TP-fonctions.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S03-rappel-fonctions.pdf", kind: "reminder", pages: 14 }] },
                { n: 4, title: "Fermetures et décorateurs", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S04-TP-decorateurs.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S04-rappel-decorateurs.pdf", kind: "reminder", pages: 15 }] },
                { n: 5, title: "Itérateurs et générateurs", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S05-TP-iterateurs.pdf", kind: "exercises", pages: 27 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S05-rappel-iterateurs.pdf", kind: "reminder", pages: 14 }] },
                { n: 6, title: "Classes, propriétés et méthodes spéciales", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S06-TP-poo1.pdf", kind: "exercises", pages: 26 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S06-rappel-poo1.pdf", kind: "reminder", pages: 15 }] },
                { n: 7, title: "Héritage, polymorphisme et composition", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S07-TP-poo2.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S07-rappel-poo2.pdf", kind: "reminder", pages: 15 }] },
                { n: 8, title: "dataclasses, Enum et typage", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S08-TP-dataclasses.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S08-rappel-dataclasses.pdf", kind: "reminder", pages: 15 }] },
                { n: 9, title: "Exceptions et gestionnaires de contexte", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S09-TP-exceptions.pdf", kind: "exercises", pages: 24 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S09-rappel-exceptions.pdf", kind: "reminder", pages: 15 }] },
                { n: 10, title: "Fichiers et données : pathlib, CSV, JSON, re", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S10-TP-fichiers.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S10-rappel-fichiers.pdf", kind: "reminder", pages: 15 }] },
                { n: 11, title: "Tests et qualité : pytest, doctest, couverture, refactorisation", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S11-TP-tests.pdf", kind: "exercises", pages: 25 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S11-rappel-tests.pdf", kind: "reminder", pages: 15 }] },
                { n: 12, title: "Performance : mesurer, profiler, vectoriser", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S12-TP-performance.pdf", kind: "exercises", pages: 23 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S12-rappel-performance.pdf", kind: "reminder", pages: 14 }] },
                { n: 13, title: "Concurrence : threads, processus, asyncio", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S13-TP-concurrence.pdf", kind: "exercises", pages: 26 }, { label: "Course reminder", url: "files/courses/2022-2023/pyav-fsm-2022/S13-rappel-concurrence.pdf", kind: "reminder", pages: 15 }] },
                { n: 14, title: "Mini-projet : lancement et jalon 1", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/pyav-fsm-2022/S14-TP-miniprojet.pdf", kind: "exercises", pages: 26 }, { label: "Project brief", url: "files/courses/2022-2023/pyav-fsm-2022/S14-TP-miniprojet-sujet.pdf", kind: "handout", pages: 14 }] }
              ],
              extras: []
            },
            { code: "", title: "Relational Databases", officialName: "Bases de données relationnelles", semester: 1, levels: ["L2"], languages: ["SQL"], roles: ["TP"], illustration: "databases", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "bdr-fsm-2022",
              intro: "A second-year bachelor's course (L2). SQL lab sessions cover constraints, selection, joins, aggregation, subqueries, views and indexes.",
              objectives: [
                "Create tables and enforce integrity constraints",
                "Write selections, inner and outer joins, aggregations and subqueries",
                "Use views, indexes, transactions and access rights",
                "Design a relational schema up to third normal form"
              ],
              approach: "Each lab session comes with a short course reminder.",
              team: [
                { name: "Samir Belaid", role: "Course coordinator" },
                { name: "Samawel Jaballi", role: "Labs (TP)", me: true }
              ],
              sessions: [
                { n: 1, title: "Introduction ; création et insertion", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S01-TP-introduction.pdf", kind: "exercises", pages: 18 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S01-rappel-introduction.pdf", kind: "reminder", pages: 10 }] },
                { n: 2, title: "Contraintes et mises à jour", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S02-TP-contraintes.pdf", kind: "exercises", pages: 20 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S02-rappel-contraintes.pdf", kind: "reminder", pages: 11 }] },
                { n: 3, title: "Sélection", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S03-TP-selection.pdf", kind: "exercises", pages: 20 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S03-rappel-selection.pdf", kind: "reminder", pages: 11 }] },
                { n: 4, title: "Jointures internes", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S04-TP-jointures-internes.pdf", kind: "exercises", pages: 20 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S04-rappel-jointures-internes.pdf", kind: "reminder", pages: 10 }] },
                { n: 5, title: "Jointures externes", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S05-TP-jointures-externes.pdf", kind: "exercises", pages: 19 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S05-rappel-jointures-externes.pdf", kind: "reminder", pages: 10 }] },
                { n: 6, title: "Agrégation et groupement", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S06-TP-agregation.pdf", kind: "exercises", pages: 19 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S06-rappel-agregation.pdf", kind: "reminder", pages: 10 }] },
                { n: 7, title: "Opérations diverses", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S07-TP-operations.pdf", kind: "exercises", pages: 19 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S07-rappel-operations.pdf", kind: "reminder", pages: 11 }] },
                { n: 8, title: "Sous-requêtes", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S08-TP-sous-requetes.pdf", kind: "exercises", pages: 20 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S08-rappel-sous-requetes.pdf", kind: "reminder", pages: 10 }] },
                { n: 9, title: "Bilan de mi-parcours : algèbre relationnelle et SQL", type: "TP", files: [{ label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S09-rappel-bilan.pdf", kind: "reminder", pages: 10 }] },
                { n: 10, title: "Vues et index", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S10-TP-vues-index.pdf", kind: "exercises", pages: 18 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S10-rappel-vues-index.pdf", kind: "reminder", pages: 10 }] },
                { n: 11, title: "Transactions et droits", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S11-TP-transactions-droits.pdf", kind: "exercises", pages: 17 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S11-rappel-transactions-droits.pdf", kind: "reminder", pages: 11 }] },
                { n: 12, title: "Conception", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S12-TP-conception.pdf", kind: "exercises", pages: 19 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S12-rappel-conception.pdf", kind: "reminder", pages: 10 }] },
                { n: 13, title: "Projet (1) : présentation et conception", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S13-TP-projet-1.pdf", kind: "exercises", pages: 19 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S13-rappel-projet-1.pdf", kind: "reminder", pages: 10 }] },
                { n: 14, title: "Projet (2) : requêtes avancées et soutenance", type: "TP", files: [{ label: "Lab with solutions", url: "files/courses/2022-2023/bdr-fsm-2022/S14-TP-projet-2.pdf", kind: "exercises", pages: 21 }, { label: "Course reminder", url: "files/courses/2022-2023/bdr-fsm-2022/S14-rappel-projet-2.pdf", kind: "reminder", pages: 9 }] }
              ],
              extras: []
            },
            { code: "", title: "Data Warehousing", officialName: "Entrepôts de données", semester: 2, levels: ["L2"], languages: ["SQL", "Python"], roles: ["CM", "TP"], illustration: "warehouse", description: "", objectives: [], topics: [], hours: null, resources: [],
              slug: "dw-fsm-2022",
              intro: "A second-year bachelor's course (L2) on data warehouses, with lectures and labs: star schema, dimensions, facts, extraction and loading, analytical SQL.",
              objectives: [
                "Model a data warehouse with a star schema, dimensions and facts",
                "Extract, transform and load data with Python and pandas",
                "Write analytical SQL, including ROLLUP, CUBE and window functions",
                "Carry out OLAP operations and report results through a mini-project"
              ],
              approach: "Each notion presented in the lecture is implemented in the following lab session.",
              team: [
                { name: "Samawel Jaballi", role: "Course coordinator and lecturer", me: true }
              ],
              sessions: [
                { n: 1, title: "Introduction à l'informatique décisionnelle", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S01-CM-introduction.pdf", kind: "slides", pages: 33 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S01-TP-introduction.pdf", kind: "solutions", pages: 18 }] },
                { n: 2, title: "Le modèle multidimensionnel", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S02-CM-modele.pdf", kind: "slides", pages: 31 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S02-TP-modele.pdf", kind: "solutions", pages: 18 }] },
                { n: 3, title: "Les dimensions", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S03-CM-dimensions.pdf", kind: "slides", pages: 29 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S03-TP-dimensions.pdf", kind: "solutions", pages: 17 }] },
                { n: 4, title: "Tables de faits et mesures", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S04-CM-faits.pdf", kind: "slides", pages: 28 }, { label: "Lab sheet", url: "files/courses/2022-2023/dw-fsm-2022/S04-TP-faits-etudiant.pdf", kind: "exercises", pages: 7 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S04-TP-faits.pdf", kind: "solutions", pages: 17 }] },
                { n: 5, title: "Extraction et transformation avec Python", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S05-CM-extraction.pdf", kind: "slides", pages: 30 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S05-TP-extraction.pdf", kind: "solutions", pages: 17 }] },
                { n: 6, title: "Chargement et qualité des données", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S06-CM-chargement.pdf", kind: "slides", pages: 24 }, { label: "Lab sheet", url: "files/courses/2022-2023/dw-fsm-2022/S06-TP-chargement-etudiant.pdf", kind: "exercises", pages: 7 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S06-TP-chargement.pdf", kind: "solutions", pages: 15 }] },
                { n: 7, title: "SQL pour l'analyse", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S07-CM-sql-analyse.pdf", kind: "slides", pages: 24 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S07-TP-sql-analyse.pdf", kind: "solutions", pages: 16 }] },
                { n: 8, title: "Fonctions de fenêtrage", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S08-CM-fenetres.pdf", kind: "slides", pages: 24 }, { label: "Lab sheet", url: "files/courses/2022-2023/dw-fsm-2022/S08-TP-fenetres-etudiant.pdf", kind: "exercises", pages: 7 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S08-TP-fenetres.pdf", kind: "solutions", pages: 17 }] },
                { n: 9, title: "Opérations OLAP et restitution", type: "CM", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S09-CM-olap.pdf", kind: "slides", pages: 21 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S09-TP-olap.pdf", kind: "solutions", pages: 17 }] },
                { n: 10, title: "Mini-projet : du besoin au schéma en étoile", type: "Project", files: [{ label: "Lecture slides", url: "files/courses/2022-2023/dw-fsm-2022/S10-CM-projet.pdf", kind: "slides", pages: 23 }, { label: "Lab sheet", url: "files/courses/2022-2023/dw-fsm-2022/S10-TP-projet-etudiant.pdf", kind: "exercises", pages: 9 }, { label: "Lab with solutions", url: "files/courses/2022-2023/dw-fsm-2022/S10-TP-projet.pdf", kind: "solutions", pages: 18 }] },
                { n: 11, title: "Révisions : synthèse et exercices types", type: "CM", files: [{ label: "Slides", url: "files/courses/2022-2023/dw-fsm-2022/S11-CM-revisions.pdf", kind: "slides", pages: 28 }] }
              ],
              extras: []
            }
          ] }
      ] }
  ],

  supervision: [
    { level: "MSc", period: "Jan. 2026 – present", start: "2026-01", ongoing: true, institution: "RLANTIS / Faculty of Sciences, University of Monastir", mode: "Hybrid",
      role: "Co-supervisor", with: "Mounir Zrigui",
      topic: "Multimodal Architectures for Computer-Aided Radiology Report Generation",
      summary: "Methodological design and experiments on multimodal models for chest X-ray report generation (triple-memory decoding, constrained gating, visual–text alignment).", outcome: null },
    { level: "MSc", period: "Jan. 2026 – present", start: "2026-01", ongoing: true, institution: "RLANTIS / Faculty of Sciences, University of Monastir", mode: "On-site",
      role: "Co-supervisor", with: "Mounir Zrigui",
      topic: "Hallucination Detection and Mitigation in Multimodal Medical AI Systems",
      summary: "Study of hallucinations in multimodal medical AI and a vision–language architecture for their detection and mitigation.", outcome: null },
    { level: "MSc", period: "Sep. 2025 – Jan. 2026", start: "2025-09", institution: "Ravensbourne University London", mode: "Remote",
      role: "Co-supervisor", with: "Ricky Lim",
      topic: "Enhancing Embedding Representations in NLP Models for Informal Digital French Content",
      summary: "Adapting French language models to informal text: noisy corpus construction, embedding-space diagnostics, domain fine-tuning and tokenizer vocabulary extension.", outcome: null },
    { level: "BSc", period: "Jan. – Jun. 2024", start: "2024-01", institution: "RLANTIS / Faculty of Sciences, University of Monastir", mode: "On-site",
      role: "Supervisor", with: "",
      topic: "Whisper-Based Neural Model for Multilingual ASR in COVID-19 Scenarios: Benchmarking on UNESCO Podcasts",
      summary: "From literature review to data augmentation, MFCC features, fine-tuning and benchmarking of transformer models; the adapted Whisper model reached 9% WER and led to a multilingual transcription application.", outcome: null },
    { level: "BSc", period: "Jan. – Jun. 2024", start: "2024-01", institution: "TotalEnergies / Faculty of Sciences, University of Monastir", mode: "Hybrid",
      role: "Supervisor", with: "",
      topic: "Development of a Web Component for a Maritime Logistics Module in an Enterprise Trading Platform",
      summary: "Industry project in full-stack web development (ReactJS, .NET Core), modular design and API integration.", outcome: null },
    { level: "MSc", period: "Jan. – Jun. 2023", start: "2023-01", institution: "RLANTIS / Faculty of Sciences, University of Monastir", mode: "On-site",
      role: "Co-supervisor", with: "Mounir Zrigui",
      topic: "Topic Modeling and Trend Analysis on Informal, Code-Switched Social Media Exchanges",
      summary: "NLP pipeline over 160K informal code-switched texts: hybrid translation, topic modeling (LDA, HDP) and ARIMA trend analysis.",
      outcome: { label: "Journal article, 2024", url: "https://doi.org/10.1155/2024/6669491" } }
  ],

  /* -------------------------------------------------------------------
     ACTIVITIES — chronology of talks, conferences, events and mobility.
     kind: "Conference talk" | "Invited talk" | "Seminar" | "Workshop" |
           "Outreach" | "Event attended" | "Research stay"
     ------------------------------------------------------------------- */
  activities: [
    { eventKey: "coopis-2026", date: "2026-10", kind: "Conference talk", role: "Presenter", title: "Quantifying Clinical Risk in Generative Radiology Reporting: MCRS, A Medical Composite Reliability Score", event: "32nd CoopIS", place: "Angers, France", links: {} },
    { eventKey: "iccci-2026", date: "2026-09", kind: "Conference talk", role: "Presenter", title: "When Silence Matters: How VAD-driven Whisper Architectures Reshape Temporal Alignment in Low-Resource Multilingual ASR", event: "18th ICCCI", place: "Heraklion, Greece", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-36868-3_25" } },
    { eventKey: "iccci-2026", date: "2026-09", kind: "Conference talk", role: "Presenter", title: "A Hybrid E-Learning Recommendation System Incorporating User Reviews and Ratings for Enhanced Course Selection", event: "18th ICCCI", place: "Heraklion, Greece", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-37933-7_4" } },
    { eventKey: "codit-2026", date: "2026-07", kind: "Conference talk", role: "Presenter", title: "Toward a Unified Multimodal Framework for Chest X-Ray Analysis: A Hybrid Convolutional–State Space Approach", event: "12th CoDIT", place: "Bari, Italy", links: { paper: "https://ieeexplore.ieee.org/document/11631022" } },
    { eventKey: "codit-2026", date: "2026-07", kind: "Conference talk", role: "Presenter", title: "TUNIPROD: An Optimized ProdLDA-Based Multi-Stage Framework for Cross-Lingual Topic Modeling of Code-Switched Public Discourse", event: "12th CoDIT", place: "Bari, Italy", links: { paper: "https://ieeexplore.ieee.org/document/11631297" } },
    { eventKey: "pepite-2026", date: "2026-05", kind: "Invited talk", role: "Invited speaker; organizing committee member as a past prize-winner", title: "Bridging PhD research and industry", isDescription: true, event: "PEPITE France Annual Student-Entrepreneurship Day (PEIPS)", place: "Université Paris-Saclay", links: {} },
    { eventKey: "gdrtal-2025", date: "2025-12", kind: "Invited talk", role: "Invited speaker", title: "Low-resource dialect normalization (postdoctoral research)", isDescription: true, event: "Thematic Day on Low-Resource NLP, GDR TAL (CNRS)", place: "Grenoble, France", links: {} },
    { eventKey: "iccci-2025", date: "2025-11", kind: "Conference talk", role: "Presenter", title: "ResNet-Based Pandemic Keyword Spotting in Continuous Multilingual Speech: A Study in UNESCO's Audio Messages for Rapid Health Response", event: "17th ICCCI", place: "Ho Chi Minh City, Vietnam", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-10209-6_6" } },
    { eventKey: "sle-2025", date: "2025-08", kind: "Event attended", role: "Participant", title: "58th Annual Meeting of the Societas Linguistica Europaea", event: "SLE 2025", place: "Université Bordeaux Montaigne", links: {} },
    { eventKey: "ntis-2025", date: "2025-07", kind: "Research stay", role: "Invited researcher (Jul. – Aug. 2025)", title: "Scoping a survey on cross-lingual aspect-based sentiment analysis; proof of concept adapting a Czech transformer model to informal French", isDescription: true, event: "NTIS Research Centre, University of West Bohemia", place: "Pilsen, Czech Republic", links: {} },
    { eventKey: "dlai-2025", date: "2025-04", kind: "Event attended", role: "Participant", title: "“Pie & AI” special meetup hosted by DeepLearning.AI", event: "DeepLearning.AI", place: "Lisbon, Portugal", links: {} },
    { eventKey: "aciids-2024", date: "2024-04", kind: "Conference talk", role: "Presenter", title: "Exploring Unsupervised Word Representation Models and Neural Networks for Informal Multilingual Text against Covid-19 Social Media Content", event: "16th ACIIDS", place: "Ras Al Khaimah, UAE", links: { paper: "https://link.springer.com/chapter/10.1007/978-981-97-4985-0_27" } },
    { eventKey: "semidoc-2024", date: "2024-04", kind: "Seminar", role: "Invited speaker", title: "State-of-the-art survey of NLP approaches for informal and code-switched French text", isDescription: true, event: "AFoDIB Doctoral Seminar (Sémi-doc)", place: "LaBRI, Bordeaux, France", links: {} },
    { eventKey: "afcp-2024", date: "2024-04", kind: "Outreach", role: "Presenter — 4th place and Audience Favourite award", title: "Ten-minute presentation of doctoral research for a non-specialist audience", isDescription: true, event: "AFCP Doctoral Showcase", place: "Avignon, France", links: {} },
    { eventKey: "brainlm-2024", date: "2024-01", kind: "Workshop", role: "Workshop leader", title: "Practical training on cross-lingual aspect-based sentiment analysis for multilingual datasets", isDescription: true, event: "Mini Symposium: Brain & Language Models", place: "Inria Centre at the University of Bordeaux", links: {} },
    { eventKey: "iccci-2023", date: "2023-09", kind: "Conference talk", role: "Presenter", title: "Deep Bidirectional LSTM Network Learning-Based Sentiment Analysis for Tunisian Dialectical Facebook Content During the Spread of the Coronavirus Pandemic", event: "15th ICCCI", place: "Budapest, Hungary", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-41774-0_8" } },
    { eventKey: "edsti-2023", date: "2023-06", kind: "Invited talk", role: "Presenter", title: "First-year doctoral findings on code-switched sentiment analysis", isDescription: true, event: "Annual Doctoral Day, EDSTI", place: "Faculty of Sciences, University of Monastir", links: {} },
    { eventKey: "iccci-2022", date: "2022-09", kind: "Conference talk", role: "Presenter", title: "Sentiment Analysis of Tunisian Users on Social Networks: Overcoming the Challenge of Multilingual Comments in the Tunisian Dialect", event: "14th ICCCI", place: "Hammamet, Tunisia", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-16014-1_15" } }
  ],

  /* ---------- EVENT THUMBNAILS (Activities) ----------
     One entry per event edition, shared by every activity with the same `eventKey`.
       name, year, sub : text of the typographic card (official short name + year)
       url             : official event / institution page ("" = no link)
       image           : optional local file (e.g. "assets/img/events/iccci-2026.webp", 360×240)
                         — leave "" unless reuse of the visual is clearly permitted
       fit             : "contain" for logos, "cover" for photographs
       imageAlt, source, credit : alt text, page the visual was taken from, credit line
  */
  eventMeta: {
    "coopis-2026":  { name: "CoopIS", year: "2026", sub: "32nd edition · Angers", url: "https://coopis.scitevents.org/?y=2026", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "iccci-2026":   { name: "ICCCI", year: "2026", sub: "18th edition · Heraklion", url: "https://iccci.pwr.edu.pl/2026/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "codit-2026":   { name: "CoDIT", year: "2026", sub: "12th edition · Bari", url: "https://www.codit2026.com/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "pepite-2026":  { name: "Pépite PEIPS", year: "2026", sub: "Student entrepreneurship", url: "https://pepite-peips.pepitizy.fr/fr", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "gdrtal-2025":  { name: "GDR TAL", year: "2025", sub: "Thematic day · CNRS", url: "https://gdr-tal.cnrs.fr/evenements/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "iccci-2025":   { name: "ICCCI", year: "2025", sub: "17th edition · Ho Chi Minh City", url: "https://iccci.pwr.edu.pl/2025/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "sle-2025":     { name: "SLE", year: "2025", sub: "58th Annual Meeting", url: "https://societaslinguistica.eu/sle2025/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "ntis-2025":    { name: "NTIS · UWB", year: "2025", sub: "Research stay · Pilsen", url: "https://www.ntis.zcu.cz/en/index.html", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "dlai-2025":    { name: "Pie & AI", year: "2025", sub: "DeepLearning.AI · Lisbon", url: "", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "aciids-2024":  { name: "ACIIDS", year: "2024", sub: "16th edition · Ras Al Khaimah", url: "https://aciids.pwr.edu.pl/2024/index.php", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "semidoc-2024": { name: "Sémi-doc", year: "2024", sub: "AFoDIB · LaBRI", url: "https://afodib.labri.fr/semidoc.html", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "afcp-2024":    { name: "AFCP", year: "2024", sub: "Doctoral showcase", url: "", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "brainlm-2024": { name: "Brain & LMs", year: "2024", sub: "Mini symposium · Inria", url: "", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "iccci-2023":   { name: "ICCCI", year: "2023", sub: "15th edition · Budapest", url: "https://iccci.pwr.edu.pl/2023/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "edsti-2023":   { name: "EDSTI", year: "2023", sub: "Annual Doctoral Day", url: "", image: "", fit: "contain", imageAlt: "", source: "", credit: "" },
    "iccci-2022":   { name: "ICCCI", year: "2022", sub: "14th edition · Hammamet", url: "https://iccci.pwr.edu.pl/2022/", image: "", fit: "contain", imageAlt: "", source: "", credit: "" }
  },

  /* ACADEMIC SERVICE — category: "Chairing & organization" | "Programme committees" | "Reviewing & editorial" | "Memberships" */
  service: [
    { date: "2027-04", category: "Chairing & organization", role: "Track Chair", detail: "Trustworthy Foundation Models and Large Language Models for Low-Resource, Multimodal and Informal NLP (TRUST4NLP)", venue: "19th ACIIDS · Bali, Indonesia" },
    { date: "2027-04", category: "Programme committees", role: "PC Member", detail: "Special Session on Advances in Low-Resource Multimodal, Speech, and Language Processing (LR-MSLP)", venue: "19th ACIIDS · Bali, Indonesia" },
    { date: "2026-09", category: "Programme committees", role: "TPC Member", detail: "", venue: "18th International Conference on Management of Digital Ecosystems · A Coruña, Spain" },
    { date: "2026-03", category: "Programme committees", role: "PC Member", detail: "Special Session on Speech and Text Processing for Low-Resource Languages (STP-LRL)", venue: "18th ICAART · Marbella, Spain" },
    { date: "2026-02", category: "Programme committees", role: "TPC Member", detail: "", venue: "IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan)" },
    { date: "2025-11", category: "Programme committees", role: "Senior PC Member", detail: "Special Session on Artificial Intelligence and Social Dynamics in Online Communities (AISOC)", venue: "17th ICCCI · Ho Chi Minh City, Vietnam" },
    { date: "2025-09", category: "Memberships", role: "Member", detail: "", venue: "Société Informatique de France" },
    { date: "2025-07", until: "present", category: "Reviewing & editorial", role: "Reviewer", detail: "", venue: "Journal of Data Science and Intelligent Systems" },
    { date: "2025-02", until: "Mar. 2025", category: "Reviewing & editorial", role: "Reviewer", detail: "", venue: "Indonesian Journal of Electrical Engineering and Computer Science", source: "LinkedIn" },
    { date: "2024-12", category: "Programme committees", role: "TPC Member", detail: "", venue: "6th International Conference on Soft Computing and its Engineering Applications (icSoftComp 2024)" },
    { date: "2024-09", category: "Reviewing & editorial", role: "Editorial board member", detail: "", venue: "Indonesian Journal of Electrical Engineering and Informatics" },
    { date: "2024-07", until: "present", category: "Reviewing & editorial", role: "Reviewer", detail: "", venue: "Neural Computing and Applications (Springer)" },
    { date: "2024-04", until: "present", category: "Reviewing & editorial", role: "Reviewer", detail: "", venue: "Journal of Ambient Intelligence and Humanized Computing (Springer)" },
    { date: "2024-04", category: "Programme committees", role: "PC Member", detail: "Special Session on ML Approaches and Smart Systems for Content Analysis (MLSS-CA)", venue: "16th ACIIDS" },
    { date: "2024-02", category: "Memberships", role: "Member", detail: "", venue: "Sigma Xi, The Scientific Research Honor Society" },
    { date: "2023-05", category: "Chairing & organization", role: "Organizing committee member", detail: "Doctoral Symposium on Arabic NLP", venue: "RLANTIS · Monastir, Tunisia" }
  ],

  /* -------------------------------------------------------------------
     COLLABORATIONS
     ------------------------------------------------------------------- */
  collaborators: [
    { name: "Mounir Zrigui", org: "RLANTIS, University of Monastir", context: "Joint PhD co-supervisor (2022–2025); co-supervision of master's theses on multimodal radiology report generation, hallucination in medical AI and code-switched topic modeling." },
    { name: "Henri Nicolas", org: "LaBRI, University of Bordeaux", context: "Joint PhD supervisor (2022–2025): multilingual public opinion, speech and topic analysis." },
    { name: "Pavel Král", org: "NTIS Research Centre, University of West Bohemia (Pilsen)", context: "Invited research stay (Jul. – Aug. 2025): cross-lingual aspect-based sentiment analysis and adaptation of a Czech transformer model to informal French." },
    { name: "Ricky Lim", org: "Ravensbourne University London", context: "Co-supervision of an MSc thesis on embedding representations for informal digital French (2025–2026)." },
    { name: "Frédéric Ferraty", org: "Statistics & Optimization Team, Institut de Mathématiques de Toulouse", context: "Research internship supervision (2022): the NLQCTA linguistic–quantitative corpus." }
  ],
  openTopics: [
    { title: "Maghrebi Arabic & Arabizi", text: "Normalization, transliteration and cross-script transfer for dialectal and code-switched text." },
    { title: "Low-resource speech", text: "Multilingual ASR, keyword spotting, voice activity detection and data augmentation." },
    { title: "Multimodal & self-supervised models", text: "Speech–text fusion and cross-modal alignment for informal content." },
    { title: "Opinion & discourse analysis", text: "Sentiment, topics and trends in multilingual social media, with knowledge graphs and GNNs." },
    { title: "Reproducible evaluation", text: "Pre-registered protocols, robustness and reliability assessment of NLP systems." }
  ],
  studentNote: "Students interested in a project or thesis topic related to these themes are welcome to get in touch to discuss ideas, scope and feasibility. Please include a short description of your background and interests. This is an invitation to exchange; it does not announce a funded position.",

  experience: [
    { period: "Sep. 2025 – present", title: "ATER — Temporary Teaching and Research Fellow (full-time)", org: "University of Bordeaux & LaBRI", text: "Teaching in the Computer Science Unit; research on dialect normalization, multimodal self-supervised analysis and sentiment analysis with enriched signals." },
    { period: "Jul. – Aug. 2025", title: "Invited Researcher", org: "NTIS Research Centre, University of West Bohemia · Pilsen, Czech Republic", text: "Invited by Pavel Král to scope a survey on cross-lingual aspect-based sentiment analysis and to design a proof of concept adapting a Czech transformer model to informal French.", mobility: true },
    { period: "Feb. 2022 – Jun. 2025", title: "Doctoral Researcher (joint PhD)", org: "LaBRI, University of Bordeaux & RLANTIS, University of Monastir", text: "Topic trend extraction, multilingual speech processing, acoustic and contextual representation learning, and code-switched sentiment analysis. Supervised by Henri Nicolas and Mounir Zrigui." },
    { period: "Jan. – Jun. 2024", title: "Part-time University Lecturer", org: "Private Polytechnic School of Monastir", text: "Data Warehousing and Machine Learning for Software Engineering students." },
    { period: "2022 – 2023", title: "Part-time University Lecturer", org: "Faculty of Sciences, University of Monastir", text: "Python programming, relational databases and data warehousing." },
    { period: "May – Oct. 2022", title: "Data Engineer Intern", org: "Statistics & Optimization Team, Institut de Mathématiques de Toulouse", text: "Data pipeline for a linguistic–quantitative corpus combining over 8,000 French press articles with longitudinal public-health data. Supervised by Frederic Ferraty.", mobility: true },
    { period: "May – Oct. 2021", title: "Master's Thesis Researcher", org: "RLANTIS, University of Monastir", text: "Bi-LSTM pipeline for Tunisian dialect sentiment analysis with a multilingual benchmark corpus. Supervised by Mounir Zrigui." }
  ],

  education: [
    { period: "2022 – 2025", title: "PhD in Computer Science — joint supervision (cotutelle)", org: "University of Bordeaux (Doctoral School of Mathematics & Computer Science, LaBRI) and University of Monastir (Doctoral School of Information Science & Technology, RLANTIS)", text: "Bordeaux: “Extraction, Transcription, and Analysis of Multilingual Public Opinions from Social Media Networks”. Monastir: “Data Mining and Social Media Analysis: Applications related to Pandemic Governance”.", link: { label: "Thesis on HAL (in French)", url: "https://tel.archives-ouvertes.fr/tel-05228560" } },
    { period: "2019 – 2021", title: "MSc in Modeling of Automatic Reasoning Systems", org: "Faculty of Sciences, University of Monastir", text: "First-class honours; specialization in natural language processing." },
    { period: "2016 – 2019", title: "BSc in Computer Science", org: "Faculty of Sciences, University of Monastir", text: "Highest honours." }
  ],

  /* kind: "award" | "nomination" | "shortlist" | "grant" */
  awards: [
    { date: "2025-09", kind: "nomination", title: "Best Student Paper Award — nomination", org: "ICCCI 2025 · Ho Chi Minh City, Vietnam", text: "Paper acknowledged by the programme committee for its originality and applied contribution to public-health communication.", link: "https://link.springer.com/chapter/10.1007/978-3-032-10209-6_6" },
    { date: "2025-06", kind: "grant", title: "Travel grant", org: "LaBRI", text: "Merit-based support to present a peer-reviewed paper at the 17th ICCCI." },
    { date: "2024-12", kind: "award", title: "Second Prize — PEPITE ECA Doctoral–Enterprise Challenge", org: "OpenCampusInnov · La Rochelle", text: "“Print My Boat” project, a team of four PhD candidates from the universities of Bordeaux, La Rochelle and Pau." },
    { date: "2024-10", kind: "shortlist", title: "Semi-finalist — Young Researchers' Scientific Day", org: "Bordeaux Population Health, University of Bordeaux", text: "Advanced through five thematic Q&A round tables." },
    { date: "2024-04", kind: "award", title: "4th Place and Audience Favourite Award — Doctoral Showcase", org: "AFCP (Association Francophone de la Communication Parlée) · Avignon", text: "Ten-minute presentation of doctoral research to a non-specialist audience." },
    { date: "2023-02", kind: "grant", title: "Alternance award for joint PhD studies", org: "University of Monastir", text: "Social and financial coverage six months per year for the entire doctoral programme." },
    { date: "2021-12", kind: "award", title: "Prize for the best university average — MSc in Computer Science", org: "Faculty of Sciences of Monastir", text: "Ranked first in the MSc programme." }
  ],

  skills: [
    { label: "Programming", value: "Python (advanced), C/C++, Java, OCaml" },
    { label: "Data", value: "SQL, MySQL, PostgreSQL, PL/SQL, NoSQL; data modeling and large-scale data handling" },
    { label: "Teaching tools", value: "Moodle, LaTeX" },
    { label: "Methods", value: "UML, Scrum, Git" },
    { label: "Certificates", value: "Prompt Engineering Specialization (Vanderbilt University, 2024); IBM Data Science Professional Certificate (2024); IBM AI Engineering Professional Certificate (2024)" },
    { label: "Languages", value: "Arabic (native), French (fluent), English (professional working proficiency)" }
  ],

  /* Photo cards — only images you own or with clear provenance:
     { src: "assets/img/xxx.jpg", alt: "...", caption: "...", credit: "Photo: ..." } */
  photos: [],

  contact: {
    lines: ["LaBRI — Office 121", "Cours de la Libération", "F-33405 Talence Cedex, France"],
    email: "samawel.jaballi@u-bordeaux.fr"
  },

  /* Backdrop: empty = built-in illustrated landscape; or a photo you own. */
  backdrop: "",

  lastUpdated: "2026-11"
};
