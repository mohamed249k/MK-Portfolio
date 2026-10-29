/**
 * Mohamed Karam | MK Dev Portfolio
 * Architecture, Curated Inventory & Interactive 3D Depth Field
 * 2026 Edition
 */

// ==========================================================================
// 1. AUTHENTIC CERTIFICATE DATA (PRESERVED & VERIFIED)
// ==========================================================================
const certificateData = [
  {
    title: "Red Hat System Administration",
    issuer: "ITI Platform / Mahara-Tech",
    date: "20/11/2024",
    duration: "45 Hours, 47 Minutes",
    verificationCode: "rdBSe12S2B",
    description: "Comprehensive professional certification in Linux operating system fundamentals, shell commands, user and group management, permissions, systemd services, storage configuration, and server administration.",
    image: "imag/sg2.jpg"
  },
  {
    title: "Certified Ethical Hacking",
    issuer: "ITI Platform / Mahara-Tech",
    date: "26/11/2024",
    duration: "33 Hours, 43 Minutes",
    verificationCode: "RdBST521D6F",
    description: "Practical credential covering penetration testing fundamentals, vulnerability assessment, network reconnaissance, attack surface analysis, authentication bypass mechanisms, and defensive counter-strategies.",
    image: "imag/sg22.jpg"
  },
  {
    title: "Front-end programming",
    issuer: "ITI Platform / Mahara-Tech",
    date: "23/11/2024",
    duration: "17 Hours, 45 Minutes",
    verificationCode: "RdBST521D6F",
    description: "Core front-end development certification validating proficiency in semantic HTML5 markup, modern CSS3 styling, responsive grid & flexbox layouts, DOM manipulation, and dynamic client-side JavaScript.",
    image: "imag/sh1.jpg"
  },
  {
    title: "Cyber security basics",
    issuer: "ITI Platform / Mahara-Tech",
    date: "25/11/2024",
    duration: "20 Hours, 47 Minutes",
    verificationCode: "rdBSe5lk8t",
    description: "Foundational cybersecurity certification covering information security principles, threat modeling, cryptographic concepts, network defense protocols, and digital security awareness best practices.",
    image: "imag/sh3.jpg"
  },
  {
    title: "Android Applications",
    issuer: "ITI Platform / Mahara-Tech",
    date: "28/10/2026",
    duration: "33 Hours, 45 Minutes",
    verificationCode: "RdBSTRE552F",
    description: "Professional mobile development certification covering native Android application architecture, UI layout design, activity lifecycles, user interaction, resource management, and mobile engineering best practices.",
    image: "imag/sh66.png"
  },
  {
    title: "Database Fundamentals (SQL)",
    issuer: "ITI Platform / Mahara-Tech",
    date: "10/10/2026",
    duration: "18 Hours, 20 Minutes",
    verificationCode: "RdBSTRWQ22",
    description: "Comprehensive relational database certification covering SQL fundamentals, data manipulation, table relationships, schema design, constraints, normalization, and relational query structures.",
    image: "imag/sh77.png"
  }
];

