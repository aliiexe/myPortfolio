# Rebuild Summary — Ali Bourak Portfolio

## What was done

### 1. Audit & plan
- **docs/AUDIT.md** — Full audit of structure, security, performance, and maintainability.
- **docs/REBUILD_PLAN.md** — Re-architecture: folder structure, content strategy, security, and implementation order.

### 2. Content & data
- **Single source of truth:** All portfolio content lives in `frontend/src/lib/content/`:
  - `site.ts` — Name, tagline, hero, focus areas, about, skills, contact links, CV URL.
  - `projects.ts` — All projects with slug, category (cybersecurity | development | design), summary, description, tech, links, images. No raw HTML; safe paragraphs only.
  - `resume.ts` — Experience, education, certifications, competitions, communities.
- **Types** in `lib/types/` for Project and Resume.
- Projects are referenced by **slug** (e.g. `/projects/cre8-ma`). Old numeric IDs are gone.

### 3. Branding & IA (cybersecurity-first)
- **Hero:** "Cybersecurity, Software Engineering & Design" and a short security-focused summary.
- **Focus areas:** Three pillars — Cybersecurity, Software Engineering, Design — with one-line descriptions.
- **Home order:** Hero → Focus areas → Featured work → Security-first mindset → Experience snapshot → Skills by domain → Contact CTA.
- **About:** Repositioned around security-first builder, then engineering and design.
- **Projects:** Grouped by category (Cybersecurity, Software Development, Design). Each project has summary, description paragraphs, optional problem/solution/outcome and security notes.
- **Resume:** One page (experience, education, certifications, competitions, communities). `/experiences` redirects to `/resume`.
- **Contact:** Email, LinkedIn, GitHub, X. Optional minimal contact form (no comments, no ratings, no uploads).

### 4. Design system & UI
- **globals.css:** Design tokens (off-black, off-white, muted greys, accent blue), spacing scale, motion variables, reduced-motion support.
- **Typography:** Inter via `next/font`.
- **Components:**
  - `components/ui/` — Container, Section, Button, Card.
  - `components/layout/` — Header (top nav: Home, About, Projects, Resume, Contact), Footer.
  - `components/home/` — Hero, FocusAreas, FeaturedProjects, SecurityFirst, ExperienceSnapshot, SkillsByDomain, ContactCTA.
  - `components/contact/` — ContactForm (honeypot, client-side validation, POST to `/api/contact`).
- No GSAP, Lenis, or SplitType. Motion is CSS and minimal.

### 5. Frontend security
- **Contact:** Form submits to **Next.js API route** `POST /api/contact` with:
  - Zod schema (name, email, message; length limits; honeypot field).
  - In-memory rate limit (5 per IP per 15 min). For production, consider Redis/Vercel KV.
  - No secrets in client; email sending can be added server-side via env (e.g. Resend).
- **Next.js config:** Security headers (X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options, Content-Security-Policy).
- **Static export removed** so `/api/contact` works (deploy with `next start` or Vercel).
- **Removed:** Comments, ratings, profile photo upload, `/api/upload` route.

### 6. Backend (Express) simplification
- **Removed:** Reviews (model, routes, controller), Upload routes, User model. No more public comments or file uploads.
- **Kept:** Read-only GET for `/projects` and `/experiences` (for optional future or external use). No POST/PUT/DELETE.
- **Hardening:** CORS restricted to known origins; security headers; generic error messages (no `err.message` to client); body size limit.

### 7. Cleanup
- Removed old components (Hero, About, TechStack, Services, ProjectComponent, Contact, Header, Footer, LenisProvider, SmoothScroll) and their CSS.
- Removed `projects/[id]` in favor of `projects/[slug]`.
- Removed dependencies: GSAP, Lenis, SplitType, emailjs-com, react-toastify, react-icons, resize-observer-polyfill, @fontsource/schoolbell, framer-motion.
- Added: clsx, tailwind-merge, zod.

---

## How to run

- **Frontend:** `cd frontend && npm install && npm run dev`. Open http://localhost:3000.
- **Backend (optional):** Only needed if you use the projects/experiences API. `cd backend && npm install && node server.js` (set `MONGO_URI` in `.env`). The new site does **not** fetch projects or experiences from the backend; content is in `lib/content`.

---

## What you may want to do next

1. **Contact form → email:** In `frontend/src/app/api/contact/route.ts`, add sending via Resend/SendGrid/Nodemailer using env vars (e.g. `RESEND_API_KEY`, `CONTACT_TO`).
2. **Profile & project images:** Replace `/images/me2.png`, `/images/me.png`, and project images in `public/images/` as needed; layout and aspect ratios are set so swapping is easy.
3. **Resume content:** Edit `lib/content/resume.ts` (experience, education, certifications, CTF, communities).
4. **Add cybersecurity projects:** In `lib/content/projects.ts`, add entries with `category: "cybersecurity"` and optional `securityNotes`.
5. **CSP:** If you use stricter CSP, you may need to allow Next.js chunks; adjust `next.config.ts` headers as needed.

---

## File map (new / changed)

| Area        | Path |
|------------|------|
| Audit      | `docs/AUDIT.md`, `docs/REBUILD_PLAN.md`, `docs/REBUILD_SUMMARY.md` |
| Content    | `frontend/src/lib/content/*.ts`, `frontend/src/lib/types/*.ts` |
| Design     | `frontend/src/app/globals.css` |
| UI         | `frontend/src/components/ui/*.tsx`, `frontend/src/components/layout/*.tsx` |
| Home       | `frontend/src/components/home/*.tsx`, `frontend/src/app/page.tsx` |
| Pages      | `frontend/src/app/about/page.tsx`, `frontend/src/app/projects/page.tsx`, `frontend/src/app/projects/[slug]/page.tsx`, `frontend/src/app/resume/page.tsx`, `frontend/src/app/contact/page.tsx`, `frontend/src/app/experiences/page.tsx` (redirect) |
| API        | `frontend/src/app/api/contact/route.ts` |
| Contact form | `frontend/src/components/contact/ContactForm.tsx` |
| Backend    | `backend/server.js`, `backend/routes/*.js`, `backend/controllers/*.js` (reviews/upload removed) |
