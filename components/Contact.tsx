import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ClockIcon, GlobeIcon, MailIcon, PhoneIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-blue-50 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#E8F3F6_0%,#F8FCFD_100%)]" />
        <div className="absolute -right-28 -top-28 size-80 rounded-full border-[44px] border-blue-300/30 sm:size-[28rem] sm:border-[62px]" />
        <div className="absolute -left-32 bottom-[-12rem] size-[30rem] rounded-full bg-white/80" />
        <div className="absolute left-[18%] top-[12%] h-32 w-32 rounded-full bg-blue-300/15" />
      </div>
      <Container className="relative z-10 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in Touch"
          description="We're here to help. Whether you have a question, need support, or want to learn more about what we offer, get in touch with us."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="flex flex-col gap-7 rounded-2xl border border-navy-900/10 bg-white/95 p-6 shadow-lg shadow-navy-900/5 sm:p-8">
            <div className="overflow-hidden rounded-xl border border-blue-100 shadow-sm">
              <img
                src="/images/contact-enquiry.jpg"
                alt="Woman using a phone to make an enquiry with Joy's Paradise"
                className="h-36 w-full object-cover sm:h-44"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                Contact information
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy-950">
                Joy Paradise
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-blue-50/70 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-300/25 text-blue-700">
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
              <li className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-blue-50/70 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-300/25 text-blue-700">
                  <MailIcon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">
                    Email
                  </span>
                  <a
                    href="mailto:support@joyparadise.org"
                    className="cursor-pointer rounded-sm text-sm text-navy-800/85 underline decoration-blue-300/70 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                  >
                    support@joyparadise.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-blue-50/70 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-300/25 text-blue-700">
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
              <li className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-blue-50/70 p-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-300/25 text-blue-700">
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

          <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-xl shadow-navy-900/10 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
