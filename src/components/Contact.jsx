import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, emailjsConfig } from "../content";
import Section from "./Section";

const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "meher-hiwase", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "Meher16", href: profile.github },
  { icon: MapPin, label: "Location", value: profile.location, href: "https://maps.google.com/?q=Nagpur,Maharashtra" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Sends the message straight to your inbox via EmailJS — no backend
  // needed. The template variables below (from_name, from_email,
  // message) must match the variable names used inside your EmailJS
  // template (template_qyvuntt). Adjust the keys here if your template
  // uses different placeholder names.
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: emailjsConfig.publicKey }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  return (
    <Section id="contact" index="07" eyebrow="Get in Touch" title="Let's Connect">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="surface-card flex items-center gap-4 rounded-lg border p-4"
              style={{ borderColor: "var(--color-line)", background: "var(--color-panel)" }}
            >
              <span className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: "rgba(91,140,255,0.12)" }}>
                <it.icon size={17} style={{ color: "var(--color-signal)" }} />
              </span>
              <span>
                <span className="block text-xs" style={{ color: "var(--color-fog)" }}>{it.label}</span>
                <span className="block text-sm font-medium">{it.value}</span>
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm mb-2" style={{ color: "var(--color-fog)" }}>
            I'd love to hear about your project or opportunity.
          </p>
          {[
            { key: "name", label: "Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.key}>
              <label htmlFor={f.key} className="eyebrow block mb-2">{f.label}</label>
              <input
                id={f.key}
                type={f.type}
                required
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full rounded-md border px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--color-phosphor)] transition-colors"
                style={{ borderColor: "var(--color-line)" }}
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="eyebrow block mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--color-phosphor)] resize-none transition-colors"
              style={{ borderColor: "var(--color-line)" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-solid inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                Sending <Loader2 size={15} className="animate-spin" />
              </>
            ) : (
              <>
                Send Message <Send size={15} />
              </>
            )}
          </button>

          {status === "sent" && (
            <p className="flex items-center gap-2 text-sm" style={{ color: "var(--color-phosphor)" }}>
              <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm" style={{ color: "#ff6b6b" }}>
              <XCircle size={16} /> Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
