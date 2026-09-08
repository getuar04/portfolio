import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import experience from "../data/experience";

function ExperienceCard({ item, lang, t, visible, delay }) {
  const role = lang === "sq" ? item.roleSq : item.role;
  const period = lang === "sq" ? item.periodSq : item.period;
  const summary = lang === "sq" ? item.summarySq : item.summary;
  const highlights = lang === "sq" ? item.highlightsSq : item.highlights;

  return (
    <div className={`reveal ${visible ? "visible" : ""} reveal-delay-${delay} glass rounded-[24px] p-7 card-hover`}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            {role}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--accent-light)" }}>
            {item.employer || (item.type === "current" ? "" : "")}
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-medium shrink-0"
          style={{
            background: item.type === "current" ? "rgba(52,211,153,0.1)" : "var(--surface)",
            color: item.type === "current" ? "#34d399" : "var(--ink-3)",
            border: `1px solid ${item.type === "current" ? "rgba(52,211,153,0.25)" : "var(--border)"}`,
          }}
        >
          {period}
        </span>
      </div>

      <p className="text-sm leading-7 mb-5" style={{ color: "var(--ink-2)" }}>
        {summary}
      </p>

      {highlights?.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--ink-5)" }}>
            {t.experience.highlightsTitle}
          </p>
          <ul className="flex flex-col gap-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-6" style={{ color: "var(--ink-2)" }}>
                <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ background: "var(--accent-light)" }} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.stack?.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--ink-5)" }}>
            {t.experience.stackTitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="sec" ref={ref}>
      <div className="wrap">
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <p className="section-label mb-4">{t.experience.label}</p>
          <h2 className="section-heading">{t.experience.heading}</h2>
        </div>

        <div className="flex flex-col gap-5">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} lang={lang} t={t} visible={visible} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
