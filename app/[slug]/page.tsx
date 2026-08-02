import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { BookOpen, ArrowLeft, ArrowRight, FileText, Download } from "lucide-react";
import Link from "next/link";
import { resources } from "@/data/resources";
import { parseFormatting } from "@/utils/textFormatter";
import { Metadata } from "next";

// 1️⃣ Generate Static Params
export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

// 2️⃣ Generate Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return {
      title: "Resource Not Found | DeVoc",
    };
  }

  // Strip formatting syntax for the meta description
  const cleanDescription = resource.description[0]?.replace(/\*\*|__/g, "") || "";

  return {
    title: `${resource.title} | DeVoc`,
    description: cleanDescription,
    openGraph: {
      title: `${resource.title} | DeVoc`,
      description: cleanDescription,
    },
  };
}

// 3️⃣ Resource Details Page Component
export default async function ResourceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
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
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-semibold transition-colors bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 hover:shadow-sm"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {resource.category && (
                <span className="px-3 py-1 text-xs font-bold text-primary bg-blue-100 border border-blue-200 rounded-full uppercase tracking-wider">
                  {resource.category}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {resource.title}
            </h1>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Description */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                About the Guide
                <span className="h-px bg-slate-200 grow ml-4" />
              </h2>

              <div className="prose prose-base sm:prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                {Array.isArray(resource.description) ? (
                  resource.description.map((p: string, i: number) => (
                    <p key={i}>
                      {parseFormatting(p)}
                    </p>
                  ))
                ) : (
                  <p>{parseFormatting(resource.description)}</p>
                )}
              </div>

              {resource.topics && resource.topics.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resource.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50">
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="text-slate-700 font-medium text-sm sm:text-base">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                    Resource Details
                  </h3>

                  <div className="space-y-6">
                    {resource.format && (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                            Format
                          </p>
                          <p className="text-slate-900 font-semibold">
                            {resource.format}
                          </p>
                        </div>
                      </div>
                    )}

                    {resource.targetAudience && (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                          <BookOpen size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                            Target Audience
                          </p>
                          <p className="text-slate-900 font-semibold text-sm">
                            {resource.targetAudience}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Download Button */}
                  <div className="active:scale-[0.97] transition-transform">
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <a
                        href={resource.filePath}
                        download
                        className="w-full flex justify-center items-center gap-2 bg-[lab(44.0605%_29.0279_-86.0352)] hover:bg-[#193CB8] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 group cursor-pointer"
                      >
                        Download PDF
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
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
