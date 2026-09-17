"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SignUpErrors = Partial<
  Record<"fullName" | "email" | "phone" | "password" | "confirmPassword", string>
>;

export function SignUpForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const password = String(data.get("password") ?? "").trim();
    const confirmPassword = String(data.get("confirmPassword") ?? "").trim();

    const nextErrors: SignUpErrors = {};
    if (!fullName) nextErrors.fullName = "Please enter your full name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!phone) nextErrors.phone = "Please enter your phone number.";
    if (!password) {
      nextErrors.password = "Please create a password.";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }
    if (!confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (password && confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p role="status" className="rounded-lg bg-blue-50 px-3 py-2.5 text-sm text-navy-800/85">
        Account creation isn&apos;t connected to a backend yet — this form is
        ready for when our member area launches. Please{" "}
        <a href="#contact" className="font-semibold text-blue-600 hover:text-blue-500">
          get in touch
        </a>{" "}
        if you&apos;d like to hear from us in the meantime.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="signup-name" className="text-sm font-medium text-navy-900">
          Full Name
        </label>
        <input
          id="signup-name"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "signup-name-error" : undefined}
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.fullName ? (
          <p id="signup-name-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.fullName}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="signup-email" className="text-sm font-medium text-navy-900">
          Email
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "signup-email-error" : undefined}
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.email ? (
          <p id="signup-email-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="signup-phone" className="text-sm font-medium text-navy-900">
          Phone Number
        </label>
        <input
          id="signup-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "signup-phone-error" : undefined}
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.phone ? (
          <p id="signup-phone-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="signup-password" className="text-sm font-medium text-navy-900">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "signup-password-error" : undefined}
            className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
          {errors.password ? (
            <p id="signup-password-error" role="alert" className="text-xs font-medium text-terracotta-600">
              {errors.password}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="signup-confirm-password" className="text-sm font-medium text-navy-900">
            Confirm Password
          </label>
          <input
            id="signup-confirm-password"
            name="confirmPassword"
            type="password"
            required
            autoComplete="new-password"
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={errors.confirmPassword ? "signup-confirm-password-error" : undefined}
            className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />
          {errors.confirmPassword ? (
            <p id="signup-confirm-password-error" role="alert" className="text-xs font-medium text-terracotta-600">
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-md"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-navy-800/70">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-semibold text-blue-600 transition-colors hover:text-blue-500"
        >
          Log In
        </button>
      </p>
    </form>
  );
}
