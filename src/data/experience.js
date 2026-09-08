// Professional experience. `employer` is intentionally left blank/null where not
// confirmed for public display — the UI must not render a placeholder in its place.
const experience = [
  {
    id: "junior-backend-developer",
    role: "Junior Backend Developer",
    roleSq: "Zhvillues Backend Junior",
    employer: null,
    period: "April 2026 – Present",
    periodSq: "Prill 2026 – Aktualisht",
    type: "current",
    summary:
      "Working on backend services and APIs built with Node.js and TypeScript, contributing to authentication, data persistence, and reliability across a service-oriented backend.",
    summarySq:
      "Punoj në shërbime backend dhe API të ndërtuara me Node.js dhe TypeScript, duke kontribuar në autentikim, ruajtjen e të dhënave dhe qëndrueshmërinë e sistemit.",
    highlights: [
      "Implemented and maintained REST APIs with Express.js, following Clean Architecture principles.",
      "Contributed to authentication and authorization work, including JWT-based sessions, RBAC, and two-factor authentication.",
      "Worked with PostgreSQL, MongoDB, and Redis for data persistence and caching.",
      "Integrated services using Kafka for event-driven communication.",
      "Containerized services with Docker and Docker Compose; contributed to Kubernetes deployment configuration.",
      "Set up and maintained Jenkins CI/CD pipeline steps for automated builds and testing.",
      "Wrote unit and integration tests, improved structured logging, and added health-check endpoints and API documentation.",
      "Contributed to security improvements and backend service reliability as part of the team.",
    ],
    highlightsSq: [
      "Implementova dhe mirëmbajta REST API me Express.js, duke ndjekur parimet e Clean Architecture.",
      "Kontribuova në punën e autentikimit dhe autorizimit, duke përfshirë sesione JWT, RBAC dhe autentikim dyfaktorësh.",
      "Punova me PostgreSQL, MongoDB dhe Redis për ruajtjen e të dhënave dhe caching.",
      "Integrova shërbime duke përdorur Kafka për komunikim event-driven.",
      "Kontenerizova shërbime me Docker dhe Docker Compose; kontribuova në konfigurimin e Kubernetes.",
      "Konfigurova dhe mirëmbajta hapa të pipeline-it Jenkins CI/CD për build dhe testim automatik.",
      "Shkrova teste unit dhe integrimi, përmirësova logging-un e strukturuar, dhe shtova health-check endpoints dhe dokumentim API.",
      "Kontribuova në përmirësime sigurie dhe qëndrueshmërinë e shërbimeve backend si pjesë e ekipit.",
    ],
    stack: [
      "Node.js", "TypeScript", "Express.js", "REST APIs", "PostgreSQL", "MongoDB",
      "Redis", "Kafka", "Docker", "Docker Compose", "Kubernetes", "Jenkins CI/CD",
      "JWT", "RBAC", "Two-Factor Authentication", "Clean Architecture",
    ],
  },
  {
    id: "sharp-group-internship",
    role: "Programming Department Intern",
    roleSq: "Praktikant në Departamentin e Programimit",
    employer: "Sharp Group LTD",
    period: "October 2025 – March 2026",
    periodSq: "Tetor 2025 – Mars 2026",
    type: "past",
    summary:
      "Six-month internship in the programming department, working on practical programming tasks based on client requirements.",
    summarySq:
      "Internship gjashtë-mujor në departamentin e programimit, duke punuar në detyra praktike programimi bazuar në kërkesat e klientëve.",
    highlights: [
      "Completed practical programming tasks aligned with real client requirements.",
      "Gained hands-on experience working within a professional development environment and team workflow.",
    ],
    highlightsSq: [
      "Kreu detyra praktike programimi në përputhje me kërkesat reale të klientëve.",
      "Fitoi përvojë praktike duke punuar brenda një mjedisi profesional zhvillimi dhe rrjedhe pune ekipore.",
    ],
    stack: [],
  },
];

export default experience;
