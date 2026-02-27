import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // mbyll mobile menu kur rritet ekrani
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
        >
          {/* <div className="nav-dot" /> */}
          <div className="nav-brand-text">
            <div className="nav-name">Getuar Jakupi</div>
            <div className="nav-role">Full-Stack Developer</div>
          </div>
        </div>

        {/* Desktop buttons on the right */}
        <div className="nav-desktop">
          <NavButtons />
        </div>

        {/* Hamburger only on mobile */}
        <button
          className={`btn nav-burger ${open ? "primary" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="burger-lines" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open ? (
        <div className="container nav-mobile">
          <NavButtons mobile />
        </div>
      ) : null}
    </header>
  );
}
