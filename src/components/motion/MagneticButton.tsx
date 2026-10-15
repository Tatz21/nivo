'use client';

import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

/**
 * Magnetic button adhering to DESIGN.md Section 5:
 * "Restrained translation on fine pointers. Disable on mobile/touch."
 */
export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.25
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        willChange: 'transform'
      }}
      className={`inline-block ${className}`}
      data-cursor="interactive"
    >
      {children}
    </div>
  );
}
