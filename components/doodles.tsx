import React from 'react';

// Hand-drawn SVG doodles. Stroke uses currentColor so they adapt to theme.
// Consumer sizes via className.

type DoodleProps = React.SVGProps<SVGSVGElement>;

const baseProps: Partial<React.SVGProps<SVGSVGElement>> = {
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// ARROWS — a cleaner hand-drawn style. The shaft is drawn as a single path
// that explicitly ends at the arrowhead tip (using a final L command, so the
// endpoint is exact, not Bezier-approximated). The arrowhead is drawn as a
// notched/swept filled quad so it looks like a real arrow rather than a tiny
// triangle pip.
export const CrayonArrow = (props: DoodleProps) => (
  <svg viewBox="0 0 120 40" {...baseProps} {...props}>
    {/* shaft: curvy then straight, ending exactly at the tip (114, 20) */}
    <path d="M4 24 C 24 14, 50 30, 76 20 L 114 20" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* notched/swept arrowhead: tip at (114, 20), wings sweep back-up and back-down,
        with a back notch toward (92, 20) so the shaft connects cleanly */}
    <path d="M114 20 L 92 8 L 100 20 L 92 32 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const CurlyArrow = (props: DoodleProps) => (
  <svg viewBox="0 0 140 110" {...baseProps} {...props}>
    {/* curling shaft, ending with a straight segment so the tip is precise */}
    <path d="M8 14 C 32 10, 52 20, 56 42 S 38 78, 70 86 S 110 84, 120 70 L 126 62" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* swept arrowhead pointing up-right at (126, 62), notched toward shaft direction (~140°) */}
    <path d="M126 62 L 108 56 L 116 68 L 108 76 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const DownArrow = (props: DoodleProps) => (
  <svg viewBox="0 0 40 100" {...baseProps} {...props}>
    {/* wavy shaft, straightens at the end so the tip is exact */}
    <path d="M20 6 C 14 26, 26 50, 20 70 L 20 84" stroke="currentColor" strokeWidth="3" fill="none" />
    {/* swept arrowhead pointing straight down at (20, 92) */}
    <path d="M20 92 L 8 72 L 20 80 L 32 72 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// STARS / SPARKLES / HEARTS
export const Sparkle = (props: DoodleProps) => (
  <svg viewBox="0 0 40 40" {...baseProps} {...props}>
    <path d="M20 4 C 22 14, 26 18, 36 20 C 26 22, 22 26, 20 36 C 18 26, 14 22, 4 20 C 14 18, 18 14, 20 4 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.18"/>
  </svg>
);

export const Star = (props: DoodleProps) => (
  <svg viewBox="0 0 40 40" {...baseProps} {...props}>
    <path d="M20 5 L 24 16 L 35 17 L 26 25 L 29 36 L 20 30 L 11 36 L 14 25 L 5 17 L 16 16 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
  </svg>
);

export const Heart = (props: DoodleProps) => (
  <svg viewBox="0 0 40 40" {...baseProps} {...props}>
    <path d="M20 34 C 4 24, 4 8, 14 8 C 18 8, 20 12, 20 14 C 20 12, 22 8, 26 8 C 36 8, 36 24, 20 34 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.18"/>
  </svg>
);

// HOUSEHOLD OBJECTS
type FilledProps = DoodleProps & { fillClass?: string };

export const CoffeeMug = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 80 70" {...baseProps} {...props}>
    <path d="M10 18 L 12 56 C 12 62, 18 64, 24 64 L 46 64 C 52 64, 58 62, 58 56 L 60 18 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M60 26 C 70 26, 72 36, 64 44 L 60 44" stroke="currentColor" strokeWidth="2.5" />
    <path d="M10 18 L 60 18" stroke="currentColor" strokeWidth="2.5" />
    <path d="M24 12 C 22 6, 28 4, 26 -2" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    <path d="M36 10 C 34 4, 40 2, 38 -4" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    <path d="M48 12 C 46 6, 52 4, 50 -2" stroke="currentColor" strokeWidth="2" opacity="0.7" />
  </svg>
);

export const Sock = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 70 80" {...baseProps} {...props}>
    <path d="M22 6 L 22 38 C 22 44, 14 50, 10 58 C 6 66, 14 74, 24 74 L 54 74 C 60 74, 62 70, 58 64 L 42 42 C 40 38, 40 36, 40 32 L 40 6 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M22 32 L 40 32" stroke="currentColor" strokeWidth="2" />
    <path d="M22 12 L 40 12" stroke="currentColor" strokeWidth="2" />
    <path d="M22 18 L 40 18" stroke="currentColor" strokeWidth="2" opacity="0.6" />
  </svg>
);

