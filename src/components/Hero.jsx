import { useEffect, useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../content";
import NeuralField from "./NeuralField";
import profileImg from "../assets/profile.jpg";

function useTypedRoles(roles) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typed = useTypedRoles(profile.roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <NeuralField className="absolute inset-0 w-full h-full opacity-70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,255,178,0.06), transparent), linear-gradient(to bottom, transparent 60%, var(--color-void) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "var(--color-phosphor)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-phosphor)" }} />
            </span>
            <span className="eyebrow">{profile.availability}</span>
          </div>

          <p className="font-[var(--font-mono)] text-sm mb-3" style={{ color: "var(--color-fog)" }}>
            $ whoami
          </p>

          <h1 className="font-[var(--font-display)] font-semibold leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
            Hi, I'm {profile.name}
          </h1>

          <div className="mt-6 h-9 font-[var(--font-mono)] text-xl sm:text-2xl" style={{ color: "var(--color-signal)" }}>
            {"> "}
            {typed}
            <span className="animate-caret" style={{ color: "var(--color-phosphor)" }}>▍</span>
          </div>

          <p className="mt-8 max-w-xl text-lg" style={{ color: "var(--color-fog)" }}>
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-solid inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="btn-outline inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-14 flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn p-2 rounded-full">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn p-2 rounded-full">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn p-2 rounded-full">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Profile photo — circular frame sitting inside the neural field */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-72 h-72 xl:w-80 xl:h-80">
            {/* soft ambient glow behind the ring */}
            <div
              className="absolute -inset-6 rounded-full blur-2xl opacity-40"
              style={{ background: "radial-gradient(circle, var(--color-phosphor), transparent 70%)" }}
              aria-hidden="true"
            />
            {/* rotating dashed ring, echoes the node-graph lines */}
            <svg
              viewBox="0 0 100 100"
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-[spin_24s_linear_infinite]"
              aria-hidden="true"
            >
              <circle
                cx="50" cy="50" r="48"
                fill="none"
                stroke="var(--color-signal)"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                opacity="0.6"
              />
            </svg>
            {/* the photo itself */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden border-2"
              style={{ borderColor: "var(--color-phosphor)", background: "var(--color-panel)" }}
            >
              <img
                src={profileImg}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
