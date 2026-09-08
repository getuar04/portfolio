import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
      letsTalk: "Let's Talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchToAlbanian: "Switch to Albanian",
      switchToEnglish: "Switch to English",
    },
    hero: {
      badge: "Backend Developer",
      headline1: "Building",
      headline2: "secure backend systems",
      headline3: "with clean architecture, real APIs & production discipline.",
      sub: "I'm Getuar Jakupi — a Backend Developer building secure, maintainable, and scalable services and APIs with Node.js and TypeScript, with full-stack capability across React, MySQL, and MongoDB.",
      cta1: "View Projects",
      cta2: "Download CV",
      cta3: "Contact Me",
      status: "Currently Building",
      statBackend: "Backend",
      statFullstack: "Full-Stack",
      statFrontend: "Frontend",
      statLatest: "Latest",
    },
    about: {
      label: "About Me",
      heading: "Backend-focused.\nBuilt on real practice.",
      card1:
        "I'm a Backend Developer focused primarily on Node.js and TypeScript, building secure APIs and backend services. I work with relational and NoSQL databases, and I'm comfortable with authentication, authorisation, distributed systems, containerisation, CI/CD, testing, and Clean Architecture.",
      card2:
        "I can also work across the stack with React when a project needs frontend integration. I value security, reliability, maintainability, and clear architecture — and I'm currently looking for a serious full-time engineering opportunity where I can keep building on that foundation.",
      location: "Pristina, Kosovo",
      university: "UBT · CS & Engineering",
      languages: "AL · EN (C1) · DE (B1) · SR (B1)",
      available: "Open to opportunities",
      role: "Backend Developer",
      quickContact: "Quick Contact",
    },
    experience: {
      label: "Experience",
      heading: "Professional experience.",
      present: "Present",
      stackTitle: "Technologies",
      highlightsTitle: "Highlights",
    },
    education: {
      label: "Education",
      heading: "Education.",
    },
    training: {
      label: "Training",
      heading: "Professional training.",
    },
    projects: {
      label: "Projects",
      heading: "Things I've actually built.",
      sub: "A mix of professional backend work, university projects, and personal builds.",
      filters: {
        all: "All Projects",
        featured: "Featured",
        backend: "Backend",
        fullstack: "Full Stack",
        frontend: "Frontend",
        university: "University",
        professional: "Professional",
        research: "Research",
      },
      status: {
        research: "Academic Research",
        private: "Private Professional Project",
        caseStudy: "Case Study",
        wip: "In Progress",
        live: "Live Demo",
        source: "Source Available",
        completed: "Completed",
      },
      featuredTag: "Featured",
      viewGithub: "GitHub",
      viewLive: "Live Demo",
      viewScreenshots: "Screenshots",
      presentation: "Presentation",
      private: "Private",
      viewDetails: "View Details",
      empty: "No projects match this filter yet.",
      modal: {
        overview: "Overview",
        contribution: "My Contribution",
        implementedFeatures: "Implemented Features",
        architecture: "Architecture",
        techStack: "Technology Stack",
        futureExtensions: "Future Extensions",
        status: "Status",
        team: "Team",
        context: "Context",
        close: "Close",
      },
    },
    skills: {
      label: "Skills",
      heading: "Tech stack I actually work with.",
    },
    cv: {
      label: "Curriculum Vitae",
      heading: "Open or download my CV.",
      sub: "Includes education, experience, skills, projects, and certifications.",
      preview: "Preview CV",
      download: "Download CV",
    },
    certificates: {
      label: "Certificates",
      heading: "Training that backs up the work.",
      open: "Open Certificate",
      roiGroup: "ROI Academy",
      arraGroup: "Arra Academy",
    },
    contact: {
      label: "Contact",
      heading: "Let's build something serious.",
      sub: "I'm open to full-time backend developer roles, freelance work, and collaboration on real-world projects.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
    common: {
      close: "Close",
      menu: "Menu",
      lightTheme: "Light theme",
      darkTheme: "Dark theme",
      toggleTheme: "Toggle theme",
      scrollToTop: "Scroll to top",
      notAvailable: "Not publicly available",
    },
  },
  sq: {
    nav: {
      home: "Kryefaqja",
      about: "Rreth Meje",
      experience: "Përvoja",
      projects: "Projektet",
      skills: "Aftësitë",
      education: "Arsimi",
      certificates: "Certifikatat",
      contact: "Kontakti",
      letsTalk: "Le të Flasim",
      openMenu: "Hap menynë",
      closeMenu: "Mbyll menynë",
      switchToAlbanian: "Kalo në Shqip",
      switchToEnglish: "Kalo në Anglisht",
    },
    hero: {
      badge: "Zhvillues Backend",
      headline1: "Ndërtoj",
      headline2: "sisteme backend të sigurta",
      headline3: "me arkitekturë të pastër, API reale & disiplinë prodhimi.",
      sub: "Jam Getuar Jakupi — Zhvillues Backend që ndërton shërbime dhe API të sigurta, të mirëmbajtshme dhe të shkallëzueshme me Node.js dhe TypeScript, me aftësi full-stack në React, MySQL dhe MongoDB.",
      cta1: "Shiko Projektet",
      cta2: "Shkarko CV",
      cta3: "Më Kontakto",
      status: "Aktualisht Duke Ndërtuar",
      statBackend: "Backend",
      statFullstack: "Full-Stack",
      statFrontend: "Frontend",
      statLatest: "Më i Fundit",
    },
    about: {
      label: "Rreth Meje",
      heading: "I fokusuar në backend.\nI ndërtuar mbi praktikë reale.",
      card1:
        "Jam Zhvillues Backend i fokusuar kryesisht në Node.js dhe TypeScript, duke ndërtuar API dhe shërbime backend të sigurta. Punoj me baza të dhënash relacionale dhe NoSQL, dhe jam i rehatshëm me autentikim, autorizim, sisteme të shpërndara, kontenerizim, CI/CD, testim dhe Clean Architecture.",
      card2:
        "Mund të punoj gjithashtu në të gjithë stack-un me React kur një projekt ka nevojë për integrim frontend. Vlerësoj sigurinë, besueshmërinë, mirëmbajtshmërinë dhe arkitekturën e qartë — dhe aktualisht jam duke kërkuar një mundësi serioze inxhinierike me kohë të plotë ku mund të vazhdoj të ndërtoj mbi këtë bazë.",
      location: "Prishtinë, Kosovë",
      university: "UBT · Shkenca Kompjuterike",
      languages: "SHQ · EN (C1) · GJE (B1) · SRB (B1)",
      available: "I hapur për mundësi",
      role: "Zhvillues Backend",
      quickContact: "Kontakt i Shpejtë",
    },
    experience: {
      label: "Përvoja",
      heading: "Përvoja profesionale.",
      present: "Aktualisht",
      stackTitle: "Teknologjitë",
      highlightsTitle: "Pikat Kryesore",
    },
    education: {
      label: "Arsimi",
      heading: "Arsimi.",
    },
    training: {
      label: "Trajnimet",
      heading: "Trajnime profesionale.",
    },
    projects: {
      label: "Projektet",
      heading: "Gjëra që i kam ndërtuar.",
      sub: "Një kombinim i punës profesionale backend, projekteve universitare dhe punëve personale.",
      filters: {
        all: "Të Gjitha",
        featured: "Të Veçanta",
        backend: "Backend",
        fullstack: "Full Stack",
        frontend: "Frontend",
        university: "Universitare",
        professional: "Profesionale",
        research: "Kërkim",
      },
      status: {
        research: "Kërkim Akademik",
        private: "Projekt Privat Profesional",
        caseStudy: "Rast Studimi",
        wip: "Në Progres",
        live: "Demo Live",
        source: "Kodi i Disponueshëm",
        completed: "I Përfunduar",
      },
      featuredTag: "I Veçantë",
      viewGithub: "GitHub",
      viewLive: "Demo Live",
      viewScreenshots: "Pamje",
      presentation: "Prezantimi",
      private: "Privat",
      viewDetails: "Shiko Detajet",
      empty: "Ende nuk ka projekte për këtë filtër.",
      modal: {
        overview: "Përmbledhje",
        contribution: "Kontributi Im",
        implementedFeatures: "Veçoritë e Implementuara",
        architecture: "Arkitektura",
        techStack: "Stack-u Teknologjik",
        futureExtensions: "Zgjerime të Ardhshme",
        status: "Statusi",
        team: "Ekipi",
        context: "Konteksti",
        close: "Mbyll",
      },
    },
    skills: {
      label: "Aftësitë",
      heading: "Stack-u që përdor realisht.",
    },
    cv: {
      label: "Curriculum Vitae",
      heading: "Hap ose shkarko CV-në time.",
      sub: "Përfshin arsimin, përvojën, aftësitë, projektet dhe certifikatat.",
      preview: "Shiko CV",
      download: "Shkarko CV",
    },
    certificates: {
      label: "Certifikatat",
      heading: "Trajnimet që mbështesin punën.",
      open: "Hap Certifikatën",
      roiGroup: "ROI Academy",
      arraGroup: "Arra Academy",
    },
    contact: {
      label: "Kontakti",
      heading: "Le të ndërtojmë diçka serioze.",
      sub: "Jam i hapur për role zhvillues backend me kohë të plotë, punë freelance dhe bashkëpunim në projekte reale.",
      email: "Email",
      phone: "Telefon",
      location: "Vendndodhja",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "Të gjitha të drejtat e rezervuara.",
      backToTop: "Kthehu lart",
    },
    common: {
      close: "Mbyll",
      menu: "Menyja",
      lightTheme: "Tema e çelët",
      darkTheme: "Tema e errët",
      toggleTheme: "Ndrysho temën",
      scrollToTop: "Kthehu lart",
      notAvailable: "Jo publikisht i disponueshëm",
    },
  },
};

const LanguageContext = createContext();
const STORAGE_KEY = "gj-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "sq") return stored;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore write failures (private browsing, storage disabled, etc.)
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "sq" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