// ==========================================================================
// 2. CURATED PROJECT INVENTORY
//    Strictly 6 Flagship Featured Projects + Complete Discoverable Archive
// ==========================================================================
const projectData = [
  // ------------------------------------------------------------------------
  // FEATURED 1: KEMET DIGITAL (NEW - VERIFIED)
  // ------------------------------------------------------------------------
  {
    id: "kemet-digital",
    title: "Kemet Digital — Ancient Egypt Interactive Explorer",
    category: ["UI/UX & Interactive Experiences", "Web Development"],
    summary: "A museum-grade digital exploration platform for ancient Egyptian monuments, artifacts, pharaohs, and dynastic history with interactive GIS mapping.",
    description: "Kemet Digital (مستكشف الآثار المصرية) is an interactive cultural platform inspired by the Grand Egyptian Museum. It features an interactive Leaflet.js GIS map with archaeological coordinates across Egypt, a royal museum artifact gallery with high-resolution modal inspection, a pharaonic dynastic timeline, and an international museum atlas tracking Egyptian antiquities worldwide.",
    image: "imag/project-screenshots/kemet-digital.png",
    liveUrl: "https://mohamed249k.github.io/Kemet-Digital/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "GIS Mapping", "Lucide Icons", "Responsive Design"],
    highlights: [
      "Interactive Leaflet.js GIS map with geographic pins for pyramids, temples, and valleys",
      "Royal artifacts gallery with high-resolution lightbox and detailed historical data",
      "Pharaonic dynastic timeline and comprehensive international museum catalog",
      "Atmospheric gold dust particles, Arabic typography (Cairo/Amiri), and Grand Museum aesthetics"
    ],
    featured: true,
    source: "curated"
  },

  // ------------------------------------------------------------------------
  // FEATURED 2: MK-CAF WEB APPLICATION (NEW - VERIFIED)
  // ------------------------------------------------------------------------
  {
    id: "mk-caf-app",
    title: "MK-Caf Web Application",
    category: ["Web Development", "Tools & Productivity"],
    summary: "A single-page specialty coffee e-commerce web application featuring live product search, interactive cart, checkout validation, and localStorage state.",
    description: "MK-Caf is a responsive specialty coffee shop storefront and ordering web application. It features category-based menu exploration (Hot Coffee, Cold Drinks, Desserts, Signature Beverages), instant live search, favorites wishlist, interactive cart with quantity increments and fee calculations, a checkout modal with client-side form validation, and persistent order history tracking using localStorage.",
    image: "imag/project-screenshots/mk-caf-app.png",
    liveUrl: "https://mohamed249k.github.io/MK-Caf-web-application./",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "E-Commerce State", "Client Validation", "Responsive UI"],
    highlights: [
      "Dynamic catalog browsing across multiple beverage and dessert categories with 40+ items",
      "Complete client-side shopping cart state management with real-time total and delivery pricing",
      "Checkout modal with telephone/address validation and generated order receipt tracking (#MK0000)",
      "Dark and light theme toggle with persistent user preferences in browser storage"
    ],
    featured: true,
    source: "curated"
  },

  // ------------------------------------------------------------------------
  // FEATURED 3: CHALLENGE THE GENIUSES (NEW - VERIFIED)
  // ------------------------------------------------------------------------
  {
    id: "challenge-the-geniuses",
    title: "Challenge the Geniuses (تحدي العباقرة)",
    category: ["Educational Projects", "UI/UX & Interactive Experiences"],
    summary: "A gamified trivia and quiz engine featuring 10 progressive difficulty levels, 200 questions, audio feedback, and 25s timers.",
    description: "Challenge the Geniuses (تحدي العباقرة) is a gamified educational application designed to test intellectual capability and general knowledge. It implements a 10-tier progression system where players must answer at least 11 of 20 questions correctly to unlock subsequent levels, accompanied by countdown timers, Web Audio sound effects, instant educational answer explanations, and level completion analytics.",
    image: "imag/project-screenshots/challenge-the-geniuses.png",
    liveUrl: "https://mohamed249k.github.io/Challenge-the-Geniuses/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "LocalStorage", "Gamification Logic", "Timers"],
    highlights: [
      "10 progressive difficulty levels with 200 curated questions across science, history, and culture",
      "25-second question countdown timer with dynamic progress bar and timeout handling",
      "Real-time scoring, wrong-answer counters, audio sound synthesis, and instant educational feedback",
      "Progress persistence in localStorage with level selector and final victory milestone screen"
    ],
    featured: true,
    source: "curated"
  },

  // ------------------------------------------------------------------------
  // FEATURED 4: YAM SEAFOOD MOBILE STOREFRONT (MOBILE APP FLAGSHIP - VERIFIED)
  // ------------------------------------------------------------------------
  {
    id: "yam-seafood-mobile",
    title: "YAM Seafood Mobile Storefront",
    category: ["Mobile Applications", "Web Development"],
    summary: "A cross-platform mobile storefront application engineered with Flutter & Dart and Provider state management. Live link showcases the official responsive web deployment of the mobile application.",
    description: "YAM Seafood is an official mobile storefront engineered in Flutter & Dart, featuring a dedicated responsive web deployment. The project architecture features MultiProvider state management, catalog repository patterns, multi-language localization (Arabic/English), persistent cart state, and verified Android release APK deployment. (Live preview showcases the web version of the mobile application).",
    image: "imag/project-screenshots/yam-seafood-app.png",
    liveUrl: "https://yamseafood.com/",
    githubUrl: "",
    year: 2026,
    technologies: ["Flutter", "Dart", "Provider", "Android APK Build", "Web Deployment", "Localization", "Mobile UI"],
    highlights: [
      "Engineered with Flutter & Dart cross-platform architecture (Android APK & Responsive Web)",
      "Live deployment showcases the official web version of the mobile storefront (https://yamseafood.com/)",
      "MultiProvider reactive architecture for shopping cart and locale management",
      "Catalog repository architecture with asynchronous data handling and local caching",
      "Compiled and verified standalone Android release APK (53.5 MB)"
    ],
    featured: true,
    source: "curated"
  },

  // ------------------------------------------------------------------------
  // FEATURED 5: ASMAK SHAABAN RESTAURANT PLATFORM (COMMERCIAL CLIENT WORK - VERIFIED)
  // ------------------------------------------------------------------------
  {
    id: "shaban-fish-project",
    title: "Asmak Shaaban Restaurant Platform",
    category: ["Web Development", "UI/UX & Interactive Experiences"],
    summary: "A production client website designed and delivered for a renowned Alexandria seafood brand, featuring bilingual menu, table booking, and gallery.",
    description: "Delivered client website for Asmak Shaaban, an established Alexandria seafood culinary landmark founded in 1917. Built with responsive front-end architecture, it delivers a rich visual culinary showcase, categorized fresh catch menu, interactive reservation request flow, location map, and full dark-mode support.",
    image: "imag/prim7.png",
    liveUrl: "https://elmohammady.github.io/Shaban-Fish/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Client Delivery", "Media Optimization"],
    highlights: [
      "Commercial client website successfully delivered and presented for production deployment",
      "Bilingual food menu with fresh seafood categories and pricing",
      "Interactive table reservation request system and location directions",
      "Custom responsive photography gallery optimized for mobile and desktop viewing"
    ],
    featured: true,
    source: "curated"
  },

  // ------------------------------------------------------------------------
  // FEATURED 6: SMART FILE MANAGER (ADVANCED FRONT-END UTILITY - VERIFIED)
  // ------------------------------------------------------------------------
  {
    id: "smart-file-manager",
    title: "Smart File Manager (Desktop Style)",
    category: ["Tools & Productivity", "Web Development"],
    summary: "A desktop-style cloud file manager interface with folder hierarchy, search, tagging, and client-side storage persistence.",
    description: "Smart File Manager is an advanced front-end web utility replicating an operating system file explorer inside the browser. It features hierarchical folder tree navigation, grid and list view toggles, mock file uploads with size and date tracking, tag filtering, and full local state persistence using localStorage.",
    image: "imag/prim3.png",
    liveUrl: "https://mohamed249k.github.io/Smart-File-Manager-Web-Desktop-Style-/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Desktop UI Patterns", "State Management"],
    highlights: [
      "Operating system inspired interface with collapsible folder tree and breadcrumb navigation",
      "Grid and list layout switching with real-time sorting (Name, Date, Size)",
      "File details sidebar with tag management and storage capacity indicator",
      "Persistent state management allowing creation, renaming, and organization of virtual files"
    ],
    featured: true,
    source: "curated"
  },

  // ------------------------------------------------------------------------
  // COMPLETE ARCHIVE PROJECTS (Discoverable via Search, Filters & Projects Hub)
  // ------------------------------------------------------------------------
  {
    id: "event-ticketing-system",
    title: "EventFlow Ticketing & Booking System",
    category: ["Web Development", "Tools & Productivity"],
    summary: "An interactive event booking platform featuring multi-category filtering, real-time search, seat selection, and cart checkout.",
    description: "EventFlow is a commercial-grade event ticketing platform designed for discovering and booking concerts, tech summits, and business conferences. It features real-time category filtering (Music, Tech, Business), instant search, interactive event modal with pricing tiers, shopping cart badge counter, and responsive dark-mode styling.",
    image: "imag/prim2.png",
    liveUrl: "https://mohamed249k.github.io/Event-Ticketing-System/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Cart State", "Dynamic Filtering", "Responsive UI"],
    highlights: [
      "Dynamic multi-category filtering and real-time search across event listings",
      "Interactive ticket modal with date, venue, speaker highlights, and pricing breakdown",
      "Client-side cart state management with live item badge and total price computation"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "visual-database-designer",
    title: "Visual Database Designer",
    category: ["Tools & Productivity", "Educational Projects"],
    summary: "A browser-based visual ERD schema design tool for creating tables, defining foreign key relations, and exporting schema blueprints.",
    description: "Visual Database Designer enables developers and students to model relational databases interactively in the browser. Users can create tables, define column datatypes, assign primary/foreign keys, drag-and-drop connections to visualize 1:N relations, and export schemas with local storage autosave.",
    image: "imag/prim5.png",
    liveUrl: "https://mohamed249k.github.io/Visual-Database-Designer/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "SVG / Canvas", "Schema Modeling", "LocalStorage"],
    highlights: [
      "Interactive canvas with draggable database entities and dynamic relationship connectors",
      "Column inspector supporting custom datatypes, primary keys, and foreign key references",
      "Full JSON import/export and persistent autosave via browser localStorage"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer & ATS Optimizer",
    category: ["Tools & Productivity", "Web Development"],
    summary: "A career development utility that analyzes resume content against target roles, evaluates keyword density, and recommends improvements.",
    description: "AI Resume Analyzer is a focused utility designed to help tech candidates optimize their resumes for Applicant Tracking Systems (ATS). Users paste plain text or upload documents to receive instant feedback on keyword coverage, role-specific competencies, and structural completeness.",
    image: "imag/prim1.png",
    liveUrl: "https://mohamed249k.github.io/AI-Resume-Analyzer/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Text Parsing", "ATS Scoring", "Data Presentation"],
    highlights: [
      "Role-specific matching for Front-End Developer and software engineering benchmarks",
      "Instant keyword density scanner detecting critical programming languages and frameworks",
      "Visual score breakdown with actionable suggestions for skills and experience sections"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "metadata-exposure-visualizer",
    title: "Metadata Exposure Visualizer",
    category: ["Cybersecurity & Systems", "Tools & Productivity"],
    summary: "An interactive privacy tool demonstrating how hidden digital file metadata reveals geolocation, device identity, and sensitive personal traces.",
    description: "Metadata Exposure Visualizer is an educational cybersecurity tool designed to demonstrate privacy leakage through digital files. It parses file headers, reveals hidden EXIF and filesystem metadata, and visualizes potential profiling vectors through a clean security dashboard.",
    image: "imag/project-screenshots/metadata-exposure-visualizer.png",
    liveUrl: "https://mohamed249k.github.io/Metadata-Exposure-Visualizer/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "EXIF Parsing", "Security UX", "Data Visualization"],
    highlights: [
      "Real-time metadata extraction from uploaded digital assets and images",
      "Interactive privacy risk breakdown displaying device, location, and timestamp exposure",
      "Educational risk rating explaining how metadata enables OSINT reconnaissance"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "full-attack-chain-simulator",
    title: "Full Attack Chain Simulator",
    category: ["Cybersecurity & Systems", "Educational Projects"],
    summary: "An interactive walkthrough of common cyber-attack stages and defensive logic.",
    description: "The project turns complex cybersecurity concepts into an accessible simulation communicating how reconnaissance, initial access, exploitation, and post-exploitation unfold.",
    image: "imag/project-screenshots/full-attack-chain-simulator.png",
    liveUrl: "https://mohamed249k.github.io/Full-Attack-Chain-Simulator/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Architecture"],
    highlights: ["Attack-chain storytelling", "Educational defender flow", "Interactive security simulation"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "fake-ai-chat-phishing",
    title: "Fake AI Chat Phishing Simulator",
    category: ["Cybersecurity & Systems", "Educational Projects"],
    summary: "A phishing awareness simulation explaining social engineering tactics disguised as AI conversations.",
    description: "Combines interactive UI and cybersecurity concepts to demonstrate how malicious actors use conversational AI personas to harvest credentials and sensitive data.",
    image: "imag/project-screenshots/fake-ai-chat-phishing.png",
    liveUrl: "https://mohamed249k.github.io/Fake-AI-Chat-Phishing/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Social Engineering Awareness"],
    highlights: ["Phishing awareness simulation", "Conversational user flow", "Practical security education"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "digital-footprint-leak-simulator",
    title: "Digital Footprint Leak Simulator",
    category: ["Cybersecurity & Systems", "Tools & Productivity"],
    summary: "A browser simulation demonstrating how fragmented web traces aggregate into identifiable digital profiles.",
    description: "Visualizes data aggregation techniques, search habits, social footprint tracking, and browser fingerprinting in an interactive security dashboard.",
    image: "imag/project-screenshots/digital-footprint-leak-simulator.png",
    liveUrl: "https://mohamed249k.github.io/Digital-Footprint-Leak-Simulator/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Data Visualization"],
    highlights: ["Footprint aggregation awareness", "Interactive risk metrics", "Educational privacy UX"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "code-mentor-ai",
    title: "CodeMentor AI",
    category: ["Tools & Productivity", "Educational Projects"],
    summary: "An educational code review assistant interface offering coding suggestions, bug explanations, and syntax hints.",
    description: "An interactive coding assistance interface designed to provide contextual programming hints, algorithmic advice, and code readability recommendations.",
    image: "imag/project-screenshots/code-mentor-ai.png",
    liveUrl: "https://mohamed249k.github.io/CodeMentor-AI/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Code Formatting"],
    highlights: ["Contextual coding feedback", "Syntax and logic tips", "Clean developer UI"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "youtube-analyzer",
    title: "YouTube Content & Metric Analyzer",
    category: ["Web Development", "Tools & Productivity"],
    summary: "A dashboard interface visualizing video engagement statistics, audience retention, and channel metrics.",
    description: "Front-end analytics dashboard with interactive data charts, engagement counters, and metric comparison tables for content evaluation.",
    image: "imag/project-screenshots/youtube-analyzer.png",
    liveUrl: "https://mohamed249k.github.io/YouTube-Analyzer/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Charts", "Dashboard Design"],
    highlights: ["Engagement metric cards", "Interactive data charts", "Responsive analytics layout"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "hospital-ai-system",
    title: "Futuristic Hospital AI System",
    category: ["UI/UX & Interactive Experiences", "Web Development"],
    summary: "A conceptual healthcare telemetry dashboard with patient vitals monitoring and triage simulation.",
    description: "Advanced interface concept for clinical management, simulating continuous vital monitoring, department telemetry, and diagnostic alerts.",
    image: "imag/project-screenshots/hospital-ai-system.png",
    liveUrl: "https://mohamed249k.github.io/Hospital-AI-System/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Telemetry UI", "Dashboard Design"],
    highlights: ["Vital signs simulation", "Departmental triage flows", "Futuristic HUD styling"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "tactical-military-hud",
    title: "Tactical Military HUD Simulation",
    category: ["UI/UX & Interactive Experiences", "Cybersecurity & Systems"],
    summary: "A high-tech tactical heads-up display interface with dynamic compass, radar sweep, and telemetry controls.",
    description: "Complex UI experiment demonstrating military-grade HUD styling, targeting reticles, radar sweep animations, and system status widgets.",
    image: "imag/project-screenshots/tactical-military-hud.png",
    liveUrl: "https://mohamed249k.github.io/Tactical-Military-HUD/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas", "HUD Styling"],
    highlights: ["Dynamic radar scan animation", "Grid overlay and targeting reticle", "Real-time telemetry indicators"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "digital-soul-profile",
    title: "Digital Soul Identity Profile",
    category: ["UI/UX & Interactive Experiences", "Web Development"],
    summary: "A futuristic digital identity profile explorer with glowing neon aesthetics and holographic UI elements.",
    description: "An experimental visual concept exploring digital avatars, biometric indicators, and futuristic web design patterns.",
    image: "imag/project-screenshots/digital-soul-profile.png",
    liveUrl: "https://mohamed249k.github.io/Digital-Soul-Profile/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Creative UI"],
    highlights: ["Holographic visual styling", "Interactive biometric panels", "Atmospheric animations"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "islami-quiz",
    title: "Islami Quiz Application",
    category: ["Educational Projects", "Web Development"],
    summary: "A clean Islamic quiz application with multiple-choice progression and score calculation.",
    description: "Interactive educational quiz application featuring question banks, instant score computation, and clean Arabic typography.",
    image: "imag/prim8.png",
    liveUrl: "https://mohamed249k.github.io/Islami-Quiz-Application/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Educational Logic"],
    highlights: ["Arabic typography and clean layout", "Score calculation and review", "Mobile-friendly interactive design"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "smart-form-builder",
    title: "Smart Form Builder with Logic Rules",
    category: ["Tools & Productivity", "Web Development"],
    summary: "A dynamic web form builder allowing users to assemble custom inputs with conditional logic branching.",
    description: "A drag-and-drop form creator interface supporting text inputs, dropdowns, conditional rules, and form submission previews.",
    image: "imag/prim6.png",
    liveUrl: "https://mohamed249k.github.io/Smart-Form-Builder-with-Logic-Rules/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Conditional Logic", "Dynamic DOM"],
    highlights: ["Custom field generator", "Conditional branching logic", "Live form preview"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "ai-chatbot-builder",
    title: "NeuraBot AI Chatbot Builder",
    category: ["Tools & Productivity", "UI/UX & Interactive Experiences"],
    summary: "A conversational UI builder for designing chatbot appearance, messages, and prompt flows.",
    description: "Web application for customizing chatbot appearance, message color themes, greeting scripts, and conversational preview testing.",
    image: "imag/prim4.png",
    liveUrl: "https://mohamed249k.github.io/AI-Chatbot-Builder/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Chatbot UI"],
    highlights: ["Live chat preview widget", "Color and border-radius customization", "Conversation rule builder"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "product-management-system",
    title: "Product Management System (CRUD)",
    category: ["Web Development", "Tools & Productivity"],
    summary: "An inventory CRUD web application with localStorage persistence, search/filter, and category counters.",
    description: "Academic CRUD project built to manage product records with real-time total price calculation, validation, and browser persistence.",
    image: "imag/project-screenshots/product-management-system.png",
    liveUrl: "https://mohamed249k.github.io/Product-Management-CRUD/",
    githubUrl: "",
    year: 2024,
    technologies: ["HTML5", "CSS3", "JavaScript", "CRUD Logic", "LocalStorage"],
    highlights: ["Full Create, Read, Update, Delete cycles", "Instant search and category filters", "Persistent client-side data"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "recipe-finder-app",
    title: "Recipe Finder Application",
    category: ["Web Development", "Tools & Productivity"],
    summary: "A culinary recipe exploration app with meal search, ingredient breakdowns, and modal instructions.",
    description: "Interactive recipe search tool allowing users to discover diverse dishes with full ingredient measurements and step-by-step preparation guides.",
    image: "imag/pro1.png",
    liveUrl: "https://mohamed249k.github.io/Recipe-Finder/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "API Integration", "Responsive Design"],
    highlights: ["Dish search by keyword and category", "Detailed ingredients and instructions modal", "Responsive recipe grid cards"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "dental-clinic-website",
    title: "Ora Dental Clinic Website",
    category: ["Web Development", "UI/UX & Interactive Experiences"],
    summary: "A modern healthcare landing page with appointment scheduling, doctor profiles, and service showcase.",
    description: "A responsive medical clinic website showcasing dental treatments, patient reviews, appointment requests, and dark/light mode toggle.",
    image: "imag/pro6.png",
    liveUrl: "https://mohamed249k.github.io/Dental-clinic-website/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: ["Doctor roster and service cards", "Special offer countdown timer", "Appointment booking CTA flow"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "secure-scan",
    title: "SecureScan URL Risk Evaluator",
    category: ["Cybersecurity & Systems", "Tools & Productivity"],
    summary: "A link inspection concept evaluating web links against known security criteria and suspicious patterns.",
    description: "Lightweight front-end utility for evaluating URLs, highlighting domain structure, potential typosquatting, and protocol safety.",
    image: "imag/project-screenshots/secure-scan.png",
    liveUrl: "https://mohamed249k.github.io/SecureScan/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "URL Parsing"],
    highlights: ["URL protocol evaluation", "Suspicious string detection", "Security awareness tips"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "man-in-the-middle-attack",
    title: "Man-in-the-Middle Attack Simulation",
    category: ["Cybersecurity & Systems", "Educational Projects"],
    summary: "An educational visualizer explaining ARP poisoning, packet interception, and TLS encryption.",
    description: "Visual learning demonstration breaking down the stages of network interception and the vital defensive role of end-to-end encryption.",
    image: "imag/project-screenshots/man-in-the-middle-attack.png",
    liveUrl: "https://mohamed249k.github.io/Man-in-the-Middle-attack-works/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Network Concepts"],
    highlights: ["Visual packet flow diagram", "MITM interception concept", "TLS defense explanation"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "exposed",
    title: "Exposed Privacy Risk Visualizer",
    category: ["Cybersecurity & Systems", "Tools & Productivity"],
    summary: "A digital exposure dashboard demonstrating privacy visibility and data leakage vectors.",
    description: "Educational cybersecurity dashboard illustrating personal data visibility, public records exposure, and digital profiling risks.",
    image: "imag/project-screenshots/exposed.png",
    liveUrl: "https://mohamed249k.github.io/Exposed/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Privacy UX"],
    highlights: ["Exposure category indicators", "Risk mitigation checklist", "Clean cybersecurity layout"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "chatgen",
    title: "ChatGen AI Dialogue Interface",
    category: ["Tools & Productivity", "UI/UX & Interactive Experiences"],
    summary: "A modular chat interface concept exploring responsive conversational layout patterns.",
    description: "A fast, responsive chat UI template featuring message bubbles, typing simulation, and clean modern styling.",
    image: "imag/project-screenshots/chatgen.png",
    liveUrl: "https://mohamed249k.github.io/ChatGen/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "UI Components"],
    highlights: ["Clean chat bubble hierarchy", "Responsive mobile message view", "Smooth scroll interactions"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "esteqama",
    title: "Esteqama Spiritual Habit Tracker",
    category: ["Educational Projects", "Tools & Productivity"],
    summary: "A lifestyle and habit tracking interface supporting daily consistency and personal productivity.",
    description: "Clean productivity tool designed for habit tracking, daily goals, reflection entries, and streak counters.",
    image: "imag/project-screenshots/esteqama.png",
    liveUrl: "https://mohamed249k.github.io/Esteqama/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    highlights: ["Daily progress tracker", "Streak counters", "Minimalist aesthetic"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "sadka-garya",
    title: "Sadka Garya Community Platform",
    category: ["Educational Projects", "Web Development"],
    summary: "A community giving and charitable initiative web interface built with modern accessible design.",
    description: "Designed for social initiatives and charitable outreach with transparent project showcases and clean navigation.",
    image: "imag/project-screenshots/sadka-garya.png",
    liveUrl: "https://mohamed249k.github.io/sadka-garya/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: ["Community outreach showcase", "Accessible layout structure", "Mobile-optimized design"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "path-of-light",
    title: "Path of Light Educational Portal",
    category: ["Educational Projects", "Web Development"],
    summary: "An educational platform focusing on structured knowledge access and readable articles.",
    description: "A clean typography-focused content platform delivering structured educational modules and articles.",
    image: "imag/project-screenshots/path-of-light.png",
    liveUrl: "https://mohamed249k.github.io/Path-of-Light/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Content Layout"],
    highlights: ["Reading-first typography", "Chapter navigation", "Accessible layout"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "dua-finder",
    title: "Dua Finder & Daily Supplications",
    category: ["Educational Projects", "Tools & Productivity"],
    summary: "A reference app for categorized daily supplications with search and bookmarking.",
    description: "Searchable reference tool organizing texts by category with copy-to-clipboard functionality.",
    image: "imag/project-screenshots/dua-finder.png",
    liveUrl: "https://mohamed249k.github.io/Dua-Finder/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Search Filtering"],
    highlights: ["Category indexing", "Quick search functionality", "Mobile responsive view"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "bookmarks-efficiently",
    title: "Bookmarks Efficiently",
    category: ["Tools & Productivity", "Web Development"],
    summary: "A browser-based bookmark manager for organizing frequently referenced links.",
    description: "Productivity utility designed to categorize URLs with custom tags and rapid search.",
    image: "imag/project-screenshots/bookmarks-efficiently.png",
    liveUrl: "https://mohamed249k.github.io/bookmarks-efficiently/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    highlights: ["Tag-based link organization", "Instant URL filtering", "Local persistence"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "password-generator",
    title: "Secure Password Generator",
    category: ["Tools & Productivity", "Cybersecurity & Systems"],
    summary: "A customizable cryptographic password generator with entropy strength rating.",
    description: "Focused cybersecurity utility that creates secure pseudo-random passwords based on length and character sets.",
    image: "imag/project-screenshots/password-generator.png",
    liveUrl: "https://mohamed249k.github.io/Password-Generator/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Utility"],
    highlights: ["Custom length and symbol toggles", "Password entropy meter", "One-click copy to clipboard"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "ceremonial-touch",
    title: "Ceremonial Touch Event Agency",
    category: ["Web Development", "UI/UX & Interactive Experiences"],
    summary: "A luxury event planning landing page with portfolio showcase and inquiry form.",
    description: "A commercial agency website tailored for wedding and celebration planners with elegant aesthetic layout.",
    image: "imag/project-screenshots/ceremonial-touch.png",
    liveUrl: "https://elmohammady.github.io/CEREMONIAL-TOUCH1/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Branding Design"],
    highlights: ["Hero video integration", "Package comparison cards", "Inquiry booking modal"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "ma3arf",
    title: "Ma3arf Islamic Knowledge Platform",
    category: ["Educational Projects", "Web Development"],
    summary: "A digital information portal organizing knowledge modules with clean navigation.",
    description: "Educational portal offering structured access to cultural articles, quizzes, and multimedia resources.",
    image: "imag/project-screenshots/ma3arf.png",
    liveUrl: "https://mohamed249k.github.io/Ma3arf/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Educational UI"],
    highlights: ["Modular learning units", "Content index hierarchy", "Responsive Arabic layout"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "personal-portfolio-website",
    title: "MK Dev Portfolio (V2)",
    category: ["Web Development", "UI/UX & Interactive Experiences"],
    summary: "Prior iteration of Mohamed Karam's personal portfolio website.",
    description: "Earlier portfolio release highlighting foundational front-end design, project catalogs, and skill matrices.",
    image: "imag/project-screenshots/personal-portfolio-website.png",
    liveUrl: "https://mohamed249k.github.io/MyWebsite2/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Portfolio UX"],
    highlights: ["Personal brand presentation", "Responsive layout", "Project showcases"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "dashboard",
    title: "Metrics & Analytics Dashboard",
    category: ["Web Development", "Tools & Productivity"],
    summary: "A modular business dashboard visualizing revenue, visitor activity, and order statistics.",
    description: "Front-end dashboard template highlighting chart widgets, KPI metrics, and tabular reports.",
    image: "imag/project-screenshots/dashboard.png",
    liveUrl: "https://mohamed249k.github.io/Dash-board/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Charts"],
    highlights: ["KPI summary cards", "Responsive data table", "Clean interface structure"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "photo-edit",
    title: "Photo Edit Web Utility",
    category: ["Tools & Productivity", "Web Development"],
    summary: "A lightweight canvas-based photo editor for browser image adjustments.",
    description: "Browser tool offering brightness, contrast, grayscale filters, cropping, and instant PNG download.",
    image: "imag/project-screenshots/photo-edit.png",
    liveUrl: "https://mohamed249k.github.io/Photo-Edit/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    highlights: ["Real-time slider filter adjustments", "HTML5 canvas processing", "Direct export to PNG"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "interactive-quiz-app",
    title: "Interactive General Knowledge Quiz",
    category: ["Educational Projects", "Web Development"],
    summary: "A compact quiz platform with multiple-choice questions, progress indicator, and score metrics.",
    description: "Compact web application for general trivia quizzes with interactive question steps and score review.",
    image: "imag/project-screenshots/interactive-quiz-app.png",
    liveUrl: "https://mohamed249k.github.io/Interactive-Quiz-/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Quiz Logic"],
    highlights: ["Question progression flow", "Instant feedback on selection", "Score summary review"],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "portfolio-builder-tool",
    title: "Portfolio Builder Tool with Live Preview",
    category: ["Tools & Productivity", "Web Development"],
    summary: "A web utility enabling users to generate simple portfolio layouts with live preview.",
    description: "Interactive builder tool allowing users to input bio information, projects, and contact data with instant rendered preview.",
    image: "imag/project-screenshots/portfolio-builder-tool.png",
    liveUrl: "https://mohamed249k.github.io/Portfolio-Tool-with-Live-Preview/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Live Preview"],
    highlights: ["Form input to preview data binding", "Template selection", "Exportable code concept"],
    featured: false,
    source: "projects-hub"
  }
];

// ==========================================================================
// 3. APPLICATION STATE MANAGEMENT
// ==========================================================================
const projectState = {
  filter: "all",
  sort: "featured",
  search: "",
  visibleArchiveCount: 6,
  isArchiveExpanded: false
};

// ==========================================================================
// 4. UTILITIES & HELPERS
// ==========================================================================
function normalizeCategories(project) {
  return Array.isArray(project.category) ? project.category : [project.category];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getProjectImage(project) {
  return project.image;
}

function getProjectPrimaryCategory(project) {
  const categories = normalizeCategories(project);
  return categories[0] || "Other";
}

function projectMatchesSearch(project, query) {
  if (!query) return true;

  const searchable = [
    project.title,
    project.summary,
    project.description,
    normalizeCategories(project).join(" "),
    project.technologies.join(" ")
  ].join(" ").toLowerCase();

  return searchable.includes(query);
}

function projectMatchesFilter(project) {
  if (projectState.filter === "all") return true;
  return normalizeCategories(project).includes(projectState.filter);
}

function sortProjects(list) {
  const sorted = [...list];

  switch (projectState.sort) {
    case "newest":
      return sorted.sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));
    case "oldest":
      return sorted.sort((a, b) => (Number(a.year) || 0) - (Number(b.year) || 0));
    case "az":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "featured":
    default:
      return sorted.sort((a, b) => {
        if (b.featured !== a.featured) {
          return Number(b.featured) - Number(a.featured);
        }
        return (Number(b.year) || 0) - (Number(a.year) || 0);
      });
  }
}

function getFilteredProjects() {
  const query = projectState.search.trim().toLowerCase();
  return sortProjects(
    projectData.filter((project) => projectMatchesFilter(project) && projectMatchesSearch(project, query))
  );
}

// ==========================================================================
// 5. RENDERING FUNCTIONS
// ==========================================================================
function renderProjectStats() {
  const total = projectData.length;
  const featuredCount = projectData.filter((p) => p.featured).length;
  const techCount = new Set(projectData.flatMap((p) => p.technologies)).size;
  const categoryCount = new Set(projectData.flatMap((p) => normalizeCategories(p))).size;

  const totalEl = document.getElementById("projectTotalCount");
  const featuredEl = document.getElementById("projectFeaturedCount");
  const techEl = document.getElementById("projectTechCount");
  const catEl = document.getElementById("projectCategoryCount");

  if (totalEl) totalEl.textContent = String(total);
  if (featuredEl) featuredEl.textContent = String(featuredCount);
  if (techEl) techEl.textContent = String(techCount);
  if (catEl) catEl.textContent = String(categoryCount);
}

function renderEmptyState(message = "No projects match your current search or category filter.") {
  return `
    <div class="project-empty" role="status" aria-live="polite">
      <i class="fas fa-search" aria-hidden="true"></i>
      <p>${escapeHtml(message)}</p>
      <button type="button" class="btn btn-secondary btn-small" id="resetProjectFilters">Reset Filters</button>
    </div>
  `;
}

function projectCardMarkup(project) {
  const primaryCategory = getProjectPrimaryCategory(project);
  const yearLabel = project.year ? String(project.year) : "2026";
  const isMobileApp = normalizeCategories(project).includes("Mobile Applications");

  return `
    <article class="project-card ${project.featured ? "is-featured" : ""}" data-project-id="${escapeHtml(project.id)}" aria-label="${escapeHtml(project.title)}">
      <div class="project-thumb">
        <img src="${getProjectImage(project)}" alt="${escapeHtml(project.title)} preview" loading="lazy" />
        <div class="project-overlay-badge">
          <span class="category-pill ${isMobileApp ? "mobile-pill" : ""}">${escapeHtml(primaryCategory)}</span>
          ${project.featured ? '<span class="featured-pill"><i class="fas fa-crown"></i> Prime Showcase</span>' : ""}
        </div>
      </div>

      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-year"><i class="far fa-calendar-alt"></i> ${escapeHtml(yearLabel)}</span>
          <span class="project-badge-tag">${escapeHtml(primaryCategory)}</span>
        </div>

        <h3 class="project-title">
          <span>${escapeHtml(project.title)}</span>
          <i class="fas fa-arrow-up-right-from-square title-icon" aria-hidden="true"></i>
        </h3>
        <p class="project-summary">${escapeHtml(project.summary)}</p>

        <div class="tech-tags" aria-label="Technologies used">
          ${project.technologies.slice(0, 4).map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}
          ${project.technologies.length > 4 ? `<span class="tech-more">+${project.technologies.length - 4}</span>` : ""}
        </div>

        <div class="project-actions">
          ${project.liveUrl ? `
            <a class="btn-action btn-live" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open live demo for ${escapeHtml(project.title)}">
              <i class="fas fa-arrow-up-right-from-square"></i>
              <span>${isMobileApp ? "Live Storefront (Web)" : "Live Demo"}</span>
            </a>
          ` : ""}
          ${project.githubUrl ? `
            <a class="btn-action btn-code" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub">
              <i class="fab fa-github"></i>
              <span>Code</span>
            </a>
          ` : ""}
          <button class="btn-action btn-details project-details-btn" type="button" data-project-id="${escapeHtml(project.id)}" aria-label="View complete details for ${escapeHtml(project.title)}">
            <i class="fas fa-circle-info"></i>
            <span>Details</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProjects() {
  const container = document.getElementById("featuredProjectsGrid");
  if (!container) return;

  const filtered = getFilteredProjects();
  const featured = filtered.filter((p) => p.featured);

  if (!featured.length) {
    container.innerHTML = renderEmptyState("No featured projects found matching the current filter.");
    setupResetFilterBtn();
    return;
  }

  container.innerHTML = featured.map(projectCardMarkup).join("");
}

function renderArchiveProjects() {
  const container = document.getElementById("projectArchiveGrid");
  const countEl = document.getElementById("projectArchiveCount");
  const loadMoreBtn = document.getElementById("loadMoreArchiveBtn");
  if (!container) return;

  const filtered = getFilteredProjects();
  const archive = filtered.filter((p) => !p.featured);

  if (countEl) {
    countEl.textContent = String(archive.length);
  }

  if (!archive.length) {
    container.innerHTML = `<p class="archive-empty-note">All matching projects are currently displayed in the featured showcase above.</p>`;
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  const visible = archive.slice(0, projectState.visibleArchiveCount);
  container.innerHTML = visible.map(projectCardMarkup).join("");

  if (loadMoreBtn) {
    loadMoreBtn.style.display = visible.length >= archive.length ? "none" : "inline-flex";
  }
}

function setupResetFilterBtn() {
  const resetBtn = document.getElementById("resetProjectFilters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      projectState.filter = "all";
      projectState.search = "";
      const searchInput = document.getElementById("projectSearch");
      if (searchInput) searchInput.value = "";
      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.filter === "all");
      });
      updateProjectView();
    });
  }
}

function updateProjectView() {
  renderProjectStats();
  renderFeaturedProjects();
  renderArchiveProjects();
}

// ==========================================================================
// 6. PROJECT MODAL INTERACTION
// ==========================================================================
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const content = modal.querySelector(".modal-content");
  if (!content) return;

  const primaryCategory = getProjectPrimaryCategory(project);
  const isMobileApp = normalizeCategories(project).includes("Mobile Applications");

  content.innerHTML = `
    <div class="modal-media-wrapper">
      <img src="${getProjectImage(project)}" alt="${escapeHtml(project.title)} full screenshot" class="modal-project-img" />
      <div class="modal-media-pill">
        <span>${escapeHtml(primaryCategory)}</span>
        ${project.featured ? '<span class="modal-feat-tag"><i class="fas fa-crown"></i> Prime Showcase</span>' : ""}
      </div>
    </div>

    <div class="modal-info-body">
      <div class="modal-title-area">
        <h3 id="modalTitle">${escapeHtml(project.title)}</h3>
        <span class="modal-year-tag">${escapeHtml(String(project.year || "2026"))}</span>
      </div>

      <p class="modal-lead-desc">${escapeHtml(project.description)}</p>

      <div class="modal-block">
        <h4><i class="fas fa-check-circle gold-icon"></i> Key Highlights & Verified Features</h4>
        <ul class="modal-highlights-list">
          ${project.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-block">
        <h4><i class="fas fa-code gold-icon"></i> Verified Technology Stack</h4>
        <div class="tech-tags modal-tags">
          ${project.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>

      <div class="modal-footer-actions">
        ${project.liveUrl ? `
          <a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-arrow-up-right-from-square"></i>
            <span>${isMobileApp ? "Explore Storefront / Demo" : "Open Live Project"}</span>
          </a>
        ` : ""}
        ${project.githubUrl ? `
          <a class="btn btn-secondary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            <span>Source Code</span>
          </a>
        ` : ""}
        <button class="btn btn-secondary modal-close-action" type="button">Close</button>
      </div>
    </div>
  `;

  content.querySelector(".modal-close-action")?.addEventListener("click", () => {
    closeModal("projectModal");
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".modal-close");
  closeBtn?.focus();
}

// ==========================================================================
// 7. CERTIFICATES SECTION & MODAL (PRESERVED & ELEVATED)
// ==========================================================================
function renderCertificates() {
  const container = document.getElementById("certificatesGrid");
  if (!container) return;

  container.innerHTML = certificateData.map((cert, index) => `
    <article class="cert-card" tabindex="0" data-cert-index="${index}" aria-label="Certificate: ${escapeHtml(cert.title)}">
      <div class="cert-thumb-wrap">
        <img src="${cert.image}" alt="${escapeHtml(cert.title)} certificate from ${escapeHtml(cert.issuer)}" loading="lazy" />
        <div class="cert-zoom-overlay">
          <i class="fas fa-magnifying-glass-plus"></i>
          <span>Inspect Credential</span>
        </div>
      </div>

      <div class="cert-details">
        <div class="cert-meta-row">
          <span class="cert-issuer-badge"><i class="fas fa-award"></i> ${escapeHtml(cert.issuer)}</span>
          <span class="cert-date-badge">${escapeHtml(cert.date)}</span>
        </div>
        <h3 class="cert-title">${escapeHtml(cert.title)}</h3>
        <p class="cert-meta-spec"><strong>Duration:</strong> ${escapeHtml(cert.duration)}</p>
        <p class="cert-meta-code"><strong>Verification Code:</strong> <code>${escapeHtml(cert.verificationCode)}</code></p>
        <p class="cert-desc">${escapeHtml(cert.description)}</p>
        <button type="button" class="btn btn-secondary btn-small cert-inspect-btn" data-cert-index="${index}">
          <i class="fas fa-eye"></i> View Full Certificate
        </button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".cert-card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = card.dataset.certIndex;
      if (idx !== undefined && certificateData[idx]) {
        openCertificateModal(certificateData[idx]);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const idx = card.dataset.certIndex;
        if (idx !== undefined && certificateData[idx]) {
          openCertificateModal(certificateData[idx]);
        }
      }
    });
  });
}

