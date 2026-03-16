"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { getFeaturedProjects } from "@/lib/content";
import { getVariants } from "@/lib/motion";

const categoryLabel: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  development: "Software Development",
  design: "Design",
};

export function FeaturedProjects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const projects = getFeaturedProjects().slice(0, 2);
  const { container, item } = getVariants(!!reduced);

  return (
    <Section ref={ref} id="work" title="Featured operations">
      <motion.div
        variants={container}
        initial="hidden"
        animate={mounted && inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            variants={item}
            className="group relative overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 backdrop-blur-[var(--glass-blur)] sm:p-8 lg:p-9"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col gap-6 no-underline lg:flex-row lg:items-stretch"
            >
              {/* Media strip */}
              <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-elevated)] lg:w-[55%]">
                <Image
                  src={project.images[0]}
                  alt=""
                  width={900}
                  height={520}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent opacity-60" />
                {/* Signal sweep */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-24 opacity-60"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,64,0,0.4), transparent)",
                  }}
                />
              </div>

              {/* Casefile panel */}
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-[var(--glass-border)] bg-[var(--color-bg-surface)] p-6 lg:p-7">
                <header className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-signature-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
                      {categoryLabel[project.category] ?? project.category}
                    </span>
                    <h3
                      className="font-display text-xl font-semibold text-[var(--color-foreground)] sm:text-2xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    Casefile
                  </span>
                </header>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--color-bg-elevated)] px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-full border border-[var(--color-border)] px-3 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
                  <span>Slug: /projects/{project.slug}</span>
                  <span className="inline-flex items-center gap-1 text-[var(--color-signature-muted)]">
                    View case study →
                  </span>
                </div>

                {/* Bottom orange trace */}
                <div
                  className="mt-5 h-0.5 w-full origin-left scale-x-0 bg-[var(--color-signature)] transition-transform duration-300 group-hover:scale-x-100"
                />
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={mounted && inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
        >
          View all projects →
        </Link>
      </motion.div>
    </Section>
  );
}
