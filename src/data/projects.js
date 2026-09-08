// Data-driven project catalogue.
//
// Status model:
//   completionStatus     — "completed" | "in-progress" | "coming-soon"
//   repositoryStatus     — "public" | "private" | "unavailable" (legacy status-badge input)
//   repositoryVisibility — "public" | "private" (authoritative for the visibility badge/tooltip
//                          next to the repo button; independent of completionStatus — a repo can
//                          be private while the project itself is Completed, and vice versa)
//   demoStatus        — "live" | "unavailable"
//   context           — "professional" | "university" | "personal" | "research"
//   filters           — tags used by the Projects filter bar:
//                        "featured" | "backend" | "fullstack" | "frontend" |
//                        "dataScience" | "ml" | "computerVision" | "automation" |
//                        "university" | "professional" | "research"
//                        ("inDevelopment" is derived from completionStatus, not stored here)
//
// Only verified information is included. Fields with nothing truthful to show
// (challenges, outcomes, futureExtensions, contributions, screenshots, etc.)
// are simply omitted rather than filled with placeholders.
//
// Verification note (2026 update): balkan-air-quality-analysis, prishtina-traffic-counter,
// arka-pos, crawl (E-commerce Product Data Crawler), and invations (Digital Invitation
// Platform) live at github.com/getuar04/<name>. The project owner has confirmed these exact
// URLs are final and intentional — the repositories are currently private and will be made
// public later, so the GitHub buttons are shown as active regardless of live reachability.
// Only the technology facts explicitly supplied for this update are published for them;
// nothing beyond that was inferred. quiz-management was independently verified (README +
// frontend/package.json) and was already public.

