import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className, as: Comp = "div" }: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </Comp>
  );
}
