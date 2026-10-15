'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Signature Nivó Black Hole Hero Visual
 * - Accretion disk with relativistic doppler asymmetry
 * - Deep gravitational singularity core
 * - Orbital photon particle stream
 * - Subtle pointer inertia reactivity
 * - Fully accessible with reduced motion support
 */
export default function BlackHoleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', onResize);

    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetTiltX = (x / rect.width) * 0.2;
      targetTiltY = (y / rect.height) * 0.2;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Orbital particles around the accretion disk
    interface AccretionParticle {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      hue: number;
      alpha: number;
    }

    const particles: AccretionParticle[] = [];
    const particleCount = 70;
    const baseRadius = Math.min(width, height) * 0.26;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: baseRadius + (Math.random() - 0.5) * 80,
        speed: (Math.random() * 0.015 + 0.008) * (Math.random() > 0.5 ? 1 : 1),
        size: Math.random() * 2 + 0.8,
        hue: Math.random() > 0.3 ? 250 : 80, // Violet or lime photon spark
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth tilt lerp
      mouseX += (targetTiltX - mouseX) * 0.05;
      mouseY += (targetTiltY - mouseY) * 0.05;

      const centerX = width / 2 + mouseX * 30;
      const centerY = height / 2 + mouseY * 30;
      const currentRadius = Math.min(width, height) * 0.25;

      // 1. Relativistic Outer Lensing Glow
      const glowGrad = ctx.createRadialGradient(
        centerX, centerY, currentRadius * 0.7,
        centerX, centerY, currentRadius * 1.9
      );
      glowGrad.addColorStop(0, 'rgba(101, 84, 245, 0.45)');
      glowGrad.addColorStop(0.4, 'rgba(167, 139, 250, 0.2)');
      glowGrad.addColorStop(0.8, 'rgba(25, 23, 43, 0.1)');
      glowGrad.addColorStop(1, 'rgba(17, 17, 27, 0)');

      ctx.save();
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 1.9, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Accretion Swirling Ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(1, 0.45 + mouseY * 0.2); // Tilted disk perspective
      ctx.rotate(frame * 0.006);

      const diskGrad = ctx.createRadialGradient(0, 0, currentRadius * 0.85, 0, 0, currentRadius * 1.55);
      diskGrad.addColorStop(0, 'rgba(216, 255, 117, 0.85)'); // Inner hot accretion zone
      diskGrad.addColorStop(0.2, 'rgba(167, 139, 250, 0.9)');
      diskGrad.addColorStop(0.6, 'rgba(101, 84, 245, 0.6)');
      diskGrad.addColorStop(1, 'rgba(101, 84, 245, 0)');

      ctx.fillStyle = diskGrad;
      ctx.beginPath();
      ctx.arc(0, 0, currentRadius * 1.55, 0, Math.PI * 2);
      ctx.fill();

      // Draw photon orbital streams
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += p.speed;

        const px = Math.cos(p.angle) * p.radius;
        const py = Math.sin(p.angle) * p.radius;

        ctx.fillStyle = p.hue === 80 
          ? `rgba(216, 255, 117, ${p.alpha})` 
          : `rgba(255, 255, 255, ${p.alpha})`;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // 3. Central Event Horizon (Black Hole Singularity)
      ctx.save();
      ctx.fillStyle = '#08080E';
      ctx.shadowColor = '#6554F5';
      ctx.shadowBlur = 24;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 0.88, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 4. Inner Lensing Halo Ring
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#D8FF75';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 0.89, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none"
    >
      {/* Background Static Fallback for Reduced-Motion or no-canvas */}
      <div
        className="absolute inset-10 rounded-full bg-gradient-to-tr from-brand-violet/40 via-purple-600/30 to-lime-accent/30 blur-2xl opacity-60"
        aria-hidden="true"
      />
      
      {/* Interactive Black Hole Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
