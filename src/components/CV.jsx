import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import profile from "../data/profile";

export default function CV() {
  const { t } = useLang();
  const { ref, visible } = useScrollReveal();

  return (
    <section id="cv" className="sec" ref={ref}>
      <div className="wrap">
        <div
          className={`reveal ${visible ? "visible" : ""} glass rounded-[32px] p-8 md:p-12 relative overflow-hidden`}
          style={{ boxShadow: "0 0 0 1px rgba(124,58,237,0.15), 0 30px 80px rgba(124,58,237,0.08)" }}
        >
          {/* BG glow */}
          <div
            className="absolute top-0 right-0 h-80 w-80 -translate-y-1/3 translate-x-1/3 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label mb-5">{t.cv.label}</p>
              <h2 className="section-heading mb-4">{t.cv.heading}</h2>
              <p className="text-base leading-8" style={{ color: "var(--ink-2)" }}>
                {t.cv.sub}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost justify-center"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {t.cv.preview}
              </a>
              <a
                href={profile.cvPath}
                download
                className="btn-primary justify-center"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.cv.download}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
