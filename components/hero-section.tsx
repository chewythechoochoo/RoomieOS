"use client";

import { PhoneFrame, ChatThreadScreen } from "./phone-frame";
import {
  Sparkle, Heart, Star,
  CoffeeMug, Plant, Receipt, Cloud, SunDoodle,
  RoommateA, RoommateB, RoommateC,
} from "./doodles";
import { useReveal, useParallax } from "@/hooks/use-reveal";

export function HeroSection() {
  const revealRef = useReveal(0.05);
  const parallaxRef = useParallax(0.012);

  return (
    <section
      id="hero"
      ref={(el) => { revealRef.current = el; parallaxRef.current = el; }}
      className="relative pt-10 sm:pt-14 pb-24 sm:pb-32 px-5 sm:px-8 overflow-hidden"
    >
      {/* Background drifting doodles */}
      <Cloud className="absolute top-20 left-[8%] w-24 ink-stroke text-white animate-float-y" data-parallax="1.4" fillClass="fill-white/80" />
      <Cloud className="absolute top-36 right-[12%] w-32 ink-stroke text-white animate-float-y-slow" data-parallax="1.8" fillClass="fill-white/70" />
      <SunDoodle className="absolute top-24 right-[6%] w-16 ink-stroke animate-sparkle" data-parallax="2" />
      <Sparkle className="absolute top-40 left-[18%] w-7 text-coral animate-sparkle" />
      <Sparkle className="absolute top-[28%] right-[24%] w-5 text-imessage animate-sparkle" style={{ animationDelay: '0.6s' }} />
      <Star className="absolute top-[60%] left-[6%] w-7 text-imessage animate-wiggle-soft" />
      <Star className="absolute top-[78%] right-[8%] w-6 text-peach-deep animate-wiggle-soft" />

      <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
        {/* — Left: copy — */}
        <div className="relative">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-ink/80 bg-butter shadow-sticker rotate-[-2deg] mb-5">
            <Heart className="w-4 h-4 text-coral ink-stroke" />
            <span className="text-sm sm:text-base font-bold ink-text">warm, cozy, made for roomies</span>
          </div>

          <h1 className="reveal text-[44px] sm:text-[60px] lg:text-[72px] leading-[0.95] font-bold ink-text tracking-tight" data-reveal-delay="80">
            the{" "}
            <span className="relative inline-block">
              <span className="scribble-underline">shared home</span>
            </span>
            ,<br />
            finally{" "}
            <span className="relative inline-block">
              organized
              <Sparkle className="absolute -top-2 -right-4 w-7 text-coral animate-sparkle" />
            </span>.
          </h1>

          <p className="reveal mt-5 sm:mt-7 text-lg sm:text-xl pencil-text max-w-[560px] leading-snug" data-reveal-delay="160">
            <span className="ink-text font-bold">RoomieOS</span> is a cozy iOS-first workspace for roommates to
            wrangle chores, expenses, conversations, and house rules, all inside one calm, cozy scrapbook!
          </p>

          <div className="reveal flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8" data-reveal-delay="260">
            <a href="#signup" className="sticker-btn">
              <span>Join the Waitlist</span>
              <span className="text-xl leading-none">→</span>
            </a>
            <a href="#features" className="sticker-btn sticker-btn-cream">
              <span>Peek at Features</span>
            </a>
          </div>

        </div>

        {/* — Right: phone + collage — */}
        <div className="relative h-[520px] sm:h-[600px] lg:h-[680px] flex items-center justify-center">
          {/* sticky note behind */}
          <div className="absolute top-4 -left-2 sm:-left-6 w-32 h-32 rotate-[-8deg] paper-card-soft shadow-sticker flex flex-col items-center justify-center text-center p-2 animate-wiggle-soft" style={{ background: '#FFE38A' }}>
            <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" style={{ background: 'rgba(255, 252, 241, 0.85)' }} />
            <div className="text-lg ink-text font-bold leading-tight">today's<br />chore</div>
            <div className="text-sm pencil-text mt-1">sweep!</div>
            <Sparkle className="absolute -top-2 -right-2 w-5 text-coral animate-sparkle" />
          </div>

          <Receipt className="absolute top-2 right-2 sm:right-6 w-16 sm:w-20 ink-stroke text-ink rotate-[12deg] animate-float-y" fillClass="fill-peach" data-parallax="1.2" />

          {/* phone */}
          <div className="relative animate-float-y-2 z-10" data-parallax="0.6">
            <PhoneFrame width={260} tilt={-3}>
              <ChatThreadScreen accent="#FFE38A" />
            </PhoneFrame>
            <div className="absolute inset-0 -z-10 blur-2xl opacity-50 rounded-[40px]" style={{ background: 'radial-gradient(circle, #FFE38A 20%, transparent 60%)' }} />
          </div>

          <CoffeeMug className="absolute bottom-6 left-0 w-20 sm:w-24 ink-stroke text-ink rotate-[-6deg] animate-float-y-slow" fillClass="fill-mint" data-parallax="1.5" />
          <Plant className="absolute bottom-0 right-0 w-24 sm:w-32 ink-stroke text-ink rotate-[5deg] animate-sway" fillClass="fill-mint" data-parallax="1.0" />


          <div className="absolute -bottom-2 right-12 flex -space-x-2">
            <RoommateA className="w-10 h-10 ink-stroke" skinClass="fill-peach" hairClass="fill-ink/80" />
            <RoommateB className="w-10 h-10 ink-stroke" skinClass="fill-mint" hairClass="fill-ink/80" />
            <RoommateC className="w-10 h-10 ink-stroke" skinClass="fill-butter" hairClass="fill-ink/80" />
          </div>

        </div>
      </div>

    </section>
  );
}
