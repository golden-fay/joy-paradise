"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormErrors = Partial<Record<"name" | "email" | "supportType" | "message" | "consent", string>>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const supportType = String(data.get("supportType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Please enter your full name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!supportType) nextErrors.supportType = "Please select the type of support required.";
    if (!message) nextErrors.message = "Please enter your message.";
    if (!consent) nextErrors.consent = "Please confirm that you agree to the privacy consent before sending your enquiry.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: connect to a real email/CRM service before going live.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-gold-400/30 bg-gold-500/10 p-10 text-center"
      >
        <h3 className="font-display text-xl font-semibold text-navy-950">
          Message sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-navy-800/80">
          Thank you for contacting us. We&apos;ve received your message and
          will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
          Enquiry form
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy-950">
          Tell us how we can help
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
          Share a few details and we&apos;ll understand how best to respond.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-navy-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
          {errors.name ? (
            <p id="name-error" role="alert" className="text-xs font-medium text-terracotta-600">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-navy-900">
            Phone Number <span className="font-normal text-navy-800/50">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-navy-900">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.email ? (
          <p id="email-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="supportType" className="text-sm font-medium text-navy-900">
          Type of Support Required
        </label>
        <select
          id="supportType"
          name="supportType"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.supportType)}
          aria-describedby={errors.supportType ? "supportType-error" : undefined}
          defaultValue=""
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        >
          <option value="" disabled>Select an option</option>
          <option>Companionship &amp; Social Support</option>
          <option>Music Therapy &amp; Creative Engagement</option>
          <option>Meal Support</option>
          <option>Domestic &amp; Practical Help</option>
          <option>Children&apos;s Companionship &amp; Support</option>
          <option>General Enquiry</option>
        </select>
        {errors.supportType ? (
          <p id="supportType-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.supportType}
          </p>
        ) : null}
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-medium text-navy-900">Preferred Contact Method</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {(["Email", "Phone"] as const).map((method) => (
            <label key={method} className="flex cursor-pointer items-center gap-3 rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-800 transition-colors has-[:focus-visible]:border-blue-500 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-500/30">
              <input type="radio" name="contactMethod" value={method} defaultChecked={method === "Email"} className="size-4 accent-blue-600" />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="contactTime" className="text-sm font-medium text-navy-900">
          Preferred Contact Time
        </label>
        <select
          id="contactTime"
          name="contactTime"
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          defaultValue=""
        >
          <option value="">Select an option</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-navy-900">
          Message / Tell us how we can help
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us a little about the support you're looking for..."
          className="resize-none rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-relaxed text-navy-800/85">
          <input
            id="consent"
            type="checkbox"
            name="consent"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-blue-600"
          />
          <span>I agree that Joy&apos;s Paradise may use the information I provide to respond to my enquiry.</span>
        </label>
        {errors.consent ? (
          <p id="consent-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}
