'use client';

import React from 'react';
import FUIBentoGridDark from '@/components/ui/bento';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative z-10 py-12">
      <ScrollReveal>
        <FUIBentoGridDark />
      </ScrollReveal>
    </section>
  );
}
