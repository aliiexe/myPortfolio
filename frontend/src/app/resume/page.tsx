import { Container } from "@/components/ui/Container";
import { resume } from "@/lib/content";
import { site } from "@/lib/content";

export const metadata = {
  title: "Resume",
  description:
    "Experience, education, certifications, competitions, skills, and community for Ali Bourak.",
};

export default function ResumePage() {
  return (
    <article className="py-[var(--space-section)]">
      <Container className="max-w-3xl">
        {/* Intro + Download CV */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              className="font-display text-[var(--text-display)] font-semibold tracking-tight text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Resume
            </h1>
            <p className="mt-3 text-sm text-[var(--color-foreground-muted)]">
              Experience, education, certifications, competitions, and skills, all focused on secure and practical work.
            </p>
          </div>
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[var(--color-signature)] px-6 py-3.5 text-xs sm:text-sm font-medium text-white no-underline shadow-[0_0_40px_var(--color-signature-soft)] transition-shadow hover:shadow-[0_0_60px_var(--color-signature-glow)] whitespace-nowrap"
          >
            Download resume
          </a>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-[var(--color-muted)]">
            Experience
          </h2>
          <ul className="space-y-8" role="list">
            {resume.experience.map((exp, i) => (
              <li key={i} className="relative pl-6">
                <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-[var(--color-signature)] bg-[var(--color-signature-subtle)]" />
                {i !== resume.experience.length - 1 && (
                  <div className="absolute left-1.5 top-4 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-signature-subtle)] to-transparent" />
                )}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-[var(--color-foreground)]">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-[var(--color-muted)]">
                    {exp.isCurrent
                      ? `${exp.startDate} — Present`
                      : exp.endDate
                      ? `${exp.startDate} — ${exp.endDate}`
                      : exp.startDate}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-muted)]">{exp.company}</p>
                {exp.location && (
                  <p className="text-sm text-[var(--color-muted)]">{exp.location}</p>
                )}
                <p className="mt-2 text-[var(--color-foreground-muted)] leading-relaxed">
                  {exp.description}
                </p>
                {exp.technologies && exp.technologies.length > 0 && (
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    {exp.technologies.join(" · ")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-[var(--color-muted)]">
            Education
          </h2>
          <ul className="space-y-6" role="list">
            {resume.education.map((ed, i) => (
              <li key={i} className="border-l-2 border-[var(--color-signature)] pl-6">
                <h3 className="font-semibold text-[var(--color-foreground)]">
                  {ed.degree}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">{ed.institution}</p>
                {ed.location && (
                  <p className="text-sm text-[var(--color-muted)]">{ed.location}</p>
                )}
                <p className="text-sm text-[var(--color-muted)]">
                  {ed.isCurrent
                    ? `${ed.startDate} — Present`
                    : ed.endDate
                    ? `${ed.startDate} — ${ed.endDate}`
                    : ed.startDate}
                </p>
                {ed.notes && (
                  <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                    {ed.notes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications / competitions / communities */}
        {(resume.certifications && resume.certifications.length > 0) ||
        (resume.competitions && resume.competitions.length > 0) ||
        (resume.communities && resume.communities.length > 0) ? (
          <section className="mb-12 grid gap-10 md:grid-cols-2">
            {resume.certifications && resume.certifications.length > 0 && (
              <div>
                <h2 className="mb-4 text-lg font-semibold text-[var(--color-muted)]">
                  Certifications
                </h2>
                <ul className="space-y-3 text-sm" role="list">
                  {resume.certifications.map((c, i) => (
                    <li key={i}>
                      <span className="font-medium text-[var(--color-foreground)]">
                        {c.name}
                      </span>
                      <span className="text-[var(--color-muted)]"> — {c.issuer}</span>
                      {c.date && (
                        <span className="text-[var(--color-muted)]"> · {c.date}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-8">
              {resume.competitions && resume.competitions.length > 0 && (
                <div>
                  <h2 className="mb-3 text-lg font-semibold text-[var(--color-muted)]">
                    Competitions / CTF
                  </h2>
                  <ul
                    className="list-disc space-y-1 pl-5 text-sm text-[var(--color-foreground-muted)]"
                    role="list"
                  >
                    {resume.competitions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
              {resume.communities && resume.communities.length > 0 && (
                <div>
                  <h2 className="mb-3 text-lg font-semibold text-[var(--color-muted)]">
                    Communities
                  </h2>
                  <ul
                    className="list-disc space-y-1 pl-5 text-sm text-[var(--color-foreground-muted)]"
                    role="list"
                  >
                    {resume.communities.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ) : null}

        {/* Skills grouped */}
        <section>
          <h2 className="mb-6 text-lg font-semibold text-[var(--color-muted)]">
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                Cybersecurity
              </h3>
              <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                {site.skills.security.join(" · ")}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                Software Engineering
              </h3>
              <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                {site.skills.development.join(" · ")}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                Design
              </h3>
              <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                {site.skills.design.join(" · ")}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[var(--color-muted)]">
                Tools
              </h3>
              <p className="mt-2 text-sm text-[var(--color-foreground-muted)]">
                {site.skills.tools.join(" · ")}
              </p>
            </div>
          </div>
        </section>
      </Container>
    </article>
  );
}
