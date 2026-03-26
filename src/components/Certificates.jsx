import { useLang } from "../context/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import certificates from "../data/certificates";

export default function Certificates() {
  const { lang, t } = useLang();
  const { ref, visible } = useScrollReveal();

  const images = certificates.filter((c) => c.type === "image");
  const pdfs = certificates.filter((c) => c.type === "pdf");

  return (
    <section id="certificates" className="sec" ref={ref}>
      <div className="wrap">
        {/* Header */}
        <div className={`reveal ${visible ? "visible" : ""} mb-16`}>
          <p className="section-label mb-4">{t.certificates.label}</p>
          <h2 className="section-heading">{t.certificates.heading}</h2>
        </div>

        {/* Image certificates */}
        {images.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {images.map((cert, i) => (
              <a
                key={cert.id}
                href={cert.src}
                target="_blank"
                rel="noreferrer"
                className={`reveal ${visible ? "visible" : ""} reveal-delay-${(i % 3) + 1} group glass rounded-[24px] p-4 card-hover block`}
              >
                <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img
                    src={cert.src}
                    alt={lang === "sq" ? cert.labelSq : cert.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {lang === "sq" ? cert.labelSq : cert.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <div
                    className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: "rgba(124,58,237,0.1)", color: "var(--accent-light)" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* PDF certificates */}
        {pdfs.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pdfs.map((cert, i) => (
              <a
                key={cert.id}
                href={cert.src}
                target="_blank"
                rel="noreferrer"
                className={`reveal ${visible ? "visible" : ""} reveal-delay-${(i % 3) + 1} group glass rounded-[20px] p-5 card-hover flex items-center gap-4`}
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(124,58,237,0.12)", color: "var(--accent-light)", border: "1px solid rgba(124,58,237,0.2)", fontFamily: "'Syne', sans-serif" }}
                >
                  PDF
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-white truncate" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {lang === "sq" ? cert.labelSq : cert.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 shrink-0 transition-all duration-200 group-hover:text-violet-400"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
