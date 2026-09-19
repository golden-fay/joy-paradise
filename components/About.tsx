import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CompassIcon, HandHeartIcon, PlayfulStarIcon, UsersIcon } from "@/components/icons";

const PILLARS = [
  {
    icon: HandHeartIcon,
    title: "Companionship",
    description: "Genuine friendship, conversation and a reassuring presence.",
  },
  {
    icon: UsersIcon,
    title: "Practical help",
    description: "Everyday support that keeps homes comfortable and cared for.",
  },
  {
    icon: CompassIcon,
    title: "Independence",
    description: "Encouraging confidence to live life on your own terms.",
  },
  {
    icon: PlayfulStarIcon,
    title: "Meaningful moments",
    description: "Shared interests, creativity and connection that matter.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-blue-50/90 sm:size-[28rem]" />
        <div className="absolute -left-32 bottom-[-10rem] size-[30rem] rounded-full border-[54px] border-blue-100/70" />
        <div className="absolute right-[8%] top-[14%] h-40 w-40 rounded-full border-[22px] border-blue-300/20" />
      </div>
      <Container className="relative z-10 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Joy Paradise"
            align="left"
            title="Support that feels like family, not a service"
          />
          <p className="text-lg leading-relaxed text-navy-800/85">
            At Joy Paradise, we provide warm, compassionate support that helps
            people feel safe, happy, and connected. We believe everyone
            deserves to live with dignity, comfort, and joy — regardless of
            age or ability.
          </p>
          <p className="text-lg leading-relaxed text-navy-800/85">
            Our support centres on companionship, practical help,
            independence and connection. Every visit is an opportunity to
            share a meaningful moment, whether that&apos;s a conversation over
            tea, a favourite song, or simply a helping hand around the home.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/images/about-joys-paradise.jpg"
              alt="Support worker sharing a warm conversation with an older woman"
              className="h-56 w-full object-cover sm:h-64"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl border border-navy-900/8 bg-cream-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-800/75">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
