import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "ghost" | "outline";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

interface ButtonAsButton extends BaseProps {
  as: "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLink extends BaseProps {
  as: "link";
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-signature)] text-white shadow-[0_0_40px_var(--color-signature-soft)] hover:shadow-[0_0_60px_var(--color-signature-glow)] transition-shadow",
  ghost:
    "text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)] transition-colors",
  outline:
    "border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-colors",
};

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signature)]";

  if (props.as === "link") {
    return (
      <Link
        href={props.href}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
        className={cn(base, variantStyles[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn(base, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
}
