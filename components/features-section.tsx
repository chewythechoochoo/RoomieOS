"use client";

import { PhoneFrame, InboxScreen, ExpensesScreen, ChatThreadScreen, ComposerScreen } from "./phone-frame";
import {
  Sparkle, Star, CrayonArrow, DownArrow, Squiggle, DashLine,
  CoffeeMug, Plant, StickyNote, Receipt, Mailbox, FridgeNote, Coin,
  Broom, House, SunDoodle, MoonDoodle,
} from "./doodles";
import { useReveal } from "@/hooks/use-reveal";

// ── A. Onboarding ──
function FeatureA() {
  const ref = useReveal(0.1);
  const steps = [
    { emoji: '👋', label: 'welcome mat' },
    { emoji: '🎯', label: 'what brings you in?' },
    { emoji: '🏷', label: 'name your place' },
    { emoji: '📦', label: 'pick a template' },
    { emoji: '✨', label: 'first chore made' },
    { emoji: '🌗', label: 'day or night?' },
  ];
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="reveal relative max-w-md mx-auto">
            <div className="relative bg-peach paper-card-soft p-6 shadow-paper rotate-[-2deg]">
              <div className="tape -top-3 left-1/2 -translate-x-1/2" />
              <div className="flex justify-center gap-3 mb-4">
                {steps.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 reveal" data-reveal-delay={i * 60}>
                    <div
                      className="w-12 h-12 rounded-2xl bg-cream border-2 border-ink/80 flex items-center justify-center text-2xl shadow-sticker"
                      style={{ transform: `rotate(${i % 2 ? -4 : 4}deg)` }}
                    >{s.emoji}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center px-1">
                {steps.map((s, i) => (
                  <span key={i} className="text-[10px] ink-text font-bold text-center w-12 leading-tight">{s.label}</span>
                ))}
              </div>
              <div className="absolute top-12 left-0 w-full pointer-events-none">
                <svg viewBox="0 0 320 24" className="w-full h-6">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <path key={i} d={`M ${20 + i * 60} 12 q 10 -8 26 0`} fill="none" stroke="#2A2440" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
                  ))}
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 paper-card-soft px-3 py-2 shadow-sticker bg-butter rotate-[6deg] flex items-center gap-2">
              <SunDoodle className="w-7 ink-stroke" />
              <span className="text-base ink-text font-bold">/</span>
              <MoonDoodle className="w-7 ink-stroke" />
            </div>
            <Sparkle className="absolute -top-4 -left-3 w-6 text-imessage animate-sparkle" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[-2deg]">A</span>
            <span className="text-base pencil-text">first-launch onboarding</span>
          </div>
          <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            a soft <span className="scribble-underline">welcome mat</span>, not a setup form.
          </h3>
          <p className="reveal mt-5 text-lg pencil-text leading-snug max-w-md" data-reveal-delay="160">
            no boring forms, promise! just a few little pages where you tell us about your place,
            pick a template, and make your very first chore. quick coffee, no homework!
          </p>
        </div>
      </div>
    </section>
  );
}

