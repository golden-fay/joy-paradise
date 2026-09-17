import type { SVGProps } from "react";

/**
 * Original, on-brand illustrations (no external images/photos) used to bring
 * warmth and visual interest to key sections without any licensing risk.
 * All shapes are simple, flat and rendered purely with the site's colour tokens.
 */
type IllustrationProps = SVGProps<SVGSVGElement>;

export function CompanionshipIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" {...props}>
      <rect width="400" height="320" rx="32" fill="#0e2a52" />
      <circle cx="330" cy="60" r="90" fill="#1464d2" opacity="0.35" />
      <circle cx="60" cy="260" r="70" fill="#f4b942" opacity="0.18" />
      {/* sofa */}
      <rect x="60" y="200" width="280" height="70" rx="18" fill="#15396a" />
      <rect x="60" y="180" width="70" height="40" rx="14" fill="#15396a" />
      <rect x="270" y="180" width="70" height="40" rx="14" fill="#15396a" />
      {/* seated companion figure */}
      <circle cx="150" cy="150" r="26" fill="#f7cb6e" />
      <path d="M105 210c0-30 22-50 45-50s45 20 45 50" fill="#3f82e0" />
      {/* seated older person figure */}
      <circle cx="255" cy="150" r="26" fill="#e9f1fd" />
      <path d="M210 210c0-30 22-50 45-50s45 20 45 50" fill="#7dabe9" />
      {/* teacup between them */}
      <rect x="190" y="195" width="20" height="14" rx="3" fill="#f4b942" />
      {/* window / warm glow */}
      <circle cx="200" cy="70" r="34" fill="#f7cb6e" opacity="0.55" />
    </svg>
  );
}

export function ConnectionIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 400 320" {...props}>
      <rect width="400" height="320" rx="32" fill="#eef4fd" />
      <circle cx="70" cy="50" r="60" fill="#d9e8fb" />
      <circle cx="340" cy="270" r="80" fill="#f8dfa0" opacity="0.4" />
      {/* two figures, one gently supporting the other */}
      <circle cx="150" cy="140" r="28" fill="#1464d2" />
      <path d="M104 220c0-32 20-56 46-56s46 24 46 56" fill="#1158c2" />
      <circle cx="250" cy="130" r="24" fill="#f4b942" />
      <path d="M210 220c0-30 18-52 40-52s40 22 40 52" fill="#f7cb6e" />
      {/* connecting hand / bridge shape */}
      <path
        d="M186 190c14 10 30 10 44 0"
        stroke="#071b3a"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* small heart accent */}
      <path
        d="M215 90c3-6 12-6 12 2 0 6-12 14-12 14s-12-8-12-14c0-8 9-8 12-2Z"
        fill="#d67c5c"
      />
    </svg>
  );
}

export function PrivacyIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 300" {...props}>
      <circle cx="150" cy="150" r="145" fill="none" stroke="#f4b942" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="150" cy="150" r="110" fill="none" stroke="#f4b942" strokeOpacity="0.2" strokeWidth="1.5" />
      <path
        d="M150 40 220 70v60c0 65-42 108-70 130-28-22-70-65-70-130V70Z"
        fill="#0e2a52"
      />
      <path
        d="M150 40 220 70v60c0 65-42 108-70 130V40Z"
        fill="#15396a"
      />
      <path
        d="M120 148l20 20 42-46"
        stroke="#f4b942"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function CommunityIllustration(props: IllustrationProps) {
  const people = [
    { x: 150, y: 70, color: "#f4b942" },
    { x: 230, y: 110, color: "#3f82e0" },
    { x: 250, y: 190, color: "#7dabe9" },
    { x: 190, y: 240, color: "#f7cb6e" },
    { x: 100, y: 230, color: "#1464d2" },
    { x: 60, y: 160, color: "#e9f1fd" },
    { x: 90, y: 100, color: "#d9e8fb" },
  ];
  return (
    <svg viewBox="0 0 300 300" {...props}>
      <circle cx="150" cy="160" r="40" fill="#f4b942" opacity="0.4" />
      {people.map((p) => (
        <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r="16" fill={p.color} />
      ))}
      <circle cx="150" cy="160" r="120" fill="none" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1.5" />
    </svg>
  );
}

export function FriendlyWaveIllustration(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 320 260" {...props}>
      <rect width="320" height="260" rx="28" fill="#e9f1fd" />
      <circle cx="250" cy="60" r="60" fill="#d9e8fb" />
      <circle cx="160" cy="150" r="34" fill="#1464d2" />
      <path d="M108 235c0-36 24-62 52-62s52 26 52 62" fill="#1158c2" />
      {/* waving hand */}
      <circle cx="222" cy="120" r="12" fill="#f4b942" />
      <path d="M214 108c-2-10 6-16 12-10" stroke="#f4b942" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* speech bubble */}
      <path
        d="M70 60h90a14 14 0 0 1 14 14v34a14 14 0 0 1-14 14h-56l-20 18v-18h-14a14 14 0 0 1-14-14V74a14 14 0 0 1 14-14Z"
        fill="#ffffff"
      />
      <circle cx="95" cy="91" r="5" fill="#1464d2" />
      <circle cx="115" cy="91" r="5" fill="#1464d2" />
      <circle cx="135" cy="91" r="5" fill="#1464d2" />
    </svg>
  );
}
