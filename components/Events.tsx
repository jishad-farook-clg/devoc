"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { easeOut } from "framer-motion"
import { events } from "@/data/events";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function PastEvents() {
  return (
    <section id="events" className="py-20 px-10 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Live Events
            </h2>
            {/* <p className="text-slate-600 text-base md:text-lg">
              Moments from past gatherings and ongoing initiatives that bring our community together.
            </p> */}
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileTap={{ scale: 0.97 }}
              className="
                group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm
                min-w-[75vw] md:min-w-0 snap-center flex flex-col
              "
            >
              <Link href={`/events/${event.id}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-52 md:h-56 w-full">
                  {event.image && (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex justify-between">
                    {event.date && (
                      <span className="bg-white/95 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Calendar size={12} className="text-blue-600" />
                        {event.date}
                      </span>
                    )}

                    {event.category && (
                      <span className="bg-blue-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center">
                        {event.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {event.title && (
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-1">
                      {event.title}
                    </h3>
                  )}

                  {event.description && (
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 grow">
                      {event.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    {event.location && (
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <MapPin size={14} className="text-blue-500" />
                        {event.location}
                      </div>
                    )}

                    {event.attendees && (
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Users size={14} className="text-blue-500" />
                        {event.attendees}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
