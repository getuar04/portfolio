const groups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PHP", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "Tools & Other",
    items: ["Git", "GitHub", "Postman", "Figma", "Photoshop", "Illustrator"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-main">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Skills
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Tech stack I actually work with.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="glass rounded-[28px] p-6 shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-brand-400/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
