const certificateData = [
  {
    title: "Red Hat System Administration",
    issuer: "ITI Platform / Mahara-Tech",
    date: "20/11/2024",
    description: "Certificate of completion for Red Hat System Administration.",
    image: "imag/sg2.jpg"
  },
  {
    title: "Certified Ethical Hacking",
    issuer: "ITI Platform / Mahara-Tech",
    date: "26/11/2024",
    description: "Certificate of completion for Certified Ethical Hacking.",
    image: "imag/sg22.jpg"
  },
  {
    title: "Front-end programming",
    issuer: "ITI Platform / Mahara-Tech",
    date: "23/11/2024",
    description: "Certificate of completion for Front-end programming.",
    image: "imag/sh1.jpg"
  },
  {
    title: "Cyber security basics",
    issuer: "ITI Platform / Mahara-Tech",
    date: "25/11/2024",
    description: "Certificate of completion for Cyber security basics.",
    image: "imag/sh3.jpg"
  }
];

const projectData = [
  {
    id: "metadata-exposure-visualizer",
    title: "Metadata Exposure Visualizer",
    category: ["Cybersecurity", "Tools", "Front-End"],
    summary: "A focused awareness tool for visualizing metadata exposure and privacy risks in digital files.",
    description: "This project demonstrates front-end design, data presentation, and security-focused storytelling through an interactive visual analyzer.",
    image: "imag/project-screenshots/metadata-exposure-visualizer.png",
    liveUrl: "https://mohamed249k.github.io/Metadata-Exposure-Visualizer/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Security UX"],
    highlights: [
      "Interactive security awareness interface",
      "Metadata exposure and privacy focus",
      "Clear educational presentation and visual hierarchy"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "full-attack-chain-simulator",
    title: "Full Attack Chain Simulator",
    category: ["Cybersecurity", "Simulations"],
    summary: "An interactive walkthrough of common cyber-attack stages and defensive logic.",
    description: "The project turns security concepts into an accessible simulation that communicates how attacks unfold and where controls matter.",
    image: "imag/project-screenshots/full-attack-chain-simulator.png",
    liveUrl: "https://mohamed249k.github.io/Full-Attack-Chain-Simulator/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Concepts"],
    highlights: [
      "Attack-chain storytelling",
      "Educational defender flow",
      "Modern interaction design for technical explanation"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "fake-ai-chat-phishing",
    title: "Fake AI Chat Phishing",
    category: ["Cybersecurity", "AI"],
    summary: "A realistic phishing simulation designed to explain deceptive digital behavior and user awareness.",
    description: "This project combines interaction design and cybersecurity concepts to demonstrate how social engineering tactics can look convincing in web interfaces.",
    image: "imag/project-screenshots/fake-ai-chat-phishing.png",
    liveUrl: "https://mohamed249k.github.io/Fake-AI-Chat-Phishing/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "AI Concepts"],
    highlights: [
      "Phishing awareness simulation",
      "User-focused interaction flow",
      "Practical security education concept"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "exposed",
    title: "Exposed",
    category: ["Cybersecurity", "Tools"],
    summary: "A digital exposure detection concept built to show risk understanding and awareness patterns.",
    description: "This project communicates how digital exposure and data visibility can be translated into a clear and engaging interface for cybersecurity education.",
    image: "imag/project-screenshots/exposed.png",
    liveUrl: "https://mohamed249k.github.io/Exposed/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Awareness UI"],
    highlights: [
      "Exposure awareness concept",
      "Risk visualization",
      "Simple and educational UX design"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "man-in-the-middle-attack",
    title: "Man-in-the-Middle Attack",
    category: ["Cybersecurity", "Education"],
    summary: "A concept-driven explanation of the MITM attack flow and security implications.",
    description: "The project explains a classic network attack in a way that is easy to understand while maintaining a strong interactive educational design.",
    image: "imag/project-screenshots/man-in-the-middle-attack.png",
    liveUrl: "https://mohamed249k.github.io/Man-in-the-Middle-attack-works/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Cybersecurity"],
    highlights: [
      "Attack-flow explanation",
      "Security learning visual narrative",
      "Accessible educational design"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "digital-footprint-leak-simulator",
    title: "Digital Footprint Leak Simulator",
    category: ["Cybersecurity", "Simulations"],
    summary: "A browser-based simulation of how digital traces and data leaks can expose personal information.",
    description: "This work shows how digital profiling, privacy habits, and leakage patterns can be translated into a clean interactive experience.",
    image: "imag/project-screenshots/digital-footprint-leak-simulator.png",
    liveUrl: "https://mohamed249k.github.io/Digital-Footprint-Leak-Simulator/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Data Visualization"],
    highlights: [
      "Information leakage awareness",
      "Digital trace storytelling",
      "Strong dashboard-style presentation"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "secure-scan",
    title: "SecureScan",
    category: ["Cybersecurity", "Tools", "Productivity"],
    summary: "A lightweight security-oriented web tool focused on quick scanning and digital risk awareness.",
    description: "SecureScan presents security checks in a user-friendly interface and demonstrates interest in practical cybersecurity tooling.",
    image: "imag/project-screenshots/secure-scan.png",
    liveUrl: "https://mohamed249k.github.io/SecureScan/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Security UX"],
    highlights: [
      "Security scanning concept",
      "Clean tool interface",
      "Practical front-end engineering"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "chatgen",
    title: "ChatGen",
    category: ["AI", "Tools"],
    summary: "A smart conversation-generator concept built around AI-oriented interaction and content creation workflows.",
    description: "This project emphasizes interactive AI-style utility design and the ability to communicate useful user flows with a polished front-end experience.",
    image: "imag/project-screenshots/chatgen.png",
    liveUrl: "https://mohamed249k.github.io/ChatGen/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "AI UX"],
    highlights: [
      "AI conversation concept",
      "Utility-driven interaction flow",
      "Modern interface composition"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "code-mentor-ai",
    title: "CodeMentor AI",
    category: ["AI", "Tools"],
    summary: "A concept-focused AI coding assistant interface built around developer guidance and task support.",
    description: "This project presents a clear AI assistant experience and reflects interest in developer tooling and interactive interfaces.",
    image: "imag/project-screenshots/code-mentor-ai.png",
    liveUrl: "https://mohamed249k.github.io/CodeMentor-AI/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "AI Tools"],
    highlights: [
      "Developer assistant concept",
      "Task-oriented UI",
      "AI UX patterns and workflow thinking"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    category: ["AI", "Tools"],
    summary: "An AI-inspired CV review interface that helps evaluate candidate strengths and improvement points.",
    description: "The project demonstrates front-end interactivity, file handling logic, and an easy-to-use interface for career support tools.",
    image: "imag/project-screenshots/ai-resume-analyzer.png",
    liveUrl: "https://mohamed249k.github.io/AI-Resume-Analyzer/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "File Upload"],
    highlights: [
      "Candidate feedback interface",
      "Career support tool concept",
      "Strong usability focus"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "youtube-analyzer",
    title: "YouTube Analyzer",
    category: ["Dashboards", "JavaScript", "Front-End"],
    summary: "A dashboard-style project that explores YouTube content analysis and presentation methods.",
    description: "This project demonstrates dashboard thinking, data presentation, and the ability to turn raw information into a readable user interface.",
    image: "imag/project-screenshots/youtube-analyzer.png",
    liveUrl: "https://mohamed249k.github.io/YouTube-Analyzer/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Dashboards"],
    highlights: [
      "Dashboard layout",
      "Analytical UI design",
      "Strong data storytelling"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "hospital-ai-system",
    title: "Hospital AI System",
    category: ["AI", "Business", "Dashboards"],
    summary: "An intelligent hospital workflow concept focused on practical healthcare system presentation and UI organization.",
    description: "The project shows a professional interface design approach for AI-driven service systems and operational dashboards.",
    image: "imag/project-screenshots/hospital-ai-system.png",
    liveUrl: "https://mohamed249k.github.io/Hospital-AI-System/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "AI UI"],
    highlights: [
      "Smart hospital workflow concept",
      "Structured system design",
      "Business-like interface thinking"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "tactical-military-hud",
    title: "Tactical Military HUD",
    category: ["Simulations", "Front-End"],
    summary: "A futuristic tactical HUD interface designed with strong visual hierarchy and system-style styling.",
    description: "This project highlights advanced UI composition, layered visuals, and simulation-oriented design choices in a detailed interactive screen.",
    image: "imag/project-screenshots/tactical-military-hud.png",
    liveUrl: "https://mohamed249k.github.io/Tactical-Military-HUD/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "UI Systems"],
    highlights: [
      "Advanced interface composition",
      "System-style visuals and layout",
      "Strong creative front-end execution"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "digital-soul-profile",
    title: "Digital Soul Profile",
    category: ["AI", "Front-End"],
    summary: "A concept-driven profile experience blending creativity, personal data presentation, and polished visual storytelling.",
    description: "This project expresses a modern, aesthetically driven interface while showcasing a clear understanding of UI rhythm and content structure.",
    image: "imag/project-screenshots/digital-soul-profile.png",
    liveUrl: "https://mohamed249k.github.io/Digital-Soul-Profile/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Design Systems"],
    highlights: [
      "Visual storytelling",
      "Creative profile layout",
      "Strong design polish"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "esteqama",
    title: "Esteqama",
    category: ["Education", "Productivity"],
    summary: "A digital concept project centered around guidance, structure, and user-oriented education workflows.",
    description: "Esteqama is a project designed around a disciplined, educational digital experience that combines calm interface design with practical functionality.",
    image: "imag/project-screenshots/esteqama.png",
    liveUrl: "https://mohamed249k.github.io/Esteqama/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    highlights: [
      "Educational experience",
      "Clear content structure",
      "Focused and polished visual system"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "sadka-garya",
    title: "Sadka Garya",
    category: ["Education", "Business"],
    summary: "A digital giving and community-oriented concept that presents a meaningful service in a clean modern interface.",
    description: "This project reflects a thoughtful design approach for social and community-focused experiences that require clarity, trust, and accessibility.",
    image: "imag/project-screenshots/sadka-garya.png",
    liveUrl: "https://mohamed249k.github.io/sadka-garya/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: [
      "Community-focused user experience",
      "Clean landing page composition",
      "Strong service presentation"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "path-of-light",
    title: "Path of Light",
    category: ["Education", "Front-End"],
    summary: "A calm, content-driven digital experience focused on spiritual guidance and educational storytelling.",
    description: "Path of Light is designed to communicate meaningful content through a serene interface and accessible layout patterns.",
    image: "imag/project-screenshots/path-of-light.png",
    liveUrl: "https://mohamed249k.github.io/Path-of-Light/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Storytelling UI"],
    highlights: [
      "Calm visual direction",
      "Content-focused interface",
      "Accessible educational storytelling"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "dua-finder",
    title: "Dua Finder",
    category: ["Education", "Productivity"],
    summary: "A utility-oriented project for discovering and browsing supplications and guidance references.",
    description: "The interface emphasizes simple search and useful presentation of educational content in a clean digital format.",
    image: "imag/project-screenshots/dua-finder.png",
    liveUrl: "https://mohamed249k.github.io/Dua-Finder/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Content UX"],
    highlights: [
      "Search-oriented content experience",
      "Minimal and focused layout",
      "Educational utility design"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "islami-quiz",
    title: "Islami Quiz",
    category: ["Education", "JavaScript"],
    summary: "A responsive Islamic quiz application with multiple-choice flow and score tracking.",
    description: "This project reflects strong JavaScript interaction patterns and practical educational app design with a clean interface.",
    image: "imag/project-screenshots/islami-quiz.png",
    liveUrl: "https://mohamed249k.github.io/Islami-Quiz-Application/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Quiz Logic"],
    highlights: [
      "Interactive educational app",
      "Score tracking logic",
      "Clean mobile-friendly design"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "bookmarks-efficiently",
    title: "Bookmarks Efficiently",
    category: ["Productivity", "Tools"],
    summary: "A browser-based bookmarking utility designed to organize references and frequent resources efficiently.",
    description: "This project focuses on productivity tools and practical organization workflows with a responsive user experience.",
    image: "imag/project-screenshots/bookmarks-efficiently.png",
    liveUrl: "https://mohamed249k.github.io/bookmarks-efficiently/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Productivity"],
    highlights: [
      "Bookmark management concept",
      "Organized user workflow",
      "Useful front-end productivity design"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "password-generator",
    title: "Password Generator",
    category: ["Tools", "Productivity"],
    summary: "A practical password generation tool for creating secure and usable credential combinations.",
    description: "This project presents a focused utility interface that demonstrates strong front-end thinking and user-friendly security tool design.",
    image: "imag/project-screenshots/password-generator.png",
    liveUrl: "https://mohamed249k.github.io/Password-Generator/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Security Tools"],
    highlights: [
      "Password creation logic",
      "Utility-first interface",
      "Clean front-end interaction"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "smart-file-manager",
    title: "Smart File Manager",
    category: ["Tools", "Front-End"],
    summary: "A desktop-style file manager with local storage persistence and data organization workflows.",
    description: "This project highlights strong JavaScript logic, local state design, and a polished file explorer interface built for practical browser-based use.",
    image: "imag/project-screenshots/smart-file-manager.png",
    liveUrl: "https://mohamed249k.github.io/Smart-File-Manager-Web-Desktop-Style-/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    highlights: [
      "File explorer interactions",
      "Persistent local data handling",
      "Complex front-end logic"
    ],
    featured: true,
    source: "projects-hub"
  },
  {
    id: "ceremonial-touch",
    title: "Ceremonial Touch",
    category: ["Business", "Front-End"],
    summary: "A service website focused on event and celebration offerings with a polished marketing layout.",
    description: "Ceremonial Touch presents a service-oriented business website experience designed with clear presentation and aesthetic polish.",
    image: "imag/project-screenshots/ceremonial-touch.png",
    liveUrl: "https://elmohammady.github.io/CEREMONIAL-TOUCH1/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Branding"],
    highlights: [
      "Business presentation design",
      "Marketing-focused layout",
      "Service landing page polish"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "shaban-fish-project",
    title: "Shaban Fish",
    category: ["Business", "Front-End"],
    summary: "A restaurant website focused on menu presentation and local business branding.",
    description: "This project shows clean landing-page design, menu-focused UX, and strong business-oriented visual hierarchy.",
    image: "imag/project-screenshots/shaban-fish-project.png",
    liveUrl: "https://elmohammady.github.io/Shaban-Fish/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Branding"],
    highlights: [
      "Restaurant UI design",
      "Modern responsive layout",
      "Service-focused marketing page"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "ma3arf",
    title: "Ma3arf",
    category: ["Business", "Productivity"],
    summary: "A platform-style project designed around useful information access and digital content organization.",
    description: "Ma3arf presents a platform-inspired experience that combines modular presentation with clear exploration patterns.",
    image: "imag/project-screenshots/ma3arf.png",
    liveUrl: "https://mohamed249k.github.io/Ma3arf/",
    githubUrl: "",
    year: 2026,
    technologies: ["HTML5", "CSS3", "JavaScript", "Platform UI"],
    highlights: [
      "Platform-style structure",
      "Useful content organization",
      "Clean digital presentation"
    ],
    featured: false,
    source: "projects-hub"
  },
  {
    id: "dental-clinic-website",
    title: "Dental Clinic Website",
    category: ["Business", "Front-End"],
    summary: "A professional healthcare landing page designed for a dental clinic brand and service presentation.",
    description: "The project demonstrates business-site design, clear information architecture, and user-friendly presentation for real-world services.",
    image: "imag/project-screenshots/dental-clinic-website.png",
    liveUrl: "https://mohamed249k.github.io/Dental-clinic-website/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    highlights: [
      "Business website presentation",
      "Clear service information flow",
      "Healthcare-focused design approach"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "event-ticketing-system",
    title: "Event Ticketing System",
    category: ["Business", "JavaScript"],
    summary: "A front-end booking experience with event cards, pricing, and checkout-style interactions.",
    description: "This project demonstrates e-commerce-like event browsing and booking flows in a clean responsive interface.",
    image: "imag/project-screenshots/event-ticketing-system.png",
    liveUrl: "https://mohamed249k.github.io/Event-Ticketing-System/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    highlights: [
      "Booking flow experience",
      "Event card and cart interaction",
      "Responsive business UX"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "ai-chatbot-builder",
    title: "AI Chatbot Builder",
    category: ["AI", "Tools"],
    summary: "A web-based chatbot builder that lets users design and preview a conversational flow.",
    description: "This project presents a clean AI tool interface and reflects a practical interest in conversational UX and builder patterns.",
    image: "imag/project-screenshots/ai-chatbot-builder.png",
    liveUrl: "https://mohamed249k.github.io/AI-Chatbot-Builder/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "AI UX"],
    highlights: [
      "Conversational builder concept",
      "Dynamic interface workflow",
      "Modern AI product presentation"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "visual-database-designer",
    title: "Visual Database Designer",
    category: ["Database", "Tools", "JavaScript"],
    summary: "A visual database schema design tool for modeling entities and relationships in a browser.",
    description: "This project demonstrates structured thinking, logic-driven UI, and database design concepts in a usable front-end interface.",
    image: "imag/project-screenshots/visual-database-designer.png",
    liveUrl: "https://mohamed249k.github.io/Visual-Database-Designer/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Database Design"],
    highlights: [
      "Schema modeling interface",
      "Entity relationship thinking",
      "Strong logic and planning"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "smart-form-builder",
    title: "Smart Form Builder with Logic Rules",
    category: ["Tools", "Productivity", "JavaScript"],
    summary: "A dynamic web form builder that lets users design custom forms with conditional logic rules.",
    description: "This project combines practical form-building logic with a clean interface for survey and data collection experiences.",
    image: "imag/project-screenshots/smart-form-builder.png",
    liveUrl: "https://mohamed249k.github.io/Smart-Form-Builder-with-Logic-Rules/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Dynamic Forms"],
    highlights: [
      "Conditional form logic",
      "Survey and data entry flows",
      "Strong usability for non-technical users"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: ["Front-End", "Business"],
    summary: "A professional personal site used to present skills, projects, and contact details in a clear responsive layout.",
    description: "This portfolio serves as the personal showcase for work, skills, and professional identity in a polished experience.",
    image: "imag/project-screenshots/personal-portfolio-website.png",
    liveUrl: "https://mohamed249k.github.io/MyWebsite2/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Portfolio UX"],
    highlights: [
      "Responsive personal brand site",
      "Structured portfolio layout",
      "Professional digital identity"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "product-management-system",
    title: "Product Management System",
    category: ["Business", "JavaScript"],
    summary: "A system to manage products with create, read, update, and delete operations in a structured interface.",
    description: "The project demonstrates a practical CRUD workflow and organized front-end data management for business use cases.",
    image: "imag/project-screenshots/product-management-system.png",
    liveUrl: "https://mohamed249k.github.io/Product-Management-CRUD/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "CRUD"],
    highlights: [
      "Inventory-style interface",
      "Data entry and management flow",
      "Structured business logic"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "dashboard",
    title: "Dashboard",
    category: ["Dashboards", "JavaScript"],
    summary: "A dynamic and interactive dashboard that visualizes data and metrics in a clear layout.",
    description: "This project showcases charts, tables, and modern front-end presentation patterns used to highlight key information quickly.",
    image: "imag/project-screenshots/dashboard.png",
    liveUrl: "https://mohamed249k.github.io/Dash-board/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Charts"],
    highlights: [
      "Dashboard metrics layout",
      "Responsive analytics presentation",
      "Strong UI clarity"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "photo-edit",
    title: "Photo Edit",
    category: ["Tools", "Front-End"],
    summary: "A simple web-based photo editing tool for quick adjustments and enhancement workflows.",
    description: "This project combines canvas interaction and a clean interface to provide a lightweight editing experience.",
    image: "imag/project-screenshots/photo-edit.png",
    liveUrl: "https://mohamed249k.github.io/Photo-Edit/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    highlights: [
      "Image editing workflows",
      "Canvas-powered interactions",
      "Simple but polished utility design"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "interactive-quiz-app",
    title: "Interactive Quiz App",
    category: ["Education", "JavaScript"],
    summary: "A fun quiz platform with multiple-choice questions, progress tracking, and score results.",
    description: "This project highlights strong JavaScript logic and dynamic UI updates in a compact interactive learning experience.",
    image: "imag/project-screenshots/interactive-quiz-app.png",
    liveUrl: "https://mohamed249k.github.io/Interactive-Quiz-/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Quiz"],
    highlights: [
      "Multi-question logic",
      "Progress and scoring flow",
      "Interactive UI feedback"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "recipe-finder-app",
    title: "Recipe Finder App",
    category: ["Tools", "JavaScript"],
    summary: "A web app that fetches recipes from an external API based on user search terms.",
    description: "The project emphasizes API integration and a user-friendly interface for exploring recipe details and cooking instructions.",
    image: "imag/project-screenshots/recipe-finder-app.png",
    liveUrl: "https://mohamed249k.github.io/Recipe-Finder/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "API Integration"],
    highlights: [
      "External API functionality",
      "Recipe search experience",
      "Data-driven content layout"
    ],
    featured: false,
    source: "portfolio"
  },
  {
    id: "portfolio-builder-tool",
    title: "Portfolio Builder Tool",
    category: ["Tools", "Productivity"],
    summary: "An online tool for creating professional portfolios with sections for projects, skills, and branding.",
    description: "This project brings together interactivity and responsive design to help users build a portfolio quickly.",
    image: "imag/project-screenshots/portfolio-builder-tool.png",
    liveUrl: "https://mohamed249k.github.io/Portfolio-Tool-with-Live-Preview/",
    githubUrl: "",
    year: 2025,
    technologies: ["HTML5", "CSS3", "JavaScript", "Portfolio Builder"],
    highlights: [
      "Portfolio creation workflow",
      "Responsive content templates",
      "Practical design tool concept"
    ],
    featured: false,
    source: "portfolio"
  }
];

const projectState = {
  filter: "all",
  sort: "featured",
  search: "",
  visibleCount: 9
};

const projectSearchInput = () => document.getElementById("projectSearch");
const projectSortSelect = () => document.getElementById("projectSort");
const projectLibraryGrid = () => document.getElementById("projectLibraryGrid");
const featuredProjectsGrid = () => document.getElementById("featuredProjectsGrid");
const loadMoreButton = () => document.getElementById("loadMoreProjects");

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
      return sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || (Number(b.year) || 0) - (Number(a.year) || 0));
  }
}

function getFilteredProjects() {
  const query = projectState.search.trim().toLowerCase();

  return sortProjects(
    projectData.filter((project) => projectMatchesFilter(project) && projectMatchesSearch(project, query))
  );
}

function renderProjectStats() {
  const total = projectData.length;
  const featuredCount = projectData.filter((project) => project.featured).length;
  const technologyCount = new Set(projectData.flatMap((project) => project.technologies)).size;
  const categoryCount = new Set(projectData.flatMap((project) => normalizeCategories(project))).size;

  const totalEl = document.getElementById("projectTotalCount");
  const featuredEl = document.getElementById("projectFeaturedCount");
  const techEl = document.getElementById("projectTechCount");
  const categoryEl = document.getElementById("projectCategoryCount");

  if (totalEl) totalEl.textContent = String(total);
  if (featuredEl) featuredEl.textContent = String(featuredCount);
  if (techEl) techEl.textContent = String(technologyCount);
  if (categoryEl) categoryEl.textContent = String(categoryCount);
}

function renderEmptyState(message = "No projects match your current filters.") {
  return `
    <div class="project-empty" role="status" aria-live="polite">
      <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
      <p>${escapeHtml(message)}</p>
    </div>
  `;
}

function projectCardMarkup(project) {
  const categories = normalizeCategories(project);
  const primaryCategory = getProjectPrimaryCategory(project);
  const sourceLabel = project.source === "projects-hub" ? "Projects Hub" : "Portfolio";
  const yearLabel = project.year ? String(project.year) : "N/A";

  return `
    <article class="project-card" data-project-id="${escapeHtml(project.id)}" aria-label="${escapeHtml(project.title)} project card">
      <div class="project-thumb">
        <img src="${getProjectImage(project)}" alt="${escapeHtml(project.title)} project interface screenshot" loading="lazy" />
        <div class="project-badges">
          <span>${escapeHtml(primaryCategory)}</span>
          ${project.featured ? '<span>Featured</span>' : ""}
        </div>
      </div>

      <div class="project-body">
        <div class="project-meta">
          <span class="project-year">${escapeHtml(yearLabel)}</span>
          <span class="project-source">${escapeHtml(sourceLabel)}</span>
        </div>

        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-description">${escapeHtml(project.summary)}</p>

        <div class="tech-tags">
          ${project.technologies.map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}
        </div>

        <div class="project-categories">
          ${categories.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}
        </div>

        <div class="project-actions">
          ${project.liveUrl ? `<a class="link-btn primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i><span>Live Demo</span></a>` : ""}
          ${project.githubUrl ? `<a class="link-btn" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i><span>GitHub</span></a>` : ""}
          <button class="link-btn project-details" type="button" data-project-id="${escapeHtml(project.id)}">
            <i class="fas fa-info-circle"></i>
            <span>Details</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProjects() {
  const featured = getFilteredProjects().filter((project) => project.featured).slice(0, 8);
  const container = featuredProjectsGrid();

  if (!container) return;
  container.innerHTML = featured.length ? featured.map(projectCardMarkup).join("") : renderEmptyState();
}

function renderProjectLibrary() {
  const filtered = getFilteredProjects();
  const visible = filtered.slice(0, projectState.visibleCount);
  const container = projectLibraryGrid();
  const countEl = document.getElementById("projectLibraryCount");

  if (countEl) {
    countEl.textContent = String(filtered.length);
  }

  if (!container) return;

  if (!visible.length) {
    container.innerHTML = renderEmptyState();
    if (loadMoreButton()) loadMoreButton().hidden = true;
    return;
  }

  container.innerHTML = visible.map(projectCardMarkup).join("");
  if (loadMoreButton()) {
    loadMoreButton().hidden = visible.length >= filtered.length;
  }
}

function updateProjectView() {
  renderProjectStats();
  renderFeaturedProjects();
  renderProjectLibrary();
}

function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  const modalContent = modal.querySelector(".modal-content");

  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-visual">
      <img src="${getProjectImage(project)}" alt="${escapeHtml(project.title)} project interface screenshot" />
    </div>

    <div class="modal-header-row">
      <h3 id="modalTitle">${escapeHtml(project.title)}</h3>
      <span class="source-badge">${escapeHtml(project.source === "projects-hub" ? "Projects Hub" : "Portfolio")}</span>
    </div>

    <p>${escapeHtml(project.description)}</p>
    <div class="modal-meta">
      ${normalizeCategories(project).map((category) => `<span>${escapeHtml(category)}</span>`).join("")}
      <span>${escapeHtml(String(project.year || "N/A"))}</span>
    </div>

    <div class="modal-section">
      <h4>Key highlights</h4>
      <ul>
        ${project.highlights.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <h4>Technologies</h4>
      <div class="tech-tags">
        ${project.technologies.map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}
      </div>
    </div>

    <div class="modal-actions">
      ${project.liveUrl ? `<a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i><span>Live Demo</span></a>` : ""}
      ${project.githubUrl ? `<a class="btn btn-secondary" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i><span>GitHub</span></a>` : ""}
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function setupProjectSearchAndFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  projectSearchInput()?.addEventListener("input", (event) => {
    projectState.search = event.target.value.trim().toLowerCase();
    projectState.visibleCount = 9;
    updateProjectView();
  });

  projectSortSelect()?.addEventListener("change", (event) => {
    projectState.sort = event.target.value;
    projectState.visibleCount = 9;
    updateProjectView();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      projectState.filter = button.dataset.filter || "all";
      projectState.visibleCount = 9;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      updateProjectView();
    });
  });

  loadMoreButton()?.addEventListener("click", () => {
    projectState.visibleCount += 9;
    renderProjectLibrary();
  });

  document.addEventListener("click", (event) => {
    const detailsButton = event.target.closest(".project-details");
    if (!detailsButton) return;

    const projectId = detailsButton.dataset.projectId;
    const project = projectData.find((item) => item.id === projectId);
    if (project) {
      openProjectModal(project);
    }
  });
}

function setupProjectControls() {
  updateProjectView();
  setupProjectSearchAndFilters();
}

function renderCertificates() {
  const container = document.getElementById('certificatesGrid');
  if (!container) return;

  container.innerHTML = certificateData.map((cert) => `
    <button class="cert-card" type="button" data-title="${escapeHtml(cert.title)}">
      <img src="${cert.image}" alt="${escapeHtml(cert.title)} certificate" loading="lazy" />
      <h3>${escapeHtml(cert.title)}</h3>
      <p>${escapeHtml(cert.issuer)}</p>
      ${cert.date ? `<p>${escapeHtml(cert.date)}</p>` : ''}
    </button>
  `).join('');

  container.querySelectorAll('.cert-card').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.dataset.title;
      const cert = certificateData.find((item) => item.title === title);
      if (!cert) return;
      openCertificateModal(cert);
    });
  });
}

