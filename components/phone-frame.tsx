"use client";

import React from 'react';

// Hand-drawn iPhone frame. Width controls scale; height is derived.
export const PhoneFrame = ({
  children,
  className = '',
  tilt = 0,
  width = 260,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: number;
  width?: number;
}) => {
  const ratio = 2.05;
  const height = width * ratio;
  return (
    <div
      className={"relative " + className}
      style={{
        width,
        height,
        transform: `rotate(${tilt}deg)`,
        filter: 'drop-shadow(0 18px 28px rgba(42, 36, 64, 0.18)) drop-shadow(0 4px 0 rgba(42, 36, 64, 0.10))',
      }}
    >
      <div
        className="absolute inset-0 bg-[#FFFCF1]"
        style={{
          borderRadius: width * 0.16,
          border: '3px solid #2A2440',
          padding: width * 0.035,
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-[#2A2440]"
          style={{
            top: width * 0.04,
            width: width * 0.34,
            height: width * 0.045,
            borderRadius: 999,
          }}
        />
        <div
          className="w-full h-full overflow-hidden relative"
          style={{
            borderRadius: width * 0.125,
            background: '#FFF7E0',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// ── Screen: Chat Thread ──
export const ChatThreadScreen = ({ accent = '#FFE38A' }: { accent?: string }) => (
  <div className="w-full h-full flex flex-col text-ink" style={{ fontFamily: 'Gaegu, cursive', color: '#2A2440' }}>
    <div className="flex items-center justify-between px-3 py-2 border-b-2 border-ink/15" style={{ background: accent }}>
      <div className="text-[11px] tracking-wide opacity-70">9:41</div>
      <div className="flex gap-1 text-[10px]"><span>●●●</span></div>
    </div>
    <div className="px-3 pt-3 pb-2 border-b border-ink/15 flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-peach border-2 border-ink/80 flex items-center justify-center text-[10px]">🏠</div>
      <div>
        <div className="text-[15px] font-bold leading-tight">Apt 4B · kitchen</div>
        <div className="text-[10px] opacity-60 leading-tight">mira · jay · sam</div>
      </div>
    </div>
    <div className="flex-1 flex flex-col gap-2 px-2.5 py-2.5 overflow-hidden">
      <div className="flex items-end gap-1.5">
        <div className="w-5 h-5 rounded-full bg-mint border border-ink/80 flex-shrink-0" />
        <div className="bg-white border-2 border-ink/80 rounded-2xl rounded-bl-md px-2.5 py-1 text-[12px] leading-tight max-w-[78%]">
          who took the last sponge 🥲
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-imessage text-white rounded-2xl rounded-br-md px-2.5 py-1 text-[12px] leading-tight max-w-[78%]">
          me. confessing. ordering more.
        </div>
      </div>
      <div className="self-start bg-mint border-2 border-ink/80 rounded-xl px-2.5 py-1.5 text-[11px] shadow-sm max-w-[88%]">
        <div className="flex items-center gap-1.5">
          <span className="text-[12px]">🧽</span>
          <span className="font-bold">chore · buy sponges</span>
        </div>
        <div className="opacity-70 text-[10px]">due fri · jay</div>
      </div>
      <div className="self-end bg-butter border-2 border-ink/80 rounded-xl px-2.5 py-1.5 text-[11px] shadow-sm max-w-[88%]">
        <div className="flex items-center gap-1.5">
          <span className="text-[12px]">🧾</span>
          <span className="font-bold">expense · groceries</span>
        </div>
        <div className="opacity-70 text-[10px]">$42 · split 3 ways</div>
      </div>
      <div className="flex items-end gap-1.5">
        <div className="w-5 h-5 rounded-full bg-lavender border border-ink/80 flex-shrink-0" />
        <div className="bg-white border-2 border-ink/80 rounded-2xl rounded-bl-md px-2.5 py-1 text-[12px] leading-tight max-w-[78%]">
          you are a hero ✨
        </div>
      </div>
    </div>
    <div className="px-2.5 pb-2.5 pt-1.5">
      <div className="flex items-center gap-1 bg-white border-2 border-ink/80 rounded-full px-2 py-1 text-[11px]">
        <span className="opacity-60 px-0.5">＋</span>
        <span className="opacity-50">say something cozy…</span>
        <span className="ml-auto w-5 h-5 rounded-full bg-imessage flex items-center justify-center text-white text-[10px]">↑</span>
      </div>
    </div>
  </div>
);

// ── Screen: Inbox ──
export const InboxScreen = () => (
  <div className="w-full h-full flex flex-col text-ink" style={{ fontFamily: 'Gaegu, cursive', color: '#2A2440' }}>
    <div className="px-3 py-2 border-b-2 border-ink/15 bg-sky/50 flex items-center justify-between">
      <div className="text-[11px] opacity-70">9:41</div>
      <div className="text-[10px] opacity-60">●●●</div>
    </div>
    <div className="px-3 pt-3 pb-2">
      <div className="text-[20px] font-bold leading-none">inbox</div>
      <div className="text-[11px] opacity-60 mt-0.5">3 open chores · 2 unpaid · 5 new</div>
    </div>
    <div className="flex-1 flex flex-col gap-1.5 px-2.5 pb-2 overflow-hidden">
      {[
        { tag: 'chore', emoji: '🧹', title: 'sweep the kitchen', sub: 'mira · today', color: 'bg-mint' },
        { tag: 'expense', emoji: '💡', title: 'electric · $84', sub: 'split 3 ways', color: 'bg-butter' },
        { tag: 'thread', emoji: '🗨', title: 'who waters the fern?', sub: '4 new · jay', color: 'bg-peach' },
        { tag: 'chore', emoji: '🧺', title: 'laundry day', sub: 'rotates · sat', color: 'bg-mint' },
        { tag: 'rule', emoji: '🌙', title: 'quiet hours · 11pm', sub: 'house · pinned', color: 'bg-lavender' },
        { tag: 'thread', emoji: '🥑', title: 'grocery list', sub: '2 new · sam', color: 'bg-peach' },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-2 bg-white border-2 border-ink/80 rounded-xl px-2 py-1.5">
          <div className={`w-7 h-7 rounded-lg ${row.color} border-2 border-ink/80 flex items-center justify-center text-[12px]`}>{row.emoji}</div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-bold leading-tight truncate">{row.title}</div>
            <div className="text-[10px] opacity-60 leading-tight">{row.sub}</div>
          </div>
          <div className="text-[9px] opacity-50 font-bold uppercase tracking-wider">{row.tag}</div>
        </div>
      ))}
    </div>
    <div className="px-3 py-2 border-t-2 border-ink/15 flex justify-around text-[10px] opacity-70">
      <span className="font-bold">inbox</span><span>chores</span><span>$</span><span>rules</span>
    </div>
  </div>
);

// ── Screen: Expenses ──
export const ExpensesScreen = () => (
  <div className="w-full h-full flex flex-col text-ink" style={{ fontFamily: 'Gaegu, cursive', color: '#2A2440' }}>
    <div className="px-3 py-2 border-b-2 border-ink/15 bg-butter/70 flex items-center justify-between">
      <div className="text-[11px] opacity-70">9:41</div>
      <div className="text-[10px] opacity-60">●●●</div>
    </div>
    <div className="px-3 pt-3 pb-1">
      <div className="text-[13px] opacity-60">this month</div>
      <div className="text-[26px] font-bold leading-none">$ 312.40</div>
      <div className="text-[11px] opacity-60 mt-0.5">↓ 18% vs last month</div>
    </div>
    <div className="flex gap-1 px-3 mb-1">
      {['week', 'month', 'year'].map((p, i) => (
        <div key={p} className={`text-[10px] px-2 py-0.5 rounded-full border-2 ${i === 1 ? 'bg-ink text-white border-ink' : 'border-ink/40 opacity-60'}`}>{p}</div>
      ))}
    </div>
    <div className="px-3 py-2 flex-shrink-0">
      <svg viewBox="0 0 240 100" className="w-full">
        <defs>
          <linearGradient id="graphFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 90 L 0 60 C 20 55, 30 75, 50 70 S 90 35, 120 50 S 170 65, 200 30 S 230 45, 240 32 L 240 90 Z" fill="url(#graphFill)" />
        <path d="M0 60 C 20 55, 30 75, 50 70 S 90 35, 120 50 S 170 65, 200 30 S 230 45, 240 32" fill="none" stroke="#0A84FF" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
    <div className="px-2.5 flex flex-col gap-1 flex-1">
      {[
        { who: 'mira', amt: '$104', color: 'bg-mint' },
        { who: 'jay', amt: '$92', color: 'bg-peach' },
        { who: 'sam', amt: '$116', color: 'bg-lavender' },
      ].map((p) => (
        <div key={p.who} className="flex items-center gap-2 bg-white border-2 border-ink/80 rounded-xl px-2 py-1.5">
          <div className={`w-6 h-6 rounded-full ${p.color} border-2 border-ink/80`} />
          <div className="text-[12px] font-bold flex-1">{p.who}</div>
          <div className="text-[12px] font-bold">{p.amt}</div>
        </div>
      ))}
      <div className="text-[10px] opacity-60 px-1 mt-0.5">recent · groceries · electric · tp</div>
    </div>
    <div className="px-3 py-2 border-t-2 border-ink/15 flex justify-around text-[10px] opacity-70">
      <span>inbox</span><span>chores</span><span className="font-bold">$</span><span>rules</span>
    </div>
  </div>
);

// ── Screen: Composer ──
export const ComposerScreen = () => (
  <div className="w-full h-full flex flex-col text-ink" style={{ fontFamily: 'Gaegu, cursive', color: '#2A2440' }}>
    <div className="px-3 py-2 border-b-2 border-ink/15 bg-mint/50 flex items-center justify-between">
      <div className="text-[11px] opacity-70">9:41</div>
      <div className="text-[10px] opacity-60">●●●</div>
    </div>
    <div className="px-3 pt-3 pb-2 border-b border-ink/15">
      <div className="text-[15px] font-bold leading-tight">new entry</div>
    </div>
    <div className="flex-1 flex flex-col gap-2 px-2.5 py-2.5">
      <div className="flex gap-1.5 flex-wrap">
        {[
          { l: 'msg', c: 'bg-imessage-soft' },
          { l: 'chore', c: 'bg-mint' },
          { l: 'expense', c: 'bg-butter' },
          { l: 'rule', c: 'bg-lavender' },
        ].map((m, i) => (
          <div key={m.l} className={`text-[11px] font-bold px-2 py-0.5 rounded-full border-2 border-ink/80 ${i === 1 ? m.c : 'bg-white'}`}>{m.l}</div>
        ))}
      </div>
      <div className="bg-white border-2 border-ink/80 rounded-xl p-2.5 flex-1 flex flex-col gap-1.5">
        <div className="text-[13px] font-bold">sweep the kitchen</div>
        <div className="text-[10px] opacity-60">slash menu suggested this ✨</div>
        <div className="dotted-rule my-1" />
        <div className="flex flex-wrap gap-1.5 text-[10px]">
          <span className="px-1.5 py-0.5 rounded-full bg-mint border border-ink/80">📅 fri</span>
          <span className="px-1.5 py-0.5 rounded-full bg-peach border border-ink/80">🙋 jay</span>
          <span className="px-1.5 py-0.5 rounded-full bg-butter border border-ink/80">↻ weekly</span>
        </div>
      </div>
      <div className="bg-paper border-2 border-dashed border-ink/40 rounded-xl px-2 py-1.5 text-[10px] opacity-70">
        / try "rent" or "trash", slash menu
      </div>
    </div>
    <div className="px-2.5 pb-2.5">
      <div className="bg-imessage text-white rounded-full px-3 py-1.5 text-center text-[12px] font-bold border-2 border-ink/80">
        add to thread ✓
      </div>
    </div>
  </div>
);
