export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-main flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Getuar Jakupi. All rights reserved.</p>
        <p>Built with React and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
