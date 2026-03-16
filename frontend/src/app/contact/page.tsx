import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description: `For freelance work, collaborations, cybersecurity-related projects, or general opportunities.`,
};

export default function ContactPage() {
  return (
    <article className="py-[var(--space-section)]">
      <Container className="max-w-2xl">
        {/* Intro */}
        <header className="mb-10 space-y-4">
          <p className="text-xs font-medium text-[var(--color-muted)]">Contact</p>
          <h1
            className="font-display text-[var(--text-display)] font-semibold tracking-tight text-[var(--color-foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </h1>
          <p className="max-w-xl text-[var(--color-foreground-muted)]">
            For freelance work, collaborations, cybersecurity-related projects, or general opportunities.
          </p>
        </header>

        {/* Contact methods */}
        <section className="mb-10 rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 backdrop-blur-[var(--glass-blur)]">
          <ul className="space-y-4 text-sm" role="list">
            <li>
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Email
              </span>
              <div className="mt-1">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
                >
                  {site.contact.email}
                </a>
              </div>
            </li>
            <li>
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                LinkedIn
              </span>
              <div className="mt-1">
                <a
                  href={site.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
                >
                  linkedin.com/in/ali-bourak
                </a>
              </div>
            </li>
            <li>
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                GitHub
              </span>
              <div className="mt-1">
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
                >
                  github.com/aliiexe
                </a>
              </div>
            </li>
            {site.contact.x && (
              <li>
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  X
                </span>
                <div className="mt-1">
                  <a
                    href={site.contact.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-signature-muted)] no-underline transition-colors hover:text-[var(--color-signature)]"
                  >
                    @a78bk6
                  </a>
                </div>
              </li>
            )}
          </ul>
        </section>

        {/* Optional form */}
        <section className="space-y-2">
          <h2
            className="font-display text-xl font-semibold text-[var(--color-foreground)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Optional: send a message
          </h2>
          <p className="text-sm text-[var(--color-foreground-muted)]">
            Minimal form — name, email, message. Server-side only; no comments,
            ratings, or uploads.
          </p>
          <ContactForm />
        </section>
      </Container>
    </article>
  );
}
