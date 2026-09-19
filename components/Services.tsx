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
  imageSrc: string;
  imageAlt: string;
  items: string[];
  note?: string;
};

const SERVICES: Service[] = [
  {
    icon: UsersIcon,
    title: "Companionship & Social Support",
    imageSrc: "/images/companionship-social-support.jpg",
    imageAlt: "A support worker sharing a warm conversation with an older woman at home",
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
    imageSrc: "/images/music-therapy.jpg",
    imageAlt: "An older woman and support worker playing guitars together at home",
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
    imageSrc: "/images/meal-support.jpg",
    imageAlt: "A support worker preparing a meal with an older woman in a kitchen",
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
    imageSrc: "/images/domestic-practical-help.jpg",
    imageAlt: "A support worker folding clean laundry in a comfortable home",
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
    imageSrc: "/images/children-companionship.jpg",
    imageAlt: "An adult supporting two children with a creative drawing activity at home",
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
    <section id="services" className="relative overflow-hidden bg-cream-100/60 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 size-72 rounded-full border-[42px] border-blue-300/20 sm:size-96 sm:border-[56px]" />
        <div className="absolute -right-36 bottom-[-10rem] size-[30rem] rounded-full bg-white/65" />
        <div className="absolute inset-x-0 top-[24%] h-72 bg-[radial-gradient(ellipse_at_center,rgba(161,206,220,0.2),transparent_68%)] sm:h-96" />
      </div>
      <Container className="relative z-10 flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Services"
          title="Support shaped around real, everyday life"
          description="Every service is delivered with warmth, patience and respect — helping people stay connected, comfortable and independent at home."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, imageSrc, imageAlt, items, note }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold leading-tight text-navy-950">
                  {title}
                </h3>
                <ul className="flex flex-col gap-2 text-sm leading-relaxed text-navy-800/80">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {note ? (
                  <p className="mt-1 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-navy-800">
                    {note}
                  </p>
                ) : null}
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-blue-700 transition-colors hover:text-navy-900"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
