"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    course: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStep(2);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <nav className="py-6 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
              <Image src={"/NavLogo2.png"} width={100} height={100} alt=""/>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <div className="flex-1 container mx-auto px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-lg">
          {step === 1 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-secondary" />

              <h1 className="text-3xl font-bold mb-2">Join Next Cohort</h1>
              <p className="text-slate-600 mb-8">
                Start your journey to becoming a professional developer.
              </p>

              <form onSubmit={handleSignup} className="space-y-5">
                <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
                <Input label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
                <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
                <Input label="Department" name="department" value={form.department} onChange={handleChange} />

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Interested Course
                  </label>
                  <select
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border"
                  >
                    <option value="">Select course</option>
                    <option>Web Designing</option>
                    <option>Mobile App Development</option>
                    <option>Backend Development</option>
                    <option>Django</option>
                    <option>I didn&apos;t choose yet</option>
                  </select>
                </div>

                <button
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold flex justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Register"}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-3xl shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3">
                Registration Successful!
              </h2>
              <p className="text-slate-600 mb-8">
                We’ll contact you shortly.
              </p>
              <Link
                href="/"
                className="inline-block w-full py-3 bg-slate-900 text-white rounded-xl font-bold"
              >
                Go Home
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        required
        className="w-full px-4 py-3 rounded-xl border outline-none"
        {...props}
      />
    </div>
  );
}
