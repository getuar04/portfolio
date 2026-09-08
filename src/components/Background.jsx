// Global fixed technical background — a subtle grid + very slow-drifting glow
// orbs, rendered once behind the entire site. Pure CSS animation (no scroll
// listeners), theme-aware, and frozen under prefers-reduced-motion via the
// global rule in globals.css.
export default function Background() {
  return (
    <div className="fixed inset-0 grid-bg overflow-hidden pointer-events-none" style={{ zIndex: -1 }} aria-hidden="true">
      <div className="absolute top-[-15%] left-[-10%] h-[520px] w-[520px] rounded-full bg-orb-drift-a" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-orb-drift-b" />
      <div className="absolute top-[35%] left-[55%] h-[360px] w-[360px] rounded-full bg-orb-drift-c" />
    </div>
  );
}
