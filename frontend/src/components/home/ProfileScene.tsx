"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";

export function ProfileScene() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Section ref={ref} id="about" title="Operator profile">
      <motion.div
        className="relative grid gap-12 overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 backdrop-blur-[var(--glass-blur)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-14"
        initial={{ opacity: 0, y: 32 }}
        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle glow drift */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--color-signature-soft) 0%, transparent 60%)",
          }}
          aria-hidden
        />

        {/* Profile card */}
        <div className="relative flex flex-col gap-6 rounded-2xl border border-[var(--glass-border)] bg-[var(--color-bg-elevated)] p-8">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-2xl opacity-40 blur-xl"
                style={{ background: "var(--color-signature)" }}
                aria-hidden
              />
              <img
                src="/images/me2.png"
                alt=""
                className="relative h-20 w-20 rounded-xl object-cover"
                width={80}
                height={80}
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Operator
              </p>
              <p
                className="mt-1 font-display text-xl font-semibold text-[var(--color-foreground)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {site.tagline}
              </p>
            </div>
          </div>

          <div className="grid gap-4 text-xs text-[var(--color-muted)] sm:grid-cols-2">
            <div className="space-y-1">
              <p className="uppercase tracking-[0.16em]">Status</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-surface)] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
                <span className="text-[0.7rem] uppercase tracking-[0.16em]">
                  Online · Security-first
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="uppercase tracking-[0.16em]">Signals</p>
              <p>Casablanca · UTC+1 · Remote-friendly</p>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Pillars
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.focusAreas.map((area) => (
                <span
                  key={area.title}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-foreground-muted)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--color-signature-muted)]" />
                  {area.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            About
          </p>
          <p className="text-lg leading-relaxed text-[var(--color-foreground-muted)]">
            {site.about.intro}
          </p>
          <p className="leading-relaxed text-[var(--color-foreground-muted)]">
            {site.about.story}
          </p>
          <p className="leading-relaxed text-[var(--color-foreground-muted)]">
            {site.about.philosophy}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

