import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircleIcon, CrossCircleIcon, ShieldCheckIcon } from "@/components/icons";

const NOT_INCLUDED = [
  "Personal care such as washing, dressing, bathing, toileting or incontinence support",
  "Administration of medication — we may only gently remind or prompt",
  "Physical assistance with eating or drinking",
  "Clinical or medical care of any kind",
];

export function Boundaries() {
  return (
    <section id="boundaries" className="bg-navy-950 py-20 text-cream-50 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
            <ShieldCheckIcon className="size-6" />
          </span>
          <SectionHeading
            tone="light"
            title="Our Service Boundaries"
            description="Joy Paradise provides unregulated support services. We are NOT a CQC-regulated provider."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-cream-50/10 bg-cream-50/5 p-7">
            <h3 className="font-display text-lg font-semibold text-cream-50">
              Our services do not include
            </h3>
            <ul className="flex flex-col gap-3">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-cream-100/85">
                  <CrossCircleIcon className="mt-0.5 size-5 shrink-0 text-terracotta-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 rounded-2xl border border-gold-400/20 bg-gold-500/10 p-7">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-gold-300" />
                <p className="text-sm leading-relaxed text-cream-50/90">
                  All our support centres around companionship, practical
                  help, creative engagement, and creating a warm, joyful
                  environment.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-cream-50/10 bg-cream-50/5 p-7">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-gold-300" />
                <p className="text-sm leading-relaxed text-cream-100/85">
                  If you require personal care services, we are happy to
                  signpost you to trusted regulated providers in your local
                  area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
