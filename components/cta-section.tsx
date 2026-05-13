"use client";

import { useState } from "react";
import {
  House, Plant, CoffeeMug, RoommateA, RoommateB, RoommateC,
  Heart, Star, Sparkle, Squiggle, ChatBubbleBlue, ChatBubbleGray, Cloud,
} from "./doodles";

// Match the cozy hand-drawn house mark used in BannerSign.
function HouseLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30 L 30 12 L 52 30" stroke="#2A2440" strokeWidth="2.5" fill="#FFC9A8" />
      <path d="M40 14 L 40 8 L 44 8 L 44 18" stroke="#2A2440" strokeWidth="2" fill="#FFE38A" />
      <path d="M12 30 L 12 50 L 48 50 L 48 30 Z" stroke="#2A2440" strokeWidth="2.5" fill="#FFFCF1" />
      <path d="M26 50 L 26 38 C 26 36, 28 35, 30 35 C 32 35, 34 36, 34 38 L 34 50 Z" stroke="#2A2440" strokeWidth="2" fill="#C1E8C8" />
      <circle cx="32" cy="43" r="0.8" fill="#2A2440" />
      <rect x="15.5" y="34" width="7" height="7" stroke="#2A2440" strokeWidth="1.5" fill="#BDDEFF" />
      <path d="M19 34 L 19 41 M15.5 37.5 L 22.5 37.5" stroke="#2A2440" strokeWidth="1" />
      <rect x="38" y="34" width="7" height="7" stroke="#2A2440" strokeWidth="1.5" fill="#BDDEFF" />
      <path d="M41.5 34 L 41.5 41 M38 37.5 L 45 37.5" stroke="#2A2440" strokeWidth="1" />
    </svg>
  );
}
import { useReveal } from "@/hooks/use-reveal";

export function CTASection() {
  const ref = useReveal(0.1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Placeholder — wire this up to a real backend / form service later.
    setSubmitted(true);
  };

  return (
    <section id="cta" ref={ref} className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 px-5 sm:px-8 overflow-hidden">
      <Cloud className="absolute top-10 left-[8%] w-28 ink-stroke text-white animate-float-y-slow" fillClass="fill-white/70" />
      <Cloud className="absolute top-24 right-[10%] w-32 ink-stroke text-white animate-float-y" fillClass="fill-white/60" />

      <div className="max-w-[1100px] mx-auto">
        <div id="signup" className="reveal relative paper-card-soft p-8 sm:p-14 shadow-sticker-lg" style={{ background: '#FFFCF1' }}>
          <div className="tape -top-3 left-10 rotate-[-6deg]" />
          <div className="tape -top-3 right-12 rotate-[5deg]" />
          <div className="tape -bottom-3 left-1/3 rotate-[3deg]" />
          <div className="tape -bottom-3 right-1/4 rotate-[-7deg]" />

          <div className="text-center relative">
            <Heart className="absolute -top-2 -left-4 w-8 text-coral animate-wiggle" />
            <Star className="absolute -top-4 right-8 w-7 text-imessage animate-sparkle" />
            <Sparkle className="absolute top-12 -right-2 w-6 text-imessage animate-sparkle" />

            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-ink/80 bg-mint shadow-sticker rotate-[-2deg] mb-5">
              <Sparkle className="w-4 ink-stroke text-imessage" />
              <span className="text-base font-bold ink-text">the cozy closing page</span>
            </div>

            <h2 className="reveal text-[40px] sm:text-[60px] lg:text-[68px] leading-[1] font-bold ink-text max-w-4xl mx-auto" data-reveal-delay="80">
              turn the group chat<br />
              into a <span className="relative inline-block">
                cozy little home base
                <Squiggle className="absolute -bottom-2 left-0 w-full h-3 text-imessage" />
              </span>.
            </h2>

            <p className="reveal mt-6 text-lg sm:text-xl pencil-text max-w-xl mx-auto leading-snug" data-reveal-delay="160">
              we're not quite ready to open the door yet, but we're getting close! drop your email and
              we'll let you know the moment your apartment can move in.
            </p>

            {/* Signup form */}
            <div className="reveal mt-9 max-w-md mx-auto" data-reveal-delay="240">
              {submitted ? (
                <div className="paper-card-soft px-5 py-4 shadow-sticker bg-mint flex items-center justify-center gap-3 rotate-[-1deg]">
                  <Sparkle className="w-6 text-imessage ink-stroke" />
                  <div>
                    <div className="text-lg font-bold ink-text">thanks! we&apos;ll be in touch!</div>
                    <div className="text-sm pencil-text">welcome to the cozy little waitlist 🏠</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-3 justify-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email"
                    className="flex-1 paper-card-soft px-4 py-3 text-lg font-bold ink-text placeholder:pencil-text placeholder:font-normal placeholder:italic focus:outline-none focus:ring-2 focus:ring-imessage/50"
                    style={{ background: '#FFFCF1' }}
                  />
                  <button type="submit" className="sticker-btn shrink-0">
                    <span>Join the Waitlist</span>
                    <Sparkle className="w-5 ink-stroke text-white" />
                  </button>
                </form>
              )}
              <div className="mt-3 text-sm pencil-text italic">
                no spam, just a friendly note when we&apos;re ready.
              </div>
            </div>

            <div className="reveal mt-10 flex justify-center" data-reveal-delay="320">
              <a href="#features" className="sticker-btn sticker-btn-cream">
                <span>Wander around again</span>
              </a>
            </div>

            <div className="reveal mt-12 flex flex-col items-center gap-2" data-reveal-delay="400">
              <ChatBubbleGray className="rotate-[-3deg]">
                <span className="text-lg">welcome home 🏠</span>
              </ChatBubbleGray>
              <ChatBubbleBlue className="rotate-[2deg] -mt-1">
                <span className="text-lg">finally.</span>
              </ChatBubbleBlue>
            </div>
          </div>

          {/* mini apartment scene */}
          <div className="reveal mt-12 relative h-32 flex items-end justify-center gap-6" data-reveal-delay="500">
            <div className="relative">
              <CoffeeMug className="w-16 ink-stroke text-ink rotate-[-6deg] animate-float-y-slow" fillClass="fill-butter" />
            </div>
            <div className="relative flex items-end gap-2">
              <RoommateA className="w-14 ink-stroke" skinClass="fill-peach" hairClass="fill-ink/80" />
              <House className="w-24 ink-stroke text-ink animate-wiggle-soft" fillClass="fill-mint" />
              <RoommateB className="w-14 ink-stroke" skinClass="fill-butter" hairClass="fill-ink/80" />
              <RoommateC className="w-14 ink-stroke" skinClass="fill-lavender" hairClass="fill-ink/80" />
            </div>
            <div className="relative">
              <Plant className="w-16 ink-stroke text-ink rotate-[5deg] animate-sway" fillClass="fill-mint" />
            </div>
            <svg viewBox="0 0 400 8" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4">
              <path d="M2 4 C 80 0, 160 8, 240 4 S 360 0, 398 4" stroke="#2A2440" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="2 5" opacity="0.5" />
            </svg>
          </div>
        </div>

        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-base pencil-text">
          <div className="flex items-center gap-2">
            <HouseLogo className="w-8 h-8" />
            <span>RoomieOS · making shared homes cozier · 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="italic">made with sticky notes & sparkles</span>
            <Heart className="w-5 text-coral ink-stroke animate-wiggle-soft" />
          </div>
        </footer>
      </div>
    </section>
  );
}
