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
      languageEnglish: "English",
      languageAlbanian: "Shqip",
      language: "Language",
    },
    hero: {
      badge: "Backend Developer",
      headline1: "Building",
      headline2: "secure backend systems",
      headline3: "with clean architecture, real APIs & production discipline.",
      sub: "I'm Getuar Jakupi, a Backend Developer building secure and maintainable services with Node.js and TypeScript, with additional experience in full-stack development and recommendation-focused Machine Learning.",
      cta1: "View Projects",
      cta2: "Download CV",
      cta3: "Contact Me",
      status: "Currently Building",
      labelBuilding: "Currently Building",
      labelComingSoon: "Coming Soon",
      labelFeatured: "Featured Project",
      labelRecent: "Recent Project",
      statBackend: "Backend",
      statFullstack: "Full-Stack",
      statFrontend: "Frontend",
      statInDev: "In Development",
    },
    about: {
      label: "About Me",
      heading: "Backend-focused.\nBuilt on real practice.",
      card1:
        "I focus on backend development with Node.js and TypeScript, building secure APIs, authentication flows, database integrations, and maintainable services.",
      card2:
        "I also work across React-based frontends, DevOps workflows, data projects, and recommendation-focused Machine Learning when the project requires broader full-stack capability.",
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
        dataScience: "Data Science",
        ml: "Machine Learning",
        computerVision: "Computer Vision",
        automation: "Automation",
        university: "University",
        professional: "Professional",
        research: "Research",
        inDevelopment: "In Development",
      },
      status: {
        research: "Academic Research",
        private: "Private Professional Project",
        caseStudy: "Case Study",
        wip: "In Progress",
        comingSoon: "Coming Soon",
        live: "Live Demo",
        source: "Source Available",
        completed: "Completed",
      },
      featuredTag: "Featured",
      viewGithub: "Source Code",
      viewGithubModal: "View on GitHub",
      viewLive: "Live Demo",
      viewScreenshots: "Screenshots",
      presentation: "Project Presentation",
      private: "Private",
      privateRepo: "Private Repository",
      privateRepoTooltip: "Repository is currently private",
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
        resources: "Resources",
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
      languageEnglish: "English",
      languageAlbanian: "Shqip",
      language: "Gjuha",
    },
    hero: {
      badge: "Zhvillues Backend",
      headline1: "Ndërtoj",
      headline2: "sisteme backend të sigurta",
      headline3: "me arkitekturë të pastër, API reale & disiplinë prodhimi.",
      sub: "Jam Getuar Jakupi, Zhvillues Backend që ndërtoj shërbime të sigurta dhe të mirëmbajtshme me Node.js dhe TypeScript, me përvojë shtesë në full-stack dhe Machine Learning për sisteme rekomanduese.",
      cta1: "Shiko Projektet",
      cta2: "Shkarko CV",
      cta3: "Më Kontakto",
      status: "Aktualisht Duke Ndërtuar",
      labelBuilding: "Aktualisht Duke Ndërtuar",
      labelComingSoon: "Së Shpejti",
      labelFeatured: "Projekt i Veçuar",
      labelRecent: "Projekti i Fundit",
      statBackend: "Backend",
      statFullstack: "Full-Stack",
      statFrontend: "Frontend",
      statInDev: "Në Zhvillim",
    },
    about: {
      label: "Rreth Meje",
      heading: "I fokusuar në backend.\nI ndërtuar mbi praktikë reale.",
      card1:
        "Fokusohem në zhvillimin backend me Node.js dhe TypeScript, duke ndërtuar API të sigurta, autentikim, integrime me databaza dhe shërbime të mirëmbajtshme.",
      card2:
        "Punoj gjithashtu me frontend React, procese DevOps, projekte me të dhëna dhe Machine Learning për sisteme rekomanduese kur projekti kërkon aftësi më të gjera full-stack.",
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
        dataScience: "Data Science",
        ml: "Machine Learning",
        computerVision: "Computer Vision",
        automation: "Automatizim",
        university: "Universitare",
        professional: "Profesionale",
        research: "Kërkim",
        inDevelopment: "Në Zhvillim",
      },
      status: {
        research: "Kërkim Akademik",
        private: "Projekt Privat Profesional",
        caseStudy: "Rast Studimi",
        wip: "Në Progres",
        comingSoon: "Së Shpejti",
        live: "Demo Live",
        source: "Kodi i Disponueshëm",
        completed: "I Përfunduar",
      },
      featuredTag: "I Veçantë",
      viewGithub: "Kodi Burimor",
      viewGithubModal: "Shiko në GitHub",
      viewLive: "Demo Live",
      viewScreenshots: "Pamje",
      presentation: "Prezantimi i Projektit",
      private: "Privat",
      privateRepo: "Repository Privat",
      privateRepoTooltip: "Repository aktualisht është privat",
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
        resources: "Burimet",
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

const TRANSITION_MS = 180;
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);
  const [fading, setFading] = useState(false);
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

  // Guarded so rapid repeated clicks can't stack/overlap the fade and break it.
  const changeLang = (next) => {
    if (fading || lang === next) return;
    if (prefersReducedMotion()) {
      setLangState(next);
      return;
    }
    setFading(true);
    window.setTimeout(() => {
      setLangState(next);
      window.setTimeout(() => setFading(false), TRANSITION_MS);
    }, TRANSITION_MS);
  };

  const setLang = (next) => changeLang(next);
  const toggle = () => changeLang(lang === "en" ? "sq" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, fading, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
