import { useState } from "react";
import { data } from "../data/resume";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
    const [status, setStatus] = useState("idle");


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(data.formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0c0c10] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label">06 — Contact</p>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-desc">Open to full-time roles, freelance projects, and collaborations.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Info */}
          <div className="space-y-3">
            <div className="card p-5">
              <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3">Contact Details</p>
              <div className="space-y-2.5">
                {[
                  { icon: "✉", label: "Email", val: data.email, href: `mailto:${data.email}`, cls: "bg-blue-500/10 border-blue-500/20" },
                  { icon: "🐙", label: "GitHub", val: "@illavarasi1", href: data.github, cls: "bg-white/[0.05] border-white/10" },
                  { icon: "in", label: "LinkedIn", val: "Profile", href: data.linkedin, cls: "bg-blue-700/10 border-blue-700/20 text-[10px] font-bold text-blue-600" },
                ].map((ch) => (
                  <a key={ch.label} href={ch.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 text-sm transition-colors group"
                  >
                    <span className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm ${ch.cls} group-hover:bg-blue-500/20 transition-colors`}>
                      {ch.icon}
                    </span>
                    <span>{ch.label}</span>
                    <span className="ml-auto font-mono text-[10px] text-slate-500 group-hover:text-blue-400">{ch.val}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new opportunities
              </div>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Open to full-time MERN Stack Developer roles, freelance projects, and remote positions.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card p-5">
            {sent ? (
              <div className="py-10 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-white font-semibold mb-1">Message Sent!</p>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                        placeholder={f.placeholder} required
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Project / Role / Collaboration"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about the opportunity..." required rows={4}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>
                  {status === "error" && (
                  <p className="text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
                    ⚠ Something went wrong. Please try emailing directly at {data.email}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </>
                  ) : "Send Message →"}
                </button>

                <p className="text-center text-[10px] font-mono text-slate-600">
                  Powered by Formspree · Delivered to inbox
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
