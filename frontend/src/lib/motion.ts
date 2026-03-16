"use client";

import { Variants } from "framer-motion";

/** Check for reduced motion preference (use in useEffect or pass to motion components) */
export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const reducedMotionVariant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

/** Staggered fade-up for section children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Hero stagger — longer delays for drama */
export const heroStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const heroStaggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Section enter on scroll (once) */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Card hover lift — use with whileHover */
export const cardHoverLift = {
  y: -6,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

/** Get variants that respect reduced motion (pass to motion components) */
export function getVariants(reduced: boolean): {
  container: Variants;
  item: Variants;
} {
  if (reduced) {
    return {
      container: reducedMotionVariant,
      item: reducedMotionVariant,
    };
  }
  return { container: staggerContainer, item: staggerItem };
}

export function getHeroVariants(reduced: boolean): {
  container: Variants;
  item: Variants;
} {
  if (reduced) {
    return {
      container: reducedMotionVariant,
      item: reducedMotionVariant,
    };
  }
  return { container: heroStaggerContainer, item: heroStaggerItem };
}