export const Plant = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 80 90" {...baseProps} {...props}>
    <path d="M22 46 L 18 76 C 18 82, 22 84, 28 84 L 52 84 C 58 84, 62 82, 62 76 L 58 46 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M22 46 L 58 46" stroke="currentColor" strokeWidth="2.5" />
    <path d="M40 46 L 40 18" stroke="currentColor" strokeWidth="2.5" />
    <path d="M40 30 C 28 26, 18 14, 22 6 C 30 4, 40 14, 40 30 Z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M40 24 C 52 20, 60 10, 58 2 C 50 0, 42 8, 40 24 Z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M40 38 C 30 38, 24 30, 24 22" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const Receipt = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 60 90" {...baseProps} {...props}>
    <path d="M8 4 L 52 4 L 52 80 L 46 86 L 38 80 L 30 86 L 22 80 L 14 86 L 8 80 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M14 18 L 46 18" stroke="currentColor" strokeWidth="2" />
    <path d="M14 28 L 38 28" stroke="currentColor" strokeWidth="2" />
    <path d="M14 36 L 34 36" stroke="currentColor" strokeWidth="2" />
    <path d="M14 48 L 46 48" stroke="currentColor" strokeWidth="2" />
    <path d="M14 56 L 36 56" stroke="currentColor" strokeWidth="2" />
    <path d="M14 66 L 30 66" stroke="currentColor" strokeWidth="2.5" />
    <path d="M34 66 L 46 66" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const StickyNote = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 80 80" {...baseProps} {...props}>
    <path d="M6 8 L 70 6 L 74 66 L 66 74 L 8 72 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M16 22 L 60 22" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <path d="M16 34 L 56 34" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <path d="M16 46 L 50 46" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <path d="M16 58 L 44 58" stroke="currentColor" strokeWidth="2" opacity="0.6" />
  </svg>
);

export const Key = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 80 40" {...baseProps} {...props}>
    <circle cx="14" cy="20" r="10" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <circle cx="14" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M24 20 L 70 20" stroke="currentColor" strokeWidth="2.5" />
    <path d="M58 20 L 58 28" stroke="currentColor" strokeWidth="2.5" />
    <path d="M66 20 L 66 26" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const Dish = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 80 50" {...baseProps} {...props}>
    <ellipse cx="40" cy="38" rx="34" ry="8" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <ellipse cx="40" cy="34" rx="34" ry="8" stroke="currentColor" strokeWidth="2.5" fill="#FFFCF1" />
    <ellipse cx="40" cy="34" rx="24" ry="5" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="40" cy="34" rx="14" ry="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const FridgeNote = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 70 90" {...baseProps} {...props}>
    <path d="M8 8 L 62 6 L 64 84 L 6 86 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M8 32 L 64 30" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="56" cy="20" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" />
    <circle cx="56" cy="58" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor" />
    <path d="M16 46 L 50 46" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M16 56 L 44 56" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M16 66 L 48 66" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M16 76 L 38 76" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export const Mailbox = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 90 90" {...baseProps} {...props}>
    <path d="M14 32 L 14 80 L 76 80 L 76 32" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M8 32 C 8 22, 18 14, 30 14 L 60 14 C 72 14, 82 22, 82 32 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M28 32 C 28 24, 34 20, 40 20" stroke="currentColor" strokeWidth="2" />
    <path d="M60 14 L 60 32" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <path d="M70 36 L 70 52" stroke="currentColor" strokeWidth="3" />
    <path d="M70 36 L 80 32" stroke="currentColor" strokeWidth="3" />
    <path d="M30 50 L 60 50" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <path d="M30 60 L 50 60" stroke="currentColor" strokeWidth="2" opacity="0.5" />
  </svg>
);

// PEOPLE
type PersonProps = DoodleProps & { skinClass?: string; hairClass?: string };

export const RoommateA = ({ skinClass = '', hairClass = '', ...props }: PersonProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="2.5" className={skinClass} />
    <path d="M10 24 C 14 10, 30 6, 46 12 C 52 16, 52 22, 50 28 C 46 22, 38 18, 30 18 C 22 18, 14 22, 10 26 Z" stroke="currentColor" strokeWidth="2.5" className={hairClass} />
    <circle cx="22" cy="30" r="1.6" fill="currentColor" />
    <circle cx="38" cy="30" r="1.6" fill="currentColor" />
    <path d="M24 38 C 28 42, 32 42, 36 38" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="36" r="2" fill="#FFB6C1" opacity="0.7" />
    <circle cx="42" cy="36" r="2" fill="#FFB6C1" opacity="0.7" />
  </svg>
);

