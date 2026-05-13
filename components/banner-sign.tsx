"use client";

import { Heart, Sparkle, SunDoodle, MoonDoodle } from './doodles';

// A small, cozy hand-drawn house used as the RoomieOS logo mark.
function HouseLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
      {/* roof */}
      <path d="M8 30 L 30 12 L 52 30" stroke="#2A2440" strokeWidth="2.5" fill="#FFC9A8" />
      {/* chimney */}
      <path d="M40 14 L 40 8 L 44 8 L 44 18" stroke="#2A2440" strokeWidth="2" fill="#FFE38A" />
      {/* tiny puff of smoke */}
      <path d="M42 4 C 40 2, 44 0, 42 -2" stroke="#2A2440" strokeWidth="1.5" opacity="0.6" />
      {/* body */}
      <path d="M12 30 L 12 50 L 48 50 L 48 30 Z" stroke="#2A2440" strokeWidth="2.5" fill="#FFFCF1" />
      {/* door */}
      <path d="M26 50 L 26 38 C 26 36, 28 35, 30 35 C 32 35, 34 36, 34 38 L 34 50 Z" stroke="#2A2440" strokeWidth="2" fill="#C1E8C8" />
      {/* doorknob */}
      <circle cx="32" cy="43" r="0.8" fill="#2A2440" />
      {/* window left */}
      <rect x="15.5" y="34" width="7" height="7" stroke="#2A2440" strokeWidth="1.5" fill="#BDDEFF" />
      <path d="M19 34 L 19 41 M15.5 37.5 L 22.5 37.5" stroke="#2A2440" strokeWidth="1" />
      {/* window right */}
      <rect x="38" y="34" width="7" height="7" stroke="#2A2440" strokeWidth="1.5" fill="#BDDEFF" />
      <path d="M41.5 34 L 41.5 41 M38 37.5 L 45 37.5" stroke="#2A2440" strokeWidth="1" />
    </svg>
  );
}

export function BannerSign({ night, onToggle }: { night: boolean; onToggle: () => void }) {
  return (
    <div className="relative w-full flex justify-center pt-8 sm:pt-10 px-4 select-none z-30">
      <div
        className="relative inline-block rotate-[-1.5deg] animate-wiggle-soft"
        style={{ animationDuration: '6s' }}
      >
        <div className="absolute inset-0 rounded-[28px] translate-x-1 translate-y-1.5 bg-ink/30" aria-hidden />
        <div
          className="relative paper-card-soft px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-4 sm:gap-6 shadow-paper"
          style={{ borderRadius: 28 }}
        >
          <div
            className="absolute inset-1.5 pointer-events-none border-2 border-dashed border-ink/30"
            style={{ borderRadius: 22 }} aria-hidden
          />
          <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />
          <Sparkle className="absolute -top-4 -left-3 w-5 text-coral animate-sparkle" />
          <Sparkle className="absolute -bottom-3 -right-2 w-4 text-imessage animate-sparkle" />

          <div className="flex items-center gap-2 sm:gap-3 relative z-10">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cream border-2 border-ink/80 shadow-sticker flex items-center justify-center rotate-[-6deg] overflow-hidden">
              <HouseLogo className="w-10 h-10 sm:w-11 sm:h-11" />
            </div>
            <Heart className="absolute -top-1 left-9 sm:left-11 w-4 h-4 ink-stroke text-coral animate-wiggle-soft" />
            <div className="leading-none">
              <div className="text-[26px] sm:text-[30px] font-bold ink-text -mb-0.5 tracking-tight">RoomieOS</div>
              <div className="text-[11px] sm:text-[12px] pencil-text italic tracking-wide">a second home from home</div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-ink/20 mx-1" />

          <button
            onClick={onToggle}
            aria-label="toggle day or night"
            className="relative z-10 w-14 h-8 sm:w-16 sm:h-9 rounded-full border-2 border-ink/80 shadow-sticker overflow-hidden transition-colors"
            style={{ background: night ? '#322B55' : '#FFE38A' }}
          >
            <div
              className="absolute top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-ink/80 transition-all duration-500 ease-out flex items-center justify-center"
              style={{
                left: night ? 'calc(100% - 28px)' : '2px',
                background: night ? '#DCC8F5' : '#FFFCF1',
              }}
            >
              {night ? <MoonDoodle className="w-4 h-4 ink-stroke" /> : <SunDoodle className="w-4 h-4 ink-stroke" />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
