export default function Section({ id, index, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`py-24 border-t ${className}`} style={{ borderColor: "var(--color-line)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:pl-24">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-[var(--font-mono)] text-sm" style={{ color: "var(--color-phosphor-dim)" }}>
            {index}
          </span>
          <div>
            <p className="eyebrow mb-1">{eyebrow}</p>
            <h2 className="font-[var(--font-display)] font-semibold text-3xl sm:text-4xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