export const RoommateB = ({ skinClass = '', hairClass = '', ...props }: PersonProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="2.5" className={skinClass} />
    <path d="M8 26 C 12 12, 22 8, 30 8 C 38 8, 48 12, 52 26 L 48 30 L 44 24 L 40 28 L 36 22 L 32 28 L 28 22 L 24 28 L 20 22 L 16 28 L 12 30 Z" stroke="currentColor" strokeWidth="2.5" className={hairClass} />
    <path d="M20 30 L 22 30" stroke="currentColor" strokeWidth="2.5" />
    <path d="M38 30 L 40 30" stroke="currentColor" strokeWidth="2.5" />
    <path d="M26 40 C 30 44, 32 42, 34 40" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="36" r="2" fill="#FFB6C1" opacity="0.7" />
    <circle cx="42" cy="36" r="2" fill="#FFB6C1" opacity="0.7" />
  </svg>
);

export const RoommateC = ({ skinClass = '', hairClass = '', ...props }: PersonProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="2.5" className={skinClass} />
    <path d="M12 22 C 18 8, 42 8, 48 22 C 52 32, 50 38, 46 42 C 48 32, 46 28, 44 26 C 42 28, 38 30, 30 30 C 22 30, 18 28, 16 26 C 14 30, 12 32, 14 42 C 10 38, 8 32, 12 22 Z" stroke="currentColor" strokeWidth="2.5" className={hairClass} />
    <circle cx="22" cy="32" r="1.6" fill="currentColor" />
    <circle cx="38" cy="32" r="1.6" fill="currentColor" />
    <path d="M26 40 C 30 42, 34 42, 36 40" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="38" r="2" fill="#FFB6C1" opacity="0.7" />
    <circle cx="42" cy="38" r="2" fill="#FFB6C1" opacity="0.7" />
  </svg>
);

// MESS MONSTER
export const MessMonster = ({ bodyClass = '', ...props }: DoodleProps & { bodyClass?: string }) => (
  <svg viewBox="0 0 120 120" {...baseProps} {...props}>
    {/* fuzzy body */}
    <path d="M16 76 C 6 76, 4 60, 14 56 C 10 44, 22 30, 34 32 C 36 22, 50 16, 60 22 C 70 14, 88 18, 94 32 C 110 32, 118 46, 110 58 C 118 64, 114 80, 102 80 C 100 96, 80 102, 70 92 C 60 100, 44 100, 38 92 C 26 100, 14 92, 16 76 Z" stroke="currentColor" strokeWidth="2.5" className={bodyClass} />
    {/* horn nubs */}
    <path d="M38 26 L 36 18 L 42 22" stroke="currentColor" strokeWidth="2.5" />
    <path d="M82 24 L 86 18 L 88 24" stroke="currentColor" strokeWidth="2.5" />
    {/* eyes */}
    <circle cx="44" cy="56" r="6" stroke="currentColor" strokeWidth="2.5" fill="#FFFCF1" />
    <circle cx="76" cy="56" r="6" stroke="currentColor" strokeWidth="2.5" fill="#FFFCF1" />
    <circle cx="45" cy="57" r="2.2" fill="currentColor" />
    <circle cx="77" cy="57" r="2.2" fill="currentColor" />
    {/* mouth — clear U-shaped smile with the inside filled darker */}
    <path d="M46 70 C 52 84, 68 84, 74 70 Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.25" />
    {/* three triangular teeth hanging down from the upper jaw */}
    <path d="M51 70 L 54 76 L 57 70 Z" fill="#FFFCF1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M57 70 L 60 78 L 63 70 Z" fill="#FFFCF1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M63 70 L 66 76 L 69 70 Z" fill="#FFFCF1" stroke="currentColor" strokeWidth="1.5" />
    {/* tiny arms */}
    <path d="M10 70 L 4 68" stroke="currentColor" strokeWidth="2.5" />
    <path d="M112 68 L 118 64" stroke="currentColor" strokeWidth="2.5" />
    {/* cheeks */}
    <circle cx="32" cy="68" r="3" fill="#FFB6C1" opacity="0.8" />
    <circle cx="88" cy="68" r="3" fill="#FFB6C1" opacity="0.8" />
  </svg>
);

// CHAT BUBBLES
export const ChatBubbleBlue = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={"relative bg-imessage text-white rounded-[20px] rounded-br-[6px] px-4 py-2 text-base shadow-paper " + (props.className || '')} style={{ fontFamily: 'Gaegu, cursive', ...(props.style || {}) }}>
    {children}
  </div>
);

export const ChatBubbleGray = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={"relative bg-white text-ink border-2 border-ink/80 rounded-[20px] rounded-bl-[6px] px-4 py-2 text-base shadow-paper " + (props.className || '')} style={{ fontFamily: 'Gaegu, cursive', ...(props.style || {}) }}>
    {children}
  </div>
);

