import { data } from "../data/resume";

export default function Projects() {
  const fp = data.featuredProject;
  return (
    <section id="projects" className="py-20 bg-[#0c0c10] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">04 — Projects</p>
        <h2 className="section-title">Work Showcase</h2>
        <p className="section-desc">From enterprise systems to personal side projects — all MERN stack.</p>

        {/* Featured */}
        <div className="card overflow-hidden border-blue-500/20 mb-4">
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-b border-white/[0.06] px-5 py-3 flex items-center gap-2.5">
            <span className="bg-blue-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">Featured</span>
            <span className="text-slate-500 text-xs font-mono">{fp.type}</span>
          </div>
          <div className="p-5">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-2xl">✈️</span>
                  <h3 className="text-white font-bold text-base tracking-tight">{fp.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{fp.overview}</p>
                <div className="flex flex-wrap gap-1.5">
                  {fp.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="lg:w-56 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 flex-shrink-0">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2.5">Key Features</p>
                <ul className="space-y-1.5">
                  {fp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400 leading-relaxed">
                      <span className="mt-1 w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.projects.map((proj) => (
            <div key={proj.title} className="card p-4 hover:border-white/[0.12] transition-colors duration-200">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-white font-semibold text-sm leading-snug">{proj.title}</h4>
                <a href={proj.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors flex-shrink-0 font-mono text-[10px]">
                  GitHub ↗
                </a>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {proj.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="border-t border-white/[0.05] pt-2.5">
                <a href={proj.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                  View on GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
