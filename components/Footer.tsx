import { Facebook, Instagram, Linkedin, MessageCircleIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            <Image src={"/logo.png"} width={60} height={60} alt=""/>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Empowering the next generation of developers through accessible,
                            hybrid education.
                        </p>
                        <div className="flex gap-4">
                                <Link
                                    href="https://www.linkedin.com/company/devocfc"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Linkedin size={18}/>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/devoc.official"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Instagram size={18}/>
                                </Link>
                                <Link
                                    href="https://chat.whatsapp.com/FZggySWT6w7JyTuINSTCh6"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <MessageCircleIcon size={18}/>
                                </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href={"/#about"} className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contact"} className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/register"} className="hover:text-white transition-colors">
                                    Join Now
                                </Link>
                            </li>
                            <li>
                                <Link href={"/#home"} className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href={"https://chat.whatsapp.com/FZggySWT6w7JyTuINSTCh6"} target="_blank" className="hover:text-white transition-colors">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link href={"/files/brochure.pdf"} download={"brochure.pdf"} className="hover:text-white transition-colors">
                                    Brochure
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href={"mailto:devocofficial@gmail.com"}>devocofficial@gmail.com</Link></li>
                            <li><Link href={"tel:9947587819"}>+91 9947587819</Link></li>
                            <li>Farook College (Autonomous),<br/>Kozhikode, Kerala, India 673632</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} DeVoc Education. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
