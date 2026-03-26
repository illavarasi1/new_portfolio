import { data } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <span className="font-mono text-xs text-slate-500">&lt;illavarasi /&gt;</span>
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {data.name} · Built with React & Tailwind CSS
        </p>
        <a href={data.github} target="_blank" rel="noreferrer"
          className="font-mono text-xs text-slate-500 hover:text-blue-400 transition-colors">
          github.com/illavarasi1 ↗
        </a>
      </div>
    </footer>
  );
}
