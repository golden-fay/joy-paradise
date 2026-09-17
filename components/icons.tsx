import type { SVGProps } from "react";

/**
 * Minimal hand-drawn line icon set used across the site.
 * All icons share the same stroke-based style for visual consistency.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.2s-7.2-4.6-9.6-9.1C1 8.3 2.1 5 5.3 4.2c2-.5 3.9.3 5 2 .3.5.9.5 1.2 0 1.1-1.7 3-2.5 5-2 3.2.8 4.3 4.1 2.9 6.9C19.2 15.6 12 20.2 12 20.2Z" />
    </svg>
  );
}

export function MusicNoteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 18V5.5L20 3v12.5" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="15.5" r="2.5" />
    </svg>
  );
}

export function TeaCupIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7 4.5c0 .8.7 1-.7 2S6 8.5 6 8.5M11 4.5c0 .8.7 1-.7 2s-.3 2-.3 2" />
    </svg>
  );
}

export function HomeHeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 10.5 12 4l8.5 6.5" />
      <path d="M5.5 9.5V19a1 1 0 0 0 1 1H10v-4a2 2 0 1 1 4 0v4h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function PlayfulStarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c.6 2.7 1.5 4.6 2.8 5.9 1.3 1.3 3.2 2.2 5.9 2.8-2.7.6-4.6 1.5-5.9 2.8-1.3 1.3-2.2 3.2-2.8 5.9-.6-2.7-1.5-4.6-2.8-5.9-1.3-1.3-3.2-2.2-5.9-2.8 2.7-.6 4.6-1.5 5.9-2.8 1.3-1.3 2.2-3.2 2.8-5.9Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-2.5Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15 19c.3-2.3 1.7-4 3.6-4.6" />
    </svg>
  );
}

export function HandHeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13.5h4l3 1.2h4.3c1.3 0 1.3 1.8 0 1.8H10" />
      <path d="M3 13.5v6M14.3 16.5l4-1.5c1.2-.5 2.2.9 1.3 1.8l-4.8 4.2a3 3 0 0 1-2 .7H7" />
      <path d="M13.5 6.8c0-1.4 1.2-2.3 2.4-2.3 1 0 1.7.5 2.1 1.1.4-.6 1.1-1.1 2.1-1.1 1.2 0 2.4.9 2.4 2.3 0 1.8-2.1 3.2-4.5 5.3-2.4-2.1-4.5-3.5-4.5-5.3Z" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-1.8 4.3a1 1 0 0 1-.5.5l-4.3 1.8 1.8-4.3a1 1 0 0 1 .5-.5l4.3-1.8Z" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.2 2.3 2.3 4.7-4.9" />
    </svg>
  );
}

export function CrossCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m9.3 9.3 5.4 5.4M14.7 9.3l-5.4 5.4" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 4h3l1.3 4.2-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.2 1.3v3c0 1.1-1 1.9-2 1.6-4-1-9.6-6.6-10.6-10.6-.3-1 .5-2 1.1-4.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-6 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

