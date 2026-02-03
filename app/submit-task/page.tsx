"use client";

import { InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowLeft, Youtube, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function VideoSubmissionPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    day: "",
    date: new Date().toISOString().split('T')[0],
    topic: "",
    youtubeLink: "",
    declaration: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === 'checkbox' 
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
            {/* Replace with your logo path */}
            <Image src={"/NavLogo2.png"} width={100} height={100} alt="Logo"/>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl"> {/* Slightly wider for this form */}
          {!success ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />

              <h1 className="text-3xl font-bold mb-2 text-slate-900">
                Daily Task Submission
              </h1>
              
              {/* Rules Section */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-6">
                <h3 className="flex items-center gap-2 font-semibold text-blue-800 mb-3">
                  <AlertCircle size={18} /> Rules & Instructions
                </h3>
                <ul className="space-y-2 text-sm text-blue-900/80">
                  <li className="flex gap-2">
                    <span className="font-bold">•</span> Record a 4-5 minute video on today&apos;s topic.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span> Video must be <strong>Public or Unlisted</strong>.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span> Your face and voice must be clearly visible.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span> Submissions not following these rules may be rejected.
                  </li>
                </ul>
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
                   {/* Date Picker */}
                   <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">Date of Submission</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
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

                  <Input
                    label="Task / Topic of Video"
                    name="topic"
                    placeholder="e.g. A mistake that helped me grow"
                    value={form.topic}
                    onChange={handleChange}
                  />

                  {/* YouTube Link */}
                  <div>
                    <label className="block text-sm font-medium mb-1 text-slate-700">YouTube Video Link</label>
                    <div className="relative">
                      <input
                        type="url"
                        name="youtubeLink"
                        required
                        placeholder="https://youtu.be/..."
                        value={form.youtubeLink}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                      />
                      <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500" size={20} />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Video must be Public or Unlisted.</p>
                  </div>
                </div>

                {/* Declaration Checkbox */}
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    required
                    checked={form.declaration}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="declaration" className="text-sm text-slate-600 leading-relaxed cursor-pointer select-none">
                    I confirm that this video is recorded by me, uploaded as <strong>Public or Unlisted</strong>, and follows today&apos;s task instructions.
                  </label>
                </div>

                <button
                  disabled={loading}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold flex justify-center gap-2 transition-colors cursor-pointer"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Submit Task"}
                </button>
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
                Great job on completing today&apos;s task. Keep up the consistency!
              </p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => { setSuccess(false); setForm(prev => ({...prev, topic: "", youtubeLink: "", declaration: false})); }}
                  className="w-full py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold transition-colors cursor-pointer"
                >
                  Submit Another Video
                </button>
                <Link
                  href="/"
                  className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Back to Dashboard
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
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