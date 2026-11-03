"use client";

import React from "react";
import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/services-card";
import { Palette, Code, Search, ShieldCheck } from "lucide-react";

const services: Service[] = [
  {
    number: "001",
    title: "Branding & Identity",
    description: "We craft logos and brand systems that leave a lasting impression.",
    icon: Palette,
    gradient: "from-zinc-100 to-zinc-200 dark:from-zinc-900/50 dark:to-zinc-800/50",
  },
  {
    number: "002",
    title: "Software Development",
    description: "Beautiful and functional websites built with purpose and precision.",
    icon: Code,
    gradient: "from-red-50 to-red-100 dark:from-red-950/40 dark:to-zinc-900/50",
  },
  {
    number: "003",
    title: "Institutional Recruitment",
    description: "Vetted educators and instructors placed with guaranteed service levels.",
    icon: ShieldCheck,
    gradient: "from-zinc-100 to-zinc-200 dark:from-zinc-900/50 dark:to-zinc-800/50",
  },
  {
    number: "004",
    title: "ATS Optimization",
    description: "High-performance vector resumes engineered for automated hiring engines.",
    icon: Search,
    gradient: "from-red-50 to-red-100 dark:from-red-950/40 dark:to-zinc-900/50",
  },
];

export default function AnimatedServiceCardDemo() {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center p-8">
      <div className="text-left w-full max-w-6xl mb-12">
        <h1 className="text-6xl font-bold tracking-tighter text-zinc-950 dark:text-white">Services.</h1>
      </div>
      <ServiceCarousel services={services} />
    </div>
  );
}

