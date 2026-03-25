export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not just coursework. Real practical development.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[28px] p-8 shadow-soft transition duration-300 hover:-translate-y-1">
            <p className="text-lg leading-8 text-slate-300">
              I am a Computer Science and Engineering student at UBT with a
              strong focus on full-stack development. I build practical
              applications using React, Node.js, Express, MySQL, MongoDB, and
              REST APIs.
            </p>
          </div>

          <div className="glass rounded-[28px] p-8 shadow-soft transition duration-300 hover:-translate-y-1">
            <p className="text-lg leading-8 text-slate-300">
              My work includes dashboards, CRUD platforms, authentication
              systems, role-based applications, AI chatbot projects, and backend
              logic that solves real user needs. I am focused on growing into a
              strong junior full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
