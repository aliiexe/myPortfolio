"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/content";
import { getVariants } from "@/lib/motion";

const groups = [
  { label: "Security", items: site.skills.security },
  { label: "Development", items: site.skills.development },
  { label: "Design", items: site.skills.design },
  { label: "Tools", items: site.skills.tools },
] as const;

export function SkillsByDomain() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { container, item } = getVariants(!!reduced);

  return (
    <Section ref={ref} title="Skills by domain">
      <motion.div
        variants={container}
        initial="hidden"
        animate={mounted && inView ? "visible" : "hidden"}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {groups.map((group) => (
          <motion.div key={group.label} variants={item} className="space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {group.items.map((skill) => (
                <li key={skill}>
                  <motion.span
                    className="inline-block rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-sm text-[var(--color-foreground-muted)] transition-colors hover:border-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                    whileHover={
                      reduced
                        ? undefined
                        : {
                            borderColor: "var(--color-signature)",
                            color: "var(--color-foreground)",
                          }
                    }
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                  >
                    {skill}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
