import { Container } from "@/components/Container";
import { PlayfulStarIcon } from "@/components/icons";
import { CommunityIllustration } from "@/components/illustrations";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-navy-900 py-20 text-cream-50 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#072D5A,#124578_55%,#072D5A)]" />
        <div className="absolute -left-40 -top-48 size-[34rem] rounded-full border-[72px] border-blue-300/15 sm:size-[44rem] sm:border-[90px]" />
        <div className="absolute -right-32 bottom-[-14rem] size-[32rem] rounded-full border-[66px] border-blue-100/10 sm:size-[44rem] sm:border-[88px]" />
        <div className="absolute left-[10%] right-[10%] top-[18%] h-56 rounded-[50%] border-y-[32px] border-blue-300/10 sm:h-72 sm:border-y-[44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,243,246,0.16),transparent_26%),radial-gradient(circle_at_84%_80%,rgba(161,206,220,0.14),transparent_30%)]" />
      </div>
      <CommunityIllustration
        role="img"
        aria-label="A circle of people connected together, representing community and inclusion"
        className="pointer-events-none absolute -right-10 -bottom-10 hidden h-72 w-72 opacity-80 sm:block"
      />
      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <PlayfulStarIcon className="size-9 text-gold-300" />
        <blockquote className="max-w-3xl font-display text-2xl font-medium leading-snug sm:text-3xl">
          &ldquo;Where there is care, there is joy. Where there is joy, there
          is paradise.&rdquo;
        </blockquote>
        <p className="max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
          Every visit is filled with kindness, respect, and genuine care. We
          don&apos;t just provide support — we build connections.
        </p>
      </Container>
    </section>
  );
}
