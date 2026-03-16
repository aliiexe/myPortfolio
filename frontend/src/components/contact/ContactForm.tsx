"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim(),
          website,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {/* Honeypot — hidden from users, leave empty */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-foreground-muted)]">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-signature)] focus:outline-none focus:ring-1 focus:ring-[var(--color-signature)]"
          placeholder="Your name"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-foreground-muted)]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={320}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-signature)] focus:outline-none focus:ring-1 focus:ring-[var(--color-signature)]"
          placeholder="you@example.com"
          disabled={status === "sending"}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-foreground-muted)]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={2000}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-signature)] focus:outline-none focus:ring-1 focus:ring-[var(--color-signature)]"
          placeholder="Your message"
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-[var(--color-signature-muted)]" role="status">
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}

      <Button
        as="button"
        type="submit"
        variant="primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
