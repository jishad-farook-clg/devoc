"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import navLogo from "@/public/NavLogo2.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={navLogo}
            width={100}
            height={100}
            style={{ height: "auto", width: "auto" }}
            alt="DeVoc logo"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            scroll
            className="text-slate-600 hover:text-primary transition-colors font-medium"
          >
            About
          </Link>

          <Link
            href="/#courses"
            scroll
            className="text-slate-600 hover:text-primary transition-colors font-medium"
          >
            Courses
          </Link>

          <Link
            href="/#events"
            scroll
            className="text-slate-600 hover:text-primary transition-colors font-medium"
          >
            Events
          </Link>

          <Link
            href="/#faqs"
            scroll
            className="text-slate-600 hover:text-primary transition-colors font-medium"
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            scroll
            className="text-slate-600 hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>

          <div className="inline-block active:scale-[0.97] transition-transform">
            <Link
              href="/register"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondary transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Join Now
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-6 md:hidden flex flex-col gap-4
          transition-all duration-300 ease-out origin-top
          ${
            mounted && isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <Link
          href="/#about"
          scroll
          className="mx-2 text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          href="/#courses"
          scroll
          className="mx-2 text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
          onClick={closeMenu}
        >
          Courses
        </Link>

        <Link
          href="/#events"
          scroll
          className="mx-2 text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
          onClick={closeMenu}
        >
          Events
        </Link>

        <Link
          href="/#faqs"
          scroll
          className="mx-2 text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
          onClick={closeMenu}
        >
          FAQs
        </Link>

        <Link
          href="/contact"
          scroll
          className="mx-2 text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
          onClick={closeMenu}
        >
          Contact
        </Link>

        <div className="active:scale-[0.97] transition-transform">
          <Link
            href="/register"
            className="bg-primary hover:bg-secondary text-white w-full py-3 rounded-xl font-medium mt-4 text-center block transition-colors"
            onClick={closeMenu}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}