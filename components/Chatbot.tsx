"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Message = {
    id: number;
    type: "user" | "bot";
    text: string;
};

const qaData = [
    {
        question: "What is the 7-stage roadmap?",
        answer: "Here is our structured learning journey:\n\n1. **Fumigation:** Screening, evaluation & foundation\n2. **Web Designing:** HTML & CSS project\n3. **Tech Exploration:** Explore stacks & choose your path\n4. **Stack Foundation:** Strong fundamentals in chosen tech\n5. **Basic Project:** First real project build\n6. **Advanced Project:** Industry-style development\n7. **Capstone:** End-to-end live project",
    },
    {
        question: "What is 'Fumigation'?",
        answer: "Fumigation is the initial stage focused on **Screening, evaluation & foundation**. It ensures you are ready for the intensive learning path ahead.",
    },
    {
        question: "Tell me about the Projects",
        answer: "We focus on **Real Projects, not tutorials**. You will build:\n- **Web Designing:** A pure HTML/CSS project\n- **Basic Project:** Your first real build\n- **Advanced Project:** Industry-style development\n- **Capstone:** An end-to-end live project hosted online.",
    },
    {
        question: "Why choose DeVoc?",
        answer: "• Learn through real projects, not tutorials\n• Continuous mentorship & reviews\n• Portfolio ready by completion\n• Strong focus on communication skills\n• Community-driven growth\n• No prior tech experience required",
    }
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: "bot",
            text: "Hi there! 👋 I can answer questions about the DeVoc roadmap, our real-world projects, or how to join. What would you like to know?",
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatWindowRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            const isMobile = window.innerWidth < 768;

            if (
                isOpen && 
                isMobile && 
                chatWindowRef.current && 
                !chatWindowRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isOpen]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMsg: Message = { id: Date.now(), type: "user", text };
        setMessages((prev) => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        const lowerText = text.toLowerCase();
        let responseText = "";

        if (['hi', 'hello', 'hey', 'greetings'].some(w => lowerText.includes(w))) {
            responseText = "Hello! Welcome to DeVoc. I am here to assist you with our career-focused learning community.";
        }
        else if (lowerText.includes("who are you") || lowerText.includes("what is devoc") || lowerText.includes("about you")) {
            responseText = "DeVoc is a structured, project-driven learning community designed to turn students into **confident, industry-ready developers**. We focus on learning by building, continuous mentorship, and real-world development practices.";
        }
        else if (lowerText.includes("where") || lowerText.includes("location") || lowerText.includes("online") || lowerText.includes("offline")) {
            responseText = "We offer a flexible learning model including **Offline interactive sessions**, **Flexible online classes**, and **Guided self-learning & mentorship**.";
        }
        else if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("email") || lowerText.includes("support")) {
            responseText = "You can connect with us directly:\n📞 **+91 9947 5878 19**\n📧 **devocofficial@gmail.com**";
        }
        else if (lowerText.includes("certificate") || lowerText.includes("refund") || lowerText.includes("money")) {
            responseText = "We offer **Refundable certified progress**. Our focus is on making you portfolio-ready by completion of program through real-world challenges.";
        }
        else if (lowerText.includes("internship") || lowerText.includes("job") || lowerText.includes("placement")) {
            responseText = "We provide opportunities for **Internships** and **Real-world challenges** to ensure you are industry-ready.";
        }
        else if (lowerText.includes("course") || lowerText.includes("offer")) {
            responseText = "We offer a **Project-Based Coding Program (16 weeks)**, a **Tech Career Workshop (3.5 hours)**, and an **AI Web Designing (2 weeks)**. Which one would you like to know more about?";
        }
        else if (lowerText.includes("duration") || lowerText.includes("how long")) {
            responseText = "Our programs range from **3.5 hours workshops** to **16-week full programs**, depending on your learning goals.";
        }
        else if (lowerText.includes("beginner") || lowerText.includes("experience") || lowerText.includes("start from zero")) {
            responseText = "No worries! Our programs are designed for **complete beginners**. We guide you step-by-step from basics to advanced projects.";
        }
        else if (lowerText.includes("mentor") || lowerText.includes("guidance")) {
            responseText = "You will receive **1:1 mentorship, continuous reviews, and guidance** throughout your learning journey.";
        }
        else if (lowerText.includes("workshop")) {
            responseText = "Our workshop is a **3.5-hour interactive session** where you explore tech careers, learn web basics, and build a simple website using AI.";
        }
        else if (lowerText.includes("ai") || lowerText.includes("web designing") || lowerText.includes("ai web designing")) {
            responseText = "Our **AI-Powered Web Designing Course** is a 2-week crash course where you learn HTML, CSS, JavaScript, and build a live website using AI tools.";
        }
        else if (lowerText.includes("interview") || lowerText.includes("job preparation")) {
            responseText = "We help you prepare with **mock interviews, communication training, and real-world challenges**.";
        }
        else {
            const match = qaData.find(q => {
                const qLower = q.question.toLowerCase();
                if (q.question === text) return true;
                if (qLower.includes("roadmap") && lowerText.includes("roadmap")) return true;
                if (qLower.includes("fumigation") && lowerText.includes("fumigation")) return true;
                if (qLower.includes("project") && lowerText.includes("project")) return true;
                return false;
            });

            if (match) {
                responseText = match.answer;
            } else {
                responseText = "I can help you understand our **7-stage roadmap**, our **project-based learning** approach, or how to **contact us**. What would you like to know?";
            }
        }

        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [...prev, { id: Date.now() + 1, type: "bot", text: responseText }]);
        }, 1000);
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-colors flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20 group-hover:opacity-40"></div>
                        <MessageCircle size={28} />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={chatWindowRef}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }} 
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="
                            fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl border border-slate-200
                            bottom-20 right-4 w-[calc(100vw-2rem)] h-[60vh] max-h-[500px] rounded-2xl
                            sm:bottom-24 sm:right-6 sm:w-96 sm:h-[550px]
                        "
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
                                    <Image src={"/logo.jpg"} className="object-cover" height={100} width={100} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">DeVoc Assistant</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-1 cursor-pointer hover:bg-white/20 rounded-full shrink-0">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 scrollbar-thin">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                                    <div 
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                                            msg.type === "user" 
                                            ? "bg-blue-600 text-white rounded-br-none" 
                                            : "bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm"
                                        }`}
                                    >
                                        {msg.text.split('**').map((part, i) => 
                                            i % 2 === 1 ? <span key={i} className="font-bold">{part}</span> : part
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Dynamic Quick Actions */}
                        <div className="p-3 sm:p-4 bg-white border-t border-slate-100 overflow-x-auto shrink-0">
                            <div className="flex gap-2 pb-1">
                                {qaData.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSendMessage(item.question)}
                                        className="whitespace-nowrap text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full transition-colors border border-blue-100 shrink-0"
                                    >
                                        {item.question}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Functional Input */}
                        <form 
                            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
                            className="p-2 sm:p-3 border-t border-slate-100 flex items-center gap-2 bg-white shrink-0"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about the roadmap..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 min-w-0"
                            />
                            <button 
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="p-2 cursor-pointer bg-blue-600 text-white rounded-full disabled:opacity-50 hover:bg-blue-700 transition-colors shrink-0"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}   