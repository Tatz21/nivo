'use client';

import React, { useEffect, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

export interface LottiePlayerProps {
  /**
   * The Bodymovin / Lottie JSON animation object.
   */
  animationData?: any;
  /**
   * URL or public path to the Lottie JSON file (e.g., '/animations/student_transparent.json').
   */
  path?: string;
  /**
   * Whether to loop the animation continuously. Defaults to true.
   */
  loop?: boolean;
  /**
   * Whether the animation should play automatically. Defaults to true.
   */
  autoplay?: boolean;
  /**
   * Optional playback speed multiplier. Defaults to 1.
   */
  speed?: number;
  /**
   * Whether playback is paused from outside (e.g. card hover).
   */
  isPaused?: boolean;
  /**
   * Custom CSS class names applied to the container div.
   */
  className?: string;
  /**
   * Custom styles applied to the container div.
   */
  style?: React.CSSProperties;
}

export default function LottiePlayer({
  animationData,
  path,
  loop = true,
  autoplay = true,
  speed = 1,
  isPaused = false,
  className = '',
  style,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadLottie() {
      if (!containerRef.current) return;

      try {
        const lottieModule = await import('lottie-web');
        // lottie-web exports either as default or commonjs module
        const lottie = (lottieModule.default || lottieModule) as any;

        if (!isMounted || !containerRef.current) return;

        // Cleanup existing animation instance
        if (animRef.current) {
          animRef.current.destroy();
          animRef.current = null;
        }

        const animConfig: any = {
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            progressiveLoad: true,
            hideOnTransparent: true,
          },
        };

        if (animationData) {
          animConfig.animationData = animationData;
        } else if (path) {
          animConfig.path = path;
        } else {
          return;
        }

        const instance = lottie.loadAnimation(animConfig);
        animRef.current = instance;

        if (speed !== 1) {
          instance.setSpeed(speed);
        }

        if (isPaused) {
          instance.pause();
        }
      } catch (err) {
        console.error('Failed to initialize Lottie animation:', err);
      }
    }

    loadLottie();

    return () => {
      isMounted = false;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationData, path, loop, autoplay]);

  // React to isPaused prop changes
  useEffect(() => {
    if (!animRef.current) return;
    if (isPaused) {
      animRef.current.pause();
    } else {
      animRef.current.play();
    }
  }, [isPaused]);

  // React to speed prop changes
  useEffect(() => {
    if (!animRef.current || speed === undefined) return;
    animRef.current.setSpeed(speed);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      aria-hidden="true"
    />
  );
}

