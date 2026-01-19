"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

// Double the array for the infinite loop logic
const slides = [...items, ...items];

export default function InfiniteMarquee() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      
      {/* Generalized Heading */}
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Moments & <span className="text-blue-600">Milestones</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A collection of our favorite memories, biggest wins, and the day-to-day life at DeVoc.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden bg-white py-10 border-y border-slate-200">
        
        {/* The Moving Track */}
        <motion.div
          className="flex w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {slides.map((item, idx) => (
            <div
              key={idx}
              // pr-8 creates the spacing between items
              className="relative w-[280px] h-[180px] md:w-[450px] md:h-[300px] flex-shrink-0 pr-8"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={idx < 4}
                />
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}