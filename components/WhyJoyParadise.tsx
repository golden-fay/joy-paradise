import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  CompassIcon,
  HandHeartIcon,
  PlayfulStarIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@/components/icons";

const VALUES = [
  {
    icon: HandHeartIcon,
    title: "Compassion",
    description: "Kindness and understanding guide every visit we make.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Dignity",
    description: "Everyone we support is treated with respect and care.",
  },
  {
    icon: UsersIcon,
    title: "Connection",
    description: "Real relationships that ease loneliness and isolation.",
  },
  {
    icon: CompassIcon,
    title: "Independence",
    description: "Support that empowers, rather than takes over.",
  },
  {
    icon: PlayfulStarIcon,
    title: "Meaningful moments",
    description: "Shared time that brings comfort, joy and purpose.",
  },
];

export function WhyJoyParadise() {
  return (
    <section id="why" className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Joy Paradise"
          title="The values behind every visit"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-navy-900/8 bg-cream-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                <Icon className="size-6" />
              </span>
              <h3 className="font-display text-base font-semibold text-navy-950">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-800/75">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
