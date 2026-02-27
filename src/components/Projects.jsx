// src/components/Projects.jsx
import React, { useMemo } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const ordered = useMemo(() => {
    return [...projects].sort(
      (a, b) => Number(!!b.highlight) - Number(!!a.highlight),
    );
  }, []);

  const getKeyFeature = (p) => {
    if (p.keyFeature) return p.keyFeature;

    switch (p.id) {
      case "booklist":
        return "CRUD book manager + localStorage persistence.";
      case "countries":
        return "Country search + filters + detail pages from an API.";
      case "todo":
        return "Task tracking with status + localStorage persistence.";
      case "weather":
        return "City search + clean, fast weather UI.";
      case "mobileria-nita":
        return "Admin panel CRUD for products + MySQL database (phpMyAdmin).";
      default:
        return "Built to be fast, clean, and user-friendly.";
    }
  };

  const getCardBg = (p) =>
    p.highlight
      ? "linear-gradient(135deg, rgba(245,158,11,.18), rgba(239,68,68,.12), rgba(255,255,255,.05))"
      : "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05))";

  return (
    <div className="card" style={{ padding: 16, borderRadius: 22 }}>
      <div className="projects-grid">
        {ordered.map((p) => (
          <article
            key={p.id}
            className={`card project-card ${
              p.highlight ? "project-featured" : ""
            }`}
            style={{
              // gridColumn: p.highlight ? "span 12" : "span 6", kjo ben card e par me te gjat sa ekrani
              padding: 18,
              borderRadius: 22,
              background: getCardBg(p),
            }}
          >
            <div className="project-head">
              <div className="project-body">
                <div className="project-title-row">
                  <div className="project-title">{p.title}</div>

                  {p.highlight ? (
                    <span className="badge live">Featured</span>
                  ) : null}

                  <span
                    className={`badge ${p.status === "Live" ? "live" : "wip"}`}
                  >
                    {p.status}
                  </span>

                  <span className="badge">{p.type}</span>
                </div>

                <div className="project-key">
                  Key feature:{" "}
                  <span className="project-key-text">{getKeyFeature(p)}</span>
                </div>

                <div className="project-desc">{p.description}</div>

                {/* ACTIONS – POSHT PERSHKRIMIT */}
                <div className="project-actions">
                  {p.link ? (
                    <a
                      className="btn primary"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : null}

                  {p.screenshotsLink ? (
                    <a
                      className="btn"
                      href={p.screenshotsLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Screenshots
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="project-tags">
              {(p.tags || []).map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <style>{`
  .projects-grid{
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* TELEFON: 1 kolonë */
  @media (max-width: 680px){
    .projects-grid{
      grid-template-columns: 1fr;
    }
  }

  /* ------- Projects layout ------- */
  .project-card{
    display:flex;
    flex-direction:column;
    gap:12px;
    overflow: hidden; /* mos lejo overflow vizual */
  }

  .project-head{
    display:flex;
    justify-content:space-between;
    gap:14px;
    flex-wrap:wrap;
  }

  /* KJO TA RREGULLON NGJESHJEN */
  .project-body{
    min-width: 0;      /* jo 240px */
    flex: 1 1 auto;
  }

  .project-title-row{
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
  }

  .project-title{
    font-size: 18px;
    font-weight: 900;
  }

  .project-key{
    margin-top:8px;
    color: rgba(255,255,255,.82);
    font-weight:700;
    font-size: 14px;
  }

  .project-key-text{
    color: rgba(255,255,255,.72);
    font-weight:600;
  }

  .project-desc{
    margin-top:10px;
    color: rgba(255,255,255,.68);
    line-height:1.6;
    white-space: pre-line;
    overflow-wrap: anywhere; /* long text/links mos me e prish layout */
  }

  .project-actions{
    margin-top: 14px;
    display:flex;
    gap:10px;
    flex-wrap:wrap;
  }

  /* TELEFON: butonat full-width, jo dy kolona */
  @media (max-width: 520px){
    .project-actions{
      display:grid;
      grid-template-columns: 1fr;
      gap:10px;
    }
    .project-actions .btn,
    .project-actions a.btn{
      width:100%;
    }
  }

  .project-tags{
    display:flex;
    gap:8px;
    flex-wrap:wrap;
  }
`}</style>
    </div>
  );
}
