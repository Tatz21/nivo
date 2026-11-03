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
      className={`group relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer select-none
        ${
          isDark
            ? 'bg-white/[0.06] hover:bg-white/10 border-white/10 text-zinc-300 hover:text-white'
            : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800 hover:text-black'
        } ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 text-zinc-300 group-hover:text-white transition-transform duration-200" />
        ) : (
          <Sun className="w-4 h-4 text-zinc-700 group-hover:text-black transition-transform duration-200" />
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
