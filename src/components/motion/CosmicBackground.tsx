'use client';

import React from 'react';
import VantaNetBackground from './VantaNetBackground';

/**
 * Ambient interactive backdrop using Three.js and Vanta.NET,
 * fully styled with Nivó's Black, Red, White palette.
 * Mouse controls and touch controls reactive with clean dark/light mode parity.
 */
export default function CosmicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* 3D Interactive Vanta NET WebGL Mesh */}
      <VantaNetBackground
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-85 transition-opacity duration-300"
        points={9}
        maxDistance={20.0}
        spacing={17.0}
        showDots={true}
        mouseControls={true}
        touchControls={true}
        gyroControls={false}
        minHeight={200.0}
        minWidth={200.0}
        scale={1.0}
        scaleMobile={1.0}
      />

      {/* Subtle Ambient Radial Gradients overlay */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(220,38,38,0.12),transparent_70%)]" />
      <div className="block dark:hidden absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(220,38,38,0.04),transparent_70%)]" />
    </div>
  );
}
