import React from "react";

export default function CV() {
  return (
    <div className="card" style={{ padding: 22, borderRadius: 22 }}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 16 }}
      >
        <div>
          <h3 style={{ margin: 0, fontWeight: 900 }}>Curriculum Vitae</h3>
          <p className="p" style={{ marginTop: 8 }}>
            Download or view my full CV.
            {/* Download or view my full CV (education, projects, skills and
            contact). */}
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn primary"
              href="/cv/Getuar-Jakupi-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View CV
            </a>
            <a className="btn" href="/cv/Getuar-Jakupi-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px){
          div[style*="grid-template-columns"]{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
