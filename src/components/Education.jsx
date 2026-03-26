import { data } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">05 — Education</p>
        <h2 className="section-title">Academic Background</h2>

        <div className="space-y-3 mt-6">
          {data.education.map((edu, i) => (
            <div key={i} className="card p-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:border-white/[0.12] transition-colors duration-200">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl flex-shrink-0">
                {i === 0 ? "🎓" : "📚"}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">{edu.degree}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{edu.school}</p>
                <p className="text-slate-500 text-xs mt-0.5 font-mono">{edu.university}</p>
              </div>
              <span className="self-start sm:self-center inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs px-3 py-1.5 rounded-lg flex-shrink-0">
                {edu.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
