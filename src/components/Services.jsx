import { Palette, LayoutGrid, Code2 } from "lucide-react";
import { services } from "../content";
import Section from "./Section";

const icons = [Palette, LayoutGrid, Code2];

export default function Services() {
  return (
    <Section id="services" index="05" eyebrow="What I Offer" title="Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.title}
              className="surface-card group rounded-lg border p-7"
              style={{ borderColor: "var(--color-line)", background: "var(--color-panel)" }}
            >
              <div
                className="w-11 h-11 rounded-md flex items-center justify-center mb-5"
                style={{ background: "rgba(124,255,178,0.1)" }}
              >
                <Icon size={20} style={{ color: "var(--color-phosphor)" }} />
              </div>
              <h3 className="font-[var(--font-display)] font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm" style={{ color: "var(--color-fog)" }}>{s.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
