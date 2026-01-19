"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Utility to wrap values for infinite scrolling
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const items = [
  { src: "/gallery/gallery1.jpeg", alt: "" },
  { src: "/gallery/gallery8.jpeg", alt: "" },
  { src: "/gallery/gallery9.jpeg", alt: "" },
  { src: "/gallery/gallery7.jpeg", alt: "" },
  { src: "/gallery/gallery2.jpeg", alt: "" },
  { src: "/gallery/gallery3.jpeg", alt: "" },
  { src: "/gallery/gallery4.jpeg", alt: "" },
  { src: "/gallery/gallery5.jpeg", alt: "" },
  { src: "/gallery/gallery6.jpeg", alt: "" },
];

const slides = [...items, ...items];

export default function InfiniteMarquee() {
  // Motion value for infinite position
  const baseX = useMotionValue(0);

  // Container ref for width calculations
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive velocity factor (NO re-renders)
  const velocityFactorRef = useRef(0.08);

  // Auto-scroll speed
  const baseVelocity = -0.01;

  // Sync velocityFactor with Tailwind md breakpoint
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateVelocityFactor = () => {
      velocityFactorRef.current = mediaQuery.matches ? 0.17 : 0.08;
    };

    updateVelocityFactor();
    mediaQuery.addEventListener("change", updateVelocityFactor);

    return () =>
      mediaQuery.removeEventListener("change", updateVelocityFactor);
  }, []);

  // Animation loop (auto-scroll)
  useAnimationFrame((_, delta) => {
    const moveBy = baseVelocity * (delta / 16);
    baseX.set(baseX.get() + moveBy);
  });

  // Wrap raw value into valid percentage range
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  // Drag handler
  const handleDrag = (_: any, info: any) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;

    const deltaPercentage =
      (info.delta.x / containerWidth) *
      100 *
      velocityFactorRef.current;

    baseX.set(baseX.get() + deltaPercentage);
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Moments & <span className="text-blue-600">Milestones</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A collection of our favorite memories, biggest wins, and the day-to-day
          life at DeVoc.
        </p>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-white py-10 border-y border-slate-200 cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.000001}
          onDrag={handleDrag}
        >
          {slides.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[280px] h-[180px] md:w-[450px] md:h-[300px] flex-shrink-0 pr-8"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 pointer-events-none md:pointer-events-auto">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={idx < 4}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
