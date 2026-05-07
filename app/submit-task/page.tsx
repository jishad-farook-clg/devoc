"use client";

import { InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Loader2,
  ArrowLeft,
  Youtube,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function VideoSubmissionPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    day: "",
    date: new Date().toISOString().split("T")[0],
    topic: "",
    youtubeLink: "",
    declaration: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setForm((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const submitTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/submit-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
    } catch {
      alert(
        "Failed to submit task. Please check your internet or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const days = Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <nav className="py-5 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold text-primary shrink-0">
            <Image
              src={"/NavLogo2.png"}
              width={100}
              height={100}
              style={{ height: "auto", width: "auto" }}
              alt="DeVoc logo"
              priority
            />
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 container mx-auto px-4 sm:px-6 py-10 sm:py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {!success ? (
            <FadeIn>
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-secondary to-primary" />

                <div className="relative z-10">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900">
                    Daily Task Submission
                  </h1>

                  <p className="text-slate-600 text-sm sm:text-base">
                    Submit your completed daily challenge video.
                  </p>

                  {/* Rules Section */}
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 sm:p-5 my-6">
                    <h3 className="flex items-center gap-2 font-semibold text-secondary mb-3 text-sm sm:text-base">
                      <AlertCircle size={18} />
                      Rules & Instructions
                    </h3>

                    <ul className="space-y-2 text-sm text-secondary/80">
                      <li className="flex gap-2">
                        <span className="font-bold">•</span>
                        Record a 4–5 minute video on today&apos;s topic.
                      </li>

                      <li className="flex gap-2">
                        <span className="font-bold">•</span>
                        Your face and voice must be clearly visible.
                      </li>
                    </ul>
                  </div>

                  <form onSubmit={submitTask} className="space-y-6">
                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                      />

                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                      />

                      {/* Date */}
                      <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700">
                          Date of Submission
                        </label>

                        <input
                          type="date"
                          name="date"
                          required
                          value={form.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Task Details */}
                    <div className="space-y-5">
                      {/* Day */}
                      <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700">
                          Day Number
                        </label>

                        <div className="relative">
                          <select
                            name="day"
                            required
                            value={form.day}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white text-sm sm:text-base"
                          >
                            <option value="" disabled>
                              Select the day...
                            </option>

                            {days.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>

                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-slate-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <Input
                        label="Task / Topic of Video"
                        name="topic"
                        placeholder="e.g. A mistake that helped me grow"
                        value={form.topic}
                        onChange={handleChange}
                      />

                      {/* YouTube Link */}
                      <div>
                        <label className="block text-sm font-medium mb-1 text-slate-700">
                          YouTube Video Link
                        </label>

                        <div className="relative">
                          <input
                            type="url"
                            name="youtubeLink"
                            onFocus={(e) =>
                              e.target.setAttribute("autocomplete", "off")
                            }
                            required
                            placeholder="https://youtu.be/..."
                            value={form.youtubeLink}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm sm:text-base"
                          />

                          <Youtube
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500"
                            size={20}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Declaration */}
                    <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <input
                        type="checkbox"
                        id="declaration"
                        name="declaration"
                        required
                        checked={form.declaration}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary shrink-0"
                      />

                      <label
                        htmlFor="declaration"
                        className="text-sm text-slate-600 leading-relaxed cursor-pointer select-none"
                      >
                        I confirm that this video is recorded by me and follows
                        today&apos;s task instructions.
                      </label>
                    </div>

                    {/* Submit */}
                    <div className="active:scale-[0.97] transition-transform">
                      <button
                        disabled={loading}
                        className="w-full py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold flex justify-center items-center gap-2 transition-colors cursor-pointer disabled:opacity-70"
                        >
                        {loading ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          "Submit Task"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl text-center border border-slate-100">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2
                    size={44}
                    className="text-green-600"
                  />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">
                  Submission Received!
                </h2>

                <p className="text-slate-600 mb-8 text-base sm:text-lg">
                  Great job on completing today&apos;s task. Keep up the
                  consistency.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="active:scale-[0.97] transition-transform">

                    <button
                      onClick={() => {
                        setSuccess(false);

                        setForm((prev) => ({
                          ...prev,
                          topic: "",
                          youtubeLink: "",
                          declaration: false,
                        }));
                      }}
                      className="w-full py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Task
                    </button>
                  </div>

                <div className="active:scale-[0.97] transition-transform">
                  <Link
                    href="/"
                    className="inline-block w-full py-3 bg-slate-900 text-white rounded-xl font-bold"
                  >
                    Back to Home
                  </Link>
                </div>


                  
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium mb-1 text-slate-700"
      >
        {label}
      </label>

      <input
        id={props.name}
        required
        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm sm:text-base"
        {...props}
      />
    </div>
  );
}