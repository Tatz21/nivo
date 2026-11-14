import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import Script from 'next/script';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import CustomCursor from '@/components/cursor/CustomCursor';
import CosmicBackground from '@/components/motion/CosmicBackground';
import ScrollAudioEngine from '@/components/audio/ScrollAudioEngine';
import { ThemeProvider } from '@/context/ThemeContext';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090B' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nivo.education'),
  title: {
    default: 'Nivó | Modern Education, Training, Recruitment & Resume Studio',
    template: '%s | Nivó'
  },
  description: 'Operating since 2020. Nivó bridges foundational academic tutoring, industry-focused engineering & AI training, institutional educator recruitment, and our first-party Resume Studio.',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Nivó',
  },
  keywords: [
    'Nivó',
    'Education & Training',
    'Academic Tutoring',
    'Software Engineering Bootcamp',
    'AI & Machine Learning Course',
    'Teacher Recruitment',
    'Faculty Placement',
    'Resume Studio',
    'ATS Resume Builder'
  ],
  authors: [{ name: 'Nivó Academic Council' }],
  creator: 'Nivó',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nivo.education',
    siteName: 'Nivó',
    title: 'Nivó | Modern Education, Training, Recruitment & Resume Studio',
    description: 'Operating since 2020. Connecting learners, professionals, and institutions with verified academic faculty and first-party career tooling.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/brand/logo-emblem-dark.png', media: '(prefers-color-scheme: dark)' },
      { url: '/brand/logo-emblem-light.png', media: '(prefers-color-scheme: light)' },
    ],
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${manrope.variable} ${inter.variable} dark scroll-smooth`}>
      <head>
        <Script
          src="/vendor/three.r134.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/vanta.net.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="nivo-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('nivo-theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-zinc-50 dark:bg-[#09090B] text-zinc-950 dark:text-[#FAFAFA] antialiased selection:bg-[#DC2626] selection:text-white flex flex-col justify-between transition-colors duration-200">
        <ThemeProvider>
          {/* Interactive Custom Cursor (Desktop fine pointers only) */}
          <CustomCursor />

          {/* Ambient Cosmic Background */}
          <CosmicBackground />

          {/* Generative Non-Copyrighted Ambient Sound on Scroll */}
          <ScrollAudioEngine />

          {/* Global Navigation */}
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          {/* Main Content Area */}
          <main className="flex-grow relative z-10 pb-24 md:pb-0">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Native PWA Mobile Bottom Tab Dock */}
          <Suspense fallback={null}>
            <MobileBottomNav />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
