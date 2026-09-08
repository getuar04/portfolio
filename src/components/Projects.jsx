import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import projects from "../data/projects";

const FILTERS = [
  "all", "featured", "backend", "fullstack", "frontend",
  "dataScience", "ml", "computerVision", "automation",
  "university", "professional", "research", "inDevelopment",
];

const STATUS_COLORS = {
  research: { bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.25)", text: "#38bdf8" },
  private: { bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.25)", text: "#fb7185" },
  caseStudy: { bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.25)", text: "#a78bfa" },
  wip: { bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.25)", text: "#fbbf24" },
  comingSoon: { bg: "rgba(217,70,239,0.1)", border: "rgba(217,70,239,0.25)", text: "#e879f9" },
  live: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)", text: "#34d399" },
  source: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.25)", text: "#34d399" },
  completed: { bg: "rgba(255,255,255,0.06)", border: "var(--border)", text: "var(--ink-2)" },
};

function statusKey(p) {
  if (p.context === "research") return "research";
  if (p.completionStatus === "coming-soon") return "comingSoon";
  if (p.context === "professional" && p.repositoryStatus === "private") return "private";
  if (p.context === "university" && p.repositoryStatus !== "public" && p.demoStatus !== "live") return "caseStudy";
  if (p.completionStatus === "in-progress") return "wip";
  if (p.demoStatus === "live") return "live";
  if (p.repositoryStatus === "public") return "source";
  return "completed";
}

const githubIcon = (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
const externalIcon = (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const linkedinIcon = (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const lockIcon = (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

// Small, quiet indicator — deliberately calmer than the status badge, never red.
function PrivateRepoBadge({ t }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium"
      style={{ background: "var(--surface-strong)", color: "var(--ink-4)", border: "1px solid var(--border)" }}
      title={t.projects.privateRepoTooltip}
    >
      {lockIcon} {t.projects.privateRepo}
    </span>
  );
}

// One resource link used both as a card-footer primary action and as a
// compact secondary in-card resource link. `label` is the full descriptive
// accessible name (includes the project name); `children` is the short
// visible text.
function ResourceLink({ href, label, title, icon, variant, size, children }) {
  const base = variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : null;
  if (base) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={label}
        title={title}
        className={`${base} ${size}`}
      >
        {icon} {children}
      </a>
    );
  }
  // "text" variant: compact secondary resource link, not a primary CTA.
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={label}
      title={title}
      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
      style={{ color: "var(--accent-light)" }}
    >
      {icon} {children}
    </a>
  );
}

// Standard card footer = at most one primary resource (Live Demo, else
// Source Code) + View Details. Anything else (presentation, screenshots, the
// non-chosen repo/demo link) becomes a compact secondary resource line in
// the card body, never a third stacked primary button.
function getCardActions(project, t, lang, variant = "card") {
  const title = lang === "sq" ? project.titleSq : project.title;
  const isPrivate = project.repositoryVisibility === "private";
  const githubDisplay = variant === "modal" ? t.projects.viewGithubModal : t.projects.viewGithub;

  const githubResource = project.github
    ? {
        type: "github",
        href: project.github,
        label: `${githubDisplay} — ${title}`,
        display: githubDisplay,
        title: isPrivate ? t.projects.privateRepoTooltip : undefined,
        icon: githubIcon,
      }
    : null;
  const liveResource = project.live
    ? { type: "live", href: project.live, label: `${t.projects.viewLive} — ${title}`, display: t.projects.viewLive, icon: externalIcon }
    : null;

  const primary = liveResource || githubResource;
  const secondary = [];
  if (primary !== githubResource && githubResource) secondary.push(githubResource);
  if (project.linkedin) {
    secondary.push({
      type: "linkedin",
      href: project.linkedin,
      label: `${t.projects.presentation} — ${title}`,
      display: t.projects.presentation,
      icon: linkedinIcon,
    });
  }
  if (project.screenshots) {
    secondary.push({
      type: "screenshots",
      href: project.screenshots,
      label: `${t.projects.viewScreenshots} — ${title}`,
      display: t.projects.viewScreenshots,
      icon: externalIcon,
    });
  }

  return { primary, secondary, isPrivate, hasAny: Boolean(primary || secondary.length) };
}

