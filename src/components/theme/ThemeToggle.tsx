'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a stable placeholder until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 glass-panel opacity-60 cursor-pointer ${className}`}
        aria-label="Theme toggle loading"
        disabled
      >
        <span className="w-4 h-4 rounded-full bg-zinc-600/50 animate-pulse" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all duration-300 cursor-pointer select-none
        ${
          isDark
            ? 'bg-white/5 hover:bg-white/10 border-white/10 text-amber-300 hover:text-amber-200 hover:border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.1)]'
            : 'bg-zinc-100 hover:bg-zinc-200/80 border-zinc-300 text-violet-700 hover:text-violet-900 hover:border-violet-400 shadow-[0_2px_8px_rgba(101,84,245,0.12)]'
        } ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      data-cursor="interactive"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 text-violet-300 group-hover:text-violet-200 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 group-hover:text-amber-600 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
        )}
      </div>

      {showLabel && (
        <span className={`text-xs font-medium tracking-wide ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}

      {/* Accessible tooltip indication for screen readers */}
      <span className="sr-only">
        Current theme: {isDark ? 'Dark' : 'Light'}. Click to toggle.
      </span>
    </button>
  );
}