// ── B. Templates ──
function FeatureB() {
  const ref = useReveal(0.1);
  const templates = [
    {
      title: 'Apartment OS', sub: 'the whole package',
      body: "inbox, threads, chores, expenses, rules, supplies, pre-filled with cozy starter content.",
      bg: '#BDDEFF', icon: <House className="w-12 ink-stroke" fillClass="fill-cream" />, rot: -5,
    },
    {
      title: 'Chore Reset', sub: 'just the cleaning',
      body: "a rotating chore wheel, one tidy weekly reset thread, and gentle nudges that don't nag.",
      bg: '#C1E8C8', icon: <Broom className="w-12 ink-stroke" fillClass="fill-cream" />, rot: 3,
    },
    {
      title: 'Bills & Supplies', sub: 'split it, restock it',
      body: 'shared expenses with visual splits, plus a supplies thread that politely remembers the paper towels.',
      bg: '#FFE38A', icon: <Coin className="w-12 ink-stroke" fillClass="fill-cream" />, rot: -2,
    },
  ];
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[2deg]">B</span>
              <span className="text-base pencil-text">starter workspaces</span>
            </div>
            <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
              three little<br />
              <span className="relative inline-block">starter rooms<Squiggle className="absolute -bottom-2 left-0 w-full h-3 text-coral" /></span>.
            </h3>
          </div>
          <p className="reveal text-lg pencil-text max-w-md leading-snug" data-reveal-delay="160">
            pick the one that sounds most like your apartment! it comes already set up with threads, chores,
            and a few cheeky rules. you can mess with everything later, that's half the fun!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {templates.map((t, i) => (
            <div
              key={i}
              className="reveal relative paper-card-soft p-6 sm:p-7 shadow-paper"
              style={{ background: t.bg, transform: `rotate(${t.rot}deg)`, ['--reveal-rot' as any]: `${t.rot}deg` } as React.CSSProperties}
              data-reveal-delay={i * 100}
            >
              <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
              <div className="absolute -top-5 -right-3 w-12 h-12 rounded-2xl bg-cream border-2 border-ink/80 flex items-center justify-center shadow-sticker rotate-[8deg] text-ink">
                {t.icon}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest pencil-text mb-1">template</div>
              <div className="text-2xl sm:text-3xl font-bold ink-text leading-tight">{t.title}</div>
              <div className="text-base ink-text/80 mt-0.5 italic">{t.sub}</div>
              <div className="dotted-rule my-4" />
              <p className="text-base pencil-text leading-snug">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── C. Inbox ──
function FeatureC() {
  const ref = useReveal(0.1);
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[-2deg]">C</span>
            <span className="text-base pencil-text">inbox</span>
          </div>
          <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            one calm <span className="scribble-underline">fridge door</span> for everything happening at home.
          </h3>
          <p className="reveal mt-5 text-lg pencil-text leading-snug max-w-md" data-reveal-delay="160">
            everything that's happening at home in one little corner. who owes who, what needs doing,
            who just chimed in at 2am about the wifi. swipe to claim, settle up, or shush it for now, your call.
          </p>
          <ul className="reveal mt-6 space-y-2.5 max-w-md" data-reveal-delay="240">
            {[
              { emoji: '🧹', t: 'open chore count', s: 'always one tap away' },
              { emoji: '💸', t: 'unpaid expense badge', s: 'never wonder who owes' },
              { emoji: '👉', t: 'swipe to claim or settle', s: 'leftward intent, rightward action' },
              { emoji: '🗂', t: 'thread rows with previews', s: 'a peek before you tap in' },
            ].map((row, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-mint border-2 border-ink/80 flex items-center justify-center text-lg shrink-0">{row.emoji}</div>
                <div>
                  <div className="text-lg font-bold ink-text leading-tight">{row.t}</div>
                  <div className="text-base pencil-text leading-tight">{row.s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="reveal relative max-w-md mx-auto h-[600px] flex items-center justify-center">
            <Mailbox className="absolute -top-4 -left-4 w-24 ink-stroke text-ink rotate-[-10deg] animate-wiggle-soft" fillClass="fill-peach" />
            <FridgeNote className="absolute top-12 -right-6 w-20 ink-stroke text-ink rotate-[8deg] animate-float-y" fillClass="fill-butter" />
            <StickyNote className="absolute bottom-10 -left-6 w-16 ink-stroke text-ink rotate-[-12deg] animate-wiggle-soft" fillClass="fill-mint" />
            <Sparkle className="absolute top-6 right-8 w-7 text-imessage animate-sparkle" />
            <Sparkle className="absolute bottom-20 right-2 w-5 text-coral animate-sparkle" />
            <PhoneFrame width={240} tilt={3}>
              <InboxScreen />
            </PhoneFrame>
            <div className="absolute -bottom-4 -right-4 paper-card-soft px-3 py-1.5 shadow-sticker bg-imessage-soft rotate-[6deg]">
              <span className="text-base font-bold ink-text">3 open · 2 unpaid · 5 new</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── D. Expenses ──
function FeatureD() {
  const ref = useReveal(0.1);
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="reveal relative max-w-md mx-auto h-[600px] flex items-center justify-center">
            <Receipt className="absolute -top-2 -left-6 w-16 ink-stroke text-ink rotate-[-14deg] animate-wiggle-soft" fillClass="fill-butter" />
            <Coin className="absolute top-20 -right-4 w-14 ink-stroke text-ink rotate-[12deg] animate-float-y" fillClass="fill-butter" />
            <Coin className="absolute bottom-24 -left-4 w-12 ink-stroke text-ink rotate-[-8deg] animate-float-y-slow" fillClass="fill-peach" />
            <Star className="absolute top-8 right-12 w-6 text-imessage animate-wiggle-soft" />
            <PhoneFrame width={240} tilt={-4}>
              <ExpensesScreen />
            </PhoneFrame>
            <div className="absolute -bottom-3 -right-2 paper-card-soft px-3 py-1.5 shadow-sticker bg-mint rotate-[-5deg]">
              <span className="text-base font-bold ink-text">↓ 18% this month</span>
            </div>
            <div className="absolute top-4 -right-4 paper-card-soft px-3 py-1.5 shadow-sticker bg-lavender rotate-[6deg]">
              <span className="text-base font-bold ink-text">scrub the graph ✨</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[2deg]">D</span>
            <span className="text-base pencil-text">expenses analytics</span>
          </div>
          <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            a <span className="scribble-underline">crayon line</span> of where the money went.
          </h3>
          <p className="reveal mt-5 text-lg pencil-text leading-snug max-w-md" data-reveal-delay="160">
            no scary spreadsheets! just a friendly little graph you can scrub with your finger.
            peek at the week, month, or year, see who paid for the toilet paper, and move on with your day!
          </p>
          <div className="reveal mt-6 max-w-md paper-card-soft p-4 shadow-paper bg-cream" data-reveal-delay="240">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-bold ink-text">this month</span>
              <span className="text-base pencil-text">$312.40</span>
            </div>
            <svg viewBox="0 0 400 80" className="w-full">
              <path d="M0 60 C 30 50, 60 70, 90 60 S 150 30, 180 45 S 240 65, 280 35 S 340 50, 400 25" fill="none" stroke="#0A84FF" strokeWidth="3" strokeLinecap="round" />
              <path d="M0 60 C 30 50, 60 70, 90 60 S 150 30, 180 45 S 240 65, 280 35 S 340 50, 400 25 L 400 80 L 0 80 Z" fill="#0A84FF" fillOpacity="0.15" />
            </svg>
            <div className="flex justify-between mt-1 text-xs pencil-text">
              <span>wk 1</span><span>wk 2</span><span>wk 3</span><span>wk 4</span><span>now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── E. Threads ──
function FeatureE() {
  const ref = useReveal(0.1);
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[-2deg]">E</span>
            <span className="text-base pencil-text">thread / page view</span>
          </div>
          <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            messages and <span className="scribble-underline">tiny cards</span><br />living on the same wall.
          </h3>
          <p className="reveal mt-5 text-lg pencil-text leading-snug" data-reveal-delay="160">
            regular bubbles for regular chatter, but with a twist: chores and receipts can live right
            inside the conversation. "we should buy sponges" becomes an actual chore card, before everyone goes back to scrolling tiktok.
          </p>
        </div>

        <div className="reveal relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center" data-reveal-delay="200">
          <div className="relative flex justify-center">
            <div className="relative">
              <PhoneFrame width={250} tilt={-2}>
                <ChatThreadScreen accent="#C1E8C8" />
              </PhoneFrame>
              <Plant className="absolute -bottom-2 -left-8 w-20 ink-stroke text-ink rotate-[-10deg]" fillClass="fill-mint" />
              <CoffeeMug className="absolute -bottom-4 -right-8 w-20 ink-stroke text-ink rotate-[10deg]" fillClass="fill-butter" />
            </div>
          </div>

          <div className="relative min-h-[460px]">
            <div className="absolute top-0 left-4 paper-card-soft p-3 shadow-paper bg-imessage-soft rotate-[-3deg] max-w-[240px]">
              <div className="text-xs pencil-text mb-0.5">chat bubble</div>
              <div className="text-base ink-text leading-snug">"ok seriously, who took the last sponge?! 🥲"</div>
            </div>
            <div className="absolute top-16 right-0 p-3 shadow-paper border-2 border-ink/80 rotate-[4deg] max-w-[240px]" style={{ background: '#0A84FF', color: '#FFFCF1', borderRadius: 24 }}>
              <div className="text-xs opacity-70 mb-0.5" style={{ color: '#FFFCF1' }}>chat bubble · me</div>
              <div className="text-base leading-snug" style={{ color: '#FFFCF1' }}>"me, confessing! ordering more right now."</div>
            </div>
            <div className="absolute top-44 left-0 paper-card-soft p-3 shadow-paper bg-mint rotate-[-4deg] max-w-[260px]">
              <div className="text-xs pencil-text mb-0.5">online chore card</div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧽</span>
                <div>
                  <div className="text-base ink-text font-bold leading-tight">buy sponges</div>
                  <div className="text-xs pencil-text">due fri · jay</div>
                </div>
              </div>
            </div>
            <div className="absolute top-64 right-2 paper-card-soft p-3 shadow-paper bg-butter rotate-[3deg] max-w-[260px]">
              <div className="text-xs pencil-text mb-0.5">online expense card</div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧾</span>
                <div>
                  <div className="text-base ink-text font-bold leading-tight">groceries · $42</div>
                  <div className="text-xs pencil-text">split 3 ways</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 paper-card-soft p-3 shadow-paper bg-lavender rotate-[-2deg] max-w-[280px]">
              <div className="text-xs pencil-text mb-0.5">structured block</div>
              <div className="text-base ink-text leading-snug font-bold">📌 quiet hours · 11pm – 8am</div>
              <div className="text-xs pencil-text mt-1">pinned by the household</div>
            </div>
            <svg viewBox="0 0 400 460" className="absolute inset-0 w-full h-full pointer-events-none" fill="none" stroke="#2A2440" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.3">
              <path d="M120 50 C 160 80, 220 100, 280 80" />
              <path d="M100 220 C 160 240, 220 270, 280 280" />
              <path d="M150 320 C 200 350, 240 380, 200 420" />
            </svg>
            <Star className="absolute top-8 right-1/2 w-5 text-coral animate-wiggle-soft" />
            <Sparkle className="absolute bottom-32 right-12 w-6 text-imessage animate-sparkle" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── F. Composer ──
function FeatureF() {
  const ref = useReveal(0.1);
  const modes = [
    { label: 'message', icon: '💬', color: '#BDDEFF' },
    { label: 'chore', icon: '🧹', color: '#C1E8C8' },
    { label: 'expense', icon: '💸', color: '#FFE38A' },
    { label: 'rule', icon: '📜', color: '#DCC8F5' },
  ];
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[2deg]">F</span>
            <span className="text-base pencil-text">composer</span>
          </div>
          <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            one little <span className="scribble-underline">pencil box</span>,<br />four cozy modes.
          </h3>
          <p className="reveal mt-5 text-lg pencil-text leading-snug max-w-md" data-reveal-delay="160">
            one little box that does four things! type "rent due friday" and it'll quietly nudge you,
            "hey, want this to be an expense?" tap yes and you're done. no extra apps, no detours!
          </p>
          <div className="reveal mt-6 flex flex-wrap gap-3 max-w-md" data-reveal-delay="240">
            {modes.map((m, i) => (
              <div
                key={m.label}
                className="paper-card-soft px-3 py-2 shadow-sticker flex items-center gap-2"
                style={{ background: m.color, transform: `rotate(${(i % 2 === 0 ? -2 : 2)}deg)` }}
              >
                <span className="text-xl">{m.icon}</span>
                <span className="text-lg font-bold ink-text">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="reveal mt-6 paper-card-soft p-4 shadow-paper bg-cream max-w-md" data-reveal-delay="320">
            <div className="text-xs uppercase tracking-widest pencil-text mb-2">slash menu suggests…</div>
            <div className="space-y-1.5 text-base ink-text">
              <div className="flex items-center gap-2">
                <span className="font-bold">/</span><span className="opacity-70">rent due fri</span>
                <CrayonArrow className="w-10 text-imessage rotate-[6deg]" />
                <span className="px-2 py-0.5 rounded-full border-2 border-ink/80 bg-butter text-sm font-bold">expense card</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">/</span><span className="opacity-70">trash tuesday</span>
                <CrayonArrow className="w-10 text-imessage rotate-[6deg]" />
                <span className="px-2 py-0.5 rounded-full border-2 border-ink/80 bg-mint text-sm font-bold">chore card</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="reveal relative max-w-md mx-auto h-[600px] flex items-center justify-center">
            <StickyNote className="absolute bottom-4 -left-6 w-16 ink-stroke text-ink rotate-[-12deg] animate-float-y" fillClass="fill-mint" />
            <Sparkle className="absolute top-12 -left-2 w-6 text-imessage animate-sparkle" />
            <PhoneFrame width={240} tilt={4}>
              <ComposerScreen />
            </PhoneFrame>
            <div className="absolute -bottom-4 -right-2 paper-card-soft px-3 py-1.5 shadow-sticker bg-peach rotate-[-6deg]">
              <span className="text-base font-bold ink-text">tap → switch modes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── G. Offline states ──
function FeatureG() {
  const ref = useReveal(0.1);
  const badges = [
    { text: 'saved!', emoji: '💾', color: '#C1E8C8', rot: -4 },
    { text: 'offline · still cozy', emoji: '☁️', color: '#BDDEFF', rot: 3 },
    { text: 'read-only peek', emoji: '👀', color: '#DCC8F5', rot: -2 },
    { text: 'conflict resolved', emoji: '🤝', color: '#FFE38A', rot: 4 },
    { text: 'unsaved draft', emoji: '✏️', color: '#FFC9A8', rot: -3 },
    { text: 'gentle nudge', emoji: '🐌', color: '#FFB6C1', rot: 2 },
  ];
  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full border-2 border-ink/80 bg-cream shadow-sticker text-base font-bold rotate-[2deg]">G</span>
            <span className="text-base pencil-text">tiny in-between states</span>
          </div>
          <h3 className="reveal text-[32px] sm:text-[42px] leading-[1] font-bold ink-text" data-reveal-delay="80">
            soft little badges<br />for every <span className="scribble-underline">in-between</span>.
          </h3>
          <p className="reveal mt-5 text-lg pencil-text leading-snug" data-reveal-delay="160">
            every awkward moment, offline for a sec, a saved draft, a roommate stepping on your edit,
            gets a sweet little sticker instead of a scary error. toasts whisper. drafts pause. nothing yells at you, unlike your group chat at 11pm.
          </p>
        </div>

        <div className="reveal flex flex-wrap items-center justify-center gap-4 sm:gap-5 max-w-3xl mx-auto" data-reveal-delay="240">
          {badges.map((b, i) => (
            <div
              key={i}
              className="paper-card-soft shadow-sticker px-4 py-2.5 flex items-center gap-2"
              style={{ background: b.color, transform: `rotate(${b.rot}deg)` }}
            >
              <div className="tape -top-2 left-1/2 -translate-x-1/2 w-6 h-3 rotate-[-4deg]" />
              <span className="text-xl">{b.emoji}</span>
              <span className="text-lg font-bold ink-text">{b.text}</span>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center text-base pencil-text italic max-w-xl mx-auto" data-reveal-delay="320">
          a friendly home for the small things, so the small things don't pile up into the big things.
        </div>
      </div>
    </section>
  );
}

function SectionDivider({ color }: { color: string }) {
  return (
    <div className="relative h-24 flex items-center justify-center">
      <svg viewBox="0 0 1000 60" className="w-[80%] h-12" fill="none">
        <path d="M0 30 C 100 10, 200 50, 300 30 S 500 10, 600 30 S 800 50, 1000 30" stroke={color} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
        <path d="M0 30 C 100 10, 200 50, 300 30 S 500 10, 600 30 S 800 50, 1000 30" stroke="#2A2440" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 6" opacity="0.4" />
      </svg>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative">
      <div className="relative pt-20 sm:pt-28 pb-2 text-center px-5">
        <div className="inline-flex items-center gap-3 rotate-[-2deg]">
          <DashLine className="w-16 h-2 text-ink" />
          <span className="text-base sm:text-lg font-bold ink-text uppercase tracking-[0.3em]">a peek inside</span>
          <DashLine className="w-16 h-2 text-ink" />
        </div>
        <h2 className="mt-4 text-[44px] sm:text-[64px] leading-[1] font-bold ink-text">
          the rooms of <span className="scribble-underline">RoomieOS</span>
        </h2>
        <p className="mt-4 text-lg pencil-text max-w-2xl mx-auto leading-snug">
          seven hand-stitched corners of the app. flip through them like pages of a scrapbook.
        </p>
        <DownArrow className="w-5 h-12 mx-auto mt-6 text-pencil animate-float-y" />
      </div>

      <FeatureA />
      <SectionDivider color="#FFE38A" />
      <FeatureB />
      <SectionDivider color="#C1E8C8" />
      <FeatureC />
      <SectionDivider color="#BDDEFF" />
      <FeatureD />
      <SectionDivider color="#FFC9A8" />
      <FeatureE />
      <SectionDivider color="#DCC8F5" />
      <FeatureF />
      <SectionDivider color="#FFB6C1" />
      <FeatureG />
    </section>
  );
}