function ProjectCard({ project, onOpen, lang, t, delay }) {
  const title = lang === "sq" ? project.titleSq : project.title;
  const description = lang === "sq" ? project.shortDescriptionSq : project.shortDescription;
  const category = lang === "sq" ? project.categorySq : project.category;
  const key = statusKey(project);
  const sc = STATUS_COLORS[key];
  const { primary, secondary, isPrivate, hasAny } = getCardActions(project, t, lang);

  return (
    <article className={`reveal visible reveal-delay-${delay} glass rounded-[24px] p-6 card-hover h-full flex flex-col`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(124,58,237,0.1)", color: "var(--accent-light)", border: "1px solid rgba(124,58,237,0.2)" }}>
            {category}
          </span>
          {project.featured && (
            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(245,158,11,0.1)", color: "#fcd34d", border: "1px solid rgba(245,158,11,0.2)" }}>
              {t.projects.featuredTag}
            </span>
          )}
        </div>
        <span className="rounded-full px-2.5 py-1 text-xs font-medium shrink-0" style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
          {t.projects.status[key]}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onOpen(project)}
        className="text-left"
      >
        <h3 className="text-lg font-bold mb-3 text-white hover:text-violet-300 transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h3>
      </button>
      <p className="text-sm leading-7 mb-4 flex-1" style={{ color: "var(--ink-3)" }}>
        {description}
      </p>

      {secondary.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {secondary.map((r) => (
            <ResourceLink key={r.type} href={r.href} label={r.label} title={r.title} icon={r.icon} variant="text">
              {r.display}
            </ResourceLink>
          ))}
        </div>
      )}

      {project.stack?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto items-center">
        {primary && (
          <ResourceLink
            href={primary.href}
            label={primary.label}
            title={primary.title}
            icon={primary.icon}
            variant={primary.type === "live" ? "primary" : "ghost"}
            size="text-xs px-4 py-2"
          >
            {primary.display}
          </ResourceLink>
        )}
        <button type="button" onClick={() => onOpen(project)} className="btn-ghost text-xs px-4 py-2">
          {t.projects.viewDetails}
        </button>
        {primary?.type === "github" && isPrivate && <PrivateRepoBadge t={t} />}
        {!hasAny && (
          <span className="btn-ghost text-xs px-4 py-2 opacity-50 cursor-default select-none">{t.projects.private}</span>
        )}
      </div>
    </article>
  );
}

