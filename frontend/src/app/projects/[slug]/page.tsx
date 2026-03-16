import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllSlugs, getProjects } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectHeroCarousel } from "@/components/projects/ProjectHeroCarousel";

const categoryLabels: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  development: "Software Engineering",
  design: "Design",
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const all = getProjects();
  const currentIndex = all.findIndex((p) => p.slug === slug);
  const nextProject = currentIndex >= 0 ? all[(currentIndex + 1) % all.length] : null;

  return (
    <article className="py-[var(--space-section)]">
      <Container>
        <div className="space-y-10">
          {/* 1. Top intro / back link */}
          <div className="flex items-center justify-between gap-4 text-sm">
            <Link
              href="/projects"
              className="text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-signature-muted)]"
            >
              ← Back to projects
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1 text-xs text-[var(--color-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signature)]" />
              <span>{categoryLabels[project.category] ?? project.category}</span>
            </div>
          </div>

          {/* 2. Top intro content */}
          <header className="space-y-2">
            <p className="text-xs font-medium text-[var(--color-muted)]">Project</p>
            <h1
              className="font-display text-[var(--text-display)] font-semibold tracking-tight text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h1>
            {(project.clientName || project.role || project.projectType) && (
              <p className="text-sm text-[var(--color-foreground-muted)]">
                {[project.role, project.clientName, project.projectType].filter(Boolean).join(" · ")}
              </p>
            )}
          </header>

          {/* 3. Hero image */}
          <div className="overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-card)]">
            <ProjectHeroCarousel images={project.images} />
          </div>

          {/* 4. Main content + metadata rail */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Narrative rail */}
            <div className="space-y-10">
              {/* Overview / narrative */}
              <section aria-labelledby="overview-heading" className="space-y-4">
                <h2
                  id="overview-heading"
                  className="font-display text-xl font-semibold text-[var(--color-foreground)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Overview
                </h2>
                <p className="text-[var(--color-foreground-muted)] leading-relaxed">
                  {project.summary}
                </p>
                {project.description.length > 0 && (
                  <div className="space-y-4 text-[var(--color-foreground-muted)] leading-relaxed">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </section>

              {/* Challenge / Approach / Outcome */}
              {(project.problem || project.solution || project.outcome) && (
                <section className="grid gap-8 md:grid-cols-3">
                  {project.problem && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                        Challenge
                      </h3>
                      <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                        Approach
                      </h3>
                      <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                  {project.outcome && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                        Outcome
                      </h3>
                      <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  )}
                </section>
              )}

              {/* Security considerations */}
              {project.securityNotes && (
                <section className="space-y-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-signature-subtle)] p-6" style={{ borderLeftWidth: 4, borderLeftColor: "var(--color-signature)" }}>
                  <h2 className="text-xs font-semibold text-[var(--color-muted)]">
                    Security considerations
                  </h2>
                  <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
                    {project.securityNotes}
                  </p>
                </section>
              )}
            </div>

            {/* Metadata rail */}
            <aside className="space-y-8 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 backdrop-blur-[var(--glass-blur)]">
              <div className="space-y-4 border-b border-[var(--color-border-subtle)] pb-4">
                <h2 className="text-xs font-semibold text-[var(--color-muted)]">
                  Project details
                </h2>
                <dl className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] gap-2 text-sm text-[var(--color-foreground-muted)]">
                  {project.role && (
                    <>
                      <dt className="text-[var(--color-muted)]">Role</dt>
                      <dd>{project.role}</dd>
                    </>
                  )}
                  {project.projectType && (
                    <>
                      <dt className="text-[var(--color-muted)]">Type</dt>
                      <dd>{project.projectType}</dd>
                    </>
                  )}
                  {project.clientName && (
                    <>
                      <dt className="text-[var(--color-muted)]">Client</dt>
                      <dd>{project.clientName}</dd>
                    </>
                  )}
                  <dt className="text-[var(--color-muted)]">Category</dt>
                  <dd>{categoryLabels[project.category] ?? project.category}</dd>
                </dl>
              </div>

              {project.technologies.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                    Stack
                  </h3>
                  <ul className="flex flex-wrap gap-2 text-xs" role="list">
                    {project.technologies.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-[var(--color-bg-surface)] px-3 py-1 text-[var(--color-foreground-muted)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tools && project.tools.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                    Tools
                  </h3>
                  <ul className="flex flex-wrap gap-2 text-xs" role="list">
                    {project.tools.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-[var(--color-bg-surface)] px-3 py-1 text-[var(--color-foreground-muted)]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(project.link || project.repo) && (
                <div className="space-y-3 border-t border-[var(--color-border-subtle)] pt-4">
                  <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <Button
                        as="link"
                        href={project.link}
                        external
                        variant="primary"
                      >
                        Live project
                      </Button>
                    )}
                    {project.repo && (
                      <Button
                        as="link"
                        href={project.repo}
                        external
                        variant="outline"
                      >
                        Repository
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* 5. Next project CTA */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-6 text-sm">
            <Link
              href="/projects"
              className="text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-signature-muted)]"
            >
              ← Back to projects
            </Link>
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
              >
                Next project: {nextProject.title} →
              </Link>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}
