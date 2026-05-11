"use client";

import {
    LazyMotion,
    m,
    AnimatePresence,
} from "framer-motion";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.jpg";

// Async feature loader
const loadFeatures = () =>
    import("framer-motion").then(
        (res) => res.domAnimation
    );

type Message = {
    id: number;
    type: "user" | "bot";
    text: string;
};

const qaData = [
    {
        question: "What is the 7-stage roadmap?",
        answer:
            "Here is our structured learning journey:\n\n1. **Fumigation:** Screening, evaluation & foundation\n2. **Web Designing:** HTML & CSS project\n3. **Tech Exploration:** Explore stacks & choose your path\n4. **Stack Foundation:** Strong fundamentals in chosen tech\n5. **Basic Project:** First real project build\n6. **Advanced Project:** Industry-style development\n7. **Capstone:** End-to-end live project",
    },
    {
        question: "What is 'Fumigation'?",
        answer:
            "Fumigation is the initial stage focused on **Screening, evaluation & foundation**. It ensures you are ready for the intensive learning path ahead.",
    },
    {
        question: "Tell me about the Projects",
        answer:
            "We focus on **Real Projects, not tutorials**. You will build:\n- **Web Designing:** A pure HTML/CSS project\n- **Basic Project:** Your first real build\n- **Advanced Project:** Industry-style development\n- **Capstone:** An end-to-end live project hosted online.",
    },
    {
        question: "Why choose DeVoc?",
        answer:
            "• Learn through real projects, not tutorials\n• Continuous mentorship & reviews\n• Portfolio ready by completion\n• Strong focus on communication skills\n• Community-driven growth\n• No prior tech experience required",
    },
];

