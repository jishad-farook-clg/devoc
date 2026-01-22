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
export default async function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // must await the Promise
  const eventId = resolvedParams.id;
  const event = events.find((e) => e.id.toString() === eventId);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="grow pt-24 px-10 pb-16">
        {/* Ambient background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-200 opacity-10">
            <Image src={event.image} alt="ambient bg" fill className="object-cover blur-[100px]" />
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 hover:shadow-sm"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-4xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 rounded-full uppercase tracking-wider">
                {event.category}
              </span>
              <span className="px-3 py-1 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded-full flex items-center gap-1">
                <Calendar size={12} /> {event.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {event.title}
            </h1>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 mb-12 border border-slate-200/50">
            <Image src={event.image} alt={event.title} fill className="object-cover" priority />
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                About the Event
                <div className="h-px bg-slate-200 grow ml-4" />
              </h2>
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                {Array.isArray(event.description)
                  ? event.description.map((p, i) => <p className="mb-3" key={i}>{p}</p>)
                  : <p>{event.description}</p>}
              </div>
            </div>

            {(event.date || event.location || event.attendees) && (
              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                      Event Details
                    </h3>
                    <div className="space-y-6">
                      {event.date && (
                        <div className="flex items-start gap-4 group">
                          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                            <Calendar size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Date</p>
                            <p className="text-slate-900 font-semibold">{event.date}</p>
                          </div>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-start gap-4 group">
                          <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                            <MapPin size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Location</p>
                            <p className="text-slate-900 font-semibold">{event.location}</p>
                          </div>
                        </div>
                      )}
                      {event.attendees && (
                        <div className="flex items-start gap-4 group">
                          <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                            <Users size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Attendees</p>
                            <p className="text-slate-900 font-semibold">{event.attendees}</p>
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
