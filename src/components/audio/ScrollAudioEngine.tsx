'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

/**
 * 100% Non-Copyrighted Generative Ambient Soundscape Engine.
 * Synthesized in real-time via the Web Audio API.
 * Modulates chord harmonics and filter resonance as the user scrolls.
 */
export default function ScrollAudioEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Harmonious ambient chords (Root, Fifth, Minor Third, Seventh, Ninth)
  // D minor 9 ambient progression
  const CHORD_FREQS = [
    [73.42, 110.0, 174.61, 220.0, 261.63], // Dm9: D2, A2, F3, A3, C4
    [58.27, 116.54, 174.61, 233.08, 293.66], // Bbmaj7: Bb1, Bb2, F3, Bb3, D4
    [87.31, 130.81, 174.61, 261.63, 329.63], // Fmaj9: F2, C3, F3, C4, E4
    [65.41, 98.0, 164.81, 196.0, 246.94], // Cadd9: C2, G2, E3, G3, B3
  ];

  const currentChordIdx = useRef(0);

  // Initialize Web Audio Context and Synthesizer Nodes
  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return audioCtxRef.current;

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return null;

    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, ctx.currentTime);
    masterGain.connect(ctx.destination);
    masterGainRef.current = masterGain;

    // Resonant Low-Pass Filter (modulated by scroll)
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, ctx.currentTime); // Gentle warm base
    filter.Q.setValueAtTime(2.5, ctx.currentTime);
    filter.connect(masterGain);
    filterRef.current = filter;

    return ctx;
  }, [volume]);

  // Start Generative Ambient Drone Oscillators
  const startSound = useCallback(() => {
    const ctx = initAudio();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Stop any existing oscillators
    stopSound();

    const filter = filterRef.current;
    if (!filter) return;

    const freqs = CHORD_FREQS[currentChordIdx.current];
    const newOscs: OscillatorNode[] = [];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      // Soft triangle and sine waves for soothing cinematic ambient textures
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Add gentle detuning for lush chorusing
      osc.detune.setValueAtTime((idx - 2) * 4, ctx.currentTime);

      // Staggered volumes to keep lower bass deep and higher notes airy
      const noteVolume = idx === 0 ? 0.35 : idx === 1 ? 0.25 : 0.15;
      oscGain.gain.setValueAtTime(0.001, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(noteVolume, ctx.currentTime + 2.5);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start();
      newOscs.push(osc);
    });

    oscillatorsRef.current = newOscs;
    setIsPlaying(true);
  }, [initAudio]);

  const stopSound = useCallback(() => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (_) {}
    });
    oscillatorsRef.current = [];
    setIsPlaying(false);
  }, []);

  // Toggle audio on/off
  const toggleAudio = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  // Scroll Reaction: Dynamically modulate filter frequency and chords on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const delta = Math.abs(currentY - lastScrollY);
          lastScrollY = currentY;

          // If sound is enabled and running
          if (audioCtxRef.current && filterRef.current && isPlaying) {
            const ctx = audioCtxRef.current;

            // Map scroll speed to filter cutoff frequency (from 320 Hz up to 1600 Hz)
            const speedBoost = Math.min(delta * 25, 1200);
            const targetFreq = Math.min(320 + speedBoost, 1800);

            filterRef.current.frequency.cancelScheduledValues(ctx.currentTime);
            filterRef.current.frequency.setTargetAtTime(targetFreq, ctx.currentTime, 0.1);

            // Cycle chord progressions at document milestones (25%, 50%, 75%)
            const scrollRatio = currentY / (document.documentElement.scrollHeight - window.innerHeight || 1);
            const chordIndex = Math.floor(scrollRatio * 4) % 4;

            if (chordIndex !== currentChordIdx.current) {
              currentChordIdx.current = chordIndex;
              // Transition frequencies smoothly
              const nextFreqs = CHORD_FREQS[chordIndex];
              oscillatorsRef.current.forEach((osc, i) => {
                if (nextFreqs[i]) {
                  osc.frequency.setTargetAtTime(nextFreqs[i], ctx.currentTime, 1.2);
                }
              });
            }

            // Gently glide back down to warm ambient floor when scrolling stops
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
              if (filterRef.current && audioCtxRef.current) {
                filterRef.current.frequency.setTargetAtTime(320, audioCtxRef.current.currentTime, 0.8);
              }
            }, 150);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isPlaying]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopSound();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopSound]);

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      <div className="relative group">
        {/* Floating Audio Pill */}
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-md shadow-xl transition-all duration-300 cursor-pointer ${
            isPlaying
              ? 'bg-zinc-950/90 dark:bg-white/10 text-white border-red-500/50 shadow-red-950/20'
              : 'bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/10 hover:border-red-500/30'
          }`}
          aria-label={isPlaying ? 'Mute ambient scroll music' : 'Enable ambient scroll music'}
          title="Non-copyrighted generative ambient soundscape (modulates on scroll)"
        >
          {isPlaying ? (
            <>
              {/* Animated Equalizer Waveform */}
              <div className="flex items-center gap-0.5 h-3.5 w-4.5 justify-center">
                <span className="w-0.5 bg-red-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                <span className="w-0.5 bg-red-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s] h-2" />
                <span className="w-0.5 bg-red-600 rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.4s] h-3.5" />
              </div>
              <span className="text-[11px] font-semibold tracking-tight text-white dark:text-zinc-100 hidden sm:inline">
                Ambient Sound
              </span>
              <Volume2 className="w-3.5 h-3.5 text-red-500" />
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-500 transition-colors" />
              <span className="text-[11px] font-medium tracking-tight text-zinc-600 dark:text-zinc-400 hidden sm:inline">
                Scroll Audio: Off
              </span>
            </>
          )}
        </button>

        {/* Informative Tooltip on Hover */}
        <div className="absolute bottom-full right-0 mb-2 w-56 p-2.5 rounded-xl bg-zinc-900 text-white text-[11px] shadow-2xl border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex items-center gap-1.5 font-bold text-red-400 pb-1">
            <Sparkles className="w-3 h-3" />
            <span>Generative Soundscape</span>
          </div>
          <p className="text-zinc-300 text-[10px] leading-relaxed">
            100% royalty-free synthesized ambient music. Modulates chord harmonics & filter resonance dynamically as you scroll.
          </p>
        </div>
      </div>
    </div>
  );
}

