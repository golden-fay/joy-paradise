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
    <section id="boundaries" className="relative overflow-hidden bg-navy-950 py-20 text-cream-50 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#072D5A_0%,#124578_52%,#072D5A_100%)]" />
        <div className="absolute -left-32 top-[-12rem] size-[34rem] rounded-full border-[72px] border-blue-300/20 sm:-left-24 sm:top-[-15rem] sm:size-[44rem] sm:border-[92px]" />
        <div className="absolute -right-32 bottom-[-15rem] size-[38rem] rounded-full border-[88px] border-blue-100/15 sm:-right-24 sm:bottom-[-20rem] sm:size-[52rem] sm:border-[112px]" />
        <div className="absolute left-[-10%] right-[-10%] top-[38%] h-[38%] rounded-[50%] border-t-[56px] border-blue-300/15 bg-blue-300/[0.06] sm:border-t-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(232,243,246,0.2),transparent_22%),radial-gradient(circle_at_15%_85%,rgba(161,206,220,0.16),transparent_26%)]" />
      </div>
      <Container className="relative z-10 flex flex-col gap-12">
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

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col gap-6 rounded-2xl border border-blue-300/25 bg-blue-300/10 p-7 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-300/20 text-blue-300">
                <CheckCircleIcon className="size-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                  What We Provide
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-cream-50">
                  Support with warmth and purpose
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream-50/90 sm:text-base">
              All our support centres around companionship, practical help,
              creative engagement, and creating a warm, joyful environment.
            </p>
          </article>

          <article className="flex flex-col gap-6 rounded-2xl border border-[#F4B942]/45 bg-navy-950/35 p-7 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#F4B942]/50 bg-[#F4B942]/15 text-[#F4B942]">
                <CrossCircleIcon className="size-6" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4B942]">
                  What We Don&apos;t Provide
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-cream-50">
                  Clear service boundaries
                </h3>
              </div>
            </div>
            <ul className="flex flex-col gap-3 rounded-xl border border-[#F4B942]/45 bg-[#FFF8E1] p-5 shadow-sm">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy-900">
                  <CrossCircleIcon className="mt-0.5 size-5 shrink-0 text-[#F4B942]" aria-hidden />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="border-t border-[#F4B942]/25 pt-5 text-sm leading-relaxed text-cream-100/80">
              If you require personal care services, we are happy to signpost
              you to trusted regulated providers in your local area.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
