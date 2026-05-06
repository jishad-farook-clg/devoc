"use client";

import { InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowLeft, Link as LinkIcon, Code } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function WebDesignSubmission() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    phone: "",
    day: "",
    codepenLink: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/web-design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      alert("Failed to submit task. Please check your internet or try again.");
    } finally {
      setLoading(false);
    }
  };

  const days = Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <nav className="py-6 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image src={"/NavLogo2.png"} width={100} height={100} style={{ height: "auto", width: "auto" }} alt="DeVoc logo"/>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <div className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          {!success ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary" />

              <h1 className="text-3xl font-bold mb-2 text-slate-900">
                CodePen Submission
              </h1>
              
              {/* Instructions Section */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-6">
                <h3 className="flex items-center gap-2 font-semibold text-secondary mb-3">
                  <Code size={18} /> How to get your CodePen Link
                </h3>
                <ol className="space-y-2 text-sm text-secondary/80 list-decimal list-inside pl-1">
                  <li>
                    Go to <a href="https://codepen.io/pen/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">codepen.io/pen/</a> to start a new project.
                  </li>
                  <li>Write your HTML, CSS, and JavaScript code.</li>
                  <li>Click the <strong>Save</strong> button at the top of the editor.</li>
                  <li>Copy the full URL from your browser&apos;s address bar.</li>
                  <li>Paste that link into the field below.</li>
                </ol>
              </div>

              <form onSubmit={submitTask} className="space-y-6">
                
                {/* Personal Details Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <hr className="border-slate-100" />

                {/* Task Details Group */}
                <div className="space-y-5">
                  
                  {/* Day Dropdown */}
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Day Number</label>
                    <div className="relative">
                      <select
                        name="day"
                        required
                        value={form.day}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
                      >
                        <option value="" disabled>Select the day...</option>
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  {/* CodePen Link */}
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">CodePen Project Link</label>
                    <div className="relative">
                      <input
                        type="url"
                        name="codepenLink"
                        onFocus={(e) => e.target.setAttribute('autocomplete', 'off')}
                        required
                        placeholder="https://codepen.io/username/pen/..."
                        value={form.codepenLink}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-700">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Any additional notes about your submission?"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    />
                  </div>
                </div>

                <motion.div whileTap={{ scale: 0.97 }}>
                  <button
                    disabled={loading}
                    className="w-full py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold flex justify-center gap-2 cursor-pointer mt-2"
                    >
                    {loading ? <Loader2 className="animate-spin" /> : "Submit Project"}
                  </button>
                </motion.div>

              </form>
            </motion.div>

          ) : (
            /* SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-3xl shadow-xl text-center border border-slate-100"
            >
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} className="text-green-600" />
              </div>

              <h2 className="text-3xl font-bold mb-3 text-slate-900">
                Submission Received!
              </h2>

              <p className="text-slate-600 mb-8 text-lg">
                Great job! Your CodePen link has been successfully submitted.
              </p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => { 
                    setSuccess(false); 
                    setForm(prev => ({...prev, day: "", codepenLink: "", message: ""})); 
                  }}
                  className="w-full py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold transition-colors cursor-pointer"
                >
                  Submit Another Project
                </button>
                <Link
                  href="/"
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium mb-1 text-slate-700">{label}</label>
      <input
        id={props.name}
        required
        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        {...props}
      />
    </div>
  );
}