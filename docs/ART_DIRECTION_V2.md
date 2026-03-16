# Visual concept V2 — Signature orange, cinematic identity

## Core idea

**One sentence:** A dark, cinematic portfolio where #FF4000 is the signature light — used as scene lighting, accent, and interactive highlight — with asymmetric editorial layout, premium typography (no stretched caps), and a motion system that feels authored, not templated.

## Signature color: #FF4000

- **Role:** Identity driver. Soul of the experience. Not decoration.
- **Use:** Scene lighting (hero glow, corner spotlight), active states, hover highlights, typography accents (key words or lines), CTAs (primary or outline), focus rings, subtle gradient blends.
- **Do not:** Flood every surface. Use with intention so it feels premium, not loud.

## Typography — non‑negotiable

- **Remove:** Stretched uppercase tagline (e.g. `uppercase tracking-[0.2em]`). It reads cheap.
- **Headlines:** Large, confident display font. Strong size contrast. No forced letterspacing.
- **Tagline/subtitle:** Sentence case or refined small caps with normal tracking. Calm, luxurious.
- **Body:** Refined, readable. Generous line-height and spacing.
- **Feel:** Editorial + technical. Luxurious, modern, calm, intentional.

## Hero — centerpiece

- **Composition:** Asymmetric. Split or offset: e.g. left — oversized name + elegant tagline + summary + CTAs; right — identity “scene” (profile + integrated pillars) with orange rim light or soft halo.
- **Orange in hero:** At least one clear moment: soft spotlight from a corner, or halo behind avatar, or gradient beam. Optional: very subtle cursor-reactive glow (performance-safe).
- **Motion:** Staggered choreography (mask/reveal or clip-path for headline, then tagline, body, CTAs, then right block). GSAP timeline for control. Sophisticated scroll cue.
- **Pillars:** Cybersecurity / Software Engineering / Design — integrated into one composed block (e.g. glass card with orange accent edge), not floating pills.

## Layout language

- **Asymmetry:** Break centered symmetry. Offset grids, varied column widths, intentional negative space.
- **Spacing:** Large section rhythm. More breathing room. Premium margins. Sections don’t feel boxed.
- **Rhythm:** Each section has its own composition and treatment; same system, different beat.
- **Depth:** Layered backgrounds, soft shadows, blur. Overlap sparingly where it adds clarity.

## Atmosphere

- **Background:** Not flat black. Subtle noise, ambient falloff, orange-accented gradient (e.g. soft glow top-right or corner). Optional very soft grid/technical pattern.
- **Lighting:** Orange used as light: radial gradients, soft halos, gradient orbs. Feels like a lit environment.
- **Materials:** Glass (blur + border) and depth (shadow). Orange as highlight on borders or glows when relevant.

## Motion system

- **Intro:** Hero uses GSAP (or Framer) timeline: sequenced reveal, possible mask/clip-path on headline.
- **Scroll:** Section reveals (not same fade-up everywhere): e.g. clip-path, opacity + y, or scale. ScrollTrigger for “storytelling”.
- **Hover:** Cards: lift, soft shadow, orange border or glow. Buttons: subtle scale or magnetic feel. Premium easing.
- **Cursor:** Optional subtle hero glow follow; keep it light and performant.
- **Avoid:** Repetitive fade-up on every block; decorative animation; jank.

## Page intent

- **Home:** Main “wow” — hero + orange-lit sections, varied rhythm, strong project tease.
- **About:** Editorial. Asymmetric image + copy. Orange accent on key line or CTA.
- **Projects:** High-end showcase. Large cards, orange hover accent, strong imagery. Detail: immersive, large media, orange accents.
- **Resume:** Elegant timeline or cards. Orange left-edge or accent. Not a list dump.
- **Contact:** Closing scene. One strong block, orange CTA. Form with orange focus.

## Nav

- Floating glass bar. Active state = orange (underline or pill #FF4000). Hover: smooth transition. Part of the identity.

## Constraints (hard)

1. **#FF4000** is the signature accent. Visible and intentional; not everywhere.
2. **No stretched uppercase** subtitle/tagline.
3. **More spacing** — layout breathes; premium rhythm.
4. **No generic formula** — not just “dark + card + glow”. Each section has authorship.
5. **Hero has a real concept** — split, orange light, choreography, integrated pillars.
6. **Motion is advanced** — timelines, scroll-linked reveals, hover depth; not only fade-up.
7. **All pages feel custom** — distinct but unified.

## Security & content

- Cybersecurity-first positioning unchanged.
- All security measures (validation, sanitization, headers, safe forms) unchanged.
