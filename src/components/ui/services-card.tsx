// components/ui/animated-service-card.tsx

"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Shadcn UI Carousel Imports
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { Button } from "@/components/ui/button";

// --- Carousel Context ---
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// --- Main Carousel Component ---
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

// --- Carousel Content ---
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

// --- Carousel Item ---
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

// --- Carousel Controls ---
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-10 w-10 rounded-full z-20 shadow-md",
        "left-2 top-1/2 -translate-y-1/2",
        "bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 hover:bg-white dark:hover:bg-zinc-800 text-zinc-950 dark:text-white disabled:opacity-30 cursor-pointer backdrop-blur-md transition-all",
        className,
      )}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-10 w-10 rounded-full z-20 shadow-md",
        "right-2 top-1/2 -translate-y-1/2",
        "bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 hover:bg-white dark:hover:bg-zinc-800 text-zinc-950 dark:text-white disabled:opacity-30 cursor-pointer backdrop-blur-md transition-all",
        className,
      )}
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

// --- Service Card & Carousel Section ---
export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag?: string;
  proofPoints?: string[];
  gradient?: string;
  image?: string;
}

// Sub-component for individual cards
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex min-h-[440px] w-full flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-8 transition-all duration-300",
        "bg-white dark:bg-zinc-950/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-red-500/40 dark:hover:border-red-500/40",
      )}
    >
      {/* Top Crimson Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/30 to-transparent group-hover:via-red-600 transition-all duration-500" />

      {/* Ambient Crimson Aura on Hover */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-red-600/10 dark:bg-red-600/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #dc2626 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Card Header: Index & Tag & Icon */}
      <div className="relative z-10 flex flex-col items-start text-left space-y-5">
        <div className="w-full flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50">
            // {service.number}
          </span>
          {service.tag && (
            <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10">
              {service.tag}
            </span>
          )}
        </div>

        <div className="p-3.5 rounded-2xl bg-red-600/10 dark:bg-red-500/15 border border-red-500/20 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
          <service.icon className="h-6 w-6" />
        </div>
      </div>

      {/* Card Content & Proof Points */}
      <div className="relative z-10 space-y-4 pt-6">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
            {service.description}
          </p>
        </div>

        {/* Tangible Checkmark Commitments */}
        {service.proofPoints && service.proofPoints.length > 0 && (
          <div className="pt-3 border-t border-zinc-100 dark:border-white/10 space-y-2 text-xs">
            {service.proofPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                <span className="text-[11px] leading-tight font-medium">{point}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Main exportable component
export const ServiceCarousel = ({ 
  services,
  className 
}: { 
  services: Service[];
  className?: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      <Carousel
        ref={ref}
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <ServiceCard service={service} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>

        {/* Carousel Next & Prev Controls */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ServiceCard,
};
