"use client";

import { motion } from "framer-motion";
import { AppWindow, Codepen, Smartphone, Database } from "lucide-react";

const courses = [
    {
        title: "Frontend Development",
        icon: AppWindow,
        students: "1.2k+",
        level: "Beginner",
        color: "bg-blue-500",
        gradient: "from-blue-500 to-cyan-400",
        desc: "Master HTML, CSS, React, and modern UI libraries.",
    },
    {
        title: "Backend Engineering",
        icon: Database,
        students: "850+",
        level: "Intermediate",
        color: "bg-purple-500",
        gradient: "from-purple-500 to-pink-500",
        desc: "Build scalable APIs with Node.js, Express, and PostgreSQL.",
    },
    {
        title: "Mobile App Dev",
        icon: Smartphone,
        students: "600+",
        level: "Intermediate",
        color: "bg-indigo-500",
        gradient: "from-indigo-500 to-purple-600",
        desc: "Create cross-platform apps using Flutter and Dart.",
    },
    {
        title: "Python & AI",
        icon: Codepen,
        students: "900+",
        level: "All Levels",
        color: "bg-green-500",
        gradient: "from-green-500 to-emerald-400",
        desc: "Learn Python programming and basics of Machine Learning.",
    },
];

export default function Courses() {
    return (
        <section id="courses" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
                        >
                            Explore Our <span className="text-primary">Top Courses</span>
                        </motion.h2>
                        <p className="text-lg text-slate-600">
                            Curriculum designed by industry experts to get you job-ready.
                        </p>
                    </div>
                    <button className="text-primary font-bold hover:text-blue-800 flex items-center gap-2 group">
                        View All Courses
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className={`h-28 bg-gradient-to-br ${course.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                                <course.icon className="text-white relative z-10" size={32} />
                                <div className="absolute right-0 bottom-0 opacity-10 transform translate-y-1/4 translate-x-1/4">
                                    <course.icon size={120} />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                                    <span>{course.level}</span>
                                    <span>{course.students} Students</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                    {course.desc}
                                </p>

                                <button className="w-full py-2 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-sm">
                                    View Syllabus
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
