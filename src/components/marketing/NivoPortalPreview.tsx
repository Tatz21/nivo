'use client';

import React from 'react';
import LottiePlayer from '@/components/animations/LottiePlayer';
import studentAnimationData from '@/lib/animations/student_transparent.json';

export default function NivoPortalPreview() {
  return (
    <div className="w-full flex items-center justify-center relative select-none">
      {/* Soft ambient crimson glow behind the transparent 3D classroom animation */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-red-600/15 dark:bg-red-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Pure 3D Classroom Lottie Animation (Nothing else) */}
      <div className="w-full max-w-[440px] sm:max-w-[500px] aspect-square flex items-center justify-center">
        <LottiePlayer
          animationData={studentAnimationData}
          loop
          autoplay
          className="w-full h-full filter drop-shadow-[0_20px_45px_rgba(220,38,38,0.22)] transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
