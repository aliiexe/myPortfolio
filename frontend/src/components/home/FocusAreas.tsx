"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";
import { getVariants } from "@/lib/motion";

export function FocusAreas() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { container, item } = getVariants(!!reduced);

  return (
    <Section ref={ref} id="expertise" title="Expertise">
      <motion.div
        variants={container}
        initial="hidden"
        animate={mounted && inView ? "visible" : "hidden"}
        className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        {(() => {
          const cyber = site.focusAreas.find(
            (a) => a.title.toLowerCase() === "cybersecurity"
          );
          const dev = site.focusAreas.find(
            (a) => a.title.toLowerCase().includes("software")
          );
          const design = site.focusAreas.find(
            (a) => a.title.toLowerCase().includes("design")
          );
          const freelance = site.focusAreas.find(
            (a) => a.title.toLowerCase() === "freelance"
          );

          return (
            <>
              {/* Dominant cybersecurity block */}
              {cyber && (
                <motion.article
                  variants={item}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 backdrop-blur-[var(--glass-blur)]"
                  whileHover={reduced ? undefined : { y: -8 }}
                >
                  <div
                    className="pointer-events-none absolute -left-10 top-0 h-full w-32 opacity-70"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--color-signature-subtle), transparent)",
                    }}
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
                      Primary pillar
                    </p>
                    <h3
                      className="mt-4 font-display text-3xl font-semibold text-[var(--color-foreground)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cyber.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-[var(--color-foreground-muted)] leading-relaxed">
                      {cyber.shortDescription}
                    </p>
                  </div>
                  <div className="relative mt-8 grid gap-4 text-xs text-[var(--color-muted)] sm:grid-cols-2">
                    <div className="space-y-2">
                      <p className="uppercase tracking-[0.08em]">
                        Security posture
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-surface)] px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
                        <span className="text-[0.7rem] uppercase tracking-[0.18em]">
                          Verified · Active
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="uppercase tracking-[0.08em]">Domains</p>
                      <p>
                        Web security · OWASP · offensive labs · secure
                        development
                      </p>
                    </div>
                  </div>
                </motion.article>
              )}

              {/* Secondary pillars */}
              <div className="grid gap-6">
                {dev && (
                  <motion.article
                    variants={item}
                    className="group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-[var(--glass-blur)]"
                    whileHover={reduced ? undefined : { y: -6 }}
                  >
                    <div
                      className="absolute right-0 top-0 h-px w-1/2 opacity-60"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, var(--color-signature))",
                      }}
                    />
                    <h3
                      className="font-display text-xl font-semibold text-[var(--color-foreground)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {dev.title}
                    </h3>
                    <p className="mt-4 text-[var(--color-foreground-muted)] leading-relaxed">
                      {dev.shortDescription}
                    </p>
                  </motion.article>
                )}

                {design && (
                  <motion.article
                    variants={item}
                    className="group relative overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-[var(--glass-blur)]"
                    whileHover={reduced ? undefined : { y: -6 }}
                  >
                    <div
                      className="absolute bottom-0 left-0 h-px w-1/2 opacity-60"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-signature), transparent)",
                      }}
                    />
                    <h3
                      className="font-display text-xl font-semibold text-[var(--color-foreground)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {design.title}
                    </h3>
                    <p className="mt-4 text-[var(--color-foreground-muted)] leading-relaxed">
                      {design.shortDescription}
                    </p>
                  </motion.article>
                )}
              </div>

              {/* Freelance / services band */}
              {freelance && (
                <motion.article
                  variants={item}
                  className="mt-6 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-5 backdrop-blur-[var(--glass-blur)] lg:col-span-2"
                >
                  <div className="flex flex-col gap-3 items-start justify-between sm:flex-row sm:items-center">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
                        Freelance / services
                      </p>
                      <h3
                        className="mt-1 font-display text-base font-semibold text-[var(--color-foreground)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {freelance.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                        {freelance.shortDescription}
                      </p>
                    </div>
                    <p className="text-xs text-[var(--color-muted)]">
                      Available for selected, security-aware digital projects.
                    </p>
                  </div>
                </motion.article>
              )}
            </>
          );
        })()}
      </motion.div>
    </Section>
  );
}
