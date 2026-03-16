import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(120, "Name is too long")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email")
    .max(320, "Email is too long")
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message is too long")
    .trim(),
  /** Honeypot — should be empty */
  website: z.string().max(0).optional(),
});

export type ContactBody = z.infer<typeof contactSchema>;

/** Simple in-memory rate limit: 5 submissions per IP per 15 minutes. Production: use Redis or Vercel KV. */
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function getClientIdentifier(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0]?.trim() : "unknown";
  return ip ?? "unknown";
}

function checkRateLimit(key: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimit.get(key);
  if (!entry) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true };
}

export async function POST(req: Request) {
  try {
    const key = getClientIdentifier(req);
    const { allowed, retryAfter } = checkRateLimit(key);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: retryAfter
            ? { "Retry-After": String(retryAfter) }
            : undefined,
        }
      );
    }

    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request." },
        { status: 400 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const message =
        (first.name?.[0] ?? first.email?.[0] ?? first.message?.[0]) || "Validation failed.";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    /** Honeypot: if "website" was sent with content, treat as bot */
    if (parsed.data.website && parsed.data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const { name, email, message } = parsed.data;

    // TODO: send email via Resend/SendGrid/Nodemailer using env vars (no secrets in client).
    // For now we only validate and return success so the form works; add your provider in server.
    if (process.env.CONTACT_EMAIL_ENABLED === "true" && process.env.RESEND_API_KEY) {
      // Example: await sendEmail({ to: process.env.CONTACT_TO, from: process.env.CONTACT_FROM, subject: `Contact from ${name}`, text: message, replyTo: email });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
