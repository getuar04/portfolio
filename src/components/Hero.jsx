export default function Hero() {
  return (
    <section id="home" className="relative section-padding pt-24 md:pt-32">
      <div className="container-main grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
            Computer Science & Engineering Student • Full-Stack Developer
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building <span className="heading-gradient">modern web apps</span>{" "}
              with real backend logic, practical architecture, and clean
              interfaces.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m Getuar Jakupi, focused on React, Node.js, MySQL, MongoDB,
              authentication systems, dashboards, APIs, and real full-stack
              projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="/cv/Getuar-Jakupi-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              View CV
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 px-3 py-1">
              React
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Node.js
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              MySQL
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              MongoDB
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              JWT
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              REST APIs
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-glowPulse" />
          <div className="glass relative w-full rounded-[28px] p-6 shadow-glow">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Current Focus</p>
                <h3 className="text-xl font-semibold text-white">
                  Building Better Projects
                </h3>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-4">
              {[
                "Course Management System",
                "Social Media App",
                "2FA Authentication System",
                "Albanian AI Chatbot",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/10"
                >
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
