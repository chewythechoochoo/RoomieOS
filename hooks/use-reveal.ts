"use client";

import { useEffect, useRef } from 'react';

// Adds 'visible' class to `.reveal` children when they scroll into view.
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = Array.from(el.querySelectorAll<HTMLElement>('.reveal'));
    if (el.classList.contains('reveal')) targets.push(el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = entry.target as HTMLElement;
            const delay = parseFloat(t.dataset.revealDelay || '0');
            setTimeout(() => t.classList.add('visible'), delay);
            io.unobserve(t);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

// Mouse parallax for [data-parallax] children.
export function useParallax(strength = 0.012) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.querySelectorAll<HTMLElement>('[data-parallax]').forEach((node) => {
        const f = parseFloat(node.dataset.parallax || '1');
        node.style.transform = `translate(${dx * f}px, ${dy * f}px) ${node.dataset.baseTransform || ''}`;
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [strength]);
  return ref;
}
