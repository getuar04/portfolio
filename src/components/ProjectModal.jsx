// src/components/ProjectModal.jsx
import React, { useEffect } from "react";

export default function ProjectModal({ open, project, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  const statusClass = project.status === "Live" ? "live" : "wip";

  const getKeyFeature = () => {
    if (project.keyFeature) return project.keyFeature;
    switch (project.id) {
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

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "rgba(0,0,0,.60)",
        display: "grid",
        placeItems: "center",
        padding: 18,
      }}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card"
        style={{
          width: "min(900px, 100%)",
          padding: 20,
          borderRadius: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 900 }}>
                {project.title}
              </div>
              {project.highlight ? (
                <span className="badge live">Featured</span>
              ) : null}
              <span className={`badge ${statusClass}`}>{project.status}</span>
              <span className="badge">{project.type}</span>
            </div>

            <div
              style={{
                marginTop: 10,
                color: "rgba(255,255,255,.82)",
                fontWeight: 700,
              }}
            >
              Key feature:{" "}
              <span style={{ color: "rgba(255,255,255,.72)", fontWeight: 600 }}>
                {getKeyFeature()}
              </span>
            </div>

            <div
              style={{
                marginTop: 10,
                color: "rgba(255,255,255,.72)",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {project.description}
            </div>
          </div>

          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>

        <div style={{ height: 14 }} />
        <div className="sep" />
        <div style={{ height: 14 }} />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {(project.tags || []).map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>

        <div style={{ height: 16 }} />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.link ? (
            <a
              className="btn primary"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Open Live Demo
            </a>
          ) : null}

          {project.screenshotsLink ? (
            <a
              className="btn"
              href={project.screenshotsLink}
              target="_blank"
              rel="noreferrer"
            >
              View screenshots (Google Drive)
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
