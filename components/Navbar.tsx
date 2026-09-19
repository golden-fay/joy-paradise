"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { CloseIcon, MenuIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Boundaries", href: "#boundaries" },
  { label: "Mission", href: "#mission" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900 shadow-[0_8px_24px_rgba(4,27,54,0.12)]">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-3">
        <a
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Joy <span className="text-blue-300">Paradise</span>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-blue-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-blue-300 px-4 py-2.5 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-white"
          >
            Make an Enquiry
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
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
          className="border-t border-white/10 bg-navy-900 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-blue-300 px-5 py-3 text-center text-sm font-semibold text-navy-950 transition-colors hover:bg-white"
              >
                Make an Enquiry
              </a>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
