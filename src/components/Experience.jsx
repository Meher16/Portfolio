import { experience } from "../content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Career" title="Professional Experience">
      <div className="relative space-y-10">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px hidden sm:block"
          style={{ background: "var(--color-line)" }}
          aria-hidden="true"
        />
        {experience.map((e) => (
          <div key={e.role} className="relative sm:pl-10">
            <span
              className="hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full trace-dot"
              style={{ background: "var(--color-void)", border: "2px solid var(--color-phosphor)" }}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-[var(--font-display)] font-semibold text-xl">{e.role}</h3>
              <span className="eyebrow">{e.period}</span>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--color-signal)" }}>{e.org}</p>
            <ul className="space-y-2 mb-4">
              {e.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-fog)" }}>
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--color-phosphor)" }} />
                  {p}
                </li>
              ))}
            </ul>
            {e.link && (
              <a
                href={e.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm font-medium underline underline-offset-4"
                style={{ color: "var(--color-phosphor)" }}
              >
                {e.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
