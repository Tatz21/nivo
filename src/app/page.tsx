import React from 'react';
import HeroSection from '@/components/marketing/HeroSection';
import AudiencePathwaySection from '@/components/marketing/AudiencePathwaySection';
import OurPartnersSection from '@/components/marketing/OurPartnersSection';
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

      {/* 3. Our Partners & Institutional Alliances */}
      <OurPartnersSection />

      {/* 4. Four Core Pillars Architecture */}
      <PillarsSection />

      {/* 5. How It Works: Four Steps to Mastery */}
      <HowItWorksSection />

      {/* 6. Resume Studio Application Highlight */}
      <ResumeStudioFeature />

      {/* 7. Our Operating Philosophy with Refined Boxes Style */}
      <TrustEthicsSection />

      {/* 8. Direct Academic Advisory Banner */}
      <ConsultationBanner />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}
