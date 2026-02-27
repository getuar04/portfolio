import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="btn primary"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 14,
        bottom: 84,

        zIndex: 999,
        borderRadius: 999,
        padding: "12px 14px",
      }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}
