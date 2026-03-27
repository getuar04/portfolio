import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

const currentProjects = [
  "Course Management System",
  "Social Media App",
  "2FA Auth System",
  "Albanian AI Chatbot",
];

export default function Hero() {
  const { t } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % currentProjects.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-[-10%] left-[10%] h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[-5%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="wrap w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className="reveal visible inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-medium mb-6 sm:mb-8"
              style={{ border: "1px solid rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.08)", color: "var(--accent-light)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 status-dot shrink-0" />
              <span className="leading-tight">{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1
              className="reveal visible reveal-delay-1 font-black leading-[1.05] mb-5 sm:mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              }}
            >
              {t.hero.headline1}{" "}
              <span className="grad-text">{t.hero.headline2}</span>
              <br />
              <span
                className="font-semibold"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 2rem)",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {t.hero.headline3}
              </span>
            </h1>

            {/* Sub */}
            <p
              className="reveal visible reveal-delay-2 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 mb-8 sm:mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {t.hero.sub}
            </p>

            {/* CTAs */}
            <div className="reveal visible reveal-delay-3 flex flex-wrap gap-3 mb-8 sm:mb-10">
              <a
                href="#projects"
                className="btn-primary"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {t.hero.cta1}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/cv/Getuar-Jakupi-CV.pdf"
                download
                className="btn-ghost"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.hero.cta2}
              </a>
            </div>

            {/* Social links */}
            <div className="reveal visible reveal-delay-4 flex items-center gap-4 flex-wrap">
              <a
                href="https://github.com/getuar04"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                getuar04
              </a>
              <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
              <a
                href="https://www.linkedin.com/in/getuar-jakupi/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm transition-all duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                getuar-jakupi
              </a>
            </div>
          </div>

          {/* RIGHT — floating card */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div
              className="absolute h-56 w-56 sm:h-72 sm:w-72 rounded-full pulse-glow"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
            />
            <div
              className="glass rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 w-full max-w-xs sm:max-w-sm float"
              style={{ boxShadow: "0 0 0 1px rgba(124,58,237,0.2), 0 30px 80px rgba(124,58,237,0.15)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="min-w-0 flex-1 pr-3">
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{t.hero.status}</p>
                  <p
                    className="font-semibold text-white text-sm sm:text-base truncate transition-opacity duration-300"
                    style={{ fontFamily: "'Syne', sans-serif", opacity: fade ? 1 : 0 }}
                  >
                    {currentProjects[currentIndex]}
                  </p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 status-dot shrink-0" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                {[
                  { val: "4+", label: "Full-Stack" },
                  { val: "5+", label: "Frontend" },
                  { val: "2026", label: "Latest" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p
                      className="text-lg sm:text-xl font-black mb-0.5 grad-text"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {stat.val}
                    </p>
                    <p className="text-[9px] sm:text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stack marquee */}
              <div
                className="overflow-hidden rounded-xl py-2.5 sm:py-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="marquee-track flex gap-3 sm:gap-4 w-max">
                  {["React", "Node.js", "MySQL", "MongoDB", "JWT", "Express", "Docker", "Tailwind",
                    "React", "Node.js", "MySQL", "MongoDB", "JWT", "Express", "Docker", "Tailwind"].map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 sm:px-3 py-1 rounded-full shrink-0"
                      style={{ background: "rgba(124,58,237,0.15)", color: "var(--accent-light)", border: "1px solid rgba(124,58,237,0.2)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on very small screens */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <div className="w-px h-10 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{
                background: "linear-gradient(to bottom, transparent, var(--accent-light))",
                animation: "scrollDown 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
