import React from "react";

const groups = [
  {
    title: "Programming Languages",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "PHP",
      "SQL",
      "C",
      "C++",
      "C#",
    ],
  },
  {
    title: "Frontend Technologies",
    items: ["React", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Technologies",
    items: ["Node.js", "Express", "REST API", "JWT", "RBAC"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQL Server", "phpMyAdmin"],
  },
  {
    title: "Dev Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Web Hosting", "WordPress"],
  },
  {
    title: "Design Tools",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Cloud / Services",
    items: ["ImageKit", "Render", "InfinityFree"],
  },
  {
    title: "Languages",
    items: ["Albanian (Native)", "English", "German", "Serbian"],
  },
  {
    title: "Microsoft Office",
    items: ["Excel", "Word", "PowerPoint", "Access"],
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {groups.map((g) => (
        <div key={g.title} className="card p-5">
          <div className="text-[16px] font-black">{g.title}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {g.items.map((i) => (
              <span key={i} className="badge">
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
