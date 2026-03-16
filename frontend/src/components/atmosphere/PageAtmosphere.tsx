"use client";

import { useEffect, useState } from "react";

export function PageAtmosphere() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Orange-accented ambient — soft top-right light */}
      <div
        className="absolute -right-[20%] -top-[30%] h-[80vh] w-[80vw] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 70% 20%, rgba(255, 64, 0, 0.18) 0%, transparent 55%)",
        }}
      />
      {/* Secondary fill — very subtle center */}
      <div
        className="absolute left-1/2 top-0 h-[60vh] w-[100vw] -translate-x-1/2 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 64, 0, 0.06) 0%, transparent 50%)",
        }}
      />
      {/* Subtle cinematic noise only, no grid */}
      <div className="noise-overlay absolute inset-0 opacity-100" />
    </div>
  );
}
