export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <div className="glass rounded-[32px] p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
                Contact
              </p>
              <h2 className="mb-4 text-3xl font-bold">
                Let’s build something serious.
              </h2>
              <p className="max-w-xl leading-8 text-slate-300">
                I’m open to internships, junior developer roles, freelance work,
                and collaboration on real-world projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-lg font-medium text-white">
                  your.email@example.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/getuar-jakupi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-white hover:text-brand-300"
                >
                  linkedin.com/in/getuar-jakupi
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">GitHub</p>
                <a
                  href="https://github.com/getuar04"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium text-white hover:text-brand-300"
                >
                  github.com/getuar04
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
