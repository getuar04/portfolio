// Data-driven project catalogue.
//
// Status model:
//   completionStatus  — "completed" | "in-progress"
//   repositoryStatus  — "public" | "private" | "unavailable"
//   demoStatus        — "live" | "unavailable"
//   context           — "professional" | "university" | "personal" | "research"
//   filters           — tags used by the Projects filter bar:
//                        "featured" | "backend" | "fullstack" | "frontend" |
//                        "university" | "professional" | "research"
//
// Only verified information is included. Fields with nothing truthful to show
// (challenges, outcomes, futureExtensions, contributions, screenshots, etc.)
// are simply omitted rather than filled with placeholders.

const projects = [
  // ---------------------------------------------------------------------
  // FEATURED
  // ---------------------------------------------------------------------
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
    displayOrder: 1,
  },
  {
    id: "resource-booking-system",
    title: "Resource Booking System",
    titleSq: "Sistemi i Rezervimit të Burimeve",
    category: "Full-Stack / Microservices",
    categorySq: "Full-Stack / Mikroshërbime",
    context: "university",
    filters: ["featured", "fullstack", "university"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "A university platform for managing resource availability and reservations, built with a full-stack microservices architecture.",
    shortDescriptionSq:
      "Platformë universitare për menaxhimin e disponueshmërisë dhe rezervimit të burimeve, ndërtuar me arkitekturë mikroshërbimesh full-stack.",
    fullDescription:
      "Resource Booking System manages resource availability and reservations through a full-stack microservices architecture: a React frontend, Node.js/Express services behind an API Gateway, MongoDB for persistence, JWT-based authentication, and a REST API. Docker Compose was used for local orchestration, with a Jenkins CI/CD pipeline for builds.",
    fullDescriptionSq:
      "Resource Booking System menaxhon disponueshmërinë dhe rezervimin e burimeve përmes një arkitekture mikroshërbimesh full-stack: frontend në React, shërbime Node.js/Express pas një API Gateway, MongoDB për ruajtjen e të dhënave, autentikim JWT dhe REST API. Docker Compose u përdor për orkestrim lokal, me pipeline Jenkins CI/CD për build-e.",
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
    id: "smart-kitchen",
    title: "Smart Kitchen & Meal Planner System",
    titleSq: "Sistemi Smart Kitchen & Planifikues Vaktesh",
    category: "University Project",
    categorySq: "Projekt Universitar",
    context: "university",
    filters: ["featured", "university"],
    featured: true,
    completionStatus: "in-progress",
    repositoryStatus: "unavailable",
    demoStatus: "unavailable",
    shortDescription:
      "A university case-study project exploring kitchen and meal-planning management.",
    shortDescriptionSq:
      "Projekt universitar (case-study) që eksploron menaxhimin e kuzhinës dhe planifikimin e vakteve.",
    fullDescription:
      "Smart Kitchen & Meal Planner System is a university project developed as part of coursework at UBT. Detailed implementation specifics are not published here pending verification of the final source; only the confirmed project name and academic context are shown.",
    fullDescriptionSq:
      "Smart Kitchen & Meal Planner System është projekt universitar i zhvilluar si pjesë e kurrikulës në UBT. Detajet e implementimit nuk publikohen këtu deri në verifikimin e burimit final; shfaqet vetëm emri i konfirmuar i projektit dhe konteksti akademik.",
    stack: [],
    github: null,
    live: null,
    screenshots: null,
    linkedin: null,
    year: "2026",
    displayOrder: 3,
  },
  {
    id: "course-management",
    title: "Course Management System",
    titleSq: "Sistemi i Menaxhimit të Kurseve",
    category: "Full-Stack",
    categorySq: "Full-Stack",
    context: "personal",
    filters: ["featured", "fullstack"],
    featured: true,
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
    displayOrder: 4,
  },
  {
    id: "chatbot",
    title: "Albanian AI Chatbot",
    titleSq: "Chatbot AI Shqip",
    category: "AI / NLP",
    categorySq: "AI / NLP",
    context: "personal",
    filters: ["featured", "fullstack"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "public",
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
    displayOrder: 5,
  },
  {
    id: "social-media",
    title: "Social Media App",
    titleSq: "Aplikacion Social Media",
    category: "Full-Stack",
    categorySq: "Full-Stack",
    context: "personal",
    filters: ["featured", "fullstack"],
    featured: true,
    completionStatus: "completed",
    repositoryStatus: "public",
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
    displayOrder: 6,
  },

  // ---------------------------------------------------------------------
  // ADDITIONAL
  // ---------------------------------------------------------------------
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
    displayOrder: 7,
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
    displayOrder: 8,
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
    displayOrder: 9,
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
    displayOrder: 10,
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
    displayOrder: 11,
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
    displayOrder: 12,
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
    displayOrder: 13,
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
    displayOrder: 14,
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
    displayOrder: 15,
  },
];

export default projects;
