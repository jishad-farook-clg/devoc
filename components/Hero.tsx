import {
  ArrowRight,
  Download,
  Code,
  Smartphone,
  Globe,
  Coffee,
  Layers,
  Terminal,
  Hash,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const floatingTech = [
    {
      label: "React",
      icon: <Code size={18} />,
      color: "bg-blue-100 text-primary",
      position: "top-0 -left-4",
      delay: "0s",
    },
    {
      label: "Web",
      icon: <Globe size={18} />,
      color: "bg-blue-100 text-primary",
      position: "-top-10 right-10",
      delay: "1s",
    },
    {
      label: "App",
      icon: <Smartphone size={18} />,
      color: "bg-green-100 text-green-600",
      position: "bottom-20 -left-10",
      delay: "2s",
    },
    {
      label: "Django",
      icon: <Layers size={18} />,
      color: "bg-emerald-100 text-emerald-700",
      position: "-bottom-6 right-20",
      delay: "1.5s",
    },
    {
      label: "Flutter",
      icon: <Layers size={18} />,
      color: "bg-cyan-100 text-cyan-600",
      position: "top-1/2 -right-12",
      delay: "0.5s",
    },
    {
      label: "C",
      icon: <Terminal size={18} />,
      color: "bg-gray-100 text-gray-700",
      position: "top-20 -left-12",
      delay: "2.5s",
    },
    {
      label: "Java",
      icon: <Coffee size={18} />,
      color: "bg-orange-100 text-orange-600",
      position: "top-1/4 -right-10",
      delay: "3s",
    },
    {
      label: "Python",
      icon: <Hash size={18} />,
      color: "bg-yellow-100 text-yellow-700",
      position: "top-1/3 left-1/4",
      delay: "3.5s",
    },
  ];

  return (
    <section className="relative pt-24 px-4 pb-20 lg:px-10 lg:pt-32 min-h-svh lg:pb-32 overflow-hidden bg-linear-to-b from-blue-50/50 to-white">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 lg:w-125 lg:h-125 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 lg:w-125 lg:h-125 bg-blue-200/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-medium text-xs sm:text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              New Batch Starting Soon
            </div>

            <h1
              className="animate-fade-up text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Learn Coding. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">
                Pay Flexibly.
              </span>{" "}
              <br />
              Build Future.
            </h1>

            <p
              className="animate-fade-up text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ animationDelay: "0.2s" }}
            >
              Master real-world software development with our hybrid learning
              model. Personalized mentorship, affordable plans, and a guaranteed
              path to your tech career.
            </p>

            <div
              className="animate-fade-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="inline-block w-full sm:w-auto active:scale-95 transition-transform">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-secondary transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
                  aria-label="Register for upcoming course batch"
                >
                  Start Learning Today
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="inline-block w-full sm:w-auto active:scale-95 transition-transform">
                <a
                  href="/files/brochure.pdf"
                  download="brochure.pdf"
                  className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  Download Brochure
                  <Download className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-scale-in mt-12 lg:mt-0 w-full lg:w-1/2 hidden lg:block relative max-w-lg mx-auto lg:mx-0">
            <div className="scale-[0.85] sm:scale-100 origin-center">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 aspect-[4/3] flex items-center justify-center overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col p-6 rounded-2xl overflow-hidden">
                  <div className="w-full h-8 bg-white rounded-lg shadow-sm mb-4 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  <div className="flex-1 flex gap-4">
                    <div className="w-1/4 bg-white h-full rounded-lg shadow-sm"></div>

                    <div className="w-3/4 bg-white h-full rounded-lg shadow-sm p-4 space-y-3">
                      <div className="w-full h-4 bg-slate-100 rounded"></div>
                      <div className="w-2/3 h-4 bg-slate-100 rounded"></div>

                      <div className="w-full h-32 bg-blue-50/50 rounded-lg border-2 border-dashed border-blue-200 flex items-center justify-center">
                        <Code className="text-blue-300 w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </div>

                {floatingTech.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.position} animate-float px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl shadow-lg border border-white/50 backdrop-blur-sm flex items-center gap-3 z-20 bg-white`}
                    style={{ animationDelay: item.delay }}
                  >
                    <div className={`p-1.5 lg:p-2 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>

                    <div className="hidden sm:block">
                      <p className="text-sm font-bold text-slate-800 whitespace-nowrap">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}