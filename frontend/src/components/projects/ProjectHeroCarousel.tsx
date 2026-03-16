"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface ProjectHeroCarouselProps {
  images: string[];
  intervalMs?: number;
}

export function ProjectHeroCarousel({
  images,
  intervalMs = 4500,
}: ProjectHeroCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-bg-elevated)]">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={1400}
          height={780}
          priority={i === 0}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent opacity-70" />
    </div>
  );
}

