"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { resume } from "@/lib/content";

export function ExperienceSnapshot() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const latest = resume.experience[0];
  if (!latest) return null;

  return (
    <Section ref={ref} id="experience" title="Experience trail">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-[var(--glass-blur)] sm:p-10 lg:p-12"
        initial={{ opacity: 0, y: 28 }}
        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Verification spine */}
        <div className="absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-[var(--color-signature)] via-[var(--color-signature-subtle)] to-transparent" />

        <div className="relative ml-14 space-y-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Latest checkpoint
            </p>
            <h3
              className="mt-3 font-display text-2xl font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {latest.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              {latest.company} · {latest.location}
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {latest.startDate} to {latest.isCurrent ? "Present" : latest.endDate ?? ""}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-foreground-muted)]">
              {latest.description}
            </p>
          </div>

          <div className="grid gap-6 text-sm text-[var(--color-muted)] sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Verification
              </p>
              <ul className="mt-3 space-y-2" role="list">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
                  <span>Security-aware work across real client and personal projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature-muted)]" />
                  <span>Ongoing software engineering degree with cybersecurity focus</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Snapshot
              </p>
              <p className="mt-3">
                Freelance and product work in Next.js, TypeScript, and secure web
                development, supported by ongoing studies and community work.
              </p>
              <Link
                href="/resume"
                className="mt-4 inline-block font-medium text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
              >
                View full resume →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
