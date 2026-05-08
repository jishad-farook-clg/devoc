"use client";

import { InputHTMLAttributes, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { executeRecaptcha } from "@/lib/recaptcha";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let token;
    
    try {
      token = await executeRecaptcha("register_form");
    } catch (error) {
      console.error("reCAPTCHA script failed to load or execute", error);
      alert("We couldn't verify you are human. Please disable your adblocker/privacy shields and try again, or email us directly.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          recaptchaToken: token,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);

        const message =
          errorData?.error ||
          "Something went wrong. Please try again.";

        throw new Error(message);
      }

      setStep(2);

    } catch {
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
            <Image
              src="/NavLogo2.png"
              width={100}
              height={100}
              style={{ height: "auto", width: "auto" }}
              alt="DeVoc logo"
            />
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="flex-1 container mx-auto px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-lg">
          {step === 1 ? (
            <FadeIn>
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-secondary to-primary" />

                <h1 className="text-3xl font-bold mb-2 text-secondary">
                  Join Next Cohort
                </h1>

                <p className="text-slate-600 mb-8">
                  Start your journey to becoming a professional developer.
                </p>

                <form
                  onSubmit={handleSignup}
                  className="space-y-5"
                >
                  <Input
                    id="name"
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    id="college"
                    label="College"
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    id="department"
                    label="Department"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    required
                  />

                  <div className="active:scale-[0.97] transition-transform">
                    <button
                      disabled={loading}
                      className="w-full py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold flex justify-center gap-2 cursor-pointer transition-all"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2
                    size={40}
                    className="text-green-600"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  Registration Successful!
                </h2>

                <p className="text-slate-600 mb-8">
                  We&apos;ll contact you shortly.
                </p>

                <div className="active:scale-[0.97] transition-transform">
                  <Link
                    href="/"
                    className="inline-block w-full py-3 bg-slate-900 text-white rounded-xl font-bold"
                  >
                    Go Home
                  </Link>
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
  id: string;
};

function Input({ label, id, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-1"
      >
        {label}
      </label>

      <input
        id={id}
        className="w-full px-4 py-3 rounded-xl border outline-none"
        {...props}
      />
    </div>
  );
}