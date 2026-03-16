"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";
import { getProjects, projectCategories } from "@/lib/content";

const categoryLabels: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  development: "Software Engineering",
  design: "Design",
};

const filters: {
  key: "all" | "cybersecurity" | "development" | "design" | "freelance";
  label: string;
}[] = [
  { key: "all", label: "All" },
  { key: "cybersecurity", label: "Cybersecurity" },
  { key: "development", label: "Software Engineering" },
  { key: "design", label: "Design" },
  { key: "freelance", label: "Freelance" },
];

function ProjectImageCarousel({
  images,
  width,
  height,
  alt = "",
  intervalMs = 4500,
  overlayVariant = "hero",
}: {
  images: string[];
  width: number;
  height: number;
  alt?: string;
  intervalMs?: number;
  overlayVariant?: "hero" | "card";
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[var(--color-bg-elevated)]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      {overlayVariant === "hero" ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/75 via-transparent to-transparent opacity-70" />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 opacity-70"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,64,0,0.5), transparent)",
            }}
          />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent opacity-70" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[var(--color-signature)] transition-transform duration-300 group-hover:scale-x-100" />
        </>
      )}
    </div>
  );
}

export function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]["key"]>("all");

  const allProjects = getProjects();

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "freelance") return project.projectType === "freelance";
    return project.category === activeFilter;
  });

  const freelanceProjects = allProjects.filter(
    (p) => p.projectType === "freelance"
  );

  return (
    <Section>
      {/* Intro */}
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-medium text-[var(--color-muted)]">Projects</p>
        <h1
          className="mt-2 font-display text-[var(--text-display)] font-semibold tracking-tight text-[var(--color-foreground)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Selected work across cybersecurity, software engineering, design, and
          freelance delivery.
        </h1>
        <p className="mt-4 text-lg text-[var(--color-foreground-muted)]">
          Case studies and client work that balance security, engineering
          quality, and visual clarity.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap items-center gap-3 text-xs">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={cn(
              "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium",
              filter.key === activeFilter
                ? "border-[var(--color-signature)] bg-[var(--color-signature-subtle)] text-[var(--color-foreground)]"
                : "border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-muted)]"
            )}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Mixed-layout listing by category */}
      {projectCategories.map((category) => {
        const byCategory = filteredProjects.filter(
          (project) => project.category === category
        );
        if (byCategory.length === 0) return null;

        return (
          <section key={category} className="mb-20 space-y-8">
            <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h2 className="text-sm font-semibold text-[var(--color-signature-muted)]">
                {categoryLabels[category] ?? category}
              </h2>
              <p className="text-xs text-[var(--color-muted)]">
                {category === "cybersecurity" &&
                  "Security-first and security-adjacent initiatives."}
                {category === "development" &&
                  "Full-stack and web engineering work."}
                {category === "design" && "Brand and interface systems."}
              </p>
            </header>

            <div className="space-y-10">
              {byCategory.map((project, projectIndex) => {
                const isMediumRow = projectIndex === 0 || projectIndex % 4 === 0;
                const isReversed = projectIndex % 2 === 1;

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={cn(
                      "group grid gap-6 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 no-underline backdrop-blur-[var(--glass-blur)] sm:p-6 lg:p-7",
                      isMediumRow
                        ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)]"
                        : "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]",
                      isReversed && !isMediumRow && "lg:[&>div:first-child]:order-2"
                    )}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-elevated)]">
                      <ProjectImageCarousel
                        images={project.images}
                        width={900}
                        height={520}
                        overlayVariant="card"
                      />
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl bg-[var(--color-bg-surface)] p-6 lg:p-7">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-elevated)] px-3 py-1 text-[var(--color-signature-muted)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
                            {categoryLabels[project.category] ?? project.category}
                          </span>
                          {project.projectType && (
                            <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[var(--color-muted)]">
                              {project.projectType}
                            </span>
                          )}
                          {project.clientName && (
                            <span className="text-[var(--color-muted)]">
                              Client: {project.clientName}
                            </span>
                          )}
                        </div>

                        <h3
                          className="font-display text-xl font-semibold text-[var(--color-foreground)] sm:text-2xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.title}
                        </h3>
                        <p className="max-w-xl text-sm leading-relaxed text-[var(--color-foreground-muted)]">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[var(--color-muted)]">
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
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Freelance strip */}
      {freelanceProjects.length > 0 && (
        <section className="mt-4 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-[var(--glass-blur)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-[var(--color-muted)]">
                Freelance
              </p>
              <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                Selected freelance projects across brands, businesses, and
                technical products.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--glass-bg)] px-6 py-3.5 text-sm font-medium text-[var(--color-foreground)] backdrop-blur-[var(--glass-blur)] no-underline transition-colors hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)]"
            >
              Discuss a project
            </Link>
          </div>
        </section>
      )}
    </Section>
  );
}

