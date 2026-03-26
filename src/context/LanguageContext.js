import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      cv: "CV",
      certificates: "Certificates",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      badge: "CS & Engineering Student · Full-Stack Developer",
      headline1: "Building",
      headline2: "modern web apps",
      headline3: "with real backend logic, clean architecture & polished UI.",
      sub: "I'm Getuar Jakupi — focused on React, Node.js, MySQL, MongoDB, authentication systems, APIs, and real full-stack projects.",
      cta1: "View Projects",
      cta2: "Download CV",
      status: "Currently Building",
    },
    about: {
      label: "About Me",
      heading: "Not just coursework.\nReal practical development.",
      card1: "I'm a Computer Science and Engineering student at UBT, Pristina, with a strong focus on full-stack development. I build practical applications using React, Node.js, Express, MySQL, MongoDB, and REST APIs.",
      card2: "My work includes dashboards, CRUD platforms, authentication systems, role-based applications, AI chatbot projects, and backend logic that solves real user needs. Currently expanding with .NET and ASP.NET.",
      location: "Pristina, Kosovo",
      university: "UBT · CS & Engineering",
      languages: "AL · EN (C1) · DE (B1) · SR (B1)",
      available: "Open to opportunities",
    },
    projects: {
      label: "Projects",
      heading: "Things I've actually built.",
      featured: "Featured",
      wip: "In Progress",
      live: "Live",
      viewGithub: "GitHub",
      viewLive: "Live Demo",
      viewScreenshots: "Screenshots",
      allProjects: "All Projects",
      featuredOnly: "Featured",
    },
    skills: {
      label: "Skills",
      heading: "Tech stack I actually work with.",
    },
    cv: {
      label: "Curriculum Vitae",
      heading: "Open or download my CV.",
      sub: "Includes education, skills, projects, certifications, and practical development experience.",
      preview: "Preview CV",
      download: "Download CV",
    },
    certificates: {
      label: "Certificates",
      heading: "Training that backs up the work.",
      open: "Open Certificate",
    },
    contact: {
      label: "Contact",
      heading: "Let's build something serious.",
      sub: "I'm open to internships, junior developer roles, freelance work, and collaboration on real-world projects.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React & Tailwind CSS.",
    },
  },
  sq: {
    nav: {
      about: "Rreth Meje",
      projects: "Projektet",
      skills: "Aftësitë",
      cv: "CV",
      certificates: "Çertifikatat",
      contact: "Kontakti",
      letsTalk: "Le të Flasim",
    },
    hero: {
      badge: "Student i Shkencave Kompjuterike · Zhvillues Full-Stack",
      headline1: "Ndërtoj",
      headline2: "aplikacione moderne",
      headline3: "me logjikë të fortë backend, arkitekturë të pastër & UI të rafinuar.",
      sub: "Jam Getuar Jakupi — i fokusuar te React, Node.js, MySQL, MongoDB, sisteme autentikimi, API dhe projekte reale full-stack.",
      cta1: "Shiko Projektet",
      cta2: "Shkarko CV",
      status: "Aktualisht Duke Ndërtuar",
    },
    about: {
      label: "Rreth Meje",
      heading: "Jo vetëm teori.\nZhvillim praktik real.",
      card1: "Jam student i Shkencave Kompjuterike dhe Inxhinierisë në UBT, Prishtinë, me fokus të fortë në zhvillim full-stack. Ndërtoj aplikacione praktike duke përdorur React, Node.js, Express, MySQL, MongoDB dhe REST API.",
      card2: "Puna ime përfshin panele kontrolli, platforma CRUD, sisteme autentikimi, aplikacione me role të ndryshme, projekte chatbot me AI dhe logjikë backend. Aktualisht po zgjeroj me .NET dhe ASP.NET.",
      location: "Prishtinë, Kosovë",
      university: "UBT · Shkenca Kompjuterike",
      languages: "SHQ · EN (C1) · GJE (B1) · SRB (B1)",
      available: "I hapur për mundësi",
    },
    projects: {
      label: "Projektet",
      heading: "Gjëra që i kam ndërtuar.",
      featured: "I Veçantë",
      wip: "Në Progres",
      live: "Aktiv",
      viewGithub: "GitHub",
      viewLive: "Demo Live",
      viewScreenshots: "Pamje",
      allProjects: "Të Gjitha",
      featuredOnly: "Të Veçanta",
    },
    skills: {
      label: "Aftësitë",
      heading: "Stack-u që përdor realisht.",
    },
    cv: {
      label: "Curriculum Vitae",
      heading: "Hap ose shkarko CV-në time.",
      sub: "Përfshin arsimin, aftësitë, projektet, certifikatat dhe përvojën praktike.",
      preview: "Shiko CV",
      download: "Shkarko CV",
    },
    certificates: {
      label: "Çertifikatat",
      heading: "Trajnimet që mbështesin punën.",
      open: "Hap Çertifikatën",
    },
    contact: {
      label: "Kontakti",
      heading: "Le të ndërtojmë diçka serioze.",
      sub: "Jam i hapur për internship, role junior developer, punë freelance dhe bashkëpunim në projekte reale.",
      email: "Email",
      phone: "Telefon",
      location: "Vendndodhja",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "Të gjitha të drejtat e rezervuara.",
      built: "Ndërtuar me React & Tailwind CSS.",
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const toggle = () => setLang((l) => (l === "en" ? "sq" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
