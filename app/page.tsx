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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <AboutSecond/>
      {/* <Courses /> */}
      <ImageSlider/>
      <Testimonials />
      <CTA />
      <Footer />
      <Chatbot />
    </main>
  );
}
