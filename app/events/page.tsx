"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- Import your existing components here ---
// Adjust the paths (e.g., "@/components/Navbar") based on your project structure
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

// --- Event Data ---
import { events } from "@/data/events";

// --- Animation Variants ---
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Navbar Component */}
      <Navbar />

      <main className="flex-grow">
        <section className="py-20 md:py-24 relative overflow-hidden">
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Where We&apos;ve <span className="text-blue-600">Been</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  From intense hackathons to casual learning sessions, here is a look back at the events that shaped our community.
                </p>
              </div>
              
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="
                flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory 
                md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0
                scrollbar-hide
              "
            >
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  whileTap={{ scale: 0.98 }} // Tactile feedback
                  className="
                    group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm 
                    min-w-[85vw] md:min-w-0 snap-center flex flex-col h-full"
                >
                   <Link href={`/events/${event.id}`} className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 33vw"
                      className="object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <span className="bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                        <Calendar size={12} className="text-blue-600" />
                        {event.date}
                      </span>
                      
                      <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-1">
                      {event.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {event.description}
                    </p>

                    {/* Footer Metadata */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <MapPin size={14} className="text-blue-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Users size={14} className="text-blue-500" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
              </Link>
              
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile View All Button */}
            <div className="mt-2 text-center md:hidden">
              <Link 
                href="/events" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
              >
                See all previous events <ArrowUpRight size={16} />
              </Link>
            </div>

          </div>
          
          {/* Scrollbar Hiding Styles */}
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
      </main>

      {/* 3. Footer Component */}
      <Footer />
    </div>
  );
}