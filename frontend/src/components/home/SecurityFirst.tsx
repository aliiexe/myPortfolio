"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function SecurityFirst() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section ref={ref} className="py-[var(--space-section)]">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] px-10 py-16 sm:px-14 sm:py-20"
          initial={{ opacity: 0, y: 32 }}
          animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Orange accent bar — signature */}
          <div
            className="absolute left-0 top-0 h-full w-1.5 rounded-l-3xl"
            style={{
              background:
                "linear-gradient(180deg, var(--color-signature), var(--color-signature-muted))",
            }}
          />
          <div className="pl-6 sm:pl-8">
            <h2
              className="font-display text-2xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Security-first mindset
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-foreground-muted)]">
              I build with OWASP practices in mind: validated inputs, minimal
              attack surface, secure defaults. Whether it's a portfolio or a
              product, I treat security as part of the design — not an
              afterthought.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
