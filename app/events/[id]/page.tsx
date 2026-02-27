import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";

// 1️⃣ Generate Static Params
export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

// 2️⃣ Event Page Component
export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const eventId = resolvedParams.id;
  const event = events.find((e) => e.id.toString() === eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="grow pt-24 px-6 sm:px-8 md:px-10 pb-16 relative">
        {/* Ambient background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[60vh] opacity-10">
            <Image
              src={event.image}
              alt="ambient background"
              fill
              className="object-cover blur-[120px]"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 hover:shadow-sm"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-4xl mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {event.category && (
                <span className="px-3 py-1 text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 rounded-full uppercase tracking-wider">
                  {event.category}
                </span>
              )}
              {event.date && (
                <span className="px-3 py-1 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded-full flex items-center gap-1">
                  <Calendar size={12} />
                  {event.date}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {event.title}
            </h1>
          </div>

          {/* Hero Image – aspect preserved, no white bg */}
          <div className="w-full mb-14">
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={1600}
                height={900}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                className="
                  w-full
                  h-auto
                  max-h-[75vh]
                  object-contain
                  mx-auto
                  rounded-3xl
                  md:shadow-lg md:shadow-blue-900/10
                "
                priority
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Description */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                About the Event
                <span className="h-px bg-slate-200 grow ml-4" />
              </h2>

              <div className="prose prose-base sm:prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                {Array.isArray(event.description)
                  ? event.description.map((p, i) => (
                      <p key={i} className="mb-4">
                        {p}
                      </p>
                    ))
                  : <p>{event.description}</p>}
              </div>
            </div>

            {/* Sidebar */}
            {(event.date || event.location || event.attendees) && (
              <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                      Event Details
                    </h3>

                    <div className="space-y-6">
                      {event.date && (
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                            <Calendar size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                              Date
                            </p>
                            <p className="text-slate-900 font-semibold">
                              {event.date}
                            </p>
                          </div>
                        </div>
                      )}

                      {event.location && (
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                            <MapPin size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                              Location
                            </p>
                            <p className="text-slate-900 font-semibold">
                              {event.location}
                            </p>
                          </div>
                        </div>
                      )}

                      {event.attendees && (
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                            <Users size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                              Attendees
                            </p>
                            <p className="text-slate-900 font-semibold">
                              {event.attendees}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}