// SUN / MOON
export const SunDoodle = (props: DoodleProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="2.5" fill="#FFE38A" />
    <path d="M30 6 L 30 14" stroke="currentColor" strokeWidth="2.5" />
    <path d="M30 46 L 30 54" stroke="currentColor" strokeWidth="2.5" />
    <path d="M6 30 L 14 30" stroke="currentColor" strokeWidth="2.5" />
    <path d="M46 30 L 54 30" stroke="currentColor" strokeWidth="2.5" />
    <path d="M12 12 L 18 18" stroke="currentColor" strokeWidth="2.5" />
    <path d="M42 42 L 48 48" stroke="currentColor" strokeWidth="2.5" />
    <path d="M48 12 L 42 18" stroke="currentColor" strokeWidth="2.5" />
    <path d="M18 42 L 12 48" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const MoonDoodle = (props: DoodleProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <path d="M40 12 C 24 12, 14 24, 14 38 C 14 50, 24 56, 36 54 C 26 50, 22 40, 24 30 C 26 22, 32 16, 40 12 Z" stroke="currentColor" strokeWidth="2.5" fill="#DCC8F5" />
    <circle cx="46" cy="14" r="1.5" fill="currentColor" />
    <circle cx="50" cy="22" r="1.5" fill="currentColor" />
  </svg>
);

// FEATURE ICONS
export const Broom = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <path d="M14 50 L 30 22" stroke="currentColor" strokeWidth="2.5" />
    <path d="M30 22 L 40 14 L 50 22 L 30 30 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M12 52 L 24 44" stroke="currentColor" strokeWidth="2" />
    <path d="M14 54 L 26 46" stroke="currentColor" strokeWidth="2" />
    <path d="M16 56 L 28 48" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Coin = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <circle cx="30" cy="30" r="16" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    <text x="30" y="39" textAnchor="middle" fontSize="22" fontWeight="700" fill="currentColor" fontFamily="Gaegu, cursive" style={{ stroke: 'none' }}>$</text>
  </svg>
);

export const Scroll = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <path d="M14 12 L 46 12 L 46 48 L 18 48 C 12 48, 12 42, 18 42 L 40 42 L 40 18" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M22 22 L 38 22" stroke="currentColor" strokeWidth="2" />
    <path d="M22 30 L 38 30" stroke="currentColor" strokeWidth="2" />
    <path d="M22 38 L 32 38" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Pencil = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 60 60" {...baseProps} {...props}>
    <path d="M10 50 L 18 42 L 46 14 L 50 18 L 22 46 L 14 54 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M14 54 L 22 46" stroke="currentColor" strokeWidth="2" />
    <path d="M42 18 L 46 22" stroke="currentColor" strokeWidth="2" />
    <path d="M10 50 L 6 56" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const House = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 80 80" {...baseProps} {...props}>
    <path d="M10 38 L 40 12 L 70 38 L 70 70 L 10 70 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
    <path d="M30 70 L 30 50 L 50 50 L 50 70" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="44" cy="60" r="1.5" fill="currentColor" />
    <path d="M18 30 L 18 22 L 26 22" stroke="currentColor" strokeWidth="2.5" />
    <path d="M14 50 L 22 50 L 22 56 L 14 56 Z" stroke="currentColor" strokeWidth="2" />
    <path d="M58 50 L 66 50 L 66 56 L 58 56 Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// LOOSE SCRIBBLES — Squiggle stretches to fill its width without distorting
// vertically. Used both as a wavy underline (where it must match the text's
// width) and as a decorative line, so we force non-uniform scaling.
export const Squiggle = (props: DoodleProps) => (
  <svg viewBox="0 0 100 20" preserveAspectRatio="none" {...baseProps} {...props}>
    <path d="M2 10 C 12 2, 22 18, 32 10 S 52 2, 62 10 S 82 18, 98 10" stroke="currentColor" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
  </svg>
);

export const DashLine = (props: DoodleProps) => (
  <svg viewBox="0 0 200 8" {...baseProps} {...props}>
    <path d="M4 4 L 196 4" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 8" />
  </svg>
);

export const Cloud = ({ fillClass = '', ...props }: FilledProps) => (
  <svg viewBox="0 0 100 60" {...baseProps} {...props}>
    <path d="M20 44 C 8 44, 6 30, 18 28 C 16 16, 32 12, 40 20 C 44 10, 60 12, 64 22 C 76 18, 88 28, 84 38 C 90 40, 90 50, 80 50 L 24 50 C 18 50, 14 48, 20 44 Z" stroke="currentColor" strokeWidth="2.5" className={fillClass} />
  </svg>
);
