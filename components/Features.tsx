import { BookOpen, Code2, Coins, Users2 } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: Users2,
    title: "Personal Development",
    desc: "Beyond code, we focus on communication, leadership, and soft skills to make you interview-ready.",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    title: "Hybrid Learning",
    desc: "The best of both worlds. Attend offline workshops for collaboration and learn theory online at your pace.",
    color: "bg-purple-500",
  },
  {
    icon: Code2,
    title: "Real-World Projects",
    desc: "No toy apps. Build production-grade software that solves real problems and enhances your portfolio.",
    color: "bg-indigo-500",
  },
  {
    icon: Coins,
    title: "Affordable for All",
    desc: "Flexible payment plans and discounts for students ensure that money is never a barrier to your education.",
    color: "bg-pink-500",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-primary">DeVoc?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-base sm:text-lg text-slate-600 px-2 sm:px-0">
              We&apos;ve reimagined technical education to focus on what truly
              matters: Skills, Community, and Career Growth.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group h-full">
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon size={24} className="lg:w-7 lg:h-7" />
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}