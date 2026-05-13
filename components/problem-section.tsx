"use client";

import { MessMonster, Receipt, Dish, Sparkle, CrayonArrow, Squiggle } from "./doodles";
import { useReveal } from "@/hooks/use-reveal";

const messNotes = [
  { text: 'sweep??', color: '#FFE38A', rot: -8, top: '3%', left: '1%' },
  { text: 'rent due fri', color: '#DCC8F5', rot: 5, top: '6%', right: '2%' },
  { text: 'water the fern', color: '#C1E8C8', rot: 9, top: '82%', left: '2%' },
  { text: '☕ out of beans', color: '#BDDEFF', rot: -6, top: '86%', right: '3%' },
];

const painPoints = [
  { emoji: '🧹', text: 'chores scattered across 4 group chats' },
  { emoji: '🧾', text: 'expenses lost between three apps' },
  { emoji: '📜', text: 'house rules nobody can remember' },
  { emoji: '🧴', text: 'supplies you only notice when they\'re gone' },
  { emoji: '💬', text: 'roommates drifting into separate tabs' },
];

export function ProblemSection() {
  const ref = useReveal(0.1);
  return (
    <section id="problem" ref={ref} className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden">
      <Squiggle className="absolute top-2 left-0 w-full h-6 text-imessage opacity-30" />

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
        {/* Left: illustrated mess collage */}
        <div className="relative h-[540px] sm:h-[600px] reveal" style={{ ['--reveal-rot' as any]: '-1deg' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <MessMonster className="w-[260px] sm:w-[320px] ink-stroke text-ink animate-float-y-slow" bodyClass="fill-lavender" />
          </div>

          {messNotes.map((n, i) => (
            <div
              key={i}
              className="absolute paper-card-soft shadow-sticker px-3 py-1.5 animate-wiggle-soft"
              style={{
                background: n.color,
                transform: `rotate(${n.rot}deg)`,
                top: n.top,
                left: n.left,
                right: n.right,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="tape -top-2 left-1/2 -translate-x-1/2 w-8 h-3 rotate-[-6deg]" style={{ background: 'rgba(255, 252, 241, 0.85)' }} />
              <div className="text-base ink-text font-bold">{n.text}</div>
            </div>
          ))}

          <Receipt className="absolute top-[40%] right-[6%] w-12 ink-stroke text-ink rotate-[-12deg]" fillClass="fill-cream" />
          <Dish className="absolute bottom-[24%] left-[24%] w-20 ink-stroke text-ink rotate-[-4deg]" fillClass="fill-mint" />
          <Sparkle className="absolute top-[18%] right-[36%] w-6 text-imessage animate-sparkle" />
          <Sparkle className="absolute bottom-[40%] left-[42%] w-5 text-coral animate-sparkle" />
        </div>

        {/* Right: copy */}
        <div className="relative">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-ink/80 bg-peach shadow-sticker rotate-[2deg] mb-5">
            <span className="text-base font-bold ink-text">the problem</span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] font-bold ink-text" data-reveal-delay="80">
            every apartment has a <br className="hidden sm:block" />
            <span className="relative inline-block">
              tiny mess monster
              <Squiggle className="absolute -bottom-2 left-0 w-full h-3 text-coral" />
            </span>.
          </h2>

          <p className="reveal mt-6 text-lg sm:text-xl pencil-text max-w-[520px] leading-snug" data-reveal-delay="160">
            The invisible admin of living together piles up like sticky notes on a fridge. half-finished chores in
            one chat, receipts in another, and the unread reminder that's been there since Tuesday.
          </p>

          <ul className="reveal mt-7 sm:mt-9 flex flex-col gap-3 max-w-[540px]" data-reveal-delay="240">
            {painPoints.map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-3 paper-card-soft px-4 py-2.5 shadow-paper"
                style={{ transform: `rotate(${i % 2 ? 0.6 : -0.7}deg)` }}
              >
                <div className="w-9 h-9 rounded-xl bg-cream border-2 border-ink/80 flex items-center justify-center text-lg">{p.emoji}</div>
                <span className="ink-text text-lg leading-snug">{p.text}</span>
              </li>
            ))}
          </ul>

          <div className="reveal flex items-center gap-2 mt-6 pencil-text text-base italic" data-reveal-delay="320">
            <CrayonArrow className="w-12 h-5 text-imessage rotate-[16deg]" />
            <span>none of this is anyone's fault. it just… piles up.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
