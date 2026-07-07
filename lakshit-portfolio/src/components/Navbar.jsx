import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme, ACCENTS } from "../context/ThemeContext";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme, accent, setAccent } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-surface/70 backdrop-blur-xl border border-line shadow-[0_8px_30px_-12px_rgb(0_0_0/0.4)] py-2.5 px-6"
            : "py-1"
        }`}
      >

   <a href="#top" className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink flex items-center gap-2 group">
  <span><img src="logo.png" alt="Logo" className="h-10 w-auto" /></span>
  <span className="relative flex h-2 w-2">

  </span>
</a>
    
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <div className="hidden sm:flex items-center gap-1.5 bg-surface2/80 border border-line rounded-full px-2 py-1.5">
            {ACCENTS.map((a) => (
              <button
                key={a.id}
                aria-label={`Switch accent to ${a.label}`}
                onClick={() => setAccent(a.id)}
                className={`w-4 h-4 rounded-full transition-transform duration-200 ${
                  accent === a.id
                    ? "scale-110 ring-2 ring-offset-2 ring-offset-surface2 ring-ink/40"
                    : "hover:scale-110 opacity-70"
                }`}
                style={{ backgroundColor: a.swatch }}
              />
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line bg-surface2/80 text-ink hover:border-accent/60 hover:text-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

         
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-line bg-surface2/80"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden mx-4 mt-2 bg-surface/95 backdrop-blur-xl border border-line rounded-2xl p-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted hover:text-ink py-2.5 px-2 rounded-lg hover:bg-surface2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1.5 pt-2 mt-2 border-t border-line px-2">
            {ACCENTS.map((a) => (
              <button
                key={a.id}
                onClick={() => setAccent(a.id)}
                className={`w-5 h-5 rounded-full ${
                  accent === a.id ? "ring-2 ring-ink/40" : "opacity-70"
                }`}
                style={{ backgroundColor: a.swatch }}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
