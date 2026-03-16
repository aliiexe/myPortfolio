import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  title?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerClassName, id, title }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-[var(--space-section)]", className)}
      >
        <Container className={containerClassName}>
          {title && (
            <h2
              className="font-display mb-12 text-[var(--text-section)] font-semibold tracking-tight text-[var(--color-foreground)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>
          )}
          {children}
        </Container>
      </section>
    );
  }
);
Section.displayName = "Section";
