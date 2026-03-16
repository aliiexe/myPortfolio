import { Container } from "@/components/ui/Container";
import { site, resume } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "About",
  description: site.about.intro,
};

export default function AboutPage() {
  const latest = resume.experience[0];

  return (
    <article className="py-[var(--space-section)]">
      <Container className="max-w-5xl">
        {/* 1. Page intro */}
        <header className="mb-14 space-y-4">
          <p className="text-xs font-medium text-[var(--color-muted)]">About</p>
          <h1
            className="font-display text-[var(--text-display)] font-semibold tracking-tight text-[var(--color-foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            I work at the intersection of cybersecurity, software engineering, design, and freelance digital work.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-foreground-muted)]">
            {site.about.intro}
          </p>
        </header>

        {/* 2. Main profile section */}
        <section className="mb-18 grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-start">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--shadow-card)] backdrop-blur-[var(--glass-blur)] md:h-72 md:w-72">
              <div
                className="absolute -inset-px rounded-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 10% 0%, rgba(255,64,0,0.4), transparent 55%)",
                }}
                aria-hidden
              />
              <img
                src="/images/me2cropped.png"
                alt=""
                className="relative z-10 h-full w-full object-cover"
                width={256}
                height={256}
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-[var(--color-bg-surface)]/90 px-3 py-1 text-xs text-[var(--color-foreground-muted)]">
                Security-first · Casablanca
              </div>
            </div>
          </div>
          <div className="space-y-5 text-[var(--color-foreground-muted)] leading-relaxed">
            <p>{site.about.story}</p>
            <p>{site.about.philosophy}</p>
          </div>
        </section>

        {/* 3. Principles / values */}
        <section className="mb-16 grid gap-6 md:grid-cols-3">
          <article className="space-y-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 backdrop-blur-[var(--glass-blur)]">
            <h2
              className="font-display text-base font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Secure by default
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
              Web security, secure development, and threat-aware decisions from the first sketch to deployment.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 backdrop-blur-[var(--glass-blur)]">
            <h2
              className="font-display text-base font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Clean architecture
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
              Systems that stay understandable, testable, and maintainable, rather than one-off impressive demos.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 backdrop-blur-[var(--glass-blur)]">
            <h2
              className="font-display text-base font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Design that respects users
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
              Calm, usable interfaces with clear hierarchy and focus instead of visual noise.
            </p>
          </article>
        </section>

        {/* 4. Current focus */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2
              className="font-display text-lg font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Current focus
            </h2>
            <ul className="space-y-2 text-sm text-[var(--color-foreground-muted)]" role="list">
              <li>Web security and secure full-stack systems.</li>
              <li>CTF and practical cybersecurity learning.</li>
              <li>Product-minded engineering with modern web stacks.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2
              className="font-display text-lg font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How I work
            </h2>
            <p className="text-sm text-[var(--color-foreground-muted)] leading-relaxed">
              I like small, intentional teams, clear scopes, and strong communication. Security is part of architecture, implementation, and review from the start.
            </p>
          </div>
        </section>

        {/* 5. Experience snapshot */}
        {latest && (
          <section className="mb-14 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-[var(--glass-blur)]">
            <p className="text-xs font-medium text-[var(--color-muted)]">
              Experience snapshot
            </p>
            <h2
              className="mt-3 font-display text-xl font-semibold text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {latest.title}
            </h2>
            <p className="text-sm text-[var(--color-muted)]">
              {latest.company} · {latest.location}
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {latest.startDate} — {latest.isCurrent ? "Present" : latest.endDate ?? "—"}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-foreground-muted)]">
              {latest.description}
            </p>
          </section>
        )}

        {/* 6. CTA */}
        <section className="flex flex-wrap gap-5 border-t border-[var(--color-border-subtle)] pt-8">
          <Link
            href="/resume"
            className="inline-flex items-center rounded-xl bg-[var(--color-signature)] px-7 py-4 text-sm font-medium text-white no-underline shadow-[0_0_40px_var(--color-signature-soft)] transition-shadow hover:shadow-[0_0_60px_var(--color-signature-glow)]"
          >
            View resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--glass-bg)] px-6 py-3.5 text-sm font-medium text-[var(--color-foreground)] backdrop-blur-[var(--glass-blur)] no-underline transition-colors hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)]"
          >
            Contact
          </Link>
        </section>
      </Container>
    </article>
  );
}
