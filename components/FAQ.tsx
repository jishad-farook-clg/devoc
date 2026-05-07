"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
} from "lucide-react";
import { faqs } from "@/data/faqs";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="faqs"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl text-primary mb-6">
              <MessageCircleQuestion className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Frequently Asked{" "}
              <span className="text-primary">
                Questions
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about
              joining DeVoc, our curriculum, and
              how we help you launch your tech
              career.
            </p>
          </div>
        </FadeIn>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn
                key={index}
                delay={index * 0.05}
              >
                <div
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/30 shadow-lg shadow-secondary/5"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <h3>
                    <button
                      onClick={() =>
                        toggleFAQ(index)
                      }
                      aria-label="FAQ question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                    >
                      <span
                        className={`text-lg font-bold transition-colors duration-300 pr-8 ${
                          isOpen
                            ? "text-primary"
                            : "text-slate-800"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-white rotate-180"
                            : "bg-slate-100 text-slate-500 rotate-0"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </div>
                    </button>
                  </h3>

                  {/* Animated content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        id={`faq-answer-${index}`}
                        role="region"
                        className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-base"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}