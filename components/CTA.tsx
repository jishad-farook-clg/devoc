"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    // CHANGE IS HERE: 
    // Replaced 'bg-white' with 'bg-gradient-to-b from-slate-50 to-white'
    // This matches the bottom of your testimonial section and fades to white.
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20">
          
          {/* Background: Gradient & Tech Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
          
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay" />
          <div className="absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
          ></div>

          {/* Glowing Orbs */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-indigo-400/30 rounded-full blur-[100px]" />

          <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto flex flex-col items-center"
            >
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-50 text-sm font-semibold mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>New Batch Starting Soon</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Start Your Tech Journey <br className="hidden md:block" />
                <span className="text-blue-200">Without The Risk.</span>
              </h2>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join the hybrid learning revolution. Learn from industry experts, 
                build real projects and grow yourself.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                
                {/* Primary Button */}
                <Link
                  href="/register"
                  className="group relative w-full sm:w-auto px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/files/brochure.pdf"
                  download="brochure.pdf"
                  className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-blue-300/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Download Brochure
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Footer */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-blue-200/80 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" /> No IT Background required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" /> 100% Practical Learning
                </span>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}