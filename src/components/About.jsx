import { about } from "../content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="About Me">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed" style={{ color: "var(--color-fog)" }}>
              {p}
            </p>
          ))}

          <ul className="grid sm:grid-cols-2 gap-3 pt-4">
            {about.traits.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-signal)" }} />
                <span style={{ color: "var(--color-paper)" }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-4">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border p-6"
              style={{ borderColor: "var(--color-line)", background: "var(--color-panel)" }}
            >
              <p className="font-[var(--font-display)] text-3xl font-semibold" style={{ color: "var(--color-phosphor)" }}>
                {s.value}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-fog)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