const projects = [
  // ---------------------------------------------------------------------
  // FEATURED
  // ---------------------------------------------------------------------
  {
    id: "arka-pos",
    title: "ARKA — POS & Business Management System",
    titleSq: "ARKA — Sistem POS dhe Menaxhimi Biznesi",
    category: "Full-Stack / Business",
    categorySq: "Full-Stack / Biznes",
    context: "personal",
    filters: ["featured", "fullstack"],
    featured: true,
    completionStatus: "coming-soon",
    repositoryStatus: "private",
    repositoryVisibility: "private",
    demoStatus: "unavailable",
    shortDescription:
      "A modern POS and business-management platform in development for retail shops and hospitality businesses in Kosovo.",
    shortDescriptionSq:
      "Platformë moderne POS dhe menaxhimi biznesi në zhvillim për markete dhe biznese të gastronomisë në Kosovë.",
    fullDescription:
      "ARKA is a modern POS and business-management platform in development for retail shops and hospitality businesses in Kosovo. It is designed around separate market and café workflows, secure role-based access, inventory and order management, and future electronic fiscalisation integration.",
    fullDescriptionSq:
      "ARKA është një platformë moderne POS dhe menaxhimi biznesi në zhvillim për markete dhe biznese të gastronomisë në Kosovë. Sistemi është projektuar me rrjedha të ndara për markete dhe kafiteri, role të sigurta, menaxhim të stokut dhe porosive, si dhe integrim të ardhshëm me fiskalizimin elektronik.",
    stack: [],
    futureExtensions: [
      "Electronic fiscalisation integration — architecture prepared for future Kosovo SEF integration; not yet operational or certified.",
    ],
    futureExtensionsSq: [
      "Integrim me fiskalizimin elektronik — arkitektura e përgatitur për integrim të ardhshëm me SEF në Kosovë; ende jo operacionale apo e certifikuar.",
    ],
    note: "In development. Not yet certified, legally compliant, or connected to a production fiscalisation system — shown here as work in progress only.",
    noteSq: "Në zhvillim. Ende nuk është e certifikuar, e pajtueshme ligjërisht, apo e lidhur me një sistem fiskalizimi në prodhim — paraqitet vetëm si punë në vazhdim.",
    github: "https://github.com/getuar04/arka-pos",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 1,
  },
  {
    id: "resource-booking-system",
    title: "Smart Resource Booking System",
    titleSq: "Smart Resource Booking System",
    category: "Full-Stack / Microservices",
    categorySq: "Full-Stack / Mikroshërbime",
    context: "university",
    filters: ["featured", "fullstack", "university"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "A full-stack resource-booking platform built with a microservices-oriented architecture and an API Gateway.",
    shortDescriptionSq:
      "Platformë full-stack për rezervim burimesh, ndërtuar me arkitekturë të orientuar nga mikroshërbimet dhe API Gateway.",
    fullDescription:
      "Smart Resource Booking System is a full-stack resource-booking platform built with a microservices-oriented architecture. The system separates authentication, resource management, and booking functionality into backend services connected through an API Gateway. It includes JWT authentication, role-based authorisation, MongoDB persistence, RESTful CRUD operations, Docker Compose containerisation, and Jenkins CI/CD automation.",
    fullDescriptionSq:
      "Smart Resource Booking System është një platformë full-stack për rezervimin e burimeve, ndërtuar me arkitekturë të orientuar nga mikroshërbimet. Sistemi ndan autentikimin, menaxhimin e burimeve dhe funksionalitetin e rezervimit në shërbime backend të lidhura përmes një API Gateway. Përfshin autentikim JWT, autorizim bazuar në role, ruajtje të dhënash në MongoDB, operacione CRUD RESTful, kontenerizim me Docker Compose dhe automatizim Jenkins CI/CD.",
    stack: [
      "React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API",
      "Microservices", "API Gateway", "Docker", "Docker Compose", "Jenkins CI/CD", "Git", "GitHub",
    ],
    futureExtensions: [
      "Kafka for event-driven communication between services",
      "Kubernetes for orchestration",
      "Redis for caching",
      "Prometheus and Grafana for observability",
    ],
    futureExtensionsSq: [
      "Kafka për komunikim event-driven mes shërbimeve",
      "Kubernetes për orkestrim",
      "Redis për caching",
      "Prometheus dhe Grafana për observability",
    ],
    architecture:
      "The architecture was designed with room for future event-driven communication, orchestration, caching, and observability extensions — these were not part of the completed implementation.",
    architectureSq:
      "Arkitektura u projektua me hapësirë për zgjerime të ardhshme në komunikim event-driven, orkestrim, caching dhe observability — këto nuk ishin pjesë e implementimit të përfunduar.",
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 2,
  },
  {
    id: "balkan-air-quality-analysis",
    title: "Balkan Air Quality Analysis",
    titleSq: "Analiza e Cilësisë së Ajrit në Ballkan",
    category: "Data Science / ML",
    categorySq: "Data Science / ML",
    context: "personal",
    filters: ["featured", "dataScience", "ml"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "private",
    repositoryVisibility: "private",
    demoStatus: "unavailable",
    shortDescription:
      "An end-to-end Python data science project analysing air pollution trends across Balkan countries, with forecasting and an interactive dashboard.",
    shortDescriptionSq:
      "Projekt end-to-end në Python për analizimin e trendeve të ndotjes së ajrit në vende të Ballkanit, me parashikime dhe dashboard interaktiv.",
    fullDescription:
      "An end-to-end Python data science project analysing air pollution trends across ten Balkan countries from 2019 to 2024. The workflow covers data cleaning and integration, statistical analysis, professional static and interactive visualisations, forecasting experiments extending to 2030, and an interactive Streamlit dashboard with dynamic filters. The 2030 figures are a model-based forecasting experiment, not a guaranteed environmental prediction.",
    fullDescriptionSq:
      "Projekt end-to-end në Python për analizimin e trendeve të ndotjes së ajrit në dhjetë vende të Ballkanit gjatë periudhës 2019–2024. Projekti përfshin pastrimin dhe integrimin e të dhënave, analizën statistikore, vizualizime statike dhe interaktive, eksperimente parashikuese deri në vitin 2030 dhe dashboard interaktiv me Streamlit. Vlerat për 2030 janë një eksperiment parashikues i bazuar në model, jo një parashikim mjedisor i garantuar.",
    stack: ["Python", "Data Cleaning", "Statistical Analysis", "Data Visualisation", "Forecasting", "Streamlit"],
    note: "The description above reflects the scope as supplied by the project owner and was not independently source-verified for this update.",
    noteSq: "Përshkrimi më sipër pasqyron fushëveprimin siç është dhënë nga pronari i projektit dhe nuk u verifikua në mënyrë të pavarur nga burimi për këtë përditësim.",
    github: "https://github.com/getuar04/balkan-air-quality-analysis",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 3,
  },
  {
    id: "prishtina-traffic-counter",
    title: "Prishtina Traffic Counter",
    titleSq: "Numëruesi i Trafikut në Prishtinë",
    category: "Computer Vision",
    categorySq: "Computer Vision",
    context: "personal",
    filters: ["featured", "computerVision"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "private",
    repositoryVisibility: "private",
    demoStatus: "unavailable",
    shortDescription:
      "A computer-vision traffic analysis project that detects and counts vehicles crossing a defined road area from a camera feed.",
    shortDescriptionSq:
      "Projekt për analizimin e trafikut me computer vision, që identifikon dhe numëron automjetet që kalojnë në një zonë të përcaktuar të rrugës.",
    fullDescription:
      "A computer-vision traffic analysis project that processes an urban camera feed, detects vehicles crossing a defined road area, counts traffic, and separates supported vehicle classes such as cars, buses, and trucks.",
    fullDescriptionSq:
      "Projekt për analizimin e trafikut me computer vision, i cili përpunon pamje nga një kamerë urbane, identifikon automjetet që kalojnë në një zonë të përcaktuar të rrugës, numëron trafikun dhe ndan kategoritë e mbështetura si vetura, autobusë dhe kamionë.",
    stack: ["Python", "Computer Vision", "Vehicle Detection", "Traffic Counting"],
    note: "The specific detection model, tracking approach, and library choice (e.g. OpenCV/YOLO) were not source-verified for this update, so they are intentionally not listed.",
    noteSq: "Modeli specifik i detektimit, qasja e tracking-ut dhe libraria e përdorur (p.sh. OpenCV/YOLO) nuk u verifikuan nga burimi për këtë përditësim, prandaj qëllimisht nuk janë listuar.",
    github: "https://github.com/getuar04/prishtina-traffic-counter",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 4,
  },
  {
    id: "quiz-management",
    title: "Quiz Management System",
    titleSq: "Sistemi për Menaxhimin e Kuizeve",
    category: "Full-Stack / Education",
    categorySq: "Full-Stack / Edukim",
    context: "personal",
    filters: ["featured", "fullstack"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "public",
    repositoryVisibility: "public",
    demoStatus: "unavailable",
    shortDescription:
      "Full-stack quiz-management platform with secure access/refresh-token authentication, role-based permissions, and automatic scoring.",
    shortDescriptionSq:
      "Platformë full-stack për menaxhimin e kuizeve me autentikim të sigurt, role të ndara dhe vlerësim automatik.",
    fullDescription:
      "Full-stack quiz-management platform with a REST API, secure access and refresh-token authentication, role-based permissions for administrators, teachers, and students, quiz and question management, assignments, submissions, automatic scoring, and duplicate-attempt prevention.",
    fullDescriptionSq:
      "Platformë full-stack për menaxhimin e kuizeve me REST API, autentikim të sigurt me access dhe refresh tokens, role të ndara për administratorë, mësues dhe studentë, menaxhim të kuizeve dhe pyetjeve, caktim të kuizeve, dorëzim të përgjigjeve, vlerësim automatik dhe parandalim të tentimeve të dyfishta.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "React", "TypeScript", "Vite", "Tailwind CSS", "Axios"],
    implementedFeatures: [
      "JWT authentication with refresh-token rotation, stored in an HTTP-only cookie",
      "Admin, Teacher, and Student roles with protected routes and user activation/deactivation",
      "Quiz creation, editing, deletion, publishing, and assignment; MCQ question management",
      "Student submissions with automatic scoring, ownership validation, and duplicate-attempt prevention",
    ],
    implementedFeaturesSq: [
      "Autentikim JWT me rotullim refresh-token, ruajtur në HTTP-only cookie",
      "Role Admin, Mësues dhe Student me rrugë të mbrojtura dhe aktivizim/çaktivizim përdoruesish",
      "Krijim, editim, fshirje, publikim dhe caktim kuizesh; menaxhim pyetjesh MCQ",
      "Dorëzime studentësh me vlerësim automatik, validim pronësie dhe parandalim tentimesh të dyfishta",
    ],
    note: "The frontend is built with React, TypeScript, Vite, Tailwind CSS, and Axios — confirmed directly from the repository's frontend/package.json (the project README references Bootstrap, but the actual dependency file does not include it, so Bootstrap is intentionally not listed here).",
    noteSq: "Frontend-i është ndërtuar me React, TypeScript, Vite, Tailwind CSS dhe Axios — konfirmuar drejtpërdrejt nga frontend/package.json i repozitorit (README-ja e projektit përmend Bootstrap, por skedari aktual i varësive nuk e përfshin, prandaj Bootstrap qëllimisht nuk është listuar këtu).",
    github: "https://github.com/getuar04/quiz-management",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 5,
  },
  {
    id: "2af-auth-service",
    title: "2AF Authentication Service",
    titleSq: "2AF Authentication Service",
    category: "Backend / Professional",
    categorySq: "Backend / Profesionale",
    context: "professional",
    filters: ["featured", "backend", "professional"],
    featured: true,
    completionStatus: "in-progress",
    repositoryStatus: "private",
    demoStatus: "unavailable",
    shortDescription:
      "A secure authentication and authorisation service built with Node.js and TypeScript using Clean Architecture — my current professional work.",
    shortDescriptionSq:
      "Shërbim i sigurt autentikimi dhe autorizimi, ndërtuar me Node.js dhe TypeScript duke përdorur Clean Architecture — puna ime aktuale profesionale.",
    fullDescription:
      "2AF Authentication Service is a professional backend service focused on secure authentication and authorisation, built with Node.js and TypeScript following Clean Architecture. It supports JWT access and refresh tokens, role-based access control, TOTP-based two-factor authentication, session management, and audit logging.",
    fullDescriptionSq:
      "2AF Authentication Service është shërbim profesional backend i fokusuar në autentikim dhe autorizim të sigurt, ndërtuar me Node.js dhe TypeScript duke ndjekur Clean Architecture. Mbështet token-a JWT access/refresh, kontroll aksesi bazuar në role, autentikim dyfaktorësh TOTP, menaxhim sesionesh dhe audit logging.",
    stack: [
      "Node.js", "TypeScript", "Express.js", "PostgreSQL", "Redis", "MongoDB", "Kafka",
      "JWT", "RBAC", "TOTP 2FA", "Docker", "Kubernetes", "Jenkins CI/CD",
    ],
    implementedFeatures: [
      "JWT access and refresh token authentication",
      "Role-based access control (RBAC)",
      "Two-factor authentication with TOTP",
      "Session management and audit logging",
      "Health check endpoints and Swagger/OpenAPI documentation",
      "Structured logging and security middleware, including rate limiting",
      "Automated testing and Jenkins CI/CD pipeline",
      "Containerised with Docker and deployed via Kubernetes",
    ],
    implementedFeaturesSq: [
      "Autentikim me token JWT access dhe refresh",
      "Kontroll aksesi bazuar në role (RBAC)",
      "Autentikim dyfaktorësh me TOTP",
      "Menaxhim sesionesh dhe audit logging",
      "Health check endpoints dhe dokumentim Swagger/OpenAPI",
      "Logging i strukturuar dhe security middleware, përfshirë rate limiting",
      "Testim i automatizuar dhe pipeline Jenkins CI/CD",
      "Kontenerizuar me Docker dhe vendosur përmes Kubernetes",
    ],
    contributions:
      "Backend contribution as part of a team: implemented authentication flows, security middleware, and test coverage, and contributed to the CI/CD pipeline. Presented here as individual contribution within a larger team effort.",
    contributionsSq:
      "Kontribut backend si pjesë e një ekipi: implementova rrjedhat e autentikimit, security middleware dhe mbulim testesh, dhe kontribuova në pipeline CI/CD. I paraqitur këtu si kontribut individual brenda një përpjekjeje më të gjerë ekipore.",
    note: "Private professional source code. Internal endpoints, infrastructure details, and client information are not disclosed.",
    noteSq: "Kod burimor privat profesional. Detajet e endpoint-eve të brendshëm, infrastruktura dhe informacionet e klientit nuk zbulohen.",
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 6,
  },

  // ---------------------------------------------------------------------
  // ARCHIVE / MORE PROJECTS
  // ---------------------------------------------------------------------
  {
    id: "smart-kitchen",
    title: "Smart Kitchen & Meal Planner System",
    titleSq: "Sistemi Smart Kitchen & Planifikues Vaktesh",
    category: "University Project",
    categorySq: "Projekt Universitar",
    context: "university",
    filters: ["university"],
    featured: false,
    completionStatus: "in-progress",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "A university case-study project exploring kitchen and meal-planning management.",
    shortDescriptionSq:
      "Projekt universitar (case-study) që eksploron menaxhimin e kuzhinës dhe planifikimin e vakteve.",
    fullDescription:
      "Smart Kitchen & Meal Planner System is a university project developed as part of coursework at UBT. Detailed implementation specifics are not published here pending verification of the final source; only the confirmed project name and academic context are shown. It is a separate project from Smart Resource Booking System and ARKA, with no shared codebase.",
    fullDescriptionSq:
      "Smart Kitchen & Meal Planner System është projekt universitar i zhvilluar si pjesë e kurrikulës në UBT. Detajet e implementimit nuk publikohen këtu deri në verifikimin e burimit final; shfaqet vetëm emri i konfirmuar i projektit dhe konteksti akademik. Është projekt i ndarë nga Smart Resource Booking System dhe ARKA, pa kod të përbashkët.",
    stack: [],
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 7,
  },
  {
    id: "course-management",
    title: "Course Management System",
    titleSq: "Sistemi i Menaxhimit të Kurseve",
    category: "Full-Stack",
    categorySq: "Full-Stack",
    context: "personal",
    filters: ["fullstack"],
    featured: false,
    completionStatus: "in-progress",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "Multi-role academic platform (student/teacher/admin) with JWT authentication, RBAC, and CRUD modules for courses, classes, attendance, schedules, and notifications.",
    shortDescriptionSq:
      "Platformë akademike me shumë role (student/mësues/admin) me autentikim JWT, RBAC dhe module CRUD për kurse, klasa, prezencë, orare dhe njoftime.",
    fullDescription:
      "Course Management System is a multi-role platform supporting student, teacher, and administrator roles, with JWT authentication, role-based access control, and CRUD modules covering courses, classes, attendance, schedules, and notifications. Still actively being built out.",
    fullDescriptionSq:
      "Course Management System është platformë me shumë role për studentë, mësues dhe administratorë, me autentikim JWT, kontroll aksesi bazuar në role dhe module CRUD për kurse, klasa, prezencë, orare dhe njoftime. Ende në zhvillim aktiv.",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "RBAC", "Bootstrap"],
    implementedFeatures: [
      "Student, teacher, and administrator roles",
      "JWT authentication with role-based access control",
      "CRUD modules for courses, classes, attendance, schedules, and notifications",
    ],
    implementedFeaturesSq: [
      "Role për student, mësues dhe administrator",
      "Autentikim JWT me kontroll aksesi bazuar në role",
      "Module CRUD për kurse, klasa, prezencë, orare dhe njoftime",
    ],
    github: null,
    live: null,
    screenshots: "https://drive.google.com/drive/folders/1yixSis1RJwIIlKu43DKUxmEJ6DpOEPTr?usp=sharing",
    linkedin: null,
    year: "2026",
    displayOrder: 8,
  },
  {
    id: "chatbot",
    title: "Albanian AI Chatbot",
    titleSq: "Chatbot AI Shqip",
    category: "AI / NLP",
    categorySq: "AI / NLP",
    context: "personal",
    filters: ["fullstack"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "public",
    repositoryVisibility: "public",
    demoStatus: "unavailable",
    shortDescription:
      "Albanian-language chatbot powered by semantic similarity, a FastAPI backend, sentence transformers, and a custom Q&A dataset.",
    shortDescriptionSq:
      "Chatbot në gjuhën shqipe i bazuar në ngjashmëri semantike, backend FastAPI, sentence transformers dhe dataset custom.",
    fullDescription:
      "An Albanian-language chatbot that answers questions using semantic similarity matching against a custom Albanian Q&A dataset. The backend is built with Python and FastAPI, using SentenceTransformers for semantic embeddings, with a React frontend. It does not use a custom-trained language model — matching is based on semantic similarity search.",
    fullDescriptionSq:
      "Chatbot në gjuhën shqipe që përgjigjet në pyetje duke përdorur ngjashmëri semantike mbi një dataset custom Pyetje-Përgjigje në shqip. Backend-i është ndërtuar me Python dhe FastAPI, duke përdorur SentenceTransformers për embeddings semantike, me frontend në React. Nuk përdor model gjuhësor të trajnuar posaçërisht — përputhja bazohet në kërkim ngjashmërie semantike.",
    stack: ["Python", "FastAPI", "React", "NLP", "SentenceTransformers"],
    implementedFeatures: [
      "Semantic similarity search over a custom Albanian Q&A dataset",
      "FastAPI backend with a React chat interface",
    ],
    implementedFeaturesSq: [
      "Kërkim ngjashmërie semantike mbi një dataset custom Pyetje-Përgjigje në shqip",
      "Backend FastAPI me interface React për bisedë",
    ],
    github: "https://github.com/getuar04/chat-bot",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2025",
    displayOrder: 9,
  },
  {
    id: "social-media",
    title: "Social Media App",
    titleSq: "Aplikacion Social Media",
    category: "Full-Stack",
    categorySq: "Full-Stack",
    context: "personal",
    filters: ["fullstack"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "public",
    repositoryVisibility: "public",
    demoStatus: "unavailable",
    shortDescription:
      "A social media platform with authentication, profile pages, image uploads, posts CRUD, likes, pagination, 2FA, and a REST API.",
    shortDescriptionSq:
      "Platformë sociale me autentikim, faqe profili, ngarkime imazhesh, CRUD postimesh, like, faqosje, 2FA dhe REST API.",
    fullDescription:
      "A full-stack social media platform with JWT authentication, two-factor authentication, profile pages, image uploads via ImageKit, post CRUD, likes, and pagination, built as a REST API with a React frontend.",
    fullDescriptionSq:
      "Platformë sociale full-stack me autentikim JWT, autentikim dyfaktorësh, faqe profili, ngarkim imazhesh përmes ImageKit, CRUD postimesh, like dhe faqosje, ndërtuar si REST API me frontend React.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "ImageKit", "2FA"],
    implementedFeatures: [
      "Authentication with JWT and two-factor authentication",
      "Profile pages and image uploads via ImageKit",
      "Post CRUD, likes, and pagination",
      "REST API architecture",
    ],
    implementedFeaturesSq: [
      "Autentikim me JWT dhe autentikim dyfaktorësh",
      "Faqe profili dhe ngarkim imazhesh përmes ImageKit",
      "CRUD postimesh, like dhe faqosje",
      "Arkitekturë REST API",
    ],
    github: "https://github.com/getuar04/social_media_app",
    live: null,
    screenshots: null,
    linkedin:
      "https://www.linkedin.com/posts/roi-academy_roiacademy-fullstack-programming-activity-7438291173422743552-BXG3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAELfj7YBZRzJNW_jKfzx-HahMMNyHQwIEnU",
    year: "2025",
    displayOrder: 10,
  },
  {
    id: "digital-invitation-platform",
    title: "Digital Invitation Platform",
    titleSq: "Platforma e Ftesave Digjitale",
    category: "Frontend / Interactive Experience",
    categorySq: "Frontend / Përvojë Interaktive",
    context: "personal",
    filters: ["frontend"],
    featured: false,
    completionStatus: "coming-soon",
    repositoryStatus: "private",
    repositoryVisibility: "private",
    demoStatus: "unavailable",
    shortDescription:
      "A mobile-first interactive digital invitation platform built around a premium card-opening experience.",
    shortDescriptionSq:
      "Platformë mobile-first për ftesa digjitale interaktive, e ndërtuar rreth një përvoje premium të hapjes së ftesës.",
    fullDescription:
      "A mobile-first interactive digital invitation platform built to create a premium card-opening experience rather than a conventional event website. It combines animated invitation opening, elegant typography, event information, map access, responsive interaction, and reusable client-specific configuration.",
    fullDescriptionSq:
      "Platformë mobile-first për ftesa digjitale interaktive, e krijuar për të ofruar përvojën e hapjes së një ftese premium dhe jo pamjen e një faqeje të zakonshme eventi. Përfshin animacionin e hapjes së ftesës, tipografi elegante, informacione të eventit, hartë, ndërveprim responsive dhe konfigurim të ripërdorshëm për klientë të ndryshëm.",
    stack: [],
    futureExtensions: [
      "Persistent RSVP storage and backend RSVP management",
      "Client dashboards",
      "Multiple invitation templates and automatic invitation generation",
      "Multi-client administration",
    ],
    futureExtensionsSq: [
      "Ruajtje e qëndrueshme e RSVP dhe menaxhim RSVP në backend",
      "Panele klientësh",
      "Shabllone të shumta ftesash dhe gjenerim automatik i ftesave",
      "Administrim me shumë klientë",
    ],
    note: "In development. The current RSVP interface does not yet persist real confirmations — backend storage is planned, not implemented.",
    noteSq: "Në zhvillim. Interfejsi aktual i RSVP ende nuk ruan konfirmime reale — ruajtja në backend është e planifikuar, jo e implementuar.",
    github: "https://github.com/getuar04/invations",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 11,
  },
  {
    id: "ecommerce-crawler",
    title: "E-commerce Product Data Crawler",
    titleSq: "Mbledhës i të Dhënave të Produkteve E-commerce",
    category: "Backend / Automation",
    categorySq: "Backend / Automatizim",
    context: "personal",
    filters: ["backend", "automation"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "private",
    repositoryVisibility: "private",
    demoStatus: "unavailable",
    shortDescription:
      "A Node.js-based crawling and data-extraction tool that exports structured e-commerce product data to CSV.",
    shortDescriptionSq:
      "Mjet i ndërtuar me Node.js për crawling dhe nxjerrjen e të dhënave të produkteve, me eksportim në CSV.",
    fullDescription:
      "A Node.js-based crawling and data-extraction tool that collects structured product information from e-commerce pages and exports the processed results into CSV format.",
    fullDescriptionSq:
      "Mjet i ndërtuar me Node.js për crawling dhe nxjerrjen e të dhënave të strukturuara të produkteve nga faqe e-commerce, me përpunim dhe eksportim të rezultateve në format CSV.",
    stack: ["Node.js", "CSV Export"],
    note: "The specific scraping method, targeted site(s), and library choice were not source-verified for this update, so no multi-site support, proxy rotation, or scheduling is claimed.",
    noteSq: "Metoda specifike e scraping-ut, faqja/faqet e synuara dhe libraria e përdorur nuk u verifikuan nga burimi për këtë përditësim, prandaj nuk pretendohet mbështetje multi-site, rotacion proxy, apo planifikim automatik.",
    github: "https://github.com/getuar04/crawl",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2025",
    displayOrder: 12,
  },
  {
    id: "2fa-auth",
    title: "Two-Factor Authentication System",
    titleSq: "Sistemi i Autentikimit 2FA",
    category: "Backend / Security",
    categorySq: "Backend / Siguri",
    context: "personal",
    filters: ["backend"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "public",
    repositoryVisibility: "public",
    demoStatus: "unavailable",
    shortDescription:
      "Secure authentication flow using email-based 2FA codes, MongoDB TTL cleanup, rate limiting, and verification endpoints.",
    shortDescriptionSq:
      "Autentikim i sigurt me kode 2FA me email, pastrimi TTL i MongoDB, kufizim kërkesash dhe endpoint-e verifikimi.",
    fullDescription:
      "A standalone Node.js/Express service implementing email-based two-factor authentication codes, with MongoDB TTL indexes for automatic cleanup of expired codes, rate limiting, and dedicated verification endpoints. Separate from the 2AF Authentication Service built professionally.",
    fullDescriptionSq:
      "Shërbim i pavarur Node.js/Express që implementon kode autentikimi dyfaktorësh me email, me indekse TTL të MongoDB për pastrim automatik të kodeve të skaduara, kufizim kërkesash dhe endpoint-e të dedikuara verifikimi. I ndarë nga 2AF Authentication Service i ndërtuar profesionalisht.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/getuar04/Two_Factor_Authentication",
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2025",
    displayOrder: 13,
  },
  {
    id: "mobileria-nita",
    title: "Mobileria Nita",
    titleSq: "Mobileria Nita",
    category: "CMS / Business",
    categorySq: "CMS / Biznes",
    context: "personal",
    filters: ["fullstack"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "Business website with an admin dashboard, full CRUD for products, and a MySQL database.",
    shortDescriptionSq:
      "Faqe biznesi me panel admin, CRUD të plotë për produkte dhe bazë të dhënash MySQL.",
    fullDescription:
      "A practical CMS-style business website built for a furniture retailer, with an admin dashboard for product management (full CRUD) backed by a MySQL database.",
    fullDescriptionSq:
      "Faqe biznesi në stilin CMS e ndërtuar për një shitës mobiljesh, me panel admin për menaxhimin e produkteve (CRUD i plotë) të mbështetur nga një bazë të dhënash MySQL.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: null,
    live: null,
    screenshots: "https://drive.google.com/drive/folders/1RrkcH0WkyM2VH9Dj-7LXd5pUi15LSR7W?usp=drive_link",
    linkedin: null,
    year: "2024",
    displayOrder: 14,
  },
  {
    id: "book-list",
    title: "Book List App",
    titleSq: "Aplikacioni Book List",
    category: "Frontend",
    categorySq: "Frontend",
    context: "personal",
    filters: ["frontend"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "live",
    shortDescription: "CRUD book manager with localStorage persistence.",
    shortDescriptionSq: "Menaxhues librash CRUD me ruajtje localStorage.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: null,
    live: "https://book-list-getu.rf.gd/?i=2",
    screenshots: null,
    linkedin: null,
    year: "2024",
    displayOrder: 15,
  },
  {
    id: "countries-app",
    title: "Countries App",
    titleSq: "Aplikacioni i Vendeve",
    category: "Frontend",
    categorySq: "Frontend",
    context: "personal",
    filters: ["frontend"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "live",
    shortDescription: "Country search, filters, and detail pages powered by a public REST API.",
    shortDescriptionSq: "Kërkim vendesh, filtra dhe faqe detajesh nga REST API publik.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    github: null,
    live: "https://countries-app-getu.infinityfree.me/?i=1",
    screenshots: null,
    linkedin: null,
    year: "2024",
    displayOrder: 16,
  },
  {
    id: "todo-list",
    title: "Todo List",
    titleSq: "Lista e Detyrave",
    category: "Frontend",
    categorySq: "Frontend",
    context: "personal",
    filters: ["frontend"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "live",
    shortDescription: "Task tracking with status management and localStorage persistence.",
    shortDescriptionSq: "Gjurmim detyrash me menaxhim statusi dhe ruajtje localStorage.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: null,
    live: "https://todolistgetu.infinityfree.me/?i=2",
    screenshots: null,
    linkedin: null,
    year: "2024",
    displayOrder: 17,
  },
  {
    id: "weather-app",
    title: "Weather App",
    titleSq: "Aplikacioni i Motit",
    category: "Frontend",
    categorySq: "Frontend",
    context: "personal",
    filters: ["frontend"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "live",
    shortDescription: "City search with a clean, fast weather UI powered by a weather API.",
    shortDescriptionSq: "Kërkim qyteti me UI të pastër dhe të shpejtë të motit nga API.",
    stack: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: null,
    live: "https://weather-app-getu.infinityfree.me/?i=2",
    screenshots: null,
    linkedin: null,
    year: "2024",
    displayOrder: 18,
  },
  {
    id: "google-oauth-integration",
    title: "Google OAuth Authentication Integration",
    titleSq: "Integrim Autentikimi me Google OAuth",
    category: "Backend / Auth",
    categorySq: "Backend / Auth",
    context: "personal",
    filters: ["backend"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "A project implementing account registration and sign-in using a Google account.",
    shortDescriptionSq:
      "Projekt që implementon regjistrim dhe hyrje në llogari duke përdorur një llogari Google.",
    fullDescription:
      "Implements Google account sign-in for registration and login. The exact underlying integration approach has not been independently re-verified for this update, so it is described here conservatively without a specific technology claim pending source confirmation.",
    fullDescriptionSq:
      "Implementon hyrjen me llogari Google për regjistrim dhe login. Qasja e saktë e integrimit nuk është rikonfirmuar në mënyrë të pavarur për këtë përditësim, prandaj përshkruhet këtu në mënyrë konservative pa një pretendim specifik teknologjie deri në konfirmimin e burimit.",
    stack: [],
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2025",
    displayOrder: 19,
  },

  // ---------------------------------------------------------------------
  // ACADEMIC RESEARCH
  // ---------------------------------------------------------------------
  {
    id: "ai-autoscaling-research",
    title: "AI-Driven Auto-Scaling for Cloud Resource Optimisation",
    titleSq: "Auto-Shkallëzim i Bazuar në AI për Optimizimin e Burimeve Cloud",
    category: "Academic Research",
    categorySq: "Kërkim Akademik",
    context: "research",
    filters: ["research"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "Academic research on cloud auto-scaling strategies — reactive and predictive, including AI/ML and reinforcement-learning approaches.",
    shortDescriptionSq:
      "Kërkim akademik mbi strategjitë e auto-shkallëzimit në cloud — reaktive dhe parashikuese, duke përfshirë qasje AI/ML dhe reinforcement learning.",
    fullDescription:
      "A UBT Faculty of Computer Science and Engineering research project (2026) examining horizontal and vertical cloud scaling, comparing reactive and predictive auto-scaling approaches, and analysing AI/ML and reinforcement-learning techniques against CPU and performance metrics for cloud cost optimisation. The work is academic research, architectural analysis, and design — it does not claim a deployed production system or measured production savings.",
    fullDescriptionSq:
      "Projekt kërkimor i Fakultetit të Shkencave Kompjuterike dhe Inxhinierisë të UBT (2026) që shqyrton shkallëzimin horizontal dhe vertikal në cloud, duke krahasuar qasjet reaktive dhe parashikuese, dhe duke analizuar teknika AI/ML dhe reinforcement learning kundrejt metrikave të CPU dhe performancës për optimizim kostoje në cloud. Puna është kërkim akademik, analizë dhe dizajn arkitekture — nuk pretendon një sistem prodhimi të vendosur apo kursime të matura në prodhim.",
    stack: ["Cloud Computing", "AI / ML", "Reinforcement Learning"],
    team: ["Getuar Jakupi", "Blerina Sadiku", "Era Mustafa"],
    context_note: "UBT, Faculty of Computer Science and Engineering, 2026",
    context_noteSq: "UBT, Fakulteti i Shkencave Kompjuterike dhe Inxhinierisë, 2026",
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 20,
  },
  {
    id: "ai-impact-kosovo-research",
    title: "The Impact of AI on Children, Learning, and New Generations in Kosovo",
    titleSq: "Ndikimi i AI-së në Fëmijë, Mësim dhe Gjeneratat e Reja në Kosovë",
    category: "Academic Research",
    categorySq: "Kërkim Akademik",
    context: "research",
    filters: ["research"],
    featured: false,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "Academic research examining AI's effects on cognitive development, motivation, social skills, mental health, and academic integrity in Kosovo, based on 13 international studies.",
    shortDescriptionSq:
      "Kërkim akademik mbi efektet e AI-së në zhvillimin njohës, motivimin, aftësitë sociale, shëndetin mendor dhe integritetin akademik në Kosovë, bazuar në 13 studime ndërkombëtare.",
    fullDescription:
      "A UBT final research project (May 2026) reviewing the effects of AI on children and new generations in Kosovo — covering cognitive development, academic motivation, social skills, mental health, academic integrity, and AI use in education — based on a review of 13 international studies. Presented as academic research, not a software application.",
    fullDescriptionSq:
      "Projekt kërkimor final i UBT (Maj 2026) që shqyrton efektet e AI-së në fëmijë dhe gjeneratat e reja në Kosovë — duke përfshirë zhvillimin njohës, motivimin akademik, aftësitë sociale, shëndetin mendor, integritetin akademik dhe përdorimin e AI-së në edukim — bazuar në një shqyrtim të 13 studimeve ndërkombëtare. I paraqitur si kërkim akademik, jo si aplikacion softuerik.",
    stack: [],
    team: ["Getuar Jakupi", "Blerina Sadiku", "Era Mustafa"],
    context_note: "UBT, May 2026 · based on 13 international studies",
    context_noteSq: "UBT, Maj 2026 · bazuar në 13 studime ndërkombëtare",
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 21,
  },
];

export default projects;
