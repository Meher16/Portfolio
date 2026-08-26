import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" index="06" eyebrow="Selected Work" title="My Projects">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="surface-card rounded-lg border p-7 flex flex-col"
            style={{ borderColor: "var(--color-line)", background: "var(--color-panel)" }}
          >
            <h3 className="font-[var(--font-display)] font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-sm mb-5 flex-1" style={{ color: "var(--color-fog)" }}>{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-[var(--font-mono)] text-xs px-2.5 py-1 rounded-full border"
                  style={{ borderColor: "var(--color-line)", color: "var(--color-signal)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 text-sm font-medium">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5"
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5"
                  style={{ color: "var(--color-fog)" }}
                >
                  <GithubIcon size={14} /> Code
                </a>
              )}
            </div>
          </div>
        ))}

        <div
          className="rounded-lg border border-dashed p-7 flex flex-col items-center justify-center text-center"
          style={{ borderColor: "var(--color-line)" }}
        >
          <p className="font-[var(--font-display)] font-medium">More projects coming soon</p>
          <p className="text-sm mt-1" style={{ color: "var(--color-fog)" }}>Always building. Stay tuned.</p>
        </div>
      </div>
    </Section>
  );
}