function openCertificateModal(cert) {
  const modal = document.getElementById('certificateModal');
  const content = modal.querySelector('.cert-content');
  content.innerHTML = `
    <div class="modal-visual">
      <img src="${cert.image}" alt="${escapeHtml(cert.title)} preview" />
    </div>
    <h3 id="certTitle">${escapeHtml(cert.title)}</h3>
    <p>${escapeHtml(cert.description)}</p>
    <div class="modal-meta">
      <span>${escapeHtml(cert.issuer)}</span>
      ${cert.date ? `<span>${escapeHtml(cert.date)}</span>` : ''}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindModalCloseHandlers() {
  document.querySelectorAll('.modal-backdrop, .modal-close').forEach((element) => {
    element.addEventListener('click', () => {
      closeModal('projectModal');
      closeModal('certificateModal');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal('projectModal');
      closeModal('certificateModal');
    }
  });
}

function setupNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');
  const cvLink = document.querySelector('.mobile-cv-item .btn');
  const mobileCvItem = document.querySelector('.mobile-cv-item');
  const headerActions = document.querySelector('.header-actions');

  const placeCvLink = () => {
    if (!cvLink || !mobileCvItem || !headerActions) return;
    const mobileLayout = window.matchMedia('(max-width: 768px)').matches;
    (mobileLayout ? mobileCvItem : headerActions).append(cvLink);
  };

  placeCvLink();
  window.matchMedia('(max-width: 768px)').addEventListener('change', placeCvLink);

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const open = navList.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navList?.classList.remove('open');
      navToggle?.classList.remove('active');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = document.querySelectorAll('main section[id]');
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
        });
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => navObserver.observe(section));
}

function setupThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const icon = themeToggle?.querySelector('i');
  const savedTheme = localStorage.getItem('mk-theme');

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (icon) icon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('mk-theme', nextTheme);

    if (icon) {
      icon.classList.toggle('fa-moon', nextTheme === 'dark');
      icon.classList.toggle('fa-sun', nextTheme === 'light');
    }
  });
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please complete all required fields before sending your message.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const mailtoLink = `mailto:mohamedelmagraby35@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateProjectView();
  renderCertificates();
  setupNavigation();
  setupThemeToggle();
  setupRevealAnimations();
  setupProjectControls();
  setupContactForm();
  bindModalCloseHandlers();
});
