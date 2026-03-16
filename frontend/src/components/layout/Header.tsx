"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { site } from "@/lib/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      initial={false}
      animate={{
        paddingTop: scrolled ? 14 : 22,
        paddingBottom: scrolled ? 14 : 22,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container
        as="nav"
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border px-6 transition-all duration-300",
          "border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)]",
          scrolled && "shadow-[var(--shadow-card)]"
        )}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold text-[var(--color-foreground)] no-underline transition-colors hover:text-[var(--color-signature-muted)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {site.name}
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2" role="list">
          {navItems.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "relative rounded-lg px-4 py-2.5 text-sm font-medium no-underline transition-colors",
                    isActive
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "var(--color-signature-soft)",
                        boxShadow: "inset 0 0 0 1px rgba(255, 64, 0, 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </motion.header>
  );
}
