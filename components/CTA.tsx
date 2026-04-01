"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
          
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900" />

          {/* Soft Light Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_40%)]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-indigo-400/30 rounded-full blur-[120px]" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 md:px-12 md:py-24 text-center backdrop-blur-[2px]">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                New Batch Starting Soon
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Launch Your Tech Career{" "}
                <span className="block text-blue-200">
                  Without Fear or Risk
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl leading-relaxed">
                Step into hybrid learning where you gain insights from industry experts, build real-world projects and continuously grow.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                {/* Primary */}
                <motion.div whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                  <Link
                    href="/register"
                    className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all"
                  >
                    <span className="relative z-10">Apply Now</span>

                    <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 blur transition-all" />

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Secondary */}
                <motion.div whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                  <Link
                    href="/files/brochure.pdf"
                    download
                    className="group w-full sm:w-auto px-8 py-4 rounded-xl border border-white/80 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    Download Brochure
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </Link>
                </motion.div>

              </div>

              {/* Trust Points */}
              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-blue-100/90 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  No IT Background Required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Practical Learning
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Job-Focused Curriculum
                </span>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}