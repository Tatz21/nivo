'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

/**
 * Ambient Cosmic Particle & Glow Background
 * Provides pointer-reactive ambient lighting and drifting dust particles
 * Automatically adapts between deep cosmic dark and ethereal aurora light modes
 */
export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);

    // Particle field
    const particleCount = Math.min(Math.floor((width * height) / 25000), 50);
    const particles: { x: number; y: number; size: number; alpha: number; vx: number; vy: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }

    const onPointerMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const darkMode = isDarkRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = darkMode
          ? `rgba(167, 139, 250, ${p.alpha})`
          : `rgba(101, 84, 245, ${p.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-colors duration-500">
      {/* Base Cosmic Gradient */}
      <div 
        className="absolute inset-0 bg-[#FAF9F6] dark:bg-[#11111B] transition-colors duration-500" 
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(circle at 50% 0%, rgba(101, 84, 245, 0.18) 0%, transparent 60%),
              radial-gradient(circle at 10% 40%, rgba(25, 23, 43, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, rgba(167, 139, 250, 0.08) 0%, transparent 45%)
            `
            : `
              radial-gradient(circle at 50% 0%, rgba(101, 84, 245, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 10% 40%, rgba(235, 233, 248, 0.75) 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, rgba(167, 139, 250, 0.05) 0%, transparent 45%)
            `
        }} 
      />

      {/* Pointer Radial Glow */}
      <div
        ref={glowRef}
        className={`hidden md:block absolute top-0 left-0 -ml-[300px] -mt-[300px] w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-500 ${
          isDark ? 'opacity-40 mix-blend-screen' : 'opacity-30 mix-blend-multiply'
        }`}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(101, 84, 245, 0.15) 0%, rgba(167, 139, 250, 0.05) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(101, 84, 245, 0.1) 0%, rgba(167, 139, 250, 0.03) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* Canvas particle stars */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  );
}
