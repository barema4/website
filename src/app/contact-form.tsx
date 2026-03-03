"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/6f58c702ae38c70e47789f841821720e", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-10 text-center">
        <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-600">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-900">Message Sent!</h3>
        <p className="mb-6 text-green-800/60">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-green-600 transition-colors hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New message from Royal Roastery website" />
      <input type="text" name="_honey" className="hidden" />
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-green-900"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-green-200 bg-green-50/50 px-4 py-3 text-green-900 placeholder-green-400 outline-none transition-colors focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-green-900"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-green-200 bg-green-50/50 px-4 py-3 text-green-900 placeholder-green-400 outline-none transition-colors focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-green-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-green-200 bg-green-50/50 px-4 py-3 text-green-900 placeholder-green-400 outline-none transition-colors focus:border-green-400 focus:ring-2 focus:ring-green-400/20"
          placeholder="Tell us about your coffee needs..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
