import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import skillGroups from "../data/skills";

const colorMap = {
  cyan:   { bg: "rgba(6,182,212,0.1)",   text: "#67e8f9", border: "rgba(6,182,212,0.2)",   icon: "rgba(6,182,212,0.8)"   },
  violet: { bg: "rgba(124,58,237,0.1)",  text: "var(--accent-light)", border: "rgba(124,58,237,0.2)", icon: "rgba(124,58,237,0.8)" },
  emerald:{ bg: "rgba(52,211,153,0.1)",  text: "#6ee7b7", border: "rgba(52,211,153,0.2)",  icon: "rgba(52,211,153,0.8)"  },
  amber:  { bg: "rgba(245,158,11,0.1)",  text: "#fcd34d", border: "rgba(245,158,11,0.2)",  icon: "rgba(245,158,11,0.8)"  },
  rose:   { bg: "rgba(244,63,94,0.1)",   text: "#fda4af", border: "rgba(244,63,94,0.2)",   icon: "rgba(244,63,94,0.8)"   },
};

function SkillCard({ group, lang, visible, delay }) {
  const c = colorMap[group.color];
  const title = lang === "sq" ? group.titleSq : group.title;
  return (
    <div className={`reveal ${visible ? "visible" : ""} reveal-delay-${delay} glass rounded-[24px] p-6 card-hover h-full`}>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="h-10 w-10 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.icon }}
        >
          {group.icon}
        </div>
        <h3 className="font-bold text-white text-base" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-default"
            style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();

  // skillGroups order: [Frontend, Backend, Databases, Tools, Languages]
  // Layout: row1 = Frontend + Backend (2 wide cards), row2 = Databases + Tools + Languages (3 cards)
  const row1 = skillGroups.slice(0, 2);   // Frontend, Backend
  const row2 = skillGroups.slice(2);      // Databases, Tools, Languages

  return (
    <section id="skills" className="sec" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <p className="section-label mb-4">{t.skills.label}</p>
          <h2 className="section-heading">{t.skills.heading}</h2>
        </div>

        {/* Row 1 — 2 wide cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {row1.map((group, i) => (
            <SkillCard key={group.title} group={group} lang={lang} visible={visible} delay={i + 1} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {row2.map((group, i) => (
            <SkillCard key={group.title} group={group} lang={lang} visible={visible} delay={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
