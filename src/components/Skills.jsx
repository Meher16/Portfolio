import { useEffect, useRef, useState } from "react";
import { skills } from "../content";
import Section from "./Section";

const groups = Object.keys(skills);

// Radial "readout" gauge instead of a plain progress bar — reads like
// a diagnostics dial rather than a generic skill list.
function SkillGauge({ name, level, visible, delay }) {
  const size = 88;
  const stroke = 5;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setGrown(false);
    const t = setTimeout(() => setGrown(true), 30 + delay);
    return () => clearTimeout(t);
  }, [visible, delay, level]);

  const offset = circumference - (grown ? level / 100 : 0) * circumference;

  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--color-phosphor)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: `stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[var(--font-mono)] text-sm" style={{ color: "var(--color-signal)" }}>
            {level}
          </span>
        </div>
      </div>
      <span className="text-sm leading-tight">{name}</span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(groups[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="skills" index="04" eyebrow="Capabilities" title="Technical Skills">
      <div
        ref={ref}
        className="rounded-lg border overflow-hidden"
        style={{ borderColor: "var(--color-line)", background: "var(--color-panel)" }}
      >
        {/* terminal-style header bar */}
        <div
          className="flex items-center gap-2 px-5 py-3 border-b"
          style={{ borderColor: "var(--color-line)" }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff6b6b" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffd166" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-phosphor)" }} />
          <span className="ml-3 font-[var(--font-mono)] text-xs" style={{ color: "var(--color-fog)" }}>
            skills.sh — scanning proficiency
          </span>
        </div>

        {/* category tabs */}
        <div
          className="flex flex-wrap gap-2 px-5 py-4 border-b"
          style={{ borderColor: "var(--color-line)" }}
        >
          {groups.map((g) => {
            const isActive = active === g;
            return (
              <button
                key={g}
                onClick={() => setActive(g)}
                className="font-[var(--font-mono)] text-xs px-3 py-1.5 rounded-full border transition-colors hover:text-[var(--color-paper)]"
                style={{
                  borderColor: isActive ? "var(--color-phosphor)" : "var(--color-line)",
                  color: isActive ? "var(--color-phosphor)" : "var(--color-fog)",
                  background: isActive ? "rgba(124,255,178,0.08)" : "transparent",
                }}
              >
                {g}
              </button>
            );
          })}
        </div>

        {/* gauges for the active category */}
        <div className="px-5 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {skills[active].map((s, i) => (
              <SkillGauge key={s.name} {...s} visible={visible} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
