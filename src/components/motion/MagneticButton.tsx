'use client';

import React from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

/**
 * Standard button wrapper maintaining stable, predictable interaction.
 */
export default function MagneticButton({
  children,
  className = '',
  onClick,
}: MagneticButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
