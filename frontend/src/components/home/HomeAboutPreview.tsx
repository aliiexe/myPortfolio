"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";

export function HomeAboutPreview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Section ref={ref} id="about">
      <motion.div
        className="grid gap-10 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-10 backdrop-blur-[var(--glass-blur)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:p-14"
        initial={{ opacity: 0, y: 32 }}
        animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Profile
          </p>
          <h2
            className="font-display text-3xl font-semibold tracking-tight text-[var(--color-foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cybersecurity‑first builder based in Morocco.
          </h2>
          <p className="max-w-xl text-[var(--color-foreground-muted)] leading-relaxed">
            {site.about.intro}
          </p>
        </div>

        <div className="space-y-6 text-sm text-[var(--color-muted)]">
          <p>
            I work across{" "}
            <span className="text-[var(--color-foreground)]">
              cybersecurity, software engineering, and design
            </span>
            , keeping security in the room from the first sketch to deployment.
          </p>
          <ul className="space-y-2" role="list">
            <li>· Security surface thinking, not just features.</li>
            <li>· Clean, maintainable engineering practices.</li>
            <li>· Interfaces that feel deliberate and calm.</li>
          </ul>
          <Link
            href="/about"
            className="inline-flex items-center text-sm font-medium text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
          >
            Full profile →
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}

