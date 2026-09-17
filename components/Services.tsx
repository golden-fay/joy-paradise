import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  HomeHeartIcon,
  MusicNoteIcon,
  PlayfulStarIcon,
  TeaCupIcon,
  UsersIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
  note?: string;
};

const SERVICES: Service[] = [
  {
    icon: UsersIcon,
    title: "Companionship & Social Support",
    items: [
      "Friendly visits and genuine conversation",
      "Reducing loneliness and social isolation",
      "Hobbies, reading, games and sharing stories",
      "Emotional support and a reassuring presence",
      "Encouraging independence and confidence",
    ],
  },
  {
    icon: MusicNoteIcon,
    title: "Music Therapy & Creative Engagement",
    items: [
      "Music sessions tailored to personal preferences",
      "Singing, listening and musical activities",
      "Creative arts and crafts",
      "Meaningful engagement through shared interests",
    ],
  },
  {
    icon: TeaCupIcon,
    title: "Meal Support",
    items: [
      "Warming and serving pre-prepared food",
      "Leaving meals ready and accessible",
      "Grocery shopping and meal planning",
      "Collecting prescriptions",
      "Preparing light refreshments and hot drinks",
    ],
    note: "We do not physically feed clients.",
  },
  {
    icon: HomeHeartIcon,
    title: "Domestic & Practical Help",
    items: [
      "Light housekeeping",
      "Tidying, cleaning and laundry",
      "Shopping and errands",
      "Collecting groceries, prescriptions and essentials",
      "Escorting to appointments or gentle walks",
      "Letter writing, card management and organising mail",
      "Creating a clean, safe and comfortable home environment",
    ],
  },
  {
    icon: PlayfulStarIcon,
    title: "Children's Companionship & Support",
    items: [
      "Engaging play and creative activities",
      "Reading and storytelling",
      "Educational fun",
      "Playing with toys",
      "Encouraging healthy development",
      "Keeping children safe, occupied and happy",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream-100/60 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Support shaped around real, everyday life"
          description="Every service is delivered with warmth, patience and respect — helping people stay connected, comfortable and independent at home."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, items, note }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-lg"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm">
                <Icon className="size-7" aria-hidden />
              </span>
              <h3 className="font-display text-xl font-semibold text-navy-950">
                {title}
              </h3>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-navy-800/80">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {note ? (
                <p className="mt-1 rounded-lg bg-terracotta-400/10 px-3 py-2 text-xs font-semibold text-terracotta-600">
                  {note}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
