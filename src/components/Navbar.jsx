import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const SECTION_IDS = [
  "home", "about", "experience", "projects", "skills", "education", "certificates", "contact",
];

function LanguageSwitch({ compact }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="inline-flex items-center rounded-full p-0.5"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
    >
      {[
        { code: "en", label: "EN", aria: t.nav.languageEnglish },
        { code: "sq", label: "SQ", aria: t.nav.languageAlbanian },
      ].map((opt) => {
        const isActive = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={isActive}
            aria-label={opt.aria}
            className={`rounded-full font-bold transition-all duration-200 ${compact ? "px-3.5 py-2 text-xs" : "px-3 py-1.5 text-xs"}`}
            style={{
              background: isActive ? "var(--accent)" : "transparent",
              color: isActive ? "#fff" : "var(--ink-3)",
              fontFamily: "'Syne', sans-serif",
              minWidth: "2.5rem",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { key: "about", href: "#about" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "skills", href: "#skills" },
    { key: "education", href: "#education" },
    { key: "certificates", href: "#certificates" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center text-sm font-bold on-accent"
            style={{ background: "var(--accent)", fontFamily: "'Syne', sans-serif" }}
          >
            GJ
          </div>
          <span
            className="font-bold text-white text-sm tracking-wide hidden sm:block"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Getuar <span style={{ color: "var(--accent-light)" }}>Jakupi</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Primary">
          {links.map((link) => {
            const isActive = active === link.key;
            return (
              <a
                key={link.key}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className="px-2.5 py-2 text-sm rounded-full transition-all duration-200 whitespace-nowrap"
                style={{ color: isActive ? "var(--heading)" : "var(--ink-3)" }}
              >
                {t.nav[link.key]}
              </a>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={t.common.toggleTheme}
            aria-pressed={theme === "light"}
            className="flex items-center justify-center rounded-full h-8 w-8 transition-all duration-200 hover:scale-105"
            style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--accent-light)" }}
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.72 0l-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Language switch — desktop */}
          <div className="hidden sm:block">
            <LanguageSwitch />
          </div>

          <a
            href="#contact"
            className="btn-primary hidden lg:inline-flex text-xs px-4 py-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.nav.letsTalk}
          </a>

          {/* Mobile hamburger */}
          <button
            ref={toggleBtnRef}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg"
            style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: "var(--heading)", transform: open ? "rotate(45deg) translate(2px, 2px)" : "" }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: "var(--heading)", opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: "var(--heading)", transform: open ? "rotate(-45deg) translate(2px, -2px)" : "" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "560px" : "0",
          borderBottom: open ? "1px solid var(--border)" : "none",
          background: "var(--nav-bg-mobile)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="wrap flex flex-col py-4 gap-1">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-xl text-sm transition-all duration-200"
              style={{ color: "var(--ink-2)" }}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3 px-4 sm:hidden">
            <LanguageSwitch compact />
          </div>
        </div>
      </div>
    </header>
  );
}
