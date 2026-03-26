import { data } from "../data/resume";

const colorMap = {
  blue:   { bg: "bg-blue-500/10",    border: "border-blue-500/20",    icon: "text-blue-400" },
  purple: { bg: "bg-purple-500/10",  border: "border-purple-500/20",  icon: "text-purple-400" },
  green:  { bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0c0c10] border-t border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">02 — Skills</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-desc">Technologies I use to design, build, and deploy production web applications.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {data.skills.map((group) => {
            const c = colorMap[group.color];
            return (
              <div key={group.category} className="card p-4 hover:border-white/[0.12] transition-colors duration-200">
                <div className={`flex items-center gap-2.5 mb-3 pb-3 border-b border-white/[0.06]`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${c.bg} border ${c.border}`}>
                    <span className={c.icon}>{group.icon}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* All skills */}
        <div className="card p-4">
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2.5">All Skills at a Glance</p>
          <div className="flex flex-wrap gap-1.5">
            {data.skills.flatMap((g) => g.items).map((s) => (
              <span key={s} className="font-mono text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-1 rounded-md">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
