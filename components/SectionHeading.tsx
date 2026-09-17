import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const eyebrowColor = tone === "light" ? "text-gold-300" : "text-gold-600";
  const titleColor = tone === "light" ? "text-cream-50" : "text-navy-900";
  const descColor = tone === "light" ? "text-cream-100/85" : "text-navy-700/80";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span
          className={`text-sm font-semibold tracking-[0.2em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
