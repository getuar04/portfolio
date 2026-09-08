const skillGroups = [
  {
    title: "Backend Engineering",
    titleSq: "Inxhinieri Backend",
    icon: "⬡",
    color: "violet",
    items: [
      "Node.js", "TypeScript", "JavaScript", "Express.js", "REST APIs", "JWT",
      "RBAC", "Two-Factor Authentication", "Clean Architecture", "API Validation", "Testing",
      "Web Crawling", "Web Scraping", "Data Extraction", "CSV Export", "E-commerce Data Processing",
    ],
  },
  {
    title: "Databases & Messaging",
    titleSq: "Bazat e të Dhënave & Mesazhe",
    icon: "◉",
    color: "emerald",
    items: ["PostgreSQL", "MongoDB", "Mongoose", "Redis", "Kafka", "NATS", "MySQL", "Microsoft SQL Server", "SQL"],
    note: "Experience working with Kafka and NATS in event-driven backend communication and service integration.",
    noteSq: "Përvojë me Kafka dhe NATS për komunikim event-driven dhe integrimin e shërbimeve backend.",
  },
  {
    title: "DevOps & Delivery",
    titleSq: "DevOps & Dërgesa",
    icon: "⬢",
    color: "amber",
    items: [
      "Docker", "Docker Compose", "Jenkins CI/CD", "Git", "GitHub",
      "Kubernetes", "Postman", "Swagger / OpenAPI", "Render", "ImageKit",
    ],
  },
  {
    title: "Frontend",
    titleSq: "Frontend",
    icon: "◇",
    color: "rose",
    items: [
      "React", "TypeScript", "Next.js (Working Knowledge)", "Vite", "Tailwind CSS", "HTML", "CSS", "Responsive Design",
      "Bootstrap", "Context API", "React Query", "Redux", "Zustand",
    ],
  },
  {
    title: "Data Science & Visualisation",
    titleSq: "Data Science & Vizualizim",
    icon: "◈",
    color: "cyan",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "scikit-learn", "Streamlit"],
  },
  {
    title: "Additional Exposure",
    titleSq: "Ekspozim Shtesë",
    icon: "✦",
    color: "slate",
    items: ["Java", "PHP", "C", "C++", "C#", "Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Machine Learning",
    titleSq: "Machine Learning",
    icon: "◎",
    color: "fuchsia",
    layout: "full",
    groups: [
      {
        label: "Core ML & Service",
        labelSq: "Bazat ML & Shërbimi",
        items: ["Python", "FastAPI", "Pandas", "NumPy", "scikit-learn", "PostgreSQL", "Docker"],
      },
      {
        label: "Models & Ranking",
        labelSq: "Modelet & Renditja",
        items: [
          "Logistic Regression", "Random Forest", "LightGBM", "LGBMRanker",
          "XGBoost", "XGBRanker", "Recommendation Systems", "Learning to Rank",
        ],
      },
      {
        label: "Data & Evaluation",
        labelSq: "Të Dhëna & Vlerësim",
        items: ["Feature Engineering", "Point-in-Time Datasets", "Synthetic Pre-production Data", "Model Evaluation"],
      },
    ],
    metrics: ["F1", "AUC", "Precision@5", "NDCG@10", "R²", "MSE"],
    metricsLabel: "Evaluation Metrics",
    metricsLabelSq: "Metrikat e Vlerësimit",
  },
];

export default skillGroups;
