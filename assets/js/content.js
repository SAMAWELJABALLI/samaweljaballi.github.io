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
    photo: "",                       // e.g. "assets/img/portrait.jpg" — empty = initials
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
    { label: "Google Scholar", short: "Scholar", url: "https://scholar.google.com/citations?user=E26mCFgAAAAJ" },
    { label: "DBLP", short: "DBLP", url: "https://dblp.org/pid/329/2078.html" },
    { label: "ORCID", short: "ORCID", url: "https://orcid.org/0000-0002-6096-6048" },
    { label: "GitHub", short: "GitHub", url: "https://github.com/SAMAWELJABALLI" },
    { label: "LinkedIn", short: "LinkedIn", url: "https://www.linkedin.com/in/samaweljaballi" },
    { label: "Credly (certificates)", short: "Credly", url: "https://www.credly.com/users/samawel-jaballi" }
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
     ------------------------------------------------------------------- */
  publications: [
    { id: "iccci26-vad", year: 2026, date: "2026-09", status: "published", type: "Conference",
      authors: ["Samawel Jaballi", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "When Silence Matters: How VAD-Driven Whisper Architectures Reshape Temporal Alignment in Low-Resource Multilingual ASR",
      venue: "Computational Collective Intelligence (ICCCI 2026), Lecture Notes in Computer Science (LNAI), vol. 16908, pp. 362–375", venueShort: "ICCCI 2026",
      cite: { book: "Computational Collective Intelligence (ICCCI 2026)", series: "LNAI", volume: "16908", pages: "362–375", publisher: "Springer", year: "2027" },
      summary: "Examines how voice-activity detection combined with optimized Whisper pipelines affects temporal alignment in multilingual, low-resource speech recognition.",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-36868-3_25", doi: "10.1007/978-3-032-36868-3_25" }, axes: ["speech"] },
    { id: "coopis26-mcrs", year: 2026, date: "2026-09", status: "accepted", type: "Conference",
      authors: ["W. Tlili", "Samawel Jaballi", "et al."], authorsComplete: false,
      title: "Quantifying Clinical Risk in Generative Radiology Reporting: MCRS, A Medical Composite Reliability Score",
      venue: "32nd International Conference on Cooperative Information Systems (CoopIS 2026)", venueShort: "CoopIS 2026",
      summary: "", links: {}, axes: ["multimodal"] },
    { id: "iccci26-elearn", year: 2026, date: "2026-09", status: "published", type: "Conference",
      authors: ["Manar Joundy Hazar", "Samawel Jaballi", "Mohsen Maraoui", "Mounir Zrigui", "Henri Nicolas"], authorsComplete: true,
      title: "A Hybrid E-Learning Recommendation System Incorporating User Reviews and Ratings for Enhanced Course Selection",
      venue: "Advances in Computational Collective Intelligence (ICCCI 2026), Communications in Computer and Information Science, vol. 3043, pp. 49–69", venueShort: "ICCCI 2026",
      cite: { book: "Advances in Computational Collective Intelligence (ICCCI 2026)", series: "CCIS", volume: "3043", pages: "49–69", publisher: "Springer", year: "2027" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-37933-7_4", doi: "10.1007/978-3-032-37933-7_4" }, axes: ["social"] },
    { id: "codit26-cxr", year: 2026, date: "2026-07", status: "published", type: "Conference",
      authors: ["Adjia Ndeye Penda Dieng", "Samawel Jaballi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Toward a Unified Multimodal Framework for Chest X-ray Analysis: A Hybrid Convolutional–State Space Approach",
      venue: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT), pp. 3034–3039", venueShort: "CoDIT 2026",
      cite: { book: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT)", pages: "3034–3039", publisher: "IEEE", year: "2026" },
      summary: "", links: { paper: "https://ieeexplore.ieee.org/document/11631022", doi: "10.1109/CoDIT70676.2026.11631022" }, axes: ["multimodal"] },
    { id: "codit26-tuniprod", year: 2026, date: "2026-07", status: "published", type: "Conference",
      authors: ["Azer Mahjoubi", "Samawel Jaballi", "Mounir Zrigui"], authorsComplete: true,
      title: "TUNIPROD: An Optimized ProdLDA-Based Multi-Stage Framework for Cross-Lingual Topic Modeling of Code-Switched Public Discourse",
      venue: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT), pp. 3298–3303", venueShort: "CoDIT 2026",
      cite: { book: "2026 12th International Conference on Control, Decision and Information Technologies (CoDIT)", pages: "3298–3303", publisher: "IEEE", year: "2026" },
      summary: "", links: { paper: "https://ieeexplore.ieee.org/document/11631297", doi: "10.1109/CoDIT70676.2026.11631297" }, axes: ["social", "dialect"] },
    { id: "iccci25-kws", year: 2025, date: "2025-11", status: "published", type: "Conference",
      authors: ["Samawel Jaballi", "Manar Joundy Hazar", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "ResNet-Based Pandemic Keyword Spotting in Continuous Multilingual Speech: A Study in UNESCO's Audio Messages for Rapid Health Response",
      venue: "Advances in Computational Collective Intelligence (ICCCI 2025), Communications in Computer and Information Science, vol. 2748, pp. 76–91", venueShort: "ICCCI 2025",
      cite: { book: "Advances in Computational Collective Intelligence (ICCCI 2025)", series: "CCIS", volume: "2748", pages: "76–91", publisher: "Springer", year: "2026" },
      note: "Nominated for the Best Student Paper Award",
      summary: "Combines a ResNet architecture with acoustic (MFCC) and contextual (M-BERT) representations to detect critical keywords in continuous multilingual speech, using UNESCO public-health audio messages.",
      links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-10209-6_6", doi: "10.1007/978-3-032-10209-6_6" }, axes: ["speech"] },
    { id: "aciids24-embed", year: 2024, date: "2024-04", status: "published", type: "Conference",
      authors: ["Samawel Jaballi", "Salah Zrigui", "Manar Joundy Hazar", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Exploring Unsupervised Word Representations Models and Neural Networks for Informal Multilingual Text Against Covid-19 Social Media Content",
      venue: "Intelligent Information and Database Systems (ACIIDS 2024), Lecture Notes in Computer Science (LNAI), vol. 14796, pp. 347–359", venueShort: "ACIIDS 2024",
      cite: { book: "Intelligent Information and Database Systems (ACIIDS 2024)", series: "LNAI", volume: "14796", pages: "347–359", publisher: "Springer", year: "2024" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-981-97-4985-0_27", doi: "10.1007/978-981-97-4985-0_27" }, axes: ["dialect", "social"] },
    { id: "jece24-topics", year: 2024, date: "2024-01", status: "published", type: "Journal",
      authors: ["Samawel Jaballi", "Manar Joundy Hazar", "Salah Zrigui", "Azer Mahjoubi", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Decoding Multilingual Topic Dynamics and Trend Identification through ARIMA Time Series Analysis on Social Networks: A Novel Data Translation Framework Enhanced by LDA/HDP Models",
      venue: "Journal of Electrical and Computer Engineering, vol. 2024, article 6669491", venueShort: "J. Electr. Comput. Eng.",
      cite: { journal: "Journal of Electrical and Computer Engineering", volume: "2024", article: "6669491", year: "2024" },
      summary: "Analyses about 160K informal, code-switched social media texts through hybrid translation into English, topic modeling (LDA, HDP) and ARIMA-based trend analysis.",
      links: { paper: "https://onlinelibrary.wiley.com/doi/10.1155/2024/6669491", doi: "10.1155/2024/6669491", preprint: "https://arxiv.org/abs/2403.15445" }, axes: ["social", "dialect"] },
    { id: "iccci23-bilstm", year: 2023, date: "2023-09", status: "published", type: "Conference",
      authors: ["Samawel Jaballi", "Manar Joundy Hazar", "Salah Zrigui", "Henri Nicolas", "Mounir Zrigui"], authorsComplete: true,
      title: "Deep Bidirectional LSTM Network Learning-Based Sentiment Analysis for Tunisian Dialectical Facebook Content During the Spread of the Coronavirus Pandemic",
      venue: "Advances in Computational Collective Intelligence (ICCCI 2023), Communications in Computer and Information Science, vol. 1864, pp. 96–109", venueShort: "ICCCI 2023",
      cite: { book: "Advances in Computational Collective Intelligence (ICCCI 2023)", series: "CCIS", volume: "1864", pages: "96–109", publisher: "Springer", year: "2023" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-41774-0_8", doi: "10.1007/978-3-031-41774-0_8" }, axes: ["dialect", "social"] },
    { id: "iccci22-tunisian", year: 2022, date: "2022-09", status: "published", type: "Conference",
      authors: ["Samawel Jaballi", "Salah Zrigui", "Mohamed Ali Sghaier", "Dhaou Berchech", "Mounir Zrigui"], authorsComplete: true,
      title: "Sentiment Analysis of Tunisian Users on Social Networks: Overcoming the Challenge of Multilingual Comments in the Tunisian Dialect",
      venue: "Computational Collective Intelligence (ICCCI 2022), Lecture Notes in Computer Science (LNAI), vol. 13501, pp. 176–192", venueShort: "ICCCI 2022",
      cite: { book: "Computational Collective Intelligence (ICCCI 2022)", series: "LNAI", volume: "13501", pages: "176–192", publisher: "Springer", year: "2022" },
      summary: "", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-16014-1_15", doi: "10.1007/978-3-031-16014-1_15" }, axes: ["dialect", "social"] },

    { id: "tip-mafnet", year: 2026, date: "2026-04", status: "submitted", type: "Journal",
      authors: ["A. N. P. Dieng", "Samawel Jaballi", "et al."], authorsComplete: false,
      title: "MAF-Net: A Unified Hybrid Convolutional–SSM Framework for Multimodal Chest X-ray Triage, Segmentation, and Automated Reporting",
      venue: "Submitted to IEEE Transactions on Image Processing", venueShort: "IEEE TIP (submitted)", summary: "", links: {}, axes: ["multimodal"] },
    { id: "eswa-triple", year: 2026, date: "2026-04", status: "submitted", type: "Journal",
      authors: ["A. N. P. Dieng", "Samawel Jaballi", "et al."], authorsComplete: false,
      title: "Breaking the Multimodal Shortcut: A Triple-Memory Decoder with Constrained Gating for Radiology Report Generation",
      venue: "Submitted to Expert Systems with Applications", venueShort: "ESWA (submitted)", summary: "", links: {}, axes: ["multimodal"] },
    { id: "csl-augment", year: 2025, date: "2025-06", status: "under-review", type: "Journal",
      authors: [], authorsComplete: false,
      title: "Unsupervised Approach for Augmenting Low-Resource UNESCO Multilingual COVID-19 Audio Dataset for Speech Recognition Tasks (from ~30 Minutes to 6 Hours)",
      venue: "Under review at Computer Speech & Language", venueShort: "CSL (under review)", summary: "", links: {}, axes: ["speech"] },
    { id: "mtap-adaboost", year: 2024, date: "2024-02", status: "under-review", type: "Journal",
      authors: [], authorsComplete: false,
      title: "Analyzing Multilingual Conversations During COVID-19: An Imbalanced Class-Ensemble Learning Approach with Reweighted AdaBoost-SVM for Code-Switched Text Classification",
      venue: "Under review at Multimedia Tools and Applications", venueShort: "MTAP (under review)",
      summary: "Hybrid architecture combining Bi-LSTM and a reweighted AdaBoost-SVM ensemble with cost-sensitive learning, for opinion classification in imbalanced, multilingual and dialectal data.",
      links: { preprint: "https://www.researchgate.net/publication/378498085_Analyzing_Multilingual_Conversations_During_COVID-19_An_Imbalanced_Class-Ensemble_Learning_Approach_with_Reweighted_AdaBoost-SVM_for_Code-Switched_Text_Classification" }, axes: ["dialect", "social"] }
  ],

  /* -------------------------------------------------------------------
     PROJECTS — stage: "ongoing" | "completed"
     Statuses are quoted from the repositories / CV; nothing is inferred.
     ------------------------------------------------------------------- */
  projects: [
    { id: "formal", stage: "ongoing", period: "2026", title: "FORMAL — pair provenance and cross-script transfer in Maghrebi Arabic",
      status: "Manuscript prepared for submission to ACM TALLIP — not yet peer reviewed, accepted or published",
      problem: "Multilingual sentence encoders place Arabic-script and Latin-script (Arabizi) renderings of Maghrebi Arabic in partly separate regions, so classifiers trained on Arabic script lose accuracy on Arabizi.",
      approach: "A lightweight projection removes the leading directions of paired embedding differences. The study asks where the pairs should come from, comparing human renderings of 998 Algerian Arabizi sentences with rule-based, dictionary-based and neural transliterations, on three frozen encoders and four classification tasks, under a pre-registered protocol with a single test evaluation.",
      role: "Author of the manuscript and of the research code",
      axes: ["dialect"],
      resources: [{ label: "Code, protocols & archived results (MIT licence)", url: "https://github.com/SAMAWELJABALLI/formal-cross-script-transfer" }] },
    { id: "selectnorm", stage: "ongoing", period: "2026", title: "SelectNorm — per-input normalization for Arabizi with frozen encoders",
      status: "Manuscript in preparation for submission to ACIIDS 2027 — not yet peer reviewed",
      problem: "Transliterating Arabizi into Arabic script repairs some inputs and damages others (French and English tokens, negation, rare spellings, dialect differences), so unconditional normalization can help one corpus and hurt another.",
      approach: "Decides per input whether to classify the original or the normalized view, by factorizing the expected benefit into disagreement detection, which needs no labels, and conditional advantage, with a cost-aware decision rule. Evaluated with four frozen encoders on Tunisian, Algerian and Moroccan test sets.",
      role: "",
      axes: ["dialect"],
      resources: [] },
    { id: "diafuse", stage: "ongoing", period: "2026", title: "DiaFuse-PRC — cross-script and cross-dialect sentiment transfer in Maghrebi Arabic",
      status: "Research code accompanying a manuscript in progress; the archived run is provisional, and the DiaFuse-PRC++ extension is pre-registered and partly implemented",
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
    { title: "DiaFuse-PRC", kind: "Research code", text: "Training and evaluation code, model cards and execution status of each system.", licence: "", url: "https://github.com/SAMAWELJABALLI/DiaFuse-PRC" },
    { title: "NLQCTA data analysis", kind: "Analysis", text: "Exploratory figures for the NLQCTA corpus; the corpus itself is not included in the repository.", licence: "", url: "https://github.com/SAMAWELJABALLI/NLQCTA-New-Linguistic-Quantitative-Corpus-based-on-Temporal-Analysis---Data-Analysis" }
  ],

  /* -------------------------------------------------------------------
     TEACHING — one block per academic year (newest first), then per
     institution. Each course (empty fields are not displayed):
       code, title, term
       level:       explicit level, e.g. "Bachelor's degree — 1st year (L1)",
                    "Master's degree — 1st year (M1)"; "" if not confirmed
       roles:       any of "CM", "TD", "TP", "Supervision" (only if documented)
       description: one or two sentences
       objectives:  ["…", "…"]
       topics, tools: ["…"]
       hours:       number, only if documented
       page:        public course page (optional)
       resources:   [{ label: "Lab 1", url: "files/teaching/…/lab1.pdf",
                       kind: "slides" | "exercises" | "solutions" | "notebook" | "project" | "other" }]
     A year with `draft: true` is NOT displayed.
     ------------------------------------------------------------------- */
  teaching: [
    { year: "2026–2027", draft: true,   // ← fill in, then delete `draft: true`
      institutions: [
        { institution: "", unit: "", role: "",
          courses: [
            { code: "", title: "", term: "", level: "", roles: [], description: "", objectives: [], topics: [], tools: [], hours: null, page: "", resources: [] }
          ] }
      ] },
    { year: "2025–2026",
      institutions: [
        { institution: "University of Bordeaux", unit: "College of Science and Technology — Computer Science Unit", role: "ATER (full-time)",
          courses: [
            { code: "4TIN302U", title: "Elementary Data Structures & Algorithms", term: "Semester 1", level: "Bachelor's degree (Licence)", roles: ["CM", "TP"], tools: [], objectives: "", topics: [], hours: null, resources: [] },
            { code: "4TTV109U", title: "Fundamentals of Algorithms and Programming (Info 0)", term: "Semester 1", level: "Bachelor's degree — 1st year (L1)", roles: ["CM", "TP"], tools: [], objectives: "", topics: [], hours: null, resources: [] },
            { code: "4TPU146U", title: "Computer Science 1 (Informatique 1) — Introduction to Python", term: "Semester 1", level: "Bachelor's degree — 1st year (L1)", roles: ["CM", "TP"], tools: ["Python"], objectives: "", topics: [], hours: null, resources: [] },
            { code: "4TIN402U", title: "Advanced Data Structures — Trees & Graphs in OCaml", term: "Semester 2", level: "", roles: [], tools: ["OCaml"], objectives: "", topics: ["Trees", "Graphs"], hours: null, resources: [] },
            { code: "4TIN603U", title: "Compilation", term: "Semester 2", level: "", roles: ["TD"], roleNote: "Machine-based tutorial sessions with integrated lectures", tools: [], objectives: "", topics: [], hours: null, resources: [] },
            { code: "4TIN802U", title: "Master's Programming Project", term: "Semester 2", level: "Master's degree", roles: ["Supervision"], roleNote: "Supervision of student programming projects", tools: [], objectives: "", topics: [], hours: null, resources: [] }
          ] }
      ] },
    { year: "2023–2024",
      institutions: [
        { institution: "Private Polytechnic School of Monastir", unit: "Software Engineering programme", role: "Part-time lecturer",
          courses: [
            { code: "", title: "Data Warehousing", term: "Semester 2 · evening course", level: "Engineering degree — 5th year", roles: ["CM", "TP"], tools: [], objectives: "", topics: [], hours: null, resources: [] },
            { code: "", title: "Machine Learning", term: "Semester 2", level: "Engineering degree — 4th year", roles: ["CM", "TP"], tools: [], objectives: "", topics: [], hours: null, resources: [] }
          ] }
      ] },
    { year: "2022–2023",
      institutions: [
        { institution: "Faculty of Sciences, University of Monastir", unit: "Department of Computer Science", role: "Part-time lecturer",
          courses: [
            { code: "", title: "Advanced Python Programming", term: "Semester 1", level: "Bachelor's degree (Licence)", roles: ["TP"], tools: ["Python"], objectives: "", topics: [], hours: null, resources: [] },
            { code: "", title: "Relational Databases", term: "Semester 1", level: "Bachelor's degree (Licence)", roles: ["TP"], tools: ["SQL"], objectives: "", topics: [], hours: null, resources: [] },
            { code: "", title: "Data Warehousing", term: "Semester 2", level: "Bachelor's degree — 3rd year (L3)", roles: ["CM", "TP"], tools: ["SQL", "Python"], objectives: "", topics: [], hours: null, resources: [] }
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
    { date: "2026-09", kind: "Conference talk", role: "Presenter", title: "When Silence Matters: How VAD-driven Whisper Architectures Reshape Temporal Alignment in Low-Resource Multilingual ASR", event: "18th ICCCI", place: "Heraklion, Greece", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-36868-3_25" } },
    { date: "2026-09", kind: "Conference talk", role: "Presenter", title: "A Hybrid E-Learning Recommendation System Incorporating User Reviews and Ratings for Enhanced Course Selection", event: "18th ICCCI", place: "Heraklion, Greece", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-37933-7_4" } },
    { date: "2026-07", kind: "Conference talk", role: "Presenter", title: "Toward a Unified Multimodal Framework for Chest X-Ray Analysis: A Hybrid Convolutional–State Space Approach", event: "12th CoDIT", place: "Bari, Italy", links: { paper: "https://ieeexplore.ieee.org/document/11631022" } },
    { date: "2026-07", kind: "Conference talk", role: "Presenter", title: "TUNIPROD: An Optimized ProdLDA-Based Multi-Stage Framework for Cross-Lingual Topic Modeling of Code-Switched Public Discourse", event: "12th CoDIT", place: "Bari, Italy", links: { paper: "https://ieeexplore.ieee.org/document/11631297" } },
    { date: "2026-05", kind: "Invited talk", role: "Invited speaker; organizing committee member as a past prize-winner", title: "Bridging PhD research and industry", isDescription: true, event: "PEPITE France Annual Student-Entrepreneurship Day (PEIPS)", place: "Université Paris-Saclay", links: {} },
    { date: "2025-12", kind: "Invited talk", role: "Invited speaker", title: "Low-resource dialect normalization (postdoctoral research)", isDescription: true, event: "Thematic Day on Low-Resource NLP, GDR TAL (CNRS)", place: "Grenoble, France", links: {} },
    { date: "2025-11", kind: "Conference talk", role: "Presenter", title: "ResNet-Based Pandemic Keyword Spotting in Continuous Multilingual Speech: A Study in UNESCO's Audio Messages for Rapid Health Response", event: "17th ICCCI", place: "Ho Chi Minh City, Vietnam", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-032-10209-6_6" } },
    { date: "2025-08", kind: "Event attended", role: "Participant", title: "58th Annual Meeting of the Societas Linguistica Europaea", event: "SLE 2025", place: "Université Bordeaux Montaigne", links: {} },
    { date: "2025-07", kind: "Research stay", role: "Invited researcher (Jul. – Aug. 2025)", title: "Scoping a survey on cross-lingual aspect-based sentiment analysis; proof of concept adapting a Czech transformer model to informal French", isDescription: true, event: "NTIS Research Centre, University of West Bohemia", place: "Pilsen, Czech Republic", links: {} },
    { date: "2025-04", kind: "Event attended", role: "Participant", title: "“Pie & AI” special meetup hosted by DeepLearning.AI", event: "DeepLearning.AI", place: "Lisbon, Portugal", links: {} },
    { date: "2024-04", kind: "Conference talk", role: "Presenter", title: "Exploring Unsupervised Word Representation Models and Neural Networks for Informal Multilingual Text against Covid-19 Social Media Content", event: "16th ACIIDS", place: "Ras Al Khaimah, UAE", links: { paper: "https://link.springer.com/chapter/10.1007/978-981-97-4985-0_27" } },
    { date: "2024-04", kind: "Seminar", role: "Invited speaker", title: "State-of-the-art survey of NLP approaches for informal and code-switched French text", isDescription: true, event: "AFoDIB Doctoral Seminar (Sémi-doc)", place: "LaBRI, Bordeaux, France", links: {} },
    { date: "2024-04", kind: "Outreach", role: "Presenter — 4th place and Audience Favourite award", title: "Ten-minute presentation of doctoral research for a non-specialist audience", isDescription: true, event: "AFCP Doctoral Showcase", place: "Avignon, France", links: {} },
    { date: "2024-01", kind: "Workshop", role: "Workshop leader", title: "Practical training on cross-lingual aspect-based sentiment analysis for multilingual datasets", isDescription: true, event: "Mini Symposium: Brain & Language Models", place: "Inria Centre at the University of Bordeaux", links: {} },
    { date: "2023-09", kind: "Conference talk", role: "Presenter", title: "Deep Bidirectional LSTM Network Learning-Based Sentiment Analysis for Tunisian Dialectical Facebook Content During the Spread of the Coronavirus Pandemic", event: "15th ICCCI", place: "Budapest, Hungary", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-41774-0_8" } },
    { date: "2023-06", kind: "Invited talk", role: "Presenter", title: "First-year doctoral findings on code-switched sentiment analysis", isDescription: true, event: "Annual Doctoral Day, EDSTI", place: "Faculty of Sciences, University of Monastir", links: {} },
    { date: "2022-09", kind: "Conference talk", role: "Presenter", title: "Sentiment Analysis of Tunisian Users on Social Networks: Overcoming the Challenge of Multilingual Comments in the Tunisian Dialect", event: "14th ICCCI", place: "Hammamet, Tunisia", links: { paper: "https://link.springer.com/chapter/10.1007/978-3-031-16014-1_15" } }
  ],

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
    { name: "Nicolas Henri", org: "LaBRI, University of Bordeaux", context: "Joint PhD supervisor (2022–2025): multilingual public opinion, speech and topic analysis." },
    { name: "Pavel Kral", org: "NTIS Research Centre, University of West Bohemia (Pilsen)", context: "Invited research stay (Jul. – Aug. 2025): cross-lingual aspect-based sentiment analysis and adaptation of a Czech transformer model to informal French." },
    { name: "Ricky Lim", org: "Ravensbourne University London", context: "Co-supervision of an MSc thesis on embedding representations for informal digital French (2025–2026)." },
    { name: "Frederic Ferraty", org: "Statistics & Optimization Team, Institut de Mathématiques de Toulouse", context: "Research internship supervision (2022): the NLQCTA linguistic–quantitative corpus." }
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
    { period: "Jul. – Aug. 2025", title: "Invited Researcher", org: "NTIS Research Centre, University of West Bohemia · Pilsen, Czech Republic", text: "Invited by Pavel Kral to scope a survey on cross-lingual aspect-based sentiment analysis and to design a proof of concept adapting a Czech transformer model to informal French.", mobility: true },
    { period: "Feb. 2022 – Jun. 2025", title: "Doctoral Researcher (joint PhD)", org: "LaBRI, University of Bordeaux & RLANTIS, University of Monastir", text: "Topic trend extraction, multilingual speech processing, acoustic and contextual representation learning, and code-switched sentiment analysis. Supervised by Nicolas Henri and Mounir Zrigui." },
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
