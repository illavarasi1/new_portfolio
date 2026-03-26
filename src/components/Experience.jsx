import { data } from "../data/resume";

export default function Experience() {
  const exp = data.experience[0];
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">03 — Experience</p>
        <h2 className="section-title">Work History</h2>

        <div className="card overflow-hidden mt-6">
          {/* Header */}
          <div className="bg-[#13131c] border-b border-white/[0.06] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/20 border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
                🏢
              </div>
              <div>
                <h3 className="text-white font-bold text-base">{exp.role}</h3>
                <p className="text-blue-400 font-mono text-xs mt-0.5">{exp.company}</p>
                <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs px-3 py-1.5 rounded-lg">
                {exp.period}
              </span>
              <p className="text-slate-500 text-xs mt-1.5">{exp.duration}</p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="p-5">
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">Responsibilities</p>
            <ul className="space-y-2.5">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="border-t border-white/[0.06] px-5 pb-5 pt-4">
            <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2.5">Tech Used</p>
            <div className="flex flex-wrap gap-1.5">
              {["React.js","Redux","Node.js","Express.js","MongoDB","JWT","Tailwind CSS","Git","Postman"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
