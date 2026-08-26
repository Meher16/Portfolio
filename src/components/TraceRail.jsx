import { useEffect, useState } from "react";
import { nav } from "../content";

export default function TraceRail() {
  const [active, setActive] = useState("home");

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
    <nav
      aria-label="Section progress"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
    >
      <div className="relative flex flex-col gap-7">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "var(--color-line)" }}
          aria-hidden="true"
        />
        {nav.map((n) => {
          const isActive = active === n.id;
          return (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="group relative flex items-center"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`relative z-10 block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 trace-dot animate-pulse-node"
                    : "w-1.5 h-1.5 group-hover:w-2 group-hover:h-2"
                }`}
                style={{
                  background: isActive ? "var(--color-phosphor)" : "var(--color-fog)",
                }}
              />
              <span
                className="eyebrow absolute left-5 whitespace-nowrap opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"
              >
                {n.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
