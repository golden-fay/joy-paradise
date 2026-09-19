import { Container } from "@/components/Container";
import { HandHeartIcon, PlayfulStarIcon, UsersIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 pt-12 pb-20 sm:pt-16 sm:pb-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#072D5A_0%,#124578_58%,#17617B_100%)]" />
        <div className="absolute -right-32 -top-48 size-[34rem] rounded-full border-[72px] border-blue-300/15 sm:size-[46rem] sm:border-[96px]" />
        <div className="absolute -bottom-52 -left-40 size-[38rem] rounded-full border-[68px] border-blue-300/10 sm:size-[50rem] sm:border-[90px]" />
        <div className="absolute -left-[12%] top-[22%] h-48 w-[124%] rotate-[-7deg] rounded-[50%] border-y-[34px] border-blue-100/10 sm:h-64 sm:border-y-[48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,243,246,0.16),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(161,206,220,0.14),transparent_30%)]" />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up flex flex-col items-start gap-6">
          <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-300">
            Companionship &amp; Practical Support Across the UK
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-[3.25rem]">
            Where there is care, there is joy.
            <br />
            Where there is joy, there is{" "}
            <span className="text-blue-300">paradise</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            Joy Paradise provides warm, compassionate companionship, practical
            help and meaningful activities that help people feel safe,
            connected and supported — in the comfort of their own home.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-blue-300 px-7 py-3.5 text-center text-base font-semibold text-navy-950 shadow-md transition-all hover:bg-white hover:shadow-lg"
            >
              Make an Enquiry
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore Our Services
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
          <div
            role="img"
            aria-label="People sharing companionship and conversation over a cup of tea"
            className="relative aspect-[4/3.2] w-full overflow-hidden rounded-[2rem] border border-white/20 bg-[url('/images/hero-companionship.jpg')] bg-cover bg-center shadow-2xl"
          >
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
              <span className="max-w-xs text-sm font-medium leading-relaxed sm:text-base">
                Warm support and meaningful connection, wherever you call home.
              </span>
              <span aria-hidden className="hidden size-12 shrink-0 rounded-full border border-white/40 bg-white/15 sm:block" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
