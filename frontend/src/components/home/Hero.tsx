"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { site } from "@/lib/content";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const summaryRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const scrollCueRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    if (reduced) {
      gsap.set(
        [
          imageRef.current,
          nameRef.current,
          taglineRef.current,
          summaryRef.current,
          ctaRef.current,
          scrollCueRef.current,
        ],
        { opacity: 1, y: 0 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.set(
        [
          imageRef.current,
          nameRef.current,
          taglineRef.current,
          summaryRef.current,
          ctaRef.current,
          scrollCueRef.current,
        ],
        {
          opacity: 0,
          y: 28,
        }
      )
        .to(
          imageRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          0.1
        )
        .to(nameRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.25)
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.6)
        .to(summaryRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.8)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.0)
        .to(scrollCueRef.current, { opacity: 0.8, y: 0, duration: 0.4 }, 1.4);
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted, reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[640px] overflow-hidden pt-40 pb-32 sm:pt-44 sm:pb-40"
    >
      <div
        className="pointer-events-none absolute -right-[15%] -top-[25%] z-0 h-[70vh] w-[70vw] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 75% 15%, rgba(255, 64, 0, 0.22) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-10 shadow-[var(--shadow-card)] backdrop-blur-[var(--glass-blur)] sm:px-8 sm:py-14">
          {/* Two-part hero: large image and clean copy */}
          <div className="grid gap-5 md:gap-8 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:items-center lg:gap-9">
            {/* Portrait block */}
            <div className="mb-8 flex justify-center md:mb-0 md:justify-start md:pl-1 lg:pl-2">
              <div
                ref={imageRef}
                className="relative h-[23rem] w-56 overflow-hidden rounded-3xl bg-[var(--color-bg-elevated)] opacity-0 sm:h-[25rem] sm:w-64 md:h-[27rem] md:w-72 lg:h-[28rem]"
              >
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 0%, rgba(255,64,0,0.45), transparent 60%)",
                  }}
                  aria-hidden
                />
                <img
                  src="/images/me2.png"
                  alt=""
                  className="relative z-10 h-full w-full object-cover object-top"
                  width={288}
                  height={448}
                />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-surface)]/90 px-3 py-1 text-xs text-[var(--color-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
                  <span>Available for selected freelance work</span>
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="space-y-7 md:pr-1 lg:pr-2">
              <p
                ref={taglineRef}
                className="text-xs font-medium text-[var(--color-muted)]"
              >
                Ali Bourak
              </p>
              <div className="space-y-4">
                <h1
                  ref={nameRef}
                  className="font-display text-[clamp(3rem,4vw,4.25rem)] font-semibold leading-tight tracking-tight text-[var(--color-foreground)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Building secure digital products.
                </h1>
                <p
                  ref={summaryRef}
                  className="max-w-[30rem] text-base leading-relaxed text-[var(--color-foreground-muted)] sm:text-lg"
                >
                  Cybersecurity engineer working across software engineering, design, and selected freelance projects.
                </p>
              </div>
              <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center rounded-xl bg-[var(--color-signature)] px-8 py-4 text-sm font-medium text-white no-underline shadow-[0_0_40px_var(--color-signature-soft)] transition-shadow hover:shadow-[0_0_60px_var(--color-signature-glow)]"
                >
                  View projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-signature-muted)]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollCueRef}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center opacity-0"
      >
        <span
          className="block h-10 w-px"
          style={{ background: "var(--color-signature)" }}
        />
        <span className="mt-2 text-xs text-[var(--color-muted)]">Scroll</span>
      </div>
    </section>
  );
}

