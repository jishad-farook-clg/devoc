import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutFirst from "@/components/AboutFirst";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import AboutSecond from "@/components/AboutSecond";
import ImageSlider from "@/components/ImageSlider";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import { faqJsonLd, orgJsonld } from "@/data/jsonld";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- SEO / JSON-LD Scripts --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonld) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Chatbot />
      <Hero />
      <Features />
      <AboutFirst />
      <AboutSecond/>
      <Courses />
      <Events/>
      <ImageSlider/>
      <Testimonials />
      <CTA />
      <FAQ/>
      <Footer />
    </main>
  );
}
