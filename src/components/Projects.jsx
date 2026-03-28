import { data } from "../data/resume";

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
}

function FeatureList({ title, items, color = "blue" }) {
  const colors = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  };
  return (
    <div>
      <p
        className={`inline-block font-mono text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider mb-2 ${colors[color]}`}
      >
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-1.5 text-xs text-slate-400 leading-relaxed"
          >
            <span className="mt-1 w-1 h-1 rounded-full bg-blue-500/50 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-[#0c0c10] border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">04 — Projects</p>
        <h2 className="section-title">Work Showcase</h2>
        <p className="section-desc">
          Full-stack MERN applications built at Gowebez — from crowdfunding
          platforms to rewards management systems.
        </p>

        {/* ── Two Featured Work Projects ── */}
        <div className="space-y-5 mb-8">
          {data.featuredProjects.map((proj, idx) => (
            <div key={idx} className="card overflow-hidden border-blue-500/20">
              {/* Banner */}
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-b border-white/[0.06] px-5 py-3 flex items-center gap-2.5">
                <span className="bg-blue-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Work Project
                </span>
                <span className="text-slate-500 text-xs font-mono">
                  {proj.type}
                </span>
                <span className="ml-auto text-slate-600 text-xs font-mono">
                  {proj.company}
                </span>
              </div>

              <div className="p-5 md:p-6">
                {/* Title row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{proj.emoji}</span>
                  <h3 className="text-white font-bold text-base md:text-lg tracking-tight">
                    {proj.title}
                  </h3>
                </div>

                {/* Overview */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-2xl">
                  {proj.overview}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <FeatureList
                      title="User Module"
                      items={proj.userFeatures}
                      color="blue"
                    />
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <FeatureList
                      title="Admin Module"
                      items={proj.adminFeatures}
                      color="purple"
                    />
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                    <FeatureList
                      title="Additional Features"
                      items={proj.additional}
                      color="blue"
                    />
                  </div>
                </div>

                {/* Stack + buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {proj.stack.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-150"
                    >
                      <GithubIcon /> GitHub
                    </a>
                    <a
                      href={proj.vercel}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-150"
                    >
                      <VercelIcon /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Personal Projects Grid ── */}
        <div className="mb-4">
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">
            Personal Projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.projects.map((proj) => (
              <div
                key={proj.title}
                className="card p-4 hover:border-white/[0.12] transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-white font-semibold text-sm leading-snug">
                    {proj.title}
                  </h4>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors flex-shrink-0 font-mono text-[10px]"
                  >
                    GitHub ↗
                  </a>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-white/[0.05] flex gap-2 flex-wrap">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-[11px] font-mono px-2.5 py-1.5 rounded-lg transition-all duration-150"
                  >
                    <GithubIcon /> GitHub
                  </a>
                  <a
                    href={proj.vercel}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-[11px] font-mono px-2.5 py-1.5 rounded-lg transition-all duration-150"
                  >
                    <VercelIcon /> Live Demo
                  </a>
                </div>
                {/* <div className="border-t border-white/[0.05] pt-2.5">
                <a href={proj.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1">
                  View on GitHub ↗
                </a>
              </div> */}
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.projects.map((proj) => (
              <div key={proj.title} className="card p-4 hover:border-white/[0.14] transition-colors duration-200 flex flex-col">
                <h4 className="text-white font-semibold text-sm leading-snug mb-1.5">{proj.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="mt-auto pt-3 border-t border-white/[0.05] flex gap-2">
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-[10px] font-mono px-2 py-1.5 rounded-md transition-all flex-1 justify-center">
                    <GithubIcon /> GitHub
                  </a>
                  <a href={proj.vercel} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-[10px] font-mono px-2 py-1.5 rounded-md transition-all flex-1 justify-center">
                    <VercelIcon /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

// import { data } from "../data/resume";
// function GithubIcon() {
//   return (
//     <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
//       <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
//     </svg>
//   );
// }

// function VercelIcon() {
//   return (
//     <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M24 22.525H0l12-21.05 12 21.05z"/>
//     </svg>
//   );
// }
// export default function Projects() {
//   const fp = data.featuredProject;
//   return (
//     <section id="projects" className="py-20 bg-[#0c0c10] border-t border-white/[0.06]">
//       <div className="max-w-5xl mx-auto px-6">
//         <p className="section-label">04 — Projects</p>
//         <h2 className="section-title">Work Showcase</h2>
//         <p className="section-desc">From enterprise systems to personal side projects — all MERN stack.</p>

//         {/* Featured */}
//         <div className="card overflow-hidden border-blue-500/20 mb-4">
//           <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-b border-white/[0.06] px-5 py-3 flex items-center gap-2.5">
//             <span className="bg-blue-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider">Featured</span>
//             <span className="text-slate-500 text-xs font-mono">{fp.type}</span>
//           </div>
//           <div className="p-5">
//             <div className="flex flex-col lg:flex-row gap-6">
//               <div className="flex-1">
//                 <div className="flex items-center gap-2.5 mb-2.5">
//                   <span className="text-2xl">✈️</span>
//                   <h3 className="text-white font-bold text-base tracking-tight">{fp.title}</h3>
//                 </div>
//                 <p className="text-slate-400 text-sm leading-relaxed mb-4">{fp.overview}</p>
//                 <div className="flex flex-wrap gap-1.5">
//                   {fp.stack.map((t) => <span key={t} className="tag">{t}</span>)}
//                 </div>
//               </div>
//               <div className="lg:w-56 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 flex-shrink-0">
//                 <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2.5">Key Features</p>
//                 <ul className="space-y-1.5">
//                   {fp.highlights.map((h, i) => (
//                     <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400 leading-relaxed">
//                       <span className="mt-1 w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
//                       {h}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           {data.projects.map((proj) => (
//             <div key={proj.title} className="card p-4 hover:border-white/[0.12] transition-colors duration-200">
//               <div className="flex items-start justify-between gap-2 mb-2">
//                 <h4 className="text-white font-semibold text-sm leading-snug">{proj.title}</h4>
//                 <a href={proj.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors flex-shrink-0 font-mono text-[10px]">
//                   GitHub ↗
//                 </a>
//               </div>
//               <p className="text-slate-400 text-xs leading-relaxed mb-3">{proj.desc}</p>
//               <div className="flex flex-wrap gap-1.5 mb-3">
//                 {proj.stack.map((t) => <span key={t} className="tag">{t}</span>)}
//               </div>
//                <div className="mt-auto pt-3 border-t border-white/[0.05] flex gap-2 flex-wrap">
//                 <a
//                   href={proj.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-[11px] font-mono px-2.5 py-1.5 rounded-lg transition-all duration-150"
//                 >
//                   <GithubIcon /> GitHub
//                 </a>
//                 <a
//                   href={proj.vercel}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-[11px] font-mono px-2.5 py-1.5 rounded-lg transition-all duration-150"
//                 >
//                   <VercelIcon /> Live Demo
//                 </a>
//               </div>
//               {/* <div className="border-t border-white/[0.05] pt-2.5">
//                 <a href={proj.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1">
//                   View on GitHub ↗
//                 </a>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
