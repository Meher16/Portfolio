import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, nav } from "../content";

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--color-line)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14 lg:pl-24 flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-[var(--font-display)] font-semibold text-lg">{profile.name}</p>
          <p className="eyebrow mt-1">AI • Design • Web Development</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="nav-link">{n.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
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
      <p className="text-center text-xs pb-8" style={{ color: "var(--color-fog)" }}>
        © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