function useScrollLock(active) {
  useEffect(() => {
    if (!active) return;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [active]);
}

function Modal({ project, onClose, lang, t }) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);
  const titleId = "project-modal-title";
  const descId = "project-modal-desc";

  useScrollLock(Boolean(project));

  useEffect(() => {
    if (!project) return;
    previouslyFocused.current = document.activeElement;

    const dialog = dialogRef.current;
    const focusable = () =>
      dialog?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') || [];

    const first = focusable()[0];
    (first || dialog)?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const items = Array.from(focusable());
        if (items.length === 0) return;
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  if (!project) return null;

  const title = lang === "sq" ? project.titleSq : project.title;
  const overview = lang === "sq"
    ? project.fullDescriptionSq || project.shortDescriptionSq
    : project.fullDescription || project.shortDescription;
  const contributions = lang === "sq" ? project.contributionsSq : project.contributions;
  const features = lang === "sq" ? project.implementedFeaturesSq : project.implementedFeatures;
  const architecture = lang === "sq" ? project.architectureSq : project.architecture;
  const futureExt = lang === "sq" ? project.futureExtensionsSq : project.futureExtensions;
  const note = lang === "sq" ? project.noteSq : project.note;
  const contextNote = lang === "sq" ? project.context_noteSq : project.context_note;
  const category = lang === "sq" ? project.categorySq : project.category;
  const key = statusKey(project);
  const sc = STATUS_COLORS[key];
  const { primary, secondary, isPrivate, hasAny } = getCardActions(project, t, lang, "modal");
  const allResources = [primary, ...secondary].filter(Boolean);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-4"
      style={{ background: "var(--backdrop)", backdropFilter: "blur(8px)", zIndex: 200 }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={overview ? descId : undefined}
        tabIndex={-1}
        className="glass rounded-[28px] w-full relative overflow-y-auto"
        style={{
          maxWidth: "min(900px, calc(100vw - 32px))",
          maxHeight: "calc(100dvh - 32px)",
          boxShadow: "0 0 0 1px rgba(124,58,237,0.2), 0 40px 100px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header keeps the close button reachable on tall content / short viewports */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between gap-3 px-6 pt-6 pb-4 sm:px-8 sm:pt-8"
          style={{ background: "var(--bg)" }}
        >
          <div className="flex flex-wrap gap-2 pr-10">
            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(124,58,237,0.1)", color: "var(--accent-light)", border: "1px solid rgba(124,58,237,0.2)" }}>
              {category}
            </span>
            {project.featured && (
              <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "rgba(245,158,11,0.1)", color: "#fcd34d", border: "1px solid rgba(245,158,11,0.2)" }}>
                {t.projects.featuredTag}
              </span>
            )}
            <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
              {t.projects.status[key]}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label={t.projects.modal.close}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 h-9 w-9 rounded-full flex items-center justify-center transition-all shrink-0"
            style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--ink-3)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <h3 id={titleId} className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            {title}
          </h3>

          {contextNote && (
            <p className="text-xs mb-4" style={{ color: "var(--ink-4)" }}>{contextNote}</p>
          )}

          <div className="flex flex-col gap-5 mb-6">
            {overview && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.overview}</p>
                <p id={descId} className="text-sm leading-7" style={{ color: "var(--ink-2)" }}>{overview}</p>
              </div>
            )}

            {contributions && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.contribution}</p>
                <p className="text-sm leading-7" style={{ color: "var(--ink-2)" }}>{contributions}</p>
              </div>
            )}

            {features?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.implementedFeatures}</p>
                <ul className="flex flex-col gap-1.5">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-6" style={{ color: "var(--ink-2)" }}>
                      <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--accent-light)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {architecture && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.architecture}</p>
                <p className="text-sm leading-7" style={{ color: "var(--ink-2)" }}>{architecture}</p>
              </div>
            )}

            {project.stack?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.techStack}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                </div>
              </div>
            )}

            {futureExt?.length > 0 && (
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.1rem" }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.futureExtensions}</p>
                <ul className="flex flex-col gap-1.5">
                  {futureExt.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-6" style={{ color: "var(--ink-3)" }}>
                      <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--ink-5)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.team?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--ink-5)" }}>{t.projects.modal.team}</p>
                <p className="text-sm" style={{ color: "var(--ink-2)" }}>{project.team.join(" · ")}</p>
              </div>
            )}

            {note && (
              <p className="text-xs leading-6 italic" style={{ color: "var(--ink-4)" }}>{note}</p>
            )}
          </div>

          {hasAny && (
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--ink-5)" }}>{t.projects.modal.resources}</p>
              <div className="flex flex-wrap items-center gap-3">
                {allResources.map((r) => (
                  <ResourceLink
                    key={r.type}
                    href={r.href}
                    label={r.label}
                    title={r.title}
                    icon={r.icon}
                    variant={r.type === "live" ? "primary" : "ghost"}
                    size="text-sm px-5 py-2.5"
                  >
                    {r.display}
                  </ResourceLink>
                ))}
                {isPrivate && <PrivateRepoBadge t={t} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const sorted = useMemo(() => [...projects].sort((a, b) => a.displayOrder - b.displayOrder), []);
  const featured = sorted.filter((p) => p.featured);
  const other = sorted.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    if (filter === "all") return sorted;
    if (filter === "featured") return featured;
    if (filter === "inDevelopment") return sorted.filter((p) => p.completionStatus !== "completed");
    return sorted.filter((p) => p.filters.includes(filter));
  }, [filter, sorted, featured]);

  return (
    <section id="projects" className="sec" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-8`}>
          <p className="section-label mb-4">{t.projects.label}</p>
          <h2 className="section-heading mb-3">{t.projects.heading}</h2>
          <p className="text-sm max-w-xl" style={{ color: "var(--ink-3)" }}>{t.projects.sub}</p>
        </div>

        {/* Filters */}
        <div className={`reveal ${visible ? "visible" : ""} mb-10 -mx-5 sm:mx-0 px-5 sm:px-0`}>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap" role="group" aria-label={t.projects.label}>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 shrink-0"
                style={
                  filter === f
                    ? { background: "var(--accent)", color: "#fff" }
                    : { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--ink-3)" }
                }
              >
                {t.projects.filters[f]}
              </button>
            ))}
          </div>
        </div>

        {filter === "all" ? (
          <>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {featured.map((p, i) => (
                <ProjectCard key={p.id} project={p} onOpen={setSelected} lang={lang} t={t} delay={(i % 6) + 1} />
              ))}
            </div>
            {other.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {other.map((p, i) => (
                  <ProjectCard key={p.id} project={p} onOpen={setSelected} lang={lang} t={t} delay={(i % 6) + 1} />
                ))}
              </div>
            )}
          </>
        ) : filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} onOpen={setSelected} lang={lang} t={t} delay={(i % 6) + 1} />
            ))}
          </div>
        ) : (
          <p className="text-sm" style={{ color: "var(--ink-3)" }}>{t.projects.empty}</p>
        )}
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} lang={lang} t={t} />
    </section>
  );
}
