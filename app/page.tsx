import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/AboutWhy";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import AboutSecond from "@/components/About";
import ImageSlider from "@/components/ImageSlider";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import { jsonLd } from "@/data/jsonld";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Chatbot />
      <Hero />
      <Features />
      <About />
      <AboutSecond/>
      <Courses />
      <Events/>
      <ImageSlider/>
      <Testimonials />
      <CTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQ/>
      <Footer />
    </main>
  );
}
