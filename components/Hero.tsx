import { Container } from "@/components/Container";
import { HandHeartIcon, PlayfulStarIcon, UsersIcon } from "@/components/icons";
import { CompanionshipIllustration } from "@/components/illustrations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-blue-700 pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_15%_30%,rgba(63,130,224,0.25),transparent_45%)]"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up flex flex-col items-start gap-6">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold-300">
            Companionship &amp; Practical Support Across the UK
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-[3.25rem]">
            Where there is care, there is joy.
            <br />
            Where there is joy, there is{" "}
            <span className="text-gold-400">paradise</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-cream-100/85">
            Joy Paradise provides warm, compassionate companionship, practical
            help and meaningful activities that help people feel safe,
            connected and supported — in the comfort of their own home.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:from-blue-500 hover:to-blue-400 hover:shadow-lg"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white/30 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-cream-100/75">
            <span className="inline-flex items-center gap-2">
              <HandHeartIcon className="size-5 text-gold-400" /> Companionship-led
            </span>
            <span className="inline-flex items-center gap-2">
              <UsersIcon className="size-5 text-gold-400" /> Person-centred
            </span>
            <span className="inline-flex items-center gap-2">
              <PlayfulStarIcon className="size-5 text-gold-400" /> Unregulated support
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up relative">
          <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-[2rem] shadow-xl">
            <CompanionshipIllustration
              role="img"
              aria-label="A companion sitting with someone at home, sharing a cup of tea and a warm conversation"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid slice"
            />
          </div>
          <span className="absolute -bottom-4 left-6 rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-navy-800 shadow-md">
            Companionship, wherever you call home
          </span>
        </div>
      </Container>
    </section>
  );
}
