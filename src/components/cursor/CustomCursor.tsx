'use client';

import React, { useEffect, useState, useRef } from 'react';

/**
 * High-performance, tactile custom cursor for Nivó.
 * Styled with Nivó's signature crimson red dot and smooth spring-lag follower ring.
 * Only rendered on desktop devices with fine pointer input.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  // Direct DOM references for 120fps requestAnimationFrame transforms
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on devices with a mouse/fine pointer (never on touch screens)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instantly position the center pinpoint dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor]'
        );
        if (interactive) {
          setIsHovering(true);
          const customText = interactive.getAttribute('data-cursor-text');
          setHoverText(customText || null);
        } else {
          setIsHovering(false);
          setHoverText(null);
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth spring physics loop for follower ring
    const render = () => {
      const ease = 0.16; // Follower smooth lag factor
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Precision Pinpoint Dot (Nivó Crimson Dot) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] pointer-events-none will-change-transform transition-[width,height,background-color] duration-150"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Fluid Follower Halo Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none will-change-transform flex items-center justify-center rounded-full transition-all duration-200 ${
          isClicking
            ? '-ml-3 -mt-3 w-6 h-6 border-2 border-red-600 bg-red-600/20 scale-90'
            : isHovering
            ? '-ml-6 -mt-6 w-12 h-12 border-2 border-red-500 bg-red-500/10 backdrop-blur-[0.5px] scale-110 shadow-[0_0_15px_rgba(220,38,38,0.25)]'
            : '-ml-4 -mt-4 w-8 h-8 border border-red-500/40 dark:border-red-400/50 bg-red-500/[0.03]'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        {hoverText && (
          <span className="text-[8px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 select-none">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
}
