import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "01",
    quote:
      "'Team Manova has successfully translated a traditional real estate business into a modern digital powerhouse. The project stands as a benchmark for how websites in the real estate sector should look—launching with a polished, high-performance interface that is ready for market validation.'",
    author: "Abhishek Supare",
    role: "Co-founder @ Arham Reality",
    initials: "AS",
    
  },
  {
    id: "02",
    quote:
      "'The website looks fantastic. Crisp design, smooth functionality, truly great work. Thank you for delivering it so well.'",
    author: "Dr. Hiral Vora",
    role: "Founder & CEO @ The Vitamin Medical Content",
    initials: "HV",
  },

    {
    id: "03",
    quote:
      "'BallTime is a high-energy, perfectly executed MVP that bridges the gap between digital social networks and physical sports. For Manova Softs, this serves as an excellent case study in developing interactive, database-driven social platforms that drive genuine user retention.'",
    author: "Khayati Joshi",
    role: "Co-founder @ BallTime",
    initials: "KJ",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[420px] h-[420px]  rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px]  rounded-full blur-[120px]" />
      </div>

      <div className="z-10 text-center px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
          Client testimonials
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white max-w-3xl mx-auto leading-tight">
          Trusted feedback from clients who launched with Manova Softs.
        </h2>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 mt-12 z-10">
        <div className="glass border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden p-8 md:p-12">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent" />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/15 text-xl font-semibold text-cyan-500">
                  {testimonial.initials}
                </div>
                <div>
                  {testimonial.linkedinUrl ? (
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-white hover:text-cyan-500 transition-colors"
                    >
                      {testimonial.author}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-white">
                      {testimonial.author}
                    </p>
                  )}
                  <p className="text-sm text-cyan-200/90">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.35em] text-cyan-200">
                {testimonial.id} /{" "}
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-cyan-500/40" />
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (prev) =>
                      (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                  )
                }
                aria-label="Previous testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
                }
                aria-label="Next testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