export default function Chatbot() {
    const [isOpen, setIsOpen] =
        useState(false);

    const [inputValue, setInputValue] =
        useState("");

    const [isTyping, setIsTyping] =
        useState(false);

    const [messages, setMessages] =
        useState<Message[]>([
            {
                id: 1,
                type: "bot",
                text: "Hi there! 👋 I can answer questions about the DeVoc roadmap, our real-world projects, or how to join. What would you like to know?",
            },
        ]);

    const messagesEndRef =
        useRef<HTMLDivElement>(null);

    const chatWindowRef =
        useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    useEffect(() => {
        const handleClickOutside = (
            event: MouseEvent | TouchEvent
        ) => {
            const isMobile =
                window.innerWidth < 768;

            if (
                isOpen &&
                isMobile &&
                chatWindowRef.current &&
                !chatWindowRef.current.contains(
                    event.target as Node
                )
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener(
                "mousedown",
                handleClickOutside
            );

            document.addEventListener(
                "touchstart",
                handleClickOutside
            );
        }

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

            document.removeEventListener(
                "touchstart",
                handleClickOutside
            );
        };
    }, [isOpen]);

    const handleSendMessage = (
        text: string
    ) => {
        if (!text.trim()) return;

        const newUserMsg: Message = {
            id: Date.now(),
            type: "user",
            text,
        };

        setMessages((prev) => [
            ...prev,
            newUserMsg,
        ]);

        setInputValue("");
        setIsTyping(true);

        const lowerText =
            text.toLowerCase();

        let responseText = "";

        if (
            [
                "hi",
                "hello",
                "hey",
                "greetings",
            ].some((w) =>
                lowerText.includes(w)
            )
        ) {
            responseText =
                "Hello! Welcome to DeVoc. I am here to assist you with our career-focused learning community.";
        } else if (
            lowerText.includes(
                "who are you"
            ) ||
            lowerText.includes(
                "what is devoc"
            ) ||
            lowerText.includes("about you")
        ) {
            responseText =
                "DeVoc is a structured, project-driven learning community designed to turn students into **confident, industry-ready developers**.";
        } else if (
            lowerText.includes("contact") ||
            lowerText.includes("phone") ||
            lowerText.includes("email")
        ) {
            responseText =
                "You can connect with us directly:\n📞 **+91 9947587819**\n📧 **devocofficial@gmail.com**";
        } else {
            const match = qaData.find(
                (q) => {
                    const qLower =
                        q.question.toLowerCase();

                    if (q.question === text)
                        return true;

                    if (
                        qLower.includes(
                            "roadmap"
                        ) &&
                        lowerText.includes(
                            "roadmap"
                        )
                    )
                        return true;

                    if (
                        qLower.includes(
                            "fumigation"
                        ) &&
                        lowerText.includes(
                            "fumigation"
                        )
                    )
                        return true;

                    if (
                        qLower.includes(
                            "project"
                        ) &&
                        lowerText.includes(
                            "project"
                        )
                    )
                        return true;

                    return false;
                }
            );

            if (match) {
                responseText =
                    match.answer;
            } else {
                responseText =
                    "I can help you understand our **7-stage roadmap**, our **project-based learning** approach, or how to **contact us**.";
            }
        }

        setTimeout(() => {
            setIsTyping(false);

            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    type: "bot",
                    text: responseText,
                },
            ]);
        }, 1000);
    };

    return (
        <LazyMotion features={loadFeatures}>
            <AnimatePresence>
                {!isOpen && (
                    <m.button
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                        onClick={() =>
                            setIsOpen(true)
                        }
                        aria-label="DeVoc Assistant Chatbot"
                        className="fixed bottom-12 right-6 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-secondary transition-colors flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20 group-hover:opacity-40"></div>

                        <MessageCircle
                            size={28}
                        />
                    </m.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <m.div
                        ref={chatWindowRef}
                        initial={{
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
                            fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl border border-slate-200
                            bottom-20 right-4 w-[calc(100vw-2rem)] h-[60vh] max-h-[500px] rounded-2xl
                            sm:bottom-24 sm:right-6 sm:w-96 sm:h-[550px]
                        "
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-3 sm:p-4 flex items-center justify-between text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
                                    <Image
                                        src={logo}
                                        className="object-cover"
                                        placeholder="blur"
                                        height={100}
                                        width={100}
                                        alt="DeVoc logo"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-sm">
                                        DeVoc
                                        Assistant
                                    </h3>

                                    <p className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>

                                        Online
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                aria-label="Close button"
                                className="p-1 cursor-pointer hover:bg-white/20 rounded-full shrink-0"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 scrollbar-thin">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${
                                        msg.type ===
                                        "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                                            msg.type ===
                                            "user"
                                                ? "bg-primary text-white rounded-br-none"
                                                : "bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm"
                                        }`}
                                    >
                                        {msg.text
                                            .split(
                                                "**"
                                            )
                                            .map(
                                                (
                                                    part,
                                                    i
                                                ) =>
                                                    i %
                                                        2 ===
                                                    1 ? (
                                                        <span
                                                            key={
                                                                i
                                                            }
                                                            className="font-bold"
                                                        >
                                                            {
                                                                part
                                                            }
                                                        </span>
                                                    ) : (
                                                        part
                                                    )
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

                            <div
                                ref={
                                    messagesEndRef
                                }
                            />
                        </div>

                        {/* Quick Actions */}
                        <div className="p-3 sm:p-4 bg-white border-t border-slate-100 overflow-x-auto shrink-0">
                            <div className="flex gap-2 pb-1">
                                {qaData.map(
                                    (
                                        item,
                                        idx
                                    ) => (
                                        <button
                                            key={
                                                idx
                                            }
                                            onClick={() =>
                                                handleSendMessage(
                                                    item.question
                                                )
                                            }
                                            className="whitespace-nowrap text-xs text-primary bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-full transition-colors border border-blue-100 shrink-0"
                                        >
                                            {
                                                item.question
                                            }
                                        </button>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Input */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                handleSendMessage(
                                    inputValue
                                );
                            }}
                            className="p-2 sm:p-3 border-t border-slate-100 flex items-center gap-2 bg-white shrink-0"
                        >
                            <input
                                type="text"
                                value={
                                    inputValue
                                }
                                onChange={(
                                    e
                                ) =>
                                    setInputValue(
                                        e
                                            .target
                                            .value
                                    )
                                }
                                placeholder="Ask about the roadmap..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary min-w-0"
                            />

                            <button
                                type="submit"
                                disabled={
                                    !inputValue.trim()
                                }
                                className="p-2 cursor-pointer bg-primary text-white rounded-full disabled:opacity-50 hover:bg-secondary transition-colors shrink-0"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </m.div>
                )}
            </AnimatePresence>
        </LazyMotion>
    );
}