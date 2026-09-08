import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import profile from "../data/profile";

const contactItems = [
  {
    key: "email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: { bg: "rgba(124,58,237,0.1)", text: "var(--accent-light)", border: "rgba(124,58,237,0.2)" },
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "phone",
    value: profile.phone,
    href: profile.phoneHref,
    color: { bg: "rgba(52,211,153,0.1)", text: "#34d399", border: "rgba(52,211,153,0.2)" },
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    key: "location",
    value: profile.location,
    href: null,
    highlight: true,
    color: { bg: "rgba(6,182,212,0.1)", text: "#22d3ee", border: "rgba(6,182,212,0.2)" },
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    value: `linkedin.com/in/${profile.linkedinHandle}`,
    href: profile.linkedin,
    color: { bg: "rgba(14,165,233,0.1)", text: "#38bdf8", border: "rgba(14,165,233,0.2)" },
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "github",
    value: `github.com/${profile.githubHandle}`,
    href: profile.github,
    color: { bg: "rgba(255,255,255,0.06)", text: "var(--ink-2)", border: "var(--border)" },
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
];

function ContactCard({ item, t, visible, delay }) {
  const inner = (
    <div
      className={`reveal ${visible ? "visible" : ""} reveal-delay-${delay} flex items-center gap-4 glass rounded-[20px] p-4 card-hover`}
      style={item.highlight ? { border: "1px solid rgba(6,182,212,0.25)", background: "rgba(6,182,212,0.06)" } : {}}
    >
      <div
        className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: item.color.bg, color: item.color.text, border: `1px solid ${item.color.border}` }}
        aria-hidden="true"
      >
        {item.icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs mb-0.5" style={{ color: "var(--ink-5)" }}>
          {t.contact[item.key]}
        </p>
        <p className="text-sm font-medium truncate" style={{ color: item.highlight ? "#22d3ee" : item.href ? item.color.text : "var(--ink-1)" }}>
          {item.value}
          {item.highlight && (
            <span className="ml-2 text-xs" style={{ color: "rgba(34,211,238,0.5)" }} aria-hidden="true">📍</span>
          )}
        </p>
      </div>
      {item.href && (
        <svg className="w-4 h-4 shrink-0" style={{ color: "var(--ink-7)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </div>
  );

  return item.href ? (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="block"
      aria-label={`${t.contact[item.key]}: ${item.value}`}
    >
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="sec" ref={ref}>
      <div className="wrap">
        <div
          className={`reveal ${visible ? "visible" : ""} glass rounded-[32px] p-8 md:p-12 relative overflow-hidden`}
          style={{ boxShadow: "0 0 0 1px rgba(124,58,237,0.15), 0 30px 80px rgba(124,58,237,0.08)" }}
        >
          <div
            className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <p className="section-label mb-5">{t.contact.label}</p>
              <h2 className="section-heading mb-6">{t.contact.heading}</h2>
              <p className="text-base leading-8 max-w-md" style={{ color: "var(--ink-2)" }}>
                {t.contact.sub}
              </p>
            </div>

            <div className="grid gap-3">
              {contactItems.map((item, i) => (
                <ContactCard key={item.key} item={item} t={t} visible={visible} delay={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
