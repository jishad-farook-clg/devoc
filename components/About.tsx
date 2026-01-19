"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, GraduationCap, Users, Video } from "lucide-react";
import Link from "next/link";

export default function AboutSecond() {
    return (
        <section id="about" className="py-20 px-10 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decorative - Fixed width/height for visibility */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-120 h-120 bg-blue-50/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                            More Than Just An <br />
                            <span className="text-primary">Online Course.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We believe that financial constraints shouldn&apos;t stop talent from
                            blooming. DeVoc provides a structured, mentorship-driven hybrid
                            learning environment where you don&apos;t just watch videos—you build,
                            collaborate, and deploy real software.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Personalized 1:1 Mentorship from Industry Experts",
                                "Hybrid Model: Online Flexibility + Offline Community",
                                "Pay Only When You Are Confident (Flexible Options)",
                                "Lifetime Access to Community & Resources",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-blue-50">
                                        <CheckCircle2 className="text-primary shrink-0" size={18} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link 
                            href="/contact" 
                            className="inline-block px-8 py-3 bg-white text-primary border border-primary/20 hover:border-primary hover:bg-blue-50 transition-all rounded-xl font-bold shadow-sm"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                    {/* Right Side: The 4 Verticals Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 grid grid-cols-2 gap-6 min-w-75"
                    >
                        {[
                            { 
                                icon: GraduationCap, 
                                title: "Academy", 
                                desc: "Course Selling", 
                                color: "text-blue-600", 
                                bg: "bg-blue-100" 
                            },
                            { 
                                icon: Video, 
                                title: "Studios", 
                                desc: "Media Production", 
                                color: "text-purple-600", 
                                bg: "bg-purple-100" 
                            },
                            { 
                                icon: Users, 
                                title: "Community", 
                                desc: "Student Ecosystem", 
                                color: "text-yellow-600", 
                                bg: "bg-yellow-100" 
                            },
                            { 
                                icon: Code2, 
                                title: "IT Labs", 
                                desc: "Software Company", 
                                color: "text-green-600", 
                                bg: "bg-green-100" 
                            },
                        ].map((section, idx) => (
                            <div 
                                key={idx} 
                                className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center hover:transform hover:-translate-y-1 transition-transform duration-300 ${idx === 1 || idx === 3 ? "translate-y-8" : ""}`}
                            >
                                <div className={`p-3 rounded-full mb-4 ${section.bg} ${section.color}`}>
                                    <section.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{section.title}</h3>
                                <p className="text-sm font-medium text-slate-500">{section.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}