import React from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/getuar-jakupi/";
const GITHUB_URL = "https://github.com/getuar04";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 5vw",
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: 24,
        }}
      >
        {/* LEFT */}
        <div className="card" style={{ padding: 26 }}>
          <div className="pill">
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: 999,
                background: "rgba(34,197,94,.95)",
                boxShadow: "0 0 0 4px rgba(34,197,94,.12)",
              }}
            />
            Open for internships & real projects
          </div>

          <div style={{ height: 14 }} />

          <h1 className="h1">
            <span
              style={{
                background: "linear-gradient(90deg, #F59E0B, #EF4444)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Build sleek web apps.
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Not boring websites.
            </span>
          </h1>

          <div style={{ height: 12 }} />

          <p className="p">
            I am a Computer Science and Engineering student at UBT, focused on
            building real-world web applications using React, JavaScript, PHP,
            MySQL, and Node.js. Below you can find some of my deployed projects
            and a quick overview of my skills and certificates.
          </p>

          <div style={{ height: 18 }} />

          {/* CTA BUTTONS */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn primary" onClick={() => scrollTo("projects")}>
              View Projects
            </button>

            <button className="btn" onClick={() => scrollTo("contact")}>
              Contact
            </button>

            <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            {/* GitHub (NEW) */}
            <a className="btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div style={{ height: 20 }} />
          <div className="sep" />
          <div style={{ height: 16 }} />

          {/* BADGES */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="badge">Frontend (HTML/CSS/JS)</span>
            <span className="badge">JavaScript</span>
            <span className="badge">React</span>
            <span className="badge">PHP</span>
            <span className="badge">Node.js</span>
            <span className="badge">MySQL</span>
            <span className="badge">Java</span>
            <span className="badge">WordPress</span>
            <span className="badge">Web Hosting</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="card" style={{ padding: 26, position: "relative" }}>
          <div style={{ display: "grid", gap: 14 }}>
            <div
              className="card"
              style={{
                padding: 18,
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.05))",
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 6 }}>
                Quick overview
              </div>
              <div style={{ color: "rgba(255,255,255,.68)", lineHeight: 1.6 }}>
                • Live demo links <br />
                • Search + filter <br />
                • Case study: Mobileria Nita (WIP responsive)
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: 18,
                borderRadius: 18,
                borderColor: "rgba(6,182,212,.35)",
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 6 }}>
                Mobileria Nita – Screenshots
              </div>
              <div style={{ color: "rgba(255,255,255,.68)", lineHeight: 1.6 }}>
                I’ve added a public Google Drive folder with screenshots for the
                full case study. You can open it from the project card using the{" "}
                <b>Screenshots</b> button.
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: 18,
                borderRadius: 18,
                borderColor: "rgba(124,58,237,.35)",
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 6 }}>
                Design direction
              </div>
              <div style={{ color: "rgba(255,255,255,.68)", lineHeight: 1.6 }}>
                Premium glass UI, strong contrast, modern gradients. Not
                minimal.
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: 26,
              pointerEvents: "none",
              background:
                "linear-gradient(135deg, rgba(124,58,237,.22), rgba(6,182,212,.18), rgba(34,197,94,.12))",
              filter: "blur(24px)",
              opacity: 0.7,
              zIndex: -1,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 920px){
          section{ min-height: auto !important; padding: 34px 0 !important; }
          section > div{
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}