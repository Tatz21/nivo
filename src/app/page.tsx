import React from 'react';
import HeroSection from '@/components/marketing/HeroSection';
import PillarsSection from '@/components/marketing/PillarsSection';
import ResumeStudioFeature from '@/components/marketing/ResumeStudioFeature';
import TrustEthicsSection from '@/components/marketing/TrustEthicsSection';
import FAQSection from '@/components/marketing/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-12 pb-16">
      {/* 1. Cosmic Black Hole Hero */}
      <HeroSection />

      {/* 2. Three Core Pillars (Education, Courses, HR) */}
      <PillarsSection />

      {/* 3. Resume Studio Feature Highlight */}
      <ResumeStudioFeature />

      {/* 4. Trust & Ethical Operating Philosophy (Since 2020) */}
      <TrustEthicsSection />

      {/* 5. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}
