import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import education from "../data/education";
import training from "../data/training";

export default function Education() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="sec" ref={ref}>
      <div className="wrap">
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <p className="section-label mb-4">{t.education.label}</p>
          <h2 className="section-heading">{t.education.heading}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {education.map((ed, i) => {
            const school = lang === "sq" ? ed.schoolSq : ed.school;
            const program = lang === "sq" ? ed.programSq : ed.program;
            const degree = lang === "sq" ? ed.degreeSq : ed.degree;
            const period = lang === "sq" ? ed.periodSq : ed.period;
            return (
              <div key={ed.id} className={`reveal ${visible ? "visible" : ""} reveal-delay-${i + 1} glass rounded-[24px] p-7 card-hover`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {school}
                  </h3>
                  <span className="rounded-full px-3 py-1 text-xs font-medium shrink-0" style={{ background: "var(--surface)", color: "var(--ink-3)", border: "1px solid var(--border)" }}>
                    {period}
                  </span>
                </div>
                <p className="text-sm mb-2" style={{ color: "var(--ink-2)" }}>{program}</p>
                {degree && (
                  <p className="text-sm font-medium" style={{ color: "var(--accent-light)" }}>{degree}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Training */}
        <div className={`reveal ${visible ? "visible" : ""} mb-6`}>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-5)" }}>
            {t.training.heading}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {training.map((tr, i) => {
            const title = lang === "sq" ? tr.titleSq : tr.title;
            const note = lang === "sq" ? tr.noteSq : tr.note;
            return (
              <div key={tr.id} className={`reveal ${visible ? "visible" : ""} reveal-delay-${i + 1} glass rounded-[20px] p-5 card-hover`}>
                <p className="font-semibold text-sm text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</p>
                <p className="text-xs mb-2" style={{ color: "var(--accent-light)" }}>{tr.org}</p>
                <p className="text-xs leading-5" style={{ color: "var(--ink-3)" }}>{note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
