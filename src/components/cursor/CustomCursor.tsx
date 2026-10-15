'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Nivó Desktop Custom Cursor
 * Compliant with DESIGN.md Section 5:
 * - Desktop pointer only (pointer: fine)
 * - pointer-events: none
 * - Smooth outer ring with subtle violet glow
 * - Preserves native selection and click behaviours
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad) and not reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if target is an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]');
        isHovering = !!interactive;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    // Smooth lerp loop for the outer ring
    const render = () => {
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        const scale = isClicking ? 0.75 : isHovering ? 1.6 : 1;
        const opacity = mouseX < 0 ? 0 : isHovering ? 0.9 : 0.6;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = `${opacity}`;
        ringRef.current.style.borderColor = isHovering ? '#D8FF75' : '#A78BFA';
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full transition-opacity duration-200"
        style={{ willChange: 'transform' }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 -ml-4.5 -mt-4.5 rounded-full border border-violet-400/60 shadow-[0_0_15px_rgba(101,84,245,0.4)] transition-[border-color,opacity] duration-200"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
