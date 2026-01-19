"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Smartphone, Globe, Coffee, Layers, Terminal, Hash } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    // Configuration for the floating tech badges
    const floatingTech = [
        { label: "React", icon: <Code size={18} />, color: "bg-blue-100 text-blue-600", position: "top-0 -left-4", delay: 0 },
        { label: "Web", icon: <Globe size={18} />, color: "bg-purple-100 text-purple-600", position: "-top-10 right-10", delay: 1 },
        { label: "App", icon: <Smartphone size={18} />, color: "bg-green-100 text-green-600", position: "bottom-20 -left-10", delay: 2 },
        { label: "Django", icon: <Layers size={18} />, color: "bg-emerald-100 text-emerald-700", position: "-bottom-6 right-20", delay: 1.5 },
        { label: "Flutter", icon: <Layers size={18} />, color: "bg-cyan-100 text-cyan-600", position: "top-1/2 -right-12", delay: 0.5 },
        { label: "C", icon: <Terminal size={18} />, color: "bg-gray-100 text-gray-700", position: "top-20 -left-12", delay: 2.5 },
        { label: "Java", icon: <Coffee size={18} />, color: "bg-orange-100 text-orange-600", position: "top-1/4 -right-10", delay: 3 },
        { label: "Python", icon: <Hash size={18} />, color: "bg-yellow-100 text-yellow-700", position: "top-1/3 left-1/4", delay: 3.5 },
    ];

    return (
        // Changed pt-32 to pt-24 for mobile to save space
        <section className="relative pt-24 px-4 pb-20 lg:px-10 lg:pt-32 min-h-svh lg:pb-32 overflow-hidden bg-linear-to-b from-blue-50/50 to-white">
            
            {/* Background Blobs - Adjusted opacity for cleaner mobile look */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 lg:w-125 lg:h-125 bg-purple-200/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 lg:w-125 lg:h-125 bg-blue-200/40 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    
                    {/* Left Side Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-medium text-xs sm:text-sm mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            New Cohort Starting Soon
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            // Responsive text sizing: text-4xl on mobile, 7xl on desktop
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
                        >
                            Learn Coding. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                                Pay Flexibly.
                            </span>{" "}
                            <br />
                            Build Future.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Master real-world software development with our hybrid learning
                            model. Personalized mentorship, affordable plans, and a guaranteed
                            path to your tech career.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Link href="/register" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2 group">
                                Start Learning Today
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href={"/brochure.pdf"} download={"brochure.pdf"} className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                Download Brochure
                                <Download className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side Visuals - Now Visible on Mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="mt-12 lg:mt-0 w-full lg:w-1/2 hidden lg:block relative max-w-lg mx-auto lg:mx-0"
                    >
                         {/* Scale down slightly on mobile to ensure floating badges don't get cut off */}
                        <div className="scale-[0.85] sm:scale-100 origin-center">
                            <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 aspect-[4/3] flex items-center justify-center overflow-visible">
                                
                                {/* Inner UI Design */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col p-6 rounded-2xl overflow-hidden">
                                    <div className="w-full h-8 bg-white rounded-lg shadow-sm mb-4 flex items-center px-4 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-1 flex gap-4">
                                        <div className="w-1/4 bg-white h-full rounded-lg shadow-sm"></div>
                                        <div className="w-3/4 bg-white h-full rounded-lg shadow-sm p-4 space-y-3">
                                            <div className="w-full h-4 bg-slate-100 rounded"></div>
                                            <div className="w-2/3 h-4 bg-slate-100 rounded"></div>
                                            <div className="w-full h-32 bg-blue-50/50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                                                <Code className="text-blue-300 w-12 h-12" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Tech Badges */}
                                {floatingTech.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 4,
                                            ease: "easeInOut",
                                            delay: item.delay
                                        }}
                                        className={`absolute ${item.position} px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-lg border border-white/50 backdrop-blur-sm flex items-center gap-3 z-20 bg-white`}
                                    >
                                        <div className={`p-1.5 lg:p-2 rounded-lg ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <div className="hidden sm:block"> {/* Hide labels on super small screens if needed */}
                                            <p className="text-sm font-bold text-slate-800 whitespace-nowrap">
                                                {item.label}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}