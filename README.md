# Meher Vivek Hiwase — Portfolio

A React + Vite + Tailwind CSS v4 rebuild of the portfolio, previously hosted on Lovable.

## Stack
- React 19
- Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- lucide-react (icons)

## Run locally
```bash
npm install
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview   # sanity-check the production build
```
The static output lands in `dist/` — deployable to Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

## Editing content
Everything text-based (name, roles, about, education, experience, skills, services, projects, contact links) lives in one place: `src/content.js`. Edit that file and the whole site updates — no need to touch components for copy changes.

## Structure
```
src/
  content.js          # all site copy/data
  index.css           # design tokens (colors, fonts) + global styles
  App.jsx             # assembles the page
  components/
    Header.jsx         # sticky nav
    TraceRail.jsx       # left-side scroll-progress rail (desktop)
    Hero.jsx            # hero with typed-role effect + neural canvas
    NeuralField.jsx      # animated node-graph canvas background
    About.jsx
    Education.jsx
    Experience.jsx
    Skills.jsx           # animated skill readout bars
    Services.jsx
    Projects.jsx
    Contact.jsx          # contact info + mailto-based message form
    Footer.jsx
    BrandIcons.jsx        # GitHub/LinkedIn glyphs (not in current lucide-react)
```

## Notes
- The contact form sends messages via EmailJS directly to your inbox — credentials live in `src/content.js` under `emailjsConfig`. Make sure your EmailJS template (`template_qyvuntt`) uses the variable names `from_name`, `from_email`, `message`, and `reply_to` — rename them in `Contact.jsx` if your template uses different placeholders.
- Update the resume link, offer-letter link, and social URLs in `src/content.js` if they ever change.
