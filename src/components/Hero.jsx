import { data } from "../data/resume";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 70% 50% at 50% -10%, rgba(79,110,247,0.13), transparent)"}} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",backgroundSize:"48px 48px"}} />

      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 w-full">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-3">
          {data.name}<span className="text-blue-500">.</span>
        </h1>

        {/* Role */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-7 bg-blue-500" />
          <p className="font-mono text-xs text-blue-500 tracking-widest uppercase">{data.title}</p>
        </div>

        {/* Short description */}
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md mb-8">
          Building full-stack web apps with{" "}
          <strong className="text-indigo-300">React</strong>,{" "}
          <strong className="text-indigo-300">Node.js</strong> &{" "}
          <strong className="text-indigo-300">MongoDB</strong> — from responsive UIs to secure REST APIs. Based in Chennai, India.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Contact Me — primary */}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-slate-300 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            View Projects
          </button>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-slate-300 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
