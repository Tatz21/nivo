'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export interface VantaNetProps {
  /**
   * Optional custom selector (e.g. "#your-element-selector").
   * If omitted, a direct DOM ref on the container will be used.
   */
  el?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  mouseControls?: boolean;
  touchControls?: boolean;
  gyroControls?: boolean;
  minHeight?: number;
  minWidth?: number;
  scale?: number;
  scaleMobile?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  showDots?: boolean;
  color?: number;
  backgroundColor?: number;
  backgroundAlpha?: number;
}

declare global {
  interface Window {
    THREE?: any;
    VANTA?: {
      NET: (options: any) => {
        destroy: () => void;
        setOptions: (options: any) => void;
        resize: () => void;
      };
      current?: any;
    };
  }
}

/**
 * Loads external script if not already loaded.
 */
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return resolve();

    // Check if script tag already exists
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if ((existing as any).dataset.loaded === 'true') {
        return resolve();
      }
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', (err) => reject(err));
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });
}

/**
 * Ensures Three.js r134 and Vanta.NET are loaded in the browser.
 */
async function ensureVantaNetLoaded(): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  // 1. Ensure THREE is loaded
  if (!window.THREE) {
    try {
      await loadScript('/vendor/three.r134.min.js');
    } catch {
      // Fallback to CDN
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
    }
  }

  // 2. Ensure VANTA.NET is loaded
  if (!window.VANTA?.NET) {
    try {
      await loadScript('/vendor/vanta.net.min.js');
    } catch {
      // Fallback to CDN
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');
    }
  }

  return !!(window.THREE && window.VANTA?.NET);
}

export default function VantaNetBackground({
  el: customSelector,
  className = '',
  style = {},
  children,
  mouseControls = true,
  touchControls = true,
  gyroControls = false,
  minHeight = 200.0,
  minWidth = 200.0,
  scale = 1.0,
  scaleMobile = 1.0,
  points = 10,
  maxDistance = 22.0,
  spacing = 16.0,
  showDots = true,
  color: customColor,
  backgroundColor: customBgColor,
  backgroundAlpha = 1.0,
}: VantaNetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<any>(null);
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // Nivó Brand Theme Colors:
  // Dark mode: Deep Obsidian #09090B with Crimson Red #DC2626 particles & network
  // Light mode: Clean Off-White #FAFAFA with Crimson Red #DC2626 network
  const defaultBg = isDark ? 0x09090b : 0xfafafa;
  const defaultColor = 0xdc2626;

  const activeBg = customBgColor !== undefined ? customBgColor : defaultBg;
  const activeColor = customColor !== undefined ? customColor : defaultColor;

  useEffect(() => {
    let isCancelled = false;

    ensureVantaNetLoaded()
      .then((ready) => {
        if (!ready || isCancelled) return;
        setIsLoaded(true);

        const targetEl = customSelector
          ? document.querySelector(customSelector)
          : containerRef.current;

        if (!targetEl || vantaEffectRef.current) return;

        try {
          vantaEffectRef.current = window.VANTA!.NET({
            el: targetEl,
            mouseControls,
            touchControls,
            gyroControls,
            minHeight,
            minWidth,
            scale,
            scaleMobile,
            points,
            maxDistance,
            spacing,
            showDots,
            color: activeColor,
            backgroundColor: activeBg,
            backgroundAlpha,
          });
        } catch (err) {
          console.error('[VANTA.NET] Initialization failed:', err);
        }
      })
      .catch((err) => {
        console.warn('[VANTA.NET] Script load error:', err);
      });

    return () => {
      isCancelled = true;
      if (vantaEffectRef.current) {
        try {
          vantaEffectRef.current.destroy();
        } catch (_) {}
        vantaEffectRef.current = null;
      }
    };
  }, [
    customSelector,
    mouseControls,
    touchControls,
    gyroControls,
    minHeight,
    minWidth,
    scale,
    scaleMobile,
    points,
    maxDistance,
    spacing,
    showDots,
  ]);

  // Update colors when theme switches without destroying scene
  useEffect(() => {
    if (vantaEffectRef.current) {
      try {
        if (typeof vantaEffectRef.current.destroy === 'function') {
          // Re-create on theme toggle to recompute color gradients accurately
          vantaEffectRef.current.destroy();
          const targetEl = customSelector
            ? document.querySelector(customSelector)
            : containerRef.current;

          if (targetEl && window.VANTA?.NET) {
            vantaEffectRef.current = window.VANTA.NET({
              el: targetEl,
              mouseControls,
              touchControls,
              gyroControls,
              minHeight,
              minWidth,
              scale,
              scaleMobile,
              points,
              maxDistance,
              spacing,
              showDots,
              color: activeColor,
              backgroundColor: activeBg,
              backgroundAlpha,
            });
          }
        }
      } catch (e) {
        console.warn('[VANTA.NET] Color update error:', e);
      }
    }
  }, [activeBg, activeColor]);

  return (
    <div
      ref={containerRef}
      id={customSelector ? customSelector.replace(/^#/, '') : 'nivo-vanta-net'}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
