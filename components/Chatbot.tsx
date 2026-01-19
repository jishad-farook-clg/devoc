"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    id: number;
    type: "user" | "bot";
    text: string;
};

// Visible Quick Actions (Updated with Brochure Terminology)
const qaData = [
    {
        question: "What is the 7-stage roadmap?",
        // Updated sequence based on brochure flow [cite: 8, 10, 27, 28, 21, 29, 23]
        answer: "Here is our structured learning journey:\n\n1. **Fumigation:** Screening, evaluation & foundation\n2. **Tech Exploration:** Explore stacks & choose your path\n3. **Web Designing:** HTML & CSS project\n4. **Stack Foundation:** Strong fundamentals in chosen tech\n5. **Basic Project:** First real project build\n6. **Advanced Project:** Industry-style development\n7. **Capstone:** End-to-end live project",
    },
    {
        question: "What is 'Fumigation'?",
        // Aligned with Source 8-9
        answer: "Fumigation is the initial stage focused on **Screening, evaluation & foundation**. It ensures you are ready for the intensive learning path ahead.",
    },
    {
        question: "Tell me about the Projects",
        // Aligned with Source 21-24 & 29-30
        answer: "We focus on **Real Projects, not tutorials**. You will build:\n- **Web Designing:** A pure HTML/CSS project\n- **Basic Project:** Your first real build\n- **Advanced Project:** Industry-style development\n- **Capstone:** An end-to-end live project hosted online.",
    },
    {
        question: "Why choose DeVoc?",
        // Aligned with Source 13-17
        answer: "• Learn through real projects, not tutorials\n• Continuous mentorship & reviews\n• Portfolio-ready by graduation\n• Strong focus on communication skills\n• Community-driven growth",
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

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMsg: Message = { id: Date.now(), type: "user", text };
        setMessages((prev) => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        const lowerText = text.toLowerCase();
        let responseText = "";

        // --- LAYER 1: Simple Greetings & Common Questions ---
        
        // Greetings
        if (['hi', 'hello', 'hey', 'greetings'].some(w => lowerText.includes(w))) {
            responseText = "Hello! Welcome to DeVoc. I am here to assist you with our career-focused learning community.";
        }
        
        // Identity / "Who are you?"
        // Updated to match Source 5
        else if (lowerText.includes("who are you") || lowerText.includes("what is devoc") || lowerText.includes("about you")) {
            responseText = "DeVoc is a structured, project-driven learning community designed to turn students into **confident, industry-ready developers**. We focus on learning by building, continuous mentorship, and real-world development practices.";
        }

        // Location / Mode
        // Updated to match Source 35
        else if (lowerText.includes("where") || lowerText.includes("location") || lowerText.includes("online") || lowerText.includes("offline")) {
            responseText = "We offer a flexible learning model including **Offline interactive sessions**, **Flexible online classes**, and **Guided self-learning & mentorship**.";
        }

        // Contact Info
        // Added based on Source 50, 51
        else if (lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("email") || lowerText.includes("support")) {
            responseText = "You can connect with us directly:\n📞 **+91 9947 5878 19**\n📧 **devocofficial@gmail.com**";
        }

        // Certification / Refund
        // Updated to match Source 43 ("Refundable certified progress")
        else if (lowerText.includes("certificate") || lowerText.includes("refund") || lowerText.includes("money")) {
            responseText = "We offer **Refundable certified progress**. Our focus is on making you portfolio-ready by completion of program through real-world challenges.";
        }
        
        // Internships
        // Updated to match Source 18
        else if (lowerText.includes("internship") || lowerText.includes("job") || lowerText.includes("placement")) {
            responseText = "We provide opportunities for **Internships** and **Real-world challenges** to ensure you are industry-ready.";
        }

        // --- LAYER 2: Quick Action / Roadmap Matching ---
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
                // --- LAYER 3: Fallback ---
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
                        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-colors flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-20 group-hover:opacity-40"></div>
                        <MessageCircle size={28} />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Sparkles size={20} /></div>
                                <div>
                                    <h3 className="font-bold text-sm">DeVoc Assistant</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full"><X size={20} /></button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 scrollbar-thin">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                                    <div 
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                                            msg.type === "user" 
                                            ? "bg-blue-600 text-white rounded-br-none" 
                                            : "bg-white border text-slate-700 rounded-bl-none shadow-sm"
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
                                    <div className="bg-white border p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Dynamic Quick Actions */}
                        <div className="p-4 bg-white border-t border-slate-100 overflow-x-auto">
                            <div className="flex gap-2 pb-2">
                                {qaData.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSendMessage(item.question)}
                                        className="whitespace-nowrap text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full transition-colors border border-blue-100"
                                    >
                                        {item.question}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Functional Input */}
                        <form 
                            onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
                            className="p-3 border-t border-slate-100 flex items-center gap-2 bg-white"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about the roadmap..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                            <button 
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="p-2 bg-blue-600 text-white rounded-full disabled:opacity-50 hover:bg-blue-700 transition-colors"
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