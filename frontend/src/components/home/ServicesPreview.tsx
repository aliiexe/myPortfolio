"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function ServicesPreview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Section ref={ref} id="services">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 backdrop-blur-[var(--glass-blur)] md:p-14"
        initial={{ opacity: 0, y: 28 }}
        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--color-signature-soft) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
              Freelance / services
            </p>
            <h2
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure products, full‑stack builds, and digital presence.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-foreground-muted)]">
              Freelance services for startups, brands, founders, and technical
              teams — with security, engineering quality, and design all in
              the same conversation.
            </p>
          </div>
          <div className="grid gap-6 text-sm text-[var(--color-foreground-muted)] sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
                Secure web products
              </h3>
              <p className="mt-2">
                Web security, secure development, threat-aware architecture for
                new or existing products.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
                Full‑stack development
              </h3>
              <p className="mt-2">
                TypeScript, Next.js, and backend systems — from prototypes to
                production-grade apps.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
                Design & digital presence
              </h3>
              <p className="mt-2">
                Interfaces, visual identity, and portfolio/landing sites that
                feel premium and intentional.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p className="text-[var(--color-muted)]">
            Available for selected, security‑aware freelance projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--glass-bg)] px-6 py-3.5 text-sm font-medium text-[var(--color-foreground)] backdrop-blur-[var(--glass-blur)] no-underline transition-colors hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)]"
          >
            Discuss a project
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

