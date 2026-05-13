"use client";

import { PhoneFrame, ChatThreadScreen, InboxScreen } from "./phone-frame";
import {
  House, Heart, Star, Sparkle, CrayonArrow, Squiggle, Cloud, Plant, Pencil,
} from "./doodles";
import { useReveal } from "@/hooks/use-reveal";

const ideaCards = [
  { title: 'threads feel like conversations', body: 'the comfort of iMessage. zero project-management dread, zero spreadsheets crying in the corner.', color: '#BDDEFF', rot: -2 },
  { title: 'tasks + expenses live online', body: 'a chore card right inside the chat. so does the $42 receipt for kbbq. (worth it, no notes.)', color: '#C1E8C8', rot: 2 },
  { title: 'one calm activity inbox', body: "every reminder, every receipt, every new message. one little mailbox, no doom-scroll required.", color: '#FFE38A', rot: -1.5 },
  { title: 'rules become shared objects', body: "quiet hours, sock-on-the-floor policy, the guest rule. pinned where everyone can see, including that one roommate.", color: '#DCC8F5', rot: 1.5 },
];

export function ProductConceptSection() {
  const ref = useReveal(0.1);
  return (
    <section id="concept" ref={ref} className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
      <Cloud className="absolute top-12 left-[6%] w-28 ink-stroke text-white animate-float-y-slow" fillClass="fill-white/70" />
      <Cloud className="absolute bottom-20 right-[8%] w-32 ink-stroke text-white animate-float-y" fillClass="fill-white/60" />

      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-ink/80 bg-mint shadow-sticker rotate-[-2deg] mb-5">
            <Heart className="w-4 h-4 text-coral ink-stroke" />
            <span className="text-base font-bold ink-text">the idea</span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[52px] lg:text-[60px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            your group chat<br />
            <span className="relative inline-block">
              grew a little house
              <Squiggle className="absolute -bottom-2 left-0 w-full h-3 text-imessage" />
              <Sparkle className="absolute -top-3 -right-7 w-7 text-coral animate-sparkle" />
            </span>.
          </h2>
          <p className="reveal mt-6 text-lg sm:text-xl pencil-text max-w-2xl mx-auto leading-snug" data-reveal-delay="160">
            RoomieOS is a <span className="ink-text font-bold">warm, comforting</span> space for shared living.
            Conversations stay easy. Chores, expenses, and house rules grow up inside them, like a shared scrapbook
            that started with friends doodling in the margins, then quietly became a home.
          </p>
        </div>

        {/* before / after collage */}
        <div className="reveal relative mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-4" data-reveal-delay="200">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 paper-card-soft px-3 py-1 shadow-sticker bg-cream rotate-[-6deg] z-10">
                <span className="text-base font-bold ink-text">before · just a chat</span>
              </div>
              <PhoneFrame width={210} tilt={-6}>
                <ChatThreadScreen accent="#FFB6C1" />
              </PhoneFrame>
              <div className="absolute -bottom-4 -right-2 text-coral text-base font-bold rotate-[-8deg]">+ chaos</div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="hidden lg:flex flex-col items-center gap-1">
              <CrayonArrow className="w-32 text-imessage" />
              <span className="text-base ink-text font-bold rotate-[-4deg] -mt-1">a little magic ✨</span>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <Sparkle className="w-8 text-imessage animate-sparkle" />
              <span className="text-base ink-text font-bold">becomes ↓</span>
              <Sparkle className="w-8 text-coral animate-sparkle" />
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -top-4 -right-2 paper-card-soft px-3 py-1 shadow-sticker bg-butter rotate-[5deg] z-10">
                <span className="text-base font-bold ink-text">after · a tiny home base</span>
              </div>
              <PhoneFrame width={210} tilt={5}>
                <InboxScreen />
              </PhoneFrame>
              <House className="absolute -bottom-6 -left-8 w-16 ink-stroke text-ink rotate-[-8deg]" fillClass="fill-peach" />
              <Plant className="absolute -bottom-2 -right-6 w-14 ink-stroke text-ink rotate-[6deg]" fillClass="fill-mint" />
              <Star className="absolute -top-2 -left-4 w-6 text-imessage animate-wiggle-soft" />
            </div>
          </div>
        </div>

        {/* idea cards */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 max-w-3xl mx-auto">
          {ideaCards.map((c, i) => (
            <div
              key={i}
              className="reveal relative paper-card-soft p-5 sm:p-6 shadow-paper"
              style={{ background: c.color, transform: `rotate(${c.rot}deg)`, ['--reveal-rot' as any]: `${c.rot}deg` } as React.CSSProperties}
              data-reveal-delay={i * 80}
            >
              <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" style={{ background: 'rgba(255, 252, 241, 0.85)' }} />
              <div className="text-xl sm:text-2xl font-bold ink-text leading-tight">{c.title}</div>
              <p className="mt-2 text-base sm:text-lg pencil-text leading-snug">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal flex flex-wrap items-center justify-center gap-3 mt-12 text-base pencil-text">
          <Pencil className="w-6 ink-stroke text-imessage" />
          <span className="italic">designed to feel like home, the moment you open it</span>
        </div>
      </div>
    </section>
  );
}
