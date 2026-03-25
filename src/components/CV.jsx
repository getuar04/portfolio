export default function CV() {
  return (
    <section id="cv" className="section-padding">
      <div className="container-main">
        <div className="glass rounded-[32px] p-8 shadow-glow">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
                Curriculum Vitae
              </p>
              <h2 className="mb-3 text-3xl font-bold">
                Open or download my CV.
              </h2>
              <p className="leading-7 text-slate-300">
                My CV includes education, skills, projects, certifications, and
                practical development experience.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="/cv/Getuar-Jakupi-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Preview CV
              </a>
              <a
                href="/cv/Getuar-Jakupi-CV.pdf"
                download
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
