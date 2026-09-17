import { Container } from "@/components/Container";
import { PlayfulStarIcon } from "@/components/icons";
import { CommunityIllustration } from "@/components/illustrations";

export function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-blue-700 py-20 text-cream-50 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-400/15 blur-3xl"
      />
      <CommunityIllustration
        role="img"
        aria-label="A circle of people connected together, representing community and inclusion"
        className="pointer-events-none absolute -right-10 -bottom-10 hidden h-72 w-72 opacity-80 sm:block"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
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
