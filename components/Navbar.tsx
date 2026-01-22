"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    {/* <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        DeVoc
                    </span> */}
                    {/* <Image src={"/NavLogo.png"} width={100} height={100} alt=""/> */}
                          <Image
                            src="/NavLogo2.png"
                            width={100}
                            height={100}
                            alt="Logo"
                            />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href={"/#about"}
                        className="text-slate-600 hover:text-primary transition-colors font-medium"
                        >
                        About
                    </Link>
                    <Link
                        href={"#events"}
                        className="text-slate-600 hover:text-primary transition-colors font-medium"
                        >
                        Events
                    </Link>
                    <Link
                        href={"/contact"}
                        className="text-slate-600 hover:text-primary transition-colors font-medium"
                        >
                        Contact
                    </Link>
                   
                    <Link href="/register" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                        Join Now <ChevronRight size={18} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-6 md:hidden flex flex-col gap-4"
                    >
                            <Link
                                href={"/#about"}
                                className="text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href={"#events"}
                                className="text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Events
                            </Link>
                            <Link
                                href={"/contact"}
                                className="text-lg text-slate-700 font-medium py-2 border-b border-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <Link href="/register" className="bg-primary text-white w-full py-3 rounded-xl font-medium mt-4 text-center block">
                                Join Now
                            </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
