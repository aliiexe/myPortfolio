"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      animate={{
        paddingTop: scrolled ? 14 : 22,
        paddingBottom: scrolled ? 14 : 22,
        opacity: 1,
        y: 0,
      }}
      initial={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="px-4 sm:px-6 md:px-8">
        <Container
          as="nav"
          className={cn(
            "mx-auto flex h-14 w-full max-w-[420px] items-center justify-between px-4 sm:px-5 transition-all duration-300 sm:max-w-5xl",
            "bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)]",
            scrolled && "shadow-[var(--shadow-card)] rounded-2xl"
          )}
        >
          <Link
            href="/"
            className="font-display text-lg font-semibold text-[var(--color-foreground)] no-underline transition-colors hover:text-[var(--color-signature-muted)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {site.name}
          </Link>

        {/* Desktop nav */}
          <ul className="hidden items-center gap-1 sm:gap-2 md:flex" role="list">
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--color-foreground)] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              className="absolute h-[2px] w-4 rounded-full bg-current"
              animate={
                menuOpen
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -4 }
              }
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="absolute h-[2px] w-4 rounded-full bg-current"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="absolute h-[2px] w-4 rounded-full bg-current"
              animate={
                menuOpen
                  ? { rotate: -45, y: 0 }
                  : { rotate: 0, y: 4 }
              }
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>

          {/* Mobile menu overlay + panel */}
          <AnimatePresence>
            {menuOpen && (
              <>
                {/* Dimmed backdrop */}
                <motion.div
                  key="nav-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                  onClick={() => setMenuOpen(false)}
                />
                {/* Floating sheet */}
                <motion.div
                  key="nav-panel"
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-x-0 top-[4.5rem] z-50 flex justify-center md:hidden"
                >
                  <div className="w-full max-w-sm px-4">
                    <div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)]/95 p-4 backdrop-blur-[var(--glass-blur)] shadow-[var(--shadow-card)]">
                      <ul className="flex flex-col gap-1.5" role="list">
                        {navItems.map(({ href, label }) => {
                          const isActive =
                            href === "/" ? pathname === "/" : pathname.startsWith(href);
                          return (
                            <li key={href}>
                              <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={cn(
                                  "block rounded-2xl px-4 py-3 text-sm font-medium no-underline transition-colors",
                                  isActive
                                    ? "bg-[var(--color-signature-soft)] text-[var(--color-foreground)]"
                                    : "text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
                                )}
                              >
                                {label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Container>
      </div>
    </motion.header>
  );
}