function openCertificateModal(cert) {
  const modal = document.getElementById("certificateModal");
  if (!modal) return;

  const content = modal.querySelector(".cert-content");
  if (!content) return;

  content.innerHTML = `
    <div class="cert-modal-image-wrap">
      <img src="${cert.image}" alt="${escapeHtml(cert.title)} full certificate" class="cert-modal-img" />
    </div>
    <div class="cert-modal-info">
      <div class="cert-modal-header">
        <h3 id="certTitle">${escapeHtml(cert.title)}</h3>
        <span class="cert-issuer-tag">${escapeHtml(cert.issuer)}</span>
      </div>
      <p class="cert-modal-desc">${escapeHtml(cert.description)}</p>
      <div class="cert-modal-grid">
        <div class="cert-stat-item">
          <small>Issued Date</small>
          <strong>${escapeHtml(cert.date)}</strong>
        </div>
        <div class="cert-stat-item">
          <small>Course Duration</small>
          <strong>${escapeHtml(cert.duration)}</strong>
        </div>
        <div class="cert-stat-item">
          <small>Verification Code</small>
          <code>${escapeHtml(cert.verificationCode)}</code>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".modal-close");
  closeBtn?.focus();
}

// ==========================================================================
// 8. MODAL CONTROL & ACCESSIBILITY
// ==========================================================================
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindModalCloseHandlers() {
  document.querySelectorAll(".modal-backdrop, .modal-close").forEach((element) => {
    element.addEventListener("click", () => {
      closeModal("projectModal");
      closeModal("certificateModal");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal("projectModal");
      closeModal("certificateModal");
    }
  });
}

// ==========================================================================
// 9. CONTROLS, SEARCH & FILTERING
// ==========================================================================
function setupProjectControls() {
  const searchInput = document.getElementById("projectSearch");
  const sortSelect = document.getElementById("projectSort");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const loadMoreBtn = document.getElementById("loadMoreArchiveBtn");
  const toggleArchiveBtn = document.getElementById("toggleArchiveSectionBtn");
  const archiveWrapper = document.getElementById("projectArchiveSectionWrapper");

  searchInput?.addEventListener("input", (e) => {
    projectState.search = e.target.value.trim().toLowerCase();
    projectState.visibleArchiveCount = 6;
    updateProjectView();
  });

  sortSelect?.addEventListener("change", (e) => {
    projectState.sort = e.target.value;
    updateProjectView();
  });

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectState.filter = btn.dataset.filter || "all";
      projectState.visibleArchiveCount = 6;
      filterButtons.forEach((item) => item.classList.toggle("active", item === btn));
      updateProjectView();
    });
  });

  loadMoreBtn?.addEventListener("click", () => {
    projectState.visibleArchiveCount += 6;
    renderArchiveProjects();
  });

  toggleArchiveBtn?.addEventListener("click", () => {
    projectState.isArchiveExpanded = !projectState.isArchiveExpanded;
    if (archiveWrapper) {
      archiveWrapper.classList.toggle("is-open", projectState.isArchiveExpanded);
    }
    const icon = toggleArchiveBtn.querySelector("i");
    const label = toggleArchiveBtn.querySelector("span");
    if (icon) {
      icon.className = projectState.isArchiveExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down";
    }
    if (label) {
      label.textContent = projectState.isArchiveExpanded ? "Collapse Archive Grid" : "Browse Complete Archive Grid";
    }
  });

  document.addEventListener("click", (e) => {
    const detailsBtn = e.target.closest(".project-details-btn");
    if (!detailsBtn) return;
    const id = detailsBtn.dataset.projectId;
    const project = projectData.find((p) => p.id === id);
    if (project) {
      openProjectModal(project);
    }
  });
}

// ==========================================================================
// 10. NAVIGATION & HEADER INTERACTIONS
// ==========================================================================
function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      if (nav) nav.classList.toggle("open", isOpen);
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList?.classList.remove("open");
      nav?.classList.remove("open");
      navToggle?.classList.remove("active");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("main section[id]");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((sec) => navObserver.observe(sec));
}

// ==========================================================================
// 11. THEME TOGGLE (DARK DEFAULT & LIGHT CONTRAST)
// ==========================================================================
function setupThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  const icon = themeToggle?.querySelector("i");
  const savedTheme = localStorage.getItem("mk-theme");

  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    if (icon) icon.className = "fas fa-sun";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    if (icon) icon.className = "fas fa-moon";
  }

  themeToggle?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("mk-theme", nextTheme);

    if (icon) {
      icon.className = nextTheme === "dark" ? "fas fa-moon" : "fas fa-sun";
    }
  });
}

// ==========================================================================
// 12. SMOOTH REVEAL & ACCESSIBILITY ANIMATIONS
// ==========================================================================
function setupRevealAnimations() {
  document.documentElement.classList.add("js-reveal-active");
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  const revealItem = (el) => {
    el.classList.add("visible");
  };

  const checkPositions = () => {
    const triggerBottom = (window.innerHeight || document.documentElement.clientHeight) + 150;
    revealItems.forEach((item) => {
      if (!item.classList.contains("visible")) {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerBottom) {
          revealItem(item);
        }
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealItem(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 120px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  checkPositions();
  window.addEventListener("scroll", checkPositions, { passive: true });
  window.addEventListener("resize", checkPositions, { passive: true });

  // Safety fallback: ensure all items are revealed so content is never permanently trapped
  setTimeout(() => {
    revealItems.forEach(revealItem);
  }, 1200);
}

// ==========================================================================
// 13. CONTACT FORM VALIDATION & SUBMISSION
// ==========================================================================
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  let feedbackEl = form.querySelector(".form-feedback");
  if (!feedbackEl) {
    feedbackEl = document.createElement("div");
    feedbackEl.className = "form-feedback";
    feedbackEl.style.display = "none";
    feedbackEl.style.padding = "10px 16px";
    feedbackEl.style.borderRadius = "var(--radius-sm)";
    feedbackEl.style.fontSize = "0.9rem";
    feedbackEl.style.fontWeight = "600";
    feedbackEl.style.marginBottom = "10px";
    feedbackEl.style.textAlign = "center";
    feedbackEl.style.transition = "all 0.3s ease";
    form.insertBefore(feedbackEl, form.querySelector(".btn-submit"));
  }

  function showFeedback(text, isError = false) {
    feedbackEl.textContent = text;
    feedbackEl.style.display = "block";
    feedbackEl.style.background = isError ? "rgba(239, 68, 68, 0.15)" : "var(--gold-soft)";
    feedbackEl.style.border = `1px solid ${isError ? "rgba(239, 68, 68, 0.4)" : "var(--border-gold)"}`;
    feedbackEl.style.color = isError ? "#FCA5A5" : "var(--gold-highlight)";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const subject = document.getElementById("subject")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !subject || !message) {
      showFeedback("Please complete all required fields before sending.", true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showFeedback("Please enter a valid email address.", true);
      return;
    }

    showFeedback("Opening your email client to dispatch message...", false);

    const mailto = `mailto:mohamedelmagraby35@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`
    )}&body=${encodeURIComponent(
      `Hello Mohamed,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailto;
      form.reset();
      setTimeout(() => {
        feedbackEl.style.display = "none";
      }, 4000);
    }, 400);
  });
}

