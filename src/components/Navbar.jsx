import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavButtons = ({ mobile = false }) => (
    <nav className={mobile ? "nav-mobile-grid" : "nav-links"}>
      <button className="btn" onClick={() => scrollTo("about")}>
        Profile
      </button>
      <button className="btn" onClick={() => scrollTo("projects")}>
        Projects
      </button>
      <button className="btn" onClick={() => scrollTo("skills")}>
        Skills
      </button>
      <button className="btn" onClick={() => scrollTo("cv")}>
        CV
      </button>
      <button className="btn" onClick={() => scrollTo("certificates")}>
        Certificates
      </button>

      {/* GitHub button (NEW) */}
      <a
        className="btn ghost"
        href="https://github.com/getuar04"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
      >
        GitHub
      </a>

      <button className="btn primary" onClick={() => scrollTo("contact")}>
        Contact
      </button>
    </nav>
  );

  return (
    <header className="nav-header">
      <div className="container nav-bar">
        <div
          className="nav-brand"
          onClick={() => scrollTo("about")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") scrollTo("about");
          }}
        >
          <div className="nav-brand-text">
            <div className="nav-name">Getuar Jakupi</div>
            <div className="nav-role">Full-Stack Developer</div>
          </div>
        </div>

        <div className="nav-desktop">
          <NavButtons />
        </div>

        <button
          className={`btn nav-burger ${open ? "primary" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="burger-lines" />
        </button>
      </div>

      {open ? (
        <div className="container nav-mobile">
          <NavButtons mobile />
        </div>
      ) : null}
    </header>
  );
}
