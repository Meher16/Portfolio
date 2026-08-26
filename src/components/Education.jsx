import { education } from "../content";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index="02" eyebrow="Academic Journey" title="Education">
      <div className="space-y-6">
        {education.map((e) => (
          <div
            key={e.degree}
            className="surface-card rounded-lg border p-8"
            style={{ borderColor: "var(--color-line)", background: "var(--color-panel)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-[var(--font-display)] font-semibold text-xl">{e.degree}</h3>
                <p className="text-sm mt-1" style={{ color: "var(--color-signal)" }}>{e.org}</p>
              </div>
              <span className="eyebrow shrink-0">{e.period}</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {e.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-fog)" }}>
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-phosphor)" }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
