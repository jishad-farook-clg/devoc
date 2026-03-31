import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Clock, BookOpen, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";

// 1️⃣ Generate Static Params
export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

// 2️⃣ Course Page Component
export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const courseId = resolvedParams.id;
  const course = courses.find((c) => c.id.toString() === courseId) as any;

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navbar />

      <main className="grow pt-32 px-6 sm:px-8 md:px-10 pb-16 relative">
        {/* Main content */}
        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/#courses"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 hover:shadow-sm"
            >
              <ArrowLeft size={16} />
              Back to Programs
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {course.category && (
                <span className="px-3 py-1 text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
              )}
              {course.duration && (
                <span className="px-3 py-1 text-xs font-bold text-slate-600 bg-white/60 border border-slate-200 rounded-full flex items-center gap-1">
                  <Clock size={12} />
                  {course.duration}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {course.title}
            </h1>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Description */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                About the Program
                <span className="h-px bg-slate-200 grow ml-4" />
              </h2>

              <div className="prose prose-base sm:prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                {Array.isArray(course.description)
                  ? course.description.map((p: string, i: number) => (
                      <p key={i} className="mb-4">
                        {p}
                      </p>
                    ))
                  : <p>{course.description}</p>}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                    Program Details
                  </h3>

                  <div className="space-y-6">
                    {course.duration && (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                          <Clock size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                            Duration
                          </p>
                          <p className="text-slate-900 font-semibold">
                            {course.duration}
                          </p>
                        </div>
                      </div>
                    )}

                    {course.mode && (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                            Mode
                          </p>
                          <p className="text-slate-900 font-semibold">
                            {course.mode}
                          </p>
                        </div>
                      </div>
                    )}

                    {course.lessons && (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                          <BookOpen size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                            Curriculum
                          </p>
                          <p className="text-slate-900 font-semibold">
                            {course.lessons} Modules
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enroll Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={course.link || "#"}
                      className="w-full flex justify-center items-center gap-2 bg-[lab(44.0605%_29.0279_-86.0352)] hover:bg-[#193CB8] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 group"
                    >
                      Enroll Now
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}