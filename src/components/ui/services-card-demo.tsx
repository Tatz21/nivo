import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/services-card";
import { Users, Compass, Lock, CheckCircle2, Award } from "lucide-react";

export const philosophyServices: Service[] = [
  {
    number: "001",
    title: "Demonstrated Faculty Vetting",
    description:
      "Every educator in our network undergoes multi-stage credential verification, pedagogical micro-teaching trials, and background reviews before placement.",
    icon: Users,
    tag: "Verified Qualifications",
    gradient: "from-violet-100 to-indigo-200 dark:from-violet-950/70 dark:to-indigo-900/60",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "002",
    title: "Concept-First Pedagogy",
    description:
      "We discard rote memorization in favor of first-principles understanding, structured problem sets, and diagnostic feedback loops.",
    icon: Compass,
    tag: "Analytical Mastery",
    gradient: "from-cyan-100 to-teal-200 dark:from-cyan-950/70 dark:to-teal-900/60",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "003",
    title: "Privacy by Architecture",
    description:
      "Resumes created in Resume Studio are secured with high-entropy cryptographic access tokens. No public directory, no search engine scraping.",
    icon: Lock,
    tag: "Zero Public Exposure",
    gradient: "from-amber-100 to-orange-200 dark:from-amber-950/70 dark:to-orange-900/60",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "004",
    title: "Confirmed Offerings Only",
    description:
      "We publish course durations, tuition modes, and staffing categories only when active and confirmed. No bait-and-switch offerings.",
    icon: CheckCircle2,
    tag: "Transparent Delivery",
    gradient: "from-emerald-100 to-green-200 dark:from-emerald-950/70 dark:to-emerald-900/60",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "005",
    title: "Institutional Accountability",
    description:
      "Direct service-level agreements with leading schools, colleges, and enterprise talent pipelines with verified progress reporting.",
    icon: Award,
    tag: "Established Since 2020",
    gradient: "from-rose-100 to-pink-200 dark:from-rose-950/70 dark:to-pink-900/60",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AnimatedServiceCardDemo() {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center py-8">
      <div className="text-left w-full max-w-7xl mb-8 px-4">
        <h2 className="text-4xl font-bold tracking-tight">Our Operating Philosophy</h2>
      </div>
      <ServiceCarousel services={philosophyServices} />
    </div>
  );
}
