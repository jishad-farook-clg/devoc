"use client";

import { useState, useEffect, useCallback } from "react";

import {
  LazyMotion,
  m,
  AnimatePresence,
} from "framer-motion";

import {
  Quote,
  ArrowRight,
  ArrowLeft,
  Star,
} from "lucide-react";

import Image from "next/image";

import { testimonials } from "@/data/testimonials";

// Recommended for drag + gestures + layout animations
const loadFeatures = () =>
  import("framer-motion").then(
    (res) => res.domMax
  );

export default function TestimonialSlider() {
  const [[page, direction], setPage] =
    useState([0, 0]);

  const [isPaused, setIsPaused] =
    useState(false);

  const imageIndex = Math.abs(
    page % testimonials.length
  );

  const currentTestimonial =
    testimonials[imageIndex];

  const paginate = useCallback(
    (newDirection: number) => {
      setPage((prev) => [
        prev[0] + newDirection,
        newDirection,
      ]);
    },
    []
  );

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  // Motion variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),

    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  // Swipe config
  const swipeConfidenceThreshold = 10000;

  const swipePower = (
    offset: number,
    velocity: number
  ) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <LazyMotion features={loadFeatures}>
      <section className="py-20 bg-slate-50 overflow-hidden relative">
        {/* Background Blur Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/4" />

        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-3xl opacity-60 -z-10 -translate-x-1/3 translate-y-1/4" />

        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Start From{" "}
              <span className="text-primary">
                Zero
              </span>
              . Build Anything.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              You don&apos;t need prior
              experience to become a
              developer. See how our students
              are mastering the skills to
              build the future.
            </p>
          </div>

          {/* Slider Wrapper */}
          <div
            className="flex flex-col max-w-4xl mx-auto h-[800px] md:h-[500px]"
            onMouseEnter={() =>
              setIsPaused(true)
            }
            onMouseLeave={() =>
              setIsPaused(false)
            }
          >
            {/* Slider Area */}
            <div className="relative flex-1 w-full">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <m.div
                  key={imageIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },

                    opacity: {
                      duration: 0.2,
                    },

                    scale: {
                      duration: 0.2,
                    },
                  }}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={1}
                  onDragEnd={(
                    _,
                    { offset, velocity }
                  ) => {
                    const swipe =
                      swipePower(
                        offset.x,
                        velocity.x
                      );

                    if (
                      swipe <
                      -swipeConfidenceThreshold
                    ) {
                      paginate(1);
                    } else if (
                      swipe >
                      swipeConfidenceThreshold
                    ) {
                      paginate(-1);
                    }
                  }}
                  className="absolute top-0 left-0 right-0 w-full cursor-grab active:cursor-grabbing px-2 touch-pan-y"
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-secondary/5 border border-white/50 backdrop-blur-sm relative overflow-hidden group select-none min-h-[430px]">
                    {/* Decorative Quote */}
                    <Quote className="absolute top-4 right-8 text-blue-50 w-32 h-32 z-0 rotate-12 opacity-50 transition-transform duration-700 group-hover:rotate-0" />

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                      {/* Profile Image */}
                      <div className="shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl relative overflow-hidden shadow-lg ring-4 ring-blue-50/50">
                          <Image
                            src={
                              currentTestimonial.img
                            }
                            alt={
                              currentTestimonial.alt
                            }
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            draggable={false}
                            placeholder="blur"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                          {[...Array(5)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                size={18}
                                className="fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-slate-700 text-xl leading-relaxed mb-6 font-medium">
                          &quot;
                          {
                            currentTestimonial.content
                          }
                          &quot;
                        </p>

                        {/* Footer */}
                        <div className="border-t border-slate-100 pt-6 mt-2">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                            <h4 className="font-bold text-slate-900 text-lg tracking-tight">
                              {
                                currentTestimonial.name
                              }
                            </h4>
                          </div>

                          <p className="text-slate-500 text-sm font-semibold tracking-wide">
                            {
                              currentTestimonial.role
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </m.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="h-20 shrink-0 flex items-center justify-center gap-6 z-20 lg:pt-[100px] md:pt-[100px]">
              {/* Previous */}
              <button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-primary hover:shadow-lg transition-all"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map(
                  (_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const direction =
                          idx >
                          imageIndex
                            ? 1
                            : -1;

                        setPage([
                          idx,
                          direction,
                        ]);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === imageIndex
                          ? "w-8 bg-primary shadow-md shadow-primary/30"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to testimonial ${
                        idx + 1
                      }`}
                    />
                  )
                )}
              </div>

              {/* Next */}
              <button
                onClick={() => paginate(1)}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary hover:shadow-lg transition-all"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}