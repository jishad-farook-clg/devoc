"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowRight, ArrowLeft, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Nasih Ameen",
    role: "B.Voc Software Development 1st year Student",
    content:
      "I started with absolutely zero coding knowledge. I thought it was too complex for me. DeVoc broke it down simply. Now, I'm not just watching tutorials; I'm actually building real projects on my own.",
    img: "/testimonial/testimonial_1.jpeg",
  },
  {
    name: "Najad",
    role: "B.Voc Software Development 1st year Student",
    content:
      "The first time I saw a red error message, I panicked. Here, the mentors taught me that errors are just part of learning. I'm not scared to try new things or break code anymore.",
    img: "/testimonial/testimonial_2.jpeg",
  },
  {
    name: "Sharafath",
    role: "B.Voc Software Development 1st year Student",
    content:
      "I used to think you needed to be a math genius to code. I learned here that it's just about solving problems step-by-step. It's challenging, but the feeling when your code finally works is unbeatable.",
    img: "/testimonial/testimonial_3.jpeg",
  },
  {
    name: "Marzook",
    role: "B.Voc Software Development 1st year Student",
    content:
      "Watching videos made me feel like I understood, but I couldn't write a single line. This community pushed me to type the code myself. That hands-on practice changed everything for me.",
    img: "/testimonial/testimonial_4.jpeg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  const nextSlide = () =>
    setCurrent((curr) => (curr + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));

  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      {/* --------------------------------------------------
         FAST LOADING FIX: THE HIDDEN PRELOADER 
         This forces the browser to download ALL testimonial images
         immediately when the page loads, so they are ready in 
         the cache when the slider moves.
         --------------------------------------------------
      */}
      <div className="hidden">
        {testimonials.map((t, idx) => (
          <Image
            key={idx}
            src={t.img}
            alt="preload"
            width={10}
            height={10}
            priority={true}
          />
        ))}
      </div>

      {/* Background Gradient Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-3xl opacity-60 -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Start From <span className="text-blue-600">Zero</span>. Build
            Anything.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            You don&apos;t need prior experience to become a developer. See how
            our students are mastering the skills to build the future.
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative max-w-4xl mx-auto min-h-[350px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="w-full"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-white/50 backdrop-blur-sm relative overflow-hidden group">
                
                <Quote className="absolute top-4 right-8 text-blue-50 w-32 h-32 -z-0 rotate-12 opacity-50 transition-transform duration-700 group-hover:rotate-0" />

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                  {/* Left Side: Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl relative overflow-hidden shadow-lg ring-4 ring-blue-50/50">
                      <Image
                        src={testimonials[current].img}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        // ADDED PRIORITY HERE TOO
                        priority={true} 
                      />
                    </div>
                  </div>

                  {/* Right Side: Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-slate-700 text-xl leading-relaxed mb-6 font-medium">
                      &quot;{testimonials[current].content}&quot;
                    </p>

                    <div className="border-t border-slate-100 pt-6 mt-2">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                        <h4 className="font-bold text-slate-900 text-lg tracking-tight">
                          {testimonials[current].name}
                        </h4>
                      </div>

                      <p className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-8 bg-blue-600 shadow-md shadow-blue-500/30"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}