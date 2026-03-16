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
        className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 backdrop-blur-[var(--glass-blur)] md:p-14 lg:p-16"
        initial={{ opacity: 0, y: 28 }}
        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
        whileHover={{ y: -4, boxShadow: "0 24px 80px rgba(0,0,0,0.55)" }}
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
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          {/* Left column: summary */}
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-medium text-[var(--color-muted)]">
              Freelance services
            </p>
            <h2
              className="font-display text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure products, full‑stack builds, and digital presence.
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-foreground-muted)]">
              Freelance work for startups, brands, and technical teams that
              care about security, engineering quality, and a considered visual
              identity.
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              Available for a small number of security‑aware freelance projects.
            </p>
          </div>

          {/* Right column: two focused services + CTA */}
          <div className="flex flex-col gap-6 text-sm text-[var(--color-foreground-muted)]">
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)]">
                Secure web products
              </h3>
              <p className="leading-relaxed">
                Design, build, or harden web apps so security and UX work
                together from the start.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-[var(--color-foreground)]">
                Full‑stack development
              </h3>
              <p className="leading-relaxed">
                TypeScript and Next.js products taken from prototype to
                production with reliable backends.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit items-center rounded-xl border border-[var(--color-border)] bg-[var(--glass-bg)] px-6 py-3 text-sm font-medium text-[var(--color-foreground)] backdrop-blur-[var(--glass-blur)] no-underline transition-colors hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)]"
            >
              Discuss a project
            </Link>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

