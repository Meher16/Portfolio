import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Track which section is currently in view so the matching
  // nav link can be highlighted in the light accent color.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b" style={{ borderColor: "var(--color-line)", background: "rgba(10,13,16,0.85)", backdropFilter: "blur(10px)" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-[var(--font-display)] font-semibold text-lg tracking-tight">
          {profile.name.split(" ")[0]}
          <span style={{ color: "var(--color-fog)" }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="nav-link eyebrow font-normal normal-case tracking-normal text-[13px]"
                >
                  {n.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="btn-solid hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"
        >
          Hire Me
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4" style={{ borderColor: "var(--color-line)" }}>
          <ul className="flex flex-col gap-4">
            {nav.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className="nav-link text-sm"
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
