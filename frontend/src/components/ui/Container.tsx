import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "nav";
}

export function Container({ children, className, as: Comp = "div" }: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8",
        className
      )}
    >
      {children}
    </Comp>
  );
}
