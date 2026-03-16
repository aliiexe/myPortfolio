"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Section ref={ref} id="contact" className="py-[var(--space-section)]">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-10 py-20 text-center sm:px-14 sm:py-24"
        initial={{ opacity: 0, y: 28 }}
        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Orange accent glow at the bottom */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, var(--color-signature-soft) 0%, transparent 70%)",
          }}
        />
        <div className="relative">
          <h2
            className="font-display text-3xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Open a secure channel
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--color-foreground-muted)]">
            For work, collaboration, or questions related to security and engineering, start with email and then move to the channel that fits best.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center rounded-xl bg-[var(--color-signature)] px-7 py-4 text-sm font-medium text-white no-underline shadow-[0_0_40px_var(--color-signature-soft)] transition-shadow hover:shadow-[0_0_60px_var(--color-signature-glow)]"
              >
                Email me
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--glass-bg)] px-7 py-4 text-sm font-medium text-[var(--color-foreground)] backdrop-blur-[var(--glass-blur)] no-underline transition-colors hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)]"
              >
                LinkedIn
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-[var(--color-border)] px-7 py-4 text-sm font-medium text-[var(--color-foreground-muted)] no-underline transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              >
                GitHub
              </Link>
            </motion.div>
          </div>
          <p className="mt-10">
            <Link
              href="/contact"
              className="text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-signature-muted)]"
            >
              Full contact & optional form →
            </Link>
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
