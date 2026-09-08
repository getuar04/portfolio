import projects from "./projects";
import experience from "./experience";
import education from "./education";
import training from "./training";
import skillGroups from "./skills";

describe("experience data", () => {
  it("no longer contains the retracted Sharp Group LTD entry", () => {
    const serialized = JSON.stringify(experience);
    expect(serialized).not.toMatch(/Sharp Group/i);
  });

  it("shows SoftDome as the current employer in English and Albanian", () => {
    const current = experience.find((e) => e.id === "junior-backend-developer");
    expect(current.employer).toBe("SoftDome");
    expect(current.role).toBe("Junior Backend Developer");
    expect(current.roleSq).toBe("Zhvillues Backend Junior");
  });

  it("is a single SoftDome entry with Backend Development and Machine Learning sections", () => {
    expect(experience).toHaveLength(1);
    const current = experience[0];
    const titles = current.sections.map((s) => s.title);
    expect(titles).toEqual(["Backend Development", "Machine Learning"]);
    // Machine Learning stays part of the SoftDome position, not a separate employer entry.
    expect(experience.filter((e) => JSON.stringify(e).includes("Machine Learning"))).toHaveLength(1);
  });

  it("keeps each SoftDome capability group concise (no more than 3 bullets)", () => {
    const current = experience.find((e) => e.id === "junior-backend-developer");
    current.sections.forEach((sec) => {
      expect(sec.items.length).toBeLessThanOrEqual(3);
      expect(sec.itemsSq.length).toBeLessThanOrEqual(3);
    });
  });
});

describe("education data", () => {
  it("states In Progress / Në Vazhdim and never claims graduation", () => {
    const ubt = education.find((e) => e.id === "ubt");
    expect(ubt.degree).toMatch(/In Progress/);
    expect(ubt.degreeSq).toMatch(/Në Vazhdim/);
    const serialized = JSON.stringify(education).toLowerCase();
    expect(serialized).not.toMatch(/graduated/);
    expect(serialized).not.toMatch(/degree completed/);
  });
});

describe("training data order", () => {
  it("displays Arra Academy, then ROI Academy, then Qendra FIT", () => {
    expect(training.map((t) => t.id)).toEqual(["arra-academy", "roi-academy", "nodejs-training"]);
  });

  it("Arra Academy carries the verified certificate-derived topic chips", () => {
    const arra = training.find((t) => t.id === "arra-academy");
    ["HTML", "CSS", "JavaScript", "WordPress", "eCommerce", "Cyber Security", "C", "C++", "C#", "SQL"]
      .forEach((topic) => expect(arra.topics).toContain(topic));
  });

  it("ROI Academy carries its verified full-stack technology chips", () => {
    const roi = training.find((t) => t.id === "roi-academy");
    ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap"]
      .forEach((topic) => expect(roi.topics).toContain(topic));
  });

  it("Qendra FIT retains its verified Node.js topics", () => {
    const fit = training.find((t) => t.id === "nodejs-training");
    ["Node.js Fundamentals", "EventEmitter", "Promises", "Streams", "Express", "Mongoose", "JWT"]
      .forEach((topic) => expect(fit.topics).toContain(topic));
  });
});

describe("skills data", () => {
  const byTitle = (title) => skillGroups.find((g) => g.title === title);

  it("renames Recommendation & Ranking to Machine Learning, configured full-width", () => {
    expect(skillGroups.some((g) => g.title === "Recommendation & Ranking")).toBe(false);
    const ml = byTitle("Machine Learning");
    expect(ml).toBeDefined();
    expect(ml.titleSq).toBe("Machine Learning");
    expect(ml.layout).toBe("full");
  });

  it("keeps Additional Exposure as a regular (non-full-width) compact group", () => {
    const extra = byTitle("Additional Exposure");
    expect(extra).toBeDefined();
    expect(extra.layout).not.toBe("full");
    expect(extra.items).toEqual(expect.arrayContaining(["Java", "PHP", "C", "C++", "C#"]));
  });

  it("lists crawling/data-extraction skills from the crawl project", () => {
    const backend = byTitle("Backend Engineering");
    ["Web Crawling", "Web Scraping", "Data Extraction", "CSV Export"].forEach((skill) =>
      expect(backend.items).toContain(skill)
    );
  });

  it("adds Next.js to the Frontend group as working knowledge, not advanced/expert", () => {
    const frontend = byTitle("Frontend");
    const nextEntry = frontend.items.find((i) => i.startsWith("Next.js"));
    expect(nextEntry).toBeDefined();
    expect(nextEntry.toLowerCase()).not.toMatch(/expert|advanced|senior/);
    const serialized = JSON.stringify(skillGroups).toLowerCase();
    expect(serialized).not.toMatch(/next\.js expert/);
    expect(serialized).not.toMatch(/advanced next\.js/);
  });

  it("adds NATS near Kafka in the Databases & Messaging group, without equating them", () => {
    const dbGroup = byTitle("Databases & Messaging");
    expect(dbGroup.items).toContain("Kafka");
    expect(dbGroup.items).toContain("NATS");
    expect(dbGroup.note.toLowerCase()).not.toMatch(/nats is the same as kafka|identical/);
  });

  it("still labels evaluation metrics separately from technologies on the Machine Learning card", () => {
    const ml = byTitle("Machine Learning");
    expect(ml.metrics).toEqual(expect.arrayContaining(["F1", "AUC", "Precision@5", "NDCG@10"]));
    const allTechItems = ml.groups.flatMap((g) => g.items);
    ml.metrics.forEach((metric) => expect(allTechItems).not.toContain(metric));
  });

  it("preserves existing skills after the reorganisation", () => {
    const serialized = JSON.stringify(skillGroups);
    ["Node.js", "PostgreSQL", "Docker", "React", "Python", "Kafka", "Redux"].forEach((skill) =>
      expect(serialized).toContain(skill)
    );
  });
});

