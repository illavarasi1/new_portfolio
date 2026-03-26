import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f13]/95 backdrop-blur-md border-b border-white/[0.07]"
          : "bg-[#0f0f13]/80 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="font-mono text-sm text-blue-500 font-medium tracking-wide">
          &lt;illavarasi /&gt;
        </span>

        {/* Desktop nav links — hidden on mobile (md:flex) */}
        <div className="hidden md:flex items-center gap-1">
          {links.slice(0, -1).map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 transition-all duration-150"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="ml-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md transition-all duration-150"
          >
            Contact Me
          </button>
        </div>

        {/* Hamburger — visible only on mobile (md:hidden) */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-400 rounded transition-all duration-200 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-400 rounded transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-400 rounded transition-all duration-200 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown — shown only when menuOpen */}
      {menuOpen && (
        <div className="md:hidden bg-[#13131c] border-t border-white/[0.06] px-5 py-3 flex flex-col gap-1">
          {links.slice(0, -1).map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-sm text-slate-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-150 border-b border-white/[0.04] last:border-none"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="text-left text-sm font-semibold text-blue-400 px-3 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 mt-1 hover:bg-blue-500/20 transition-all duration-150"
          >
            Contact Me →
          </button>
        </div>
      )}
    </nav>
  );
}
