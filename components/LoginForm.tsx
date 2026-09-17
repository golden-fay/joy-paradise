"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LoginErrors = Partial<Record<"email" | "password", string>>;

export function LoginForm({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) {
  const [errors, setErrors] = useState<LoginErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [forgotClicked, setForgotClicked] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "").trim();

    const nextErrors: LoginErrors = {};
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!password) nextErrors.password = "Please enter your password.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="login-email" className="text-sm font-medium text-navy-900">
          Email address
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "login-email-error" : undefined}
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.email ? (
          <p id="login-email-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="text-sm font-medium text-navy-900">
            Password
          </label>
          <button
            type="button"
            onClick={() => setForgotClicked(true)}
            className="text-xs font-medium text-blue-600 transition-colors hover:text-blue-500"
          >
            Forgot password?
          </button>
        </div>
        <input
          id="login-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "login-password-error" : undefined}
          className="rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-navy-950 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
        />
        {errors.password ? (
          <p id="login-password-error" role="alert" className="text-xs font-medium text-terracotta-600">
            {errors.password}
          </p>
        ) : null}
        {forgotClicked ? (
          <p role="status" className="text-xs text-navy-800/70">
            Password reset isn&apos;t available yet — please{" "}
            <a href="#contact" className="font-semibold text-blue-600 hover:text-blue-500">
              contact us
            </a>{" "}
            for help.
          </p>
        ) : null}
      </div>

      {submitted ? (
        <p role="status" className="rounded-lg bg-blue-50 px-3 py-2.5 text-sm text-navy-800/85">
          Account sign-in isn&apos;t connected yet — this form is ready for
          when our member area launches. Please{" "}
          <a href="#contact" className="font-semibold text-blue-600 hover:text-blue-500">
            get in touch
          </a>{" "}
          if you need help now.
        </p>
      ) : (
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-md"
        >
          Log In
        </button>
      )}

      <p className="text-center text-sm text-navy-800/70">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignUp}
          className="font-semibold text-blue-600 transition-colors hover:text-blue-500"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}
