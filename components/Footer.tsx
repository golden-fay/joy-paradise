import { Container } from "@/components/Container";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Boundaries", href: "#boundaries" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Companionship & Social Support",
  "Music Therapy & Creative Engagement",
  "Meal Support",
  "Domestic & Practical Help",
  "Children's Companionship & Support",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream-100/80">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#041B36,#072D5A_58%,#041B36)]" />
        <div className="absolute -right-28 -top-36 size-[28rem] rounded-full border-[54px] border-blue-300/10" />
        <div className="absolute -left-24 bottom-[-14rem] size-[30rem] rounded-full border-[58px] border-blue-100/10" />
        <div className="absolute bottom-[18%] left-[34%] h-24 w-80 rounded-[50%] border-y-[18px] border-blue-300/10 rotate-[-8deg]" />
      </div>
      <Container className="relative z-10 grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-display text-xl font-semibold text-cream-50">
            Joy Paradise
          </span>
          <p className="max-w-xs text-sm leading-relaxed">
            Warm, compassionate companionship and practical support, helping
            people across the UK feel safe, connected and cared for.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50/90">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-blue-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50/90">
            Services
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {SERVICE_LINKS.map((service) => (
              <li key={service}>
                <a href="#services" className="transition-colors hover:text-blue-300">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50/90">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#contact" className="transition-colors hover:text-blue-300">
                Send an enquiry
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-blue-300">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream-50/10 py-6">
        <Container>
          <p className="text-center text-xs text-cream-100/60">
            © {year} Joy Paradise. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
