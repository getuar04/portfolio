import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const infoItems = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    key: "location",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    key: "university",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    key: "languages",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    key: "available",
  },
];

export default function About() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="sec" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <p className="section-label mb-4">{t.about.label}</p>
          <h2 className="section-heading max-w-2xl" style={{ whiteSpace: "pre-line" }}>
            {t.about.heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:items-stretch">
          {/* Cards col — both cards flex to evenly fill the height of the taller info column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-1 glass rounded-[24px] p-7 card-hover flex-1 flex flex-col justify-center`}>
              <p className="text-base sm:text-lg leading-8" style={{ color: "var(--ink-2)" }}>
                {t.about.card1}
              </p>
            </div>
            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2 glass rounded-[24px] p-7 card-hover flex-1 flex flex-col justify-center`}>
              <p className="text-base sm:text-lg leading-8" style={{ color: "var(--ink-2)" }}>
                {t.about.card2}
              </p>
            </div>
          </div>

          {/* Info col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Avatar / initials card */}
            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-1 glass rounded-[24px] p-6 card-hover flex items-center gap-5`}>
              <div
                className="h-16 w-16 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 on-accent"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--gold) 100%)",
                  fontFamily: "'Syne', sans-serif",
                }}
                aria-hidden="true"
              >
                GJ
              </div>
              <div>
                <p className="font-bold text-white text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>Getuar Jakupi</p>
                <p className="text-sm" style={{ color: "var(--ink-4)" }}>{t.about.role}</p>
                <p className="text-xs mt-1" style={{ color: "var(--ink-6)" }}>{t.about.location}</p>
              </div>
            </div>

            {/* Info items */}
            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2 glass rounded-[24px] p-6 card-hover`}>
              <div className="flex flex-col gap-4">
                {infoItems.map((item) => (
                  <div key={item.key} className="flex items-center gap-3">
                    <div
                      className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(124,58,237,0.12)", color: "var(--accent-light)" }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm" style={{ color: "var(--ink-2)" }}>
                      {t.about[item.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email quick contact */}
            <div className={`reveal ${visible ? "visible" : ""} reveal-delay-3 glass rounded-[24px] p-5 card-hover`}>
              <p className="text-xs mb-2" style={{ color: "var(--ink-5)" }}>{t.about.quickContact}</p>
              <a
                href="mailto:getuar.j1@gmail.com"
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--accent-light)" }}
              >
                getuar.j1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
