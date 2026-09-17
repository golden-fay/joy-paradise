import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ClockIcon, GlobeIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { FriendlyWaveIllustration } from "@/components/illustrations";

export function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-blue-50 to-cream-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in Touch"
          description="We're here to help. Whether you have a question, need support, or want to learn more about what we offer, get in touch with us."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6 rounded-2xl border border-navy-900/8 bg-white p-8 shadow-sm">
            <div className="overflow-hidden rounded-xl">
              <FriendlyWaveIllustration
                role="img"
                aria-label="A friendly person waving beside a chat bubble, showing how easy it is to reach us"
                className="h-36 w-full"
                preserveAspectRatio="xMidYMid slice"
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-navy-950">
              Joy Paradise
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600">
                  <PhoneIcon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                    Phone
                  </span>
                  <span className="text-sm text-navy-800/85">
                    +44 XXXX XXX XXXX
                  </span>
                  <span className="text-xs italic text-navy-800/50">
                    Placeholder number for design purposes only
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600">
                  <MailIcon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                    Email
                  </span>
                  <a
                    href="mailto:support@joyparadise.org"
                    className="text-sm text-navy-800/85 underline decoration-gold-500/50 underline-offset-2 transition-colors hover:text-gold-600"
                  >
                    support@joyparadise.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600">
                  <ClockIcon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                    Opening Hours
                  </span>
                  <span className="text-sm text-navy-800/85">
                    Monday – Friday
                  </span>
                  <span className="text-sm text-navy-800/85">
                    9:00 AM – 5:00 PM
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-600">
                  <GlobeIcon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                    Online Support
                  </span>
                  <span className="text-sm text-navy-800/85">
                    Our services are provided online, so you can reach us from
                    wherever you are.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-navy-900/8 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
