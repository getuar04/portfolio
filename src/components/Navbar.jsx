import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "about", href: "#about" },
    { key: "projects", href: "#projects" },
    { key: "skills", href: "#skills" },
    { key: "cv", href: "#cv" },
    { key: "certificates", href: "#certificates" },
    { key: "contact", href: "#contact" },
  ];

  // Button shows the language you will SWITCH TO (not the current one)
  const switchLabel = lang === "en" ? "AL" : "EN";
  const switchFlag  = lang === "en" ? "🇦🇱" : "🇬🇧";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
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
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="px-3 py-2 text-sm rounded-full transition-all duration-200 whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Lang toggle — shows target language */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 hover:scale-105"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--accent-light)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            <span className="text-sm leading-none">{switchFlag}</span>
            {switchLabel}
          </button>

          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex text-xs px-4 py-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {t.nav.letsTalk}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
            style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: "white", transform: open ? "rotate(45deg) translate(2px, 2px)" : "" }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: "white", opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: "white", transform: open ? "rotate(-45deg) translate(2px, -2px)" : "" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "420px" : "0",
          borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none",
          background: "rgba(8,8,16,0.98)",
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
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {t.nav[link.key]}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3 px-4">
            <button
              onClick={toggle}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--accent-light)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              <span>{switchFlag}</span>
              {switchLabel === "AL" ? "Switch to Shqip" : "Switch to English"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
