import React from 'react';
import HeroSection from '@/components/marketing/HeroSection';
import AudiencePathwaySection from '@/components/marketing/AudiencePathwaySection';
import PillarsSection from '@/components/marketing/PillarsSection';
import HowItWorksSection from '@/components/marketing/HowItWorksSection';
import ResumeStudioFeature from '@/components/marketing/ResumeStudioFeature';
import TrustEthicsSection from '@/components/marketing/TrustEthicsSection';
import ConsultationBanner from '@/components/marketing/ConsultationBanner';
import FAQSection from '@/components/marketing/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16 pb-20">
      {/* 1. Hero with Standalone 3D Classroom Lottie */}
      <HeroSection />

      {/* 2. Tailored Pathways (Students, Engineers, Institutions) */}
      <AudiencePathwaySection />

      {/* 3. Four Core Pillars Architecture */}
      <PillarsSection />

      {/* 4. How It Works: Four Steps to Mastery */}
      <HowItWorksSection />

      {/* 5. Resume Studio Application Highlight */}
      <ResumeStudioFeature />

      {/* 6. Our Operating Philosophy with Refined Boxes Style */}
      <TrustEthicsSection />

      {/* 7. Direct Academic Advisory Banner */}
      <ConsultationBanner />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}
