"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { AuthModal } from "@/components/AuthModal";
import { LoginForm } from "@/components/LoginForm";
import { SignUpForm } from "@/components/SignUpForm";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Boundaries", href: "#boundaries" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authView, setAuthView] = useState<"login" | "signup" | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/90 shadow-sm backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between py-3">
        <a
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-navy-900"
          onClick={() => setIsOpen(false)}
        >
          Joy <span className="text-gold-600">Paradise</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-navy-800 transition-colors hover:text-blue-600"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setAuthView("login")}
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-900/5 hover:text-blue-600"
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setAuthView("signup")}
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-md"
          >
            Sign Up
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-900 transition-colors hover:bg-navy-900/5 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      {isOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-navy-900/10 bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-navy-800 transition-colors hover:bg-navy-900/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-navy-900/10 pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setAuthView("login");
                }}
                className="rounded-full border-2 border-navy-900/15 px-5 py-3 text-center text-sm font-semibold text-navy-900 transition-colors hover:border-blue-500/40 hover:bg-blue-50"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setAuthView("signup");
                }}
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:from-blue-500 hover:to-blue-400"
              >
                Sign Up
              </button>
            </div>
          </Container>
        </nav>
      ) : null}

      {authView === "login" ? (
        <AuthModal titleId="login-title" title="Welcome Back" onClose={() => setAuthView(null)}>
          <LoginForm onSwitchToSignUp={() => setAuthView("signup")} />
        </AuthModal>
      ) : null}

      {authView === "signup" ? (
        <AuthModal titleId="signup-title" title="Create Your Account" onClose={() => setAuthView(null)}>
          <SignUpForm onSwitchToLogin={() => setAuthView("login")} />
        </AuthModal>
      ) : null}
    </header>
  );
}
