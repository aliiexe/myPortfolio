# Portfolio Rebuild — Re-architecture Plan

## 1. Folder structure (frontend)

```
frontend/src/
  app/
    layout.tsx              # Root layout, nav, security meta
    page.tsx                # Home
    about/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    resume/page.tsx
    contact/page.tsx
    globals.css             # Design tokens, base styles
    not-found.tsx
  components/
    ui/                     # Primitives: Button, Card, Section, Container
    layout/                 # Header, Footer, Nav
    home/                   # Hero, FocusAreas, FeaturedProjects, etc.
    about/
    projects/               # ProjectCard, ProjectDetail
    contact/                # ContactForm, ContactLinks
  lib/
    content/
      index.ts              # Re-export
      projects.ts           # Single source for projects (by category)
      resume.ts             # Experience, education, certifications, etc.
      site.ts               # Site name, tagline, focus areas copy
    types/
      project.ts
      resume.ts
    utils/
      cn.ts                 # classNames helper
  styles/                   # Only if needed; prefer Tailwind
```

- **Single content source:** `lib/content/projects.ts` (and resume/site) used by Home, Projects list, and Project detail. No backend fetch for public portfolio content at build time.
- **Optional API:** If contact form is server-side, use `app/api/contact/route.ts` (or server action). No `/api/upload`.

---

## 2. Backend simplification

- **Remove:** Review model, Review routes/controller. Upload routes. Static `/uploads`.
- **Keep (optional):** MongoDB only if you need stored contact submissions or future admin. Otherwise, contact can be “server action → email only” with no DB.
- **If keeping Express for contact API:**
  - One route: `POST /api/contact` with strict schema (name, email, message; length limits).
  - Rate limiting (e.g. express-rate-limit), CORS restricted, security headers middleware, validate/sanitize input, no raw errors to client.
- **If moving to Next-only:** Use Next.js `app/api/contact/route.ts` + server action; validate with Zod; optional store (e.g. MongoDB) behind server; rate limit via middleware or Vercel.

---

## 3. Component strategy

- **UI primitives:** Container (max-width + padding), Section (padding + optional title), Button (primary/ghost), Card (for projects, focus areas). Tailwind-only or minimal CSS.
- **Layout:** Header with text links (Home, About, Projects, Resume, Contact); optional theme toggle only if implemented to a high standard. Footer with copyright + same links or minimal set.
- **Home sections in order:** Hero → Focus Areas (3 pillars) → Featured Projects → Security-first / capabilities → Experience snapshot → Skills by domain → Contact CTA.
- **Motion:** Prefer CSS transitions and `prefers-reduced-motion`. Use Framer Motion only for entrance or micro-interactions where it clearly adds value; no heavy scroll-driven animation.

---

## 4. Page strategy

| Page    | Purpose | Data source |
|---------|---------|-------------|
| Home    | First impression, focus areas, featured work, trust, contact CTA | lib/content (projects, site, resume snapshot) |
| About   | Who you are, cybersecurity + eng + design, philosophy | lib/content/site.ts + copy in page or content |
| Projects| Categorized list (Security, Development, Design) | lib/content/projects.ts |
| Projects/[slug] | Single project: problem, solution, outcome, stack, security notes | lib/content/projects.ts |
| Resume  | Experience, education, achievements, certs, CTF, communities | lib/content/resume.ts |
| Contact | Email, LinkedIn, GitHub, optional secure form | Static + optional API |

---

## 5. Validation and security middleware (backend, if used)

- **Input:** Zod (or Joi) schemas for contact; allowlist fields; trim, length limits; sanitize for display (e.g. DOMPurify if ever rendering user content).
- **NoSQL:** Never pass `req.query`/`req.body` directly into Mongoose find/update; validate and map to allowed fields only.
- **Headers:** helmet or custom: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Strict-Transport-Security (if HTTPS).
- **Rate limiting:** On POST /api/contact (and any remaining write).
- **Errors:** Log full error server-side; return generic message to client.

---

## 6. Security checklist (frontend)

- No EmailJS (or other) secrets in client; contact via server action or server API.
- No public upload; no comment/rating/profile photo.
- CSP and security headers via Next.js config or middleware.
- All links to external sites: `rel="noopener noreferrer"` where appropriate.

---

## 7. Implementation order

1. **Content and types** — Add `lib/content` and `lib/types`; define projects (with categories), resume, and site copy.
2. **Design system** — Update `globals.css` (tokens, typography, spacing); add minimal UI primitives.
3. **Layout and nav** — New Header (top nav), Footer; update root layout; remove Lenis/GSAP from layout.
4. **Home** — New Hero (cybersecurity-first tagline), Focus Areas, Featured Projects, small “security-first” block, experience snapshot, skills, contact CTA.
5. **About** — New copy and structure; optional small animation.
6. **Projects** — List by category from `lib/content`; project detail page by slug.
7. **Resume** — Single page from `lib/content/resume.ts`.
8. **Contact** — Links + optional server-side form; remove comments and upload.
9. **Backend** — Remove reviews/upload; add optional contact API with validation and rate limiting; secure headers; tighten CORS.
10. **Cleanup** — Remove unused deps (GSAP, Lenis, SplitType, emailjs-com, react-toastify if not used); remove old CSS and duplicate data; fix next.config (images, output if moving away from full static export).
11. **SEO and a11y** — Metadata, semantic HTML, focus states, reduced motion.

This plan aligns with the audit and your requirements: cybersecurity-first positioning, premium minimal UI, secure-by-default, and maintainable single-source content.
