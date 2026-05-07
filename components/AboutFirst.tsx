import FadeIn from "./FadeIn";

export default function AboutFirst() {
  return (
    <section
      id="about"
      className="pt-20 pb-16 lg:pt-40 lg:pb-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 sm:w-96 sm:h-64 lg:w-200 lg:h-100 bg-blue-50/60 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4 lg:mb-6">
              <span className="font-bold text-slate-800 tracking-tight text-sm sm:text-lg">
                About DeVoc
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight lg:leading-[1.2] mb-6 lg:mb-8">
              DeVoc is a structured, project-driven learning community designed
              to turn students into{" "}
              <span className="text-primary bg-blue-50 px-2 rounded-lg decoration-clone box-decoration-clone">
                confident, industry-ready developers.
              </span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                We focus on learning by building, continuous mentorship, and
                real-world development practices, not just theory classes.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}