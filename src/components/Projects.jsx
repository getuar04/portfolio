import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import projects from "../data/projects";

const statusColors = {
  live: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)", text: "#34d399" },
  wip: { bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.25)", text: "#fbbf24" },
};

function ProjectCard({ project, onClick, lang, t, delay }) {
  const title = lang === "sq" ? project.titleSq : project.title;
  const description = lang === "sq" ? project.descriptionSq : project.description;
  const sc = statusColors[project.status];

  return (
    <div
      className={`reveal visible reveal-delay-${delay} glass rounded-[24px] p-6 card-hover cursor-pointer h-full flex flex-col`}
      onClick={() => onClick(project)}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "rgba(124,58,237,0.1)", color: "var(--accent-light)", border: "1px solid rgba(124,58,237,0.2)" }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: "rgba(245,158,11,0.1)", color: "#fcd34d", border: "1px solid rgba(245,158,11,0.2)" }}
            >
              {t.projects.featured}
            </span>
          )}
        </div>
        <span
          className="rounded-full px-2.5 py-1 text-xs font-medium shrink-0"
          style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}
        >
          {t.projects[project.status]}
        </span>
      </div>

      <h3
        className="text-lg font-bold mb-3 text-white group-hover:text-violet-300 transition-colors"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-7 mb-5 flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-ghost text-xs px-4 py-2"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {t.projects.viewGithub}
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-primary text-xs px-4 py-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {t.projects.viewLive}
          </a>
        )}
        {project.linkedin && (
          <a
            href={project.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-ghost text-xs px-4 py-2"
            style={{ color: "#0ea5e9" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Presentation
          </a>
        )}
        {project.screenshots && (
          <a
            href={project.screenshots}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-ghost text-xs px-4 py-2"
          >
            {t.projects.viewScreenshots}
          </a>
        )}
        {!project.github && !project.live && !project.screenshots && !project.linkedin && (
          <button className="btn-ghost text-xs px-4 py-2 opacity-40 cursor-default" disabled>
            Private
          </button>
        )}
      </div>
    </div>
  );
}

function Modal({ project, onClose, lang, t }) {
  if (!project) return null;
  const title = lang === "sq" ? project.titleSq : project.title;
  const description = lang === "sq" ? project.descriptionSq : project.description;
  const sc = statusColors[project.status];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="glass rounded-[28px] w-full max-w-2xl p-8 relative"
        style={{ boxShadow: "0 0 0 1px rgba(124,58,237,0.2), 0 40px 100px rgba(0,0,0,0.5)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center transition-all"
          style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "rgba(255,255,255,0.5)" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(124,58,237,0.1)", color: "var(--accent-light)", border: "1px solid rgba(124,58,237,0.2)" }}>
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(245,158,11,0.1)", color: "#fcd34d", border: "1px solid rgba(245,158,11,0.2)" }}>
              {t.projects.featured}
            </span>
          )}
          <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
            {t.projects[project.status]}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h3>
        <p className="text-base leading-8 mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t.projects.viewLive}
            </a>
          )}
          {project.linkedin && (
            <a href={project.linkedin} target="_blank" rel="noreferrer" className="btn-ghost" style={{ color: "#0ea5e9" }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Presentation
            </a>
          )}
          {project.screenshots && (
            <a href={project.screenshots} target="_blank" rel="noreferrer" className="btn-ghost">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t.projects.viewScreenshots}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);
  const shown = filter === "featured" ? featured : projects;

  return (
    <section id="projects" className="sec" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6`}>
          <div>
            <p className="section-label mb-4">{t.projects.label}</p>
            <h2 className="section-heading">{t.projects.heading}</h2>
          </div>

          {/* Filter */}
          <div className="flex gap-2 shrink-0">
            {["all", "featured"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
                style={
                  filter === f
                    ? { background: "var(--accent)", color: "white" }
                    : { border: "1px solid var(--border)", background: "var(--surface)", color: "rgba(255,255,255,0.5)" }
                }
              >
                {f === "all" ? t.projects.allProjects : t.projects.featuredOnly}
              </button>
            ))}
          </div>
        </div>

        {/* Featured grid */}
        {filter === "all" && (
          <>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {featured.map((p, i) => (
                <ProjectCard key={p.id} project={p} onClick={setSelected} lang={lang} t={t} delay={i + 1} />
              ))}
            </div>
            {other.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {other.map((p, i) => (
                  <ProjectCard key={p.id} project={p} onClick={setSelected} lang={lang} t={t} delay={i + 1} />
                ))}
              </div>
            )}
          </>
        )}

        {filter === "featured" && (
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} onClick={setSelected} lang={lang} t={t} delay={i + 1} />
            ))}
          </div>
        )}
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} lang={lang} t={t} />
    </section>
  );
}
