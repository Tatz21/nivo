'use client';

import React from 'react';
import { BouncyCardsFeatures } from '@/components/ui/bounce-card-features';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative z-10 py-12">
      <ScrollReveal>
        <BouncyCardsFeatures />
      </ScrollReveal>
    </section>
  );
}
