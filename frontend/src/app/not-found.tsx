import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16">
      <Container className="text-center">
        <h1 className="text-2xl font-semibold text-[var(--color-foreground)]">
          404 — Page not found
        </h1>
        <p className="mt-2 text-[var(--color-foreground-muted)]">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-[var(--color-signature-muted)] no-underline hover:underline"
        >
          Back to home
        </Link>
      </Container>
    </div>
  );
}
