# Portfolio Rebuild — Full Audit

## 1. Current structure

### Frontend (Next.js 15, React 19, Tailwind 4)
- **Output:** `output: "export"` — static export; no SSR/SSG for data.
- **Pages:** Home, About, Contact, Projects, Projects/[id], Experiences (placeholder).
- **Key components:** Header, Hero, About, TechStack, Services, ProjectComponent, Contact (two variants: home slice vs contact page), Footer (imported in layout via ContactPage on home), LenisProvider, SmoothScroll.
- **Data:** Projects duplicated in three places (ProjectComponent, projects/page, projects/[id]/page). No shared content layer. Experiences page does not consume backend; backend has Experience CRUD.
- **Styling:** Mix of Tailwind and component-level CSS files (Hero.css, Header.css, Services.css, etc.); dark theme (#0a0a0a, #ededed), Poppins + Big Shoulders Display.
- **Motion:** GSAP + ScrollTrigger everywhere, Lenis smooth scroll, Framer Motion on contact page only. Heavy blur/translate animations on load and scroll; requestAnimationFrame tickers for tech marquee.
- **Contact:** Contact page uses EmailJS client-side (public key hardcoded), plus separate “comments” section: fetch reviews from backend, submit comment (name, email, message, rating, optional profile photo). Photo upload via Next.js `/api/upload` → saves to `public/upload`, then filename sent to backend review. Comment list renders user content (name, content) and avatar from `/upload/${c.image}`.

### Backend (Express 5, Mongoose, MongoDB)
- **Routes:** `/projects` (full CRUD), `/experiences` (full CRUD), `/reviews` (create, list all, list approved, PATCH status, DELETE), `/api/upload` (multer, single file to `uploads/`), `/uploads` static.
- **Auth:** None. All write operations (POST/PUT/PATCH/DELETE) are unauthenticated.
- **Validation:** Mongoose schema only. No request-body validation lib (e.g. Joi/Zod). Review controller expects `rating` but Review schema has no `rating` field. No input length limits, sanitization, or allowlisting.
- **CORS:** `app.use(cors())` — open to all origins. Stricter config exists but commented out.
- **Errors:** Raw `err.message` and `details: err.message` returned to client (information disclosure).
- **File upload (backend):** Multer with `Date.now()-${file.originalname}`; no extension allowlist, no MIME check, no size limit. Frontend contact flow uses Next.js `/api/upload`, not this route (so backend upload is effectively unused or legacy).

### Frontend API route (Next.js)
- **`/api/upload`:** Accepts multipart file, writes to `public/upload` with `Date.now()-${file.name}`. No extension allowlist, no size limit, no MIME check. Serves profile photos for comments.

---

## 2. What to keep

- **Next.js + TypeScript + Tailwind** as the base.
- **Project and experience content** (curated list); move to single source of truth (e.g. `lib/content` or data files), not backend CRUD for public content.
- **Contact intent:** “Get in touch” (email, LinkedIn, GitHub) and optional **secure** contact form (server-side only, no EmailJS key in client).
- **Core pages:** Home, About, Projects, Resume (replace/merge Experiences), Contact.
- **Responsive layout**, semantic HTML, and accessibility goals.

---

## 3. What to rewrite

- **Branding and IA:** Hero, About, Services, TechStack, and copy — reposition to cybersecurity first, then software engineering, then design.
- **Layout and navigation:** Simple top nav (Home, About, Projects, Resume, Contact); remove icon-only nav if it harms clarity; add Footer where appropriate.
- **Design system:** New palette (off-black, off-white, muted greys, one accent e.g. cool blue/steel), typography scale, spacing, and reusable components. Remove scattered CSS files in favor of Tailwind + minimal global/component CSS.
- **Home flow:** Hero → Focus areas (Security, Engineering, Design) → Featured projects → Security-first / capabilities → Experience snapshot → Skills by domain → Contact CTA.
- **Projects:** Categorize by Cybersecurity, Software Development, Design; single content source; project cards/detail with category, role, stack, security notes where relevant.
- **Resume/Experience:** One clear experience + education + achievements + certifications/CTF/communities page (replace “Experiences” placeholder).
- **Contact:** Single, minimal contact section: email, LinkedIn, GitHub, optional secure form (no comments, no ratings, no profile photo upload).
- **Motion:** Replace heavy GSAP/Lenis with subtle, purposeful motion (e.g. Framer Motion only where it adds value); remove infinite tickers and heavy blur timelines to improve performance and “premium” feel.

---

## 4. What to delete

- **Backend:** Review model, Review routes, Review controller. Upload route and `/uploads` static (no public comment/photo upload).
- **Frontend:** Comments section, comment form, rating, profile photo upload; `/api/upload` route. Home “Contact” slice that duplicates two forms (contact + comment). Lenis (optional: replace with native smooth scroll or very light scroll behavior). GSAP + ScrollTrigger (replace with CSS + minimal Framer Motion). SplitType dependency. Unused or redundant CSS files after redesign.
- **Experiences page** as “under construction” — replace with full Resume/Experience page.

---

## 5. Performance issues

- **Large JS bundles:** GSAP, ScrollTrigger, Lenis, SplitType, multiple animation timelines and RAF loops.
- **Duplicate project data:** Three copies of the same project array increase bundle and maintenance cost.
- **Images:** `next.config` has `images: { unoptimized: true }` and `output: "export"` — no Image Optimization API; ensure at least build-time optimization and sensible sizes.
- **Fonts:** Poppins via @fontsource; add next/font for better loading if staying with Next.

---

## 6. Security issues

| Area | Issue | Action |
|------|--------|--------|
| CORS | `cors()` allows all origins | Restrict to known frontend origin(s). |
| Reviews | Public POST/PATCH/DELETE, no auth | Remove review feature. |
| Upload | No extension/MIME/size checks; user-controlled filename | Remove public upload. |
| Contact | EmailJS key in client | Prefer server-side contact (API or server action); no secrets in client. |
| API errors | `details: err.message` and raw DB errors to client | Generic messages to client; log details server-side only. |
| Projects/Experiences | `req.body` passed directly to Mongoose | If keeping any write API: validate/sanitize; allowlist fields; no arbitrary operators from client. |
| No rate limiting | All endpoints open to abuse | Add rate limiting on contact (and any remaining write) endpoints. |
| No security headers | Missing CSP, X-Content-Type-Options, etc. | Add secure headers middleware. |
| Review schema | Controller uses `rating`, schema does not define it | N/A after removal. |

---

## 7. Maintainability issues

- **Triple duplication of projects** across `ProjectComponent`, `projects/page`, and `projects/[id]/page`.
- **Mixed JS/TS:** Backend is plain JS; frontend is TS. Prefer TS and shared types where possible.
- **No shared types** between frontend and backend for projects/experiences.
- **Scattered copy:** No single place for tagline, focus areas, or about text; hard to rebrand consistently.

---

## 8. Summary

- **Keep:** Next.js, TypeScript, Tailwind, core page list (Home, About, Projects, Resume, Contact), curated project/experience content (moved to single source), contact intent (links + optional secure form).
- **Rewrite:** Branding, IA, design system, all copy, layout, motion strategy, and contact flow.
- **Delete:** Reviews, comments, ratings, profile photo upload, backend upload route, frontend `/api/upload`, Lenis, GSAP/SplitType (replace with lighter motion), duplicate project data and “under construction” Experiences page.
- **Harden:** CORS, validation/sanitization for any remaining API, rate limiting, secure headers, safe error handling, no secrets in client.

Next: **REBUILD_PLAN.md** for architecture, folder structure, and implementation order.
