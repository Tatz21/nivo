import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/cursor/CustomCursor';
import CosmicBackground from '@/components/motion/CosmicBackground';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://nivo.education'),
  title: {
    default: 'Nivó — Modern Education, Training, Recruitment & Resume Studio',
    template: '%s | Nivó'
  },
  description: 'Operating since 2020. Nivó bridges foundational academic tutoring, industry-focused engineering & AI training, institutional educator recruitment, and our first-party Resume Studio.',
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
    title: 'Nivó — Modern Education, Training, Recruitment & Resume Studio',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#11111B] text-[#FAF9F6] antialiased selection:bg-[#6554F5] selection:text-white flex flex-col justify-between">
        {/* Interactive Custom Cursor (Desktop fine pointers only) */}
        <CustomCursor />

        {/* Ambient Cosmic Background */}
        <CosmicBackground />

        {/* Global Navigation */}
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        {/* Main Content Area */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
