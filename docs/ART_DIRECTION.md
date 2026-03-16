# Art direction — Premium, cinematic portfolio

## Why the current rebuild feels generic

- **No atmosphere:** Solid black background with no depth, gradient, or ambient motion. Feels like a blank canvas.
- **Hero is a form:** Small avatar + text block + two buttons. No composition, no drama, no entrance choreography. Reads like a dashboard header.
- **Flat hierarchy:** One font (Inter), modest scale, no editorial contrast. Typography doesn’t command attention.
- **Sections are stacked blocks:** Same card style and spacing everywhere. No rhythm change, no “scene” per section.
- **No motion language:** Static load. No staggered reveals, scroll-linked motion, or hover personality.
- **Nav is utilitarian:** Sticky bar with text links. No glass, float, or scroll behavior.
- **Cards are default:** Border + padding. No depth, lift, or tilt on hover.
- **Safe, template-like:** Could be any SaaS or agency. No signature moments or memorable identity.

## Target: award-level, dark luxury

**Concept:** Dark, cinematic, technical-but-warm. One strong hero “scene,” then sections with distinct rhythm. Motion is fluid and intentional. Glass and glow used sparingly. Identity = cybersecurity-first builder with premium craft.

**Pillars:**
- **Awwwards-style impact** — Hero as centerpiece; sections that feel designed, not stacked.
- **Apple-level polish** — Restraint in color and effect; every animation has a reason.
- **Strong identity** — Recognizable hero, nav, and section treatments; not interchangeable with other portfolios.

## Visual system

- **Background:** Layered. Base dark (#08080a). Subtle radial gradient “light” (soft blue/grey). Optional very subtle noise. Optional soft grid or scanline used minimally. No neon, no matrix.
- **Surfaces:** Glass (backdrop-blur + border + low opacity) for nav and key cards. Solid elevated surfaces where needed. Subtle inner glow or border glow only as accent.
- **Typography:** Display font (Syne) for hero and major headings; Inter for body. Large scale on hero (clamp 3rem–7rem for name). Clear hierarchy and spacing.
- **Accent:** Cool blue/steel, used for links, focus rings, and small highlights—not large fills. Optional very subtle spotlight/cursor-follow in hero only.
- **Depth:** Layering via z-index, blur, and parallax. Cards with hover lift (translateY + shadow). No chaos.

## Motion system

- **Entrances:** Staggered fade + translateY (or subtle scale). useReducedMotion respected; fallback to opacity only or no animation.
- **Scroll:** Sections animate in on scroll (once). Optional parallax on hero background layer.
- **Hover:** Cards lift and get soft shadow; buttons have magnetic-style or scale; nav items underline or glow.
- **Hero:** Staggered reveal (background → name → tagline → description → CTAs). Optional subtle continuous motion (e.g. gradient shift, soft particle drift).
- **Performance:** Prefer transform/opacity; avoid layout thrashing. Lazy or reduced motion for below-the-fold.

## Section roles

1. **Hero** — Immersive. Animated gradient/mesh or soft grid background. Oversized typography. Staggered reveal. Profile with subtle float or glow. Strong CTAs. Optional scroll cue.
2. **Focus pillars** — Three pillars (Security / Engineering / Design). Asymmetric or bento layout. Glass or elevated cards. Hover lift. Stagger on scroll.
3. **Featured projects** — Premium cards. Image zoom + overlay reveal on hover. Category pill. Stagger on scroll.
4. **Security-first** — Different treatment (e.g. gradient bar or glass strip). Short copy. Feels like a “statement” block.
5. **Experience snapshot** — One refined card. Optional subtle motion on scroll.
6. **Skills** — Grouped. Interactive tags or elegant list; hover states.
7. **Contact CTA** — Strong finish. Gradient or glow accent. Clear primary CTA.

## Navigation

- Floating or glass bar. Slight shrink or blur increase on scroll. Active state (underline or pill). Smooth hover. Remains readable and accessible.

## Uniqueness checklist

- [ ] Hero is unmistakably “this” portfolio (composition + motion).
- [ ] Nav has a clear, premium treatment (glass/float).
- [ ] Each section has a distinct visual rhythm.
- [ ] Project cards feel like premium objects (hover, depth).
- [ ] Typography has presence (display + scale).
- [ ] Background feels alive (gradient + optional subtle motion).
- [ ] Motion is consistent and GPU-friendly; reduced motion supported.