describe("projects data integrity", () => {
  it("has no duplicate project ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("preserves every previously existing project", () => {
    const expectedIds = [
      "social-media", "course-management", "2fa-auth", "chatbot", "book-list",
      "countries-app", "todo-list", "weather-app", "mobileria-nita", "smart-kitchen",
      "resource-booking-system", "2af-auth-service", "google-oauth-integration",
    ];
    const ids = projects.map((p) => p.id);
    expectedIds.forEach((id) => expect(ids).toContain(id));
  });

  it("includes all six newly supplied projects exactly once", () => {
    const ids = projects.map((p) => p.id);
    ["balkan-air-quality-analysis", "prishtina-traffic-counter", "arka-pos", "ecommerce-crawler", "quiz-management", "digital-invitation-platform"]
      .forEach((id) => expect(ids.filter((x) => x === id)).toHaveLength(1));
  });

  it("marks ARKA and Digital Invitation Platform as coming-soon, not completed", () => {
    expect(projects.find((p) => p.id === "arka-pos").completionStatus).toBe("coming-soon");
    expect(projects.find((p) => p.id === "digital-invitation-platform").completionStatus).toBe("coming-soon");
  });

  it("never renders a github/live/screenshots link for a project without a valid supplied URL", () => {
    projects.forEach((p) => {
      if (p.github) expect(p.github).toMatch(/^https:\/\/github\.com\//);
      if (p.live) expect(p.live).toMatch(/^https?:\/\//);
      if (p.screenshots) expect(p.screenshots).toMatch(/^https?:\/\//);
    });
  });

  it("quiz-management reflects the verified frontend stack (Tailwind, no Bootstrap) and no seed credentials", () => {
    const quiz = projects.find((p) => p.id === "quiz-management");
    expect(quiz.stack).toEqual(expect.arrayContaining(["React", "TypeScript", "Vite", "Tailwind CSS"]));
    expect(quiz.stack).not.toContain("Bootstrap");
    const serialized = JSON.stringify(quiz);
    expect(serialized).not.toMatch(/admin@quiz\.com/);
    expect(serialized).not.toMatch(/123456/);
  });

  it("does not claim planned ARKA fiscalisation or invitation RSVP persistence as implemented", () => {
    const arka = projects.find((p) => p.id === "arka-pos");
    expect(arka.stack).not.toContain("NIVF");
    expect((arka.futureExtensions || []).join(" ")).toMatch(/future/i);

    const invite = projects.find((p) => p.id === "digital-invitation-platform");
    expect((invite.futureExtensions || []).join(" ")).toMatch(/RSVP/i);
  });

  it("configures the exact, final GitHub URLs supplied by the owner for all six new projects, regardless of current live reachability", () => {
    const expected = {
      "balkan-air-quality-analysis": "https://github.com/getuar04/balkan-air-quality-analysis",
      "prishtina-traffic-counter": "https://github.com/getuar04/prishtina-traffic-counter",
      "arka-pos": "https://github.com/getuar04/arka-pos",
      "ecommerce-crawler": "https://github.com/getuar04/crawl",
      "quiz-management": "https://github.com/getuar04/quiz-management",
      "digital-invitation-platform": "https://github.com/getuar04/invations",
    };
    Object.entries(expected).forEach(([id, url]) => {
      const project = projects.find((p) => p.id === id);
      expect(project.github).toBe(url);
      expect(project.github).not.toBe("#");
    });
  });

  it("keeps existing repository links for older projects unchanged", () => {
    expect(projects.find((p) => p.id === "chatbot").github).toBe("https://github.com/getuar04/chat-bot");
    expect(projects.find((p) => p.id === "social-media").github).toBe("https://github.com/getuar04/social_media_app");
    expect(projects.find((p) => p.id === "2fa-auth").github).toBe("https://github.com/getuar04/Two_Factor_Authentication");
  });

  it("marks the five currently-private repositories with repositoryVisibility, distinct from project status", () => {
    const privateIds = ["arka-pos", "balkan-air-quality-analysis", "prishtina-traffic-counter", "ecommerce-crawler", "digital-invitation-platform"];
    privateIds.forEach((id) => {
      const p = projects.find((x) => x.id === id);
      expect(p.repositoryVisibility).toBe("private");
      expect(p.github).toMatch(/^https:\/\/github\.com\/getuar04\//); // URL kept, never removed
    });
    // Repository visibility is independent of completion status.
    expect(projects.find((p) => p.id === "arka-pos").completionStatus).toBe("coming-soon");
    expect(projects.find((p) => p.id === "balkan-air-quality-analysis").completionStatus).toBe("completed");
  });

  it("marks Quiz Management's repository as public", () => {
    const quiz = projects.find((p) => p.id === "quiz-management");
    expect(quiz.repositoryVisibility).toBe("public");
    expect(quiz.github).toBe("https://github.com/getuar04/quiz-management");
  });

  it("never presents the same real-world system as two separate project cards", () => {
    const kitchen = projects.find((p) => p.id === "smart-kitchen");
    const booking = projects.find((p) => p.id === "resource-booking-system");
    const arka = projects.find((p) => p.id === "arka-pos");
    expect(kitchen.id).not.toBe(booking.id);
    expect(kitchen.id).not.toBe(arka.id);
    expect(booking.id).not.toBe(arka.id);
  });
});
