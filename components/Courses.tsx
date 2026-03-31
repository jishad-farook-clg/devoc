"use client";

import { motion, easeOut } from "framer-motion";
import { Clock, BookOpen, ArrowRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { courses } from "@/data/courses";

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

export default function Courses() {
  const router = useRouter();

  return (
    <section
      id="courses"
      className="py-20 px-5 md:py-24 relative overflow-hidden bg-slate-50"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Featured Programs
            </h2>
            <p className="text-slate-600">
              Build the skills you need for your next career step.
            </p>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0"
        >
          {courses.map((course: any) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push(`/course/${course.id}`)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm w-full flex flex-col hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col h-full p-6 md:p-8">
                {/* Badge */}
                {course.category && (
                  <div className="mb-5">
                    <span className="bg-blue-50 text-blue-600 border border-blue-100 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col grow">
                  {/* Title */}
                  {course.title && (
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                  )}

                  {/* Description */}
                  {course.description && (
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 grow">
                      {course.description[0]}
                    </p>
                  )}

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {course.duration && (
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium">
                        <Clock size={14} className="text-blue-500" />
                        <span>{course.duration}</span>
                      </div>
                    )}
                    {course.lessons && (
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium">
                        <BookOpen size={14} className="text-blue-500" />
                        <span>{course.lessons} Modules</span>
                      </div>
                    )}
                    {course.mode && (
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium">
                        <MapPin size={14} className="text-blue-500" />
                        <span>{course.mode}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={course.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      Enroll Now
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}