// ==========================================================================
// 14. INTERACTIVE 3D BACKGROUND (LIGHTWEIGHT CANVAS CONSTELATION)
//     - Hardware accelerated 60fps canvas math
//     - Depth parallax with subtle cursor response
//     - Zero external dependencies (<2KB footprint)
//     - Automatically disables if prefers-reduced-motion is active
//     - Pauses when tab is hidden or element is off-screen
//     - pointer-events: none ensures zero obstruction to clicks or touch
// ==========================================================================
function setupInteractive3DCanvas() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 18 : 38;
  const maxDistance = isMobile ? 110 : 160;

  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  // Window resize handler
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 150);
  });

  // Track mouse position with subtle dampening
  window.addEventListener(
    "mousemove",
    (e) => {
      targetMouseX = (e.clientX - width / 2) * 0.05;
      targetMouseY = (e.clientY - height / 2) * 0.05;
    },
    { passive: true }
  );

  // Particle constructor with 3D depth parameters (x, y, z)
  class Node3D {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = (Math.random() - 0.5) * width * 1.2;
      this.y = (Math.random() - 0.5) * height * 1.2;
      this.z = Math.random() * 400 + 100; // Depth axis
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.vz = (Math.random() - 0.5) * 0.25;
      this.baseRadius = Math.random() * 1.4 + 1.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.z += this.vz;

      // Wrap-around boundaries in 3D coordinate volume
      if (this.x < -width * 0.7 || this.x > width * 0.7) this.vx *= -1;
      if (this.y < -height * 0.7 || this.y > height * 0.7) this.vy *= -1;
      if (this.z < 80 || this.z > 550) this.vz *= -1;
    }

    project(offsetX, offsetY) {
      // Perspective projection
      const fov = 350;
      const scale = fov / (fov + this.z);
      const projX = (this.x + offsetX) * scale + width / 2;
      const projY = (this.y + offsetY) * scale + height / 2;
      const projR = this.baseRadius * scale;
      const alpha = Math.min(Math.max((1 - this.z / 550) * 0.75, 0.1), 0.85);

      return { x: projX, y: projY, radius: projR, alpha, scale };
    }
  }

  const nodes = Array.from({ length: particleCount }, () => new Node3D());

  let animFrameId = null;
  let isRunning = true;

  function loop() {
    if (!isRunning) return;

    // Smooth dampening for interactive parallax
    mouseX += (targetMouseX - mouseX) * 0.04;
    mouseY += (targetMouseY - mouseY) * 0.04;

    ctx.clearRect(0, 0, width, height);

    // Update positions and project to 2D screen
    const projected = [];
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      projected.push(nodes[i].project(mouseX, mouseY));
    }

    // Draw connection lines with luxury gold depth fading
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const baseColor = isDark ? "214, 181, 109" : "184, 142, 59"; // Champagne gold in dark, Rich gold in light

    for (let i = 0; i < projected.length; i++) {
      const p1 = projected[i];
      for (let j = i + 1; j < projected.length; j++) {
        const p2 = projected[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.16 * Math.min(p1.alpha, p2.alpha);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${baseColor}, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < projected.length; i++) {
      const p = projected[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor}, ${p.alpha * 0.75})`;
      ctx.fill();
    }

    animFrameId = requestAnimationFrame(loop);
  }

  // Lifecycle listeners to preserve CPU/battery
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      isRunning = false;
      if (animFrameId) cancelAnimationFrame(animFrameId);
    } else {
      isRunning = true;
      animFrameId = requestAnimationFrame(loop);
    }
  });

  animFrameId = requestAnimationFrame(loop);
}

// ==========================================================================
// 15. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateProjectView();
  renderCertificates();
  setupNavigation();
  setupThemeToggle();
  setupRevealAnimations();
  setupProjectControls();
  setupContactForm();
  bindModalCloseHandlers();
  setupInteractive3DCanvas();
});
