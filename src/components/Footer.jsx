import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="wrap flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <p>
          © {new Date().getFullYear()} Getuar Jakupi. {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 h-11 w-11 rounded-full flex items-center justify-center z-40 transition-all duration-300"
      style={{
        background: "var(--accent)",
        boxShadow: "0 8px 30px var(--accent-glow)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(10px) scale(0.8)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
