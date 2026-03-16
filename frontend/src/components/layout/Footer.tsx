import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/50 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-[var(--color-muted)] text-center sm:text-left">
          © {year} {site.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 sm:justify-end" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-foreground)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
