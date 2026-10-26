"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, Compass, Lock, CheckCircle2, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Embla Carousel Imports
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
        "h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-800 text-zinc-900 dark:text-white shadow-md disabled:opacity-40 transition-all",
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
        "h-10 w-10 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md hover:bg-white dark:hover:bg-zinc-800 text-zinc-900 dark:text-white shadow-md disabled:opacity-40 transition-all",
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

// --- Service Interface & Card Component ---
export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  tag?: string;
  image?: string;
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex h-[440px] w-full flex-col justify-between overflow-hidden rounded-3xl p-7 border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-xl bg-gradient-to-br transition-all duration-300",
        service.gradient
      )}
    >
      {/* Background Unsplash Stock Image with Overlay */}
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 pointer-events-none"
        />
      )}

      {/* Top Header */}
      <div className="z-10 flex items-center justify-between">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900/60 dark:text-white/60 px-2.5 py-1 rounded-full bg-white/40 dark:bg-black/30 border border-black/5 dark:border-white/10 backdrop-blur-sm">
          ( {service.number} )
        </span>
        {service.tag && (
          <span className="text-[11px] font-bold text-emerald-700 dark:text-lime-300 px-2.5 py-1 rounded-full bg-emerald-500/15 dark:bg-lime-400/15 border border-emerald-500/20 dark:border-lime-400/20">
            {service.tag}
          </span>
        )}
      </div>

      {/* Center Icon */}
      <div className="z-10 my-auto">
        <div className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white shadow-md group-hover:scale-110 transition-transform duration-300">
          <service.icon className="h-7 w-7" />
        </div>
      </div>

      {/* Bottom Text Content */}
      <div className="z-10 space-y-2">
        <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
          {service.description}
        </p>
      </div>

      {/* Soft gradient bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-black/40 to-transparent pointer-events-none" />
    </motion.div>
  );
};

// --- Main Exportable Carousel Component ---
export const ServiceCarousel = ({
  services,
  className,
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
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <ServiceCard service={service} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>

        {/* Carousel Prev & Next Controls */}
        <div className="mt-8 flex items-center justify-end gap-3 px-2">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  ServiceCard,
};
