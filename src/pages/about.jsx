import { Link } from "react-router-dom";
import { Briefcase, ShieldCheck, Rocket, Users, Globe } from "lucide-react";

const advantages = [
  {
    title: "Modern SaaS-Ready Delivery",
    description:
      "From concept to launch, we deliver polished, production-ready digital experiences that work across devices and grow with your business.",
    icon: Rocket,
  },
  {
    title: "Built for Scale",
    description:
      "We design software architectures that support growth, reliable performance, and easy iteration as your roadmap evolves.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Collaboration",
    description:
      "Clear milestones, weekly checkpoints, and fast communication keep every client aligned and confident from day one.",
    icon: Globe,
  },
  {
    title: "Long-Term Support",
    description:
      "We offer ongoing maintenance, product refinement, and feature expansion support after launch.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[] text-white px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto space-y-20">
        <section className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-cyan-500">
            About Manova Softs
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Digital product delivery for ambitious founders and fast-growing
            teams.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-relaxed text-lg">
            Manova Softs crafts premium websites, modern SaaS experiences, and
            intelligent product platforms. We blend polished design, scalable
            development, and trusted delivery to help your business move from
            idea to market-ready momentum.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-semibold">Our story</h2>
            <p className="mt-5 text-gray-300 leading-relaxed text-sm md:text-base">
              Founded on the belief that digital transformation should be
              elegant, fast, and measurable, Manova Softs helps businesses build
              products customers love. We combine experience in agency-grade
              design with modern engineering practices so every launch feels
              premium and trustworthy.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
              Our team works with startups, enterprises, and growth-stage brands
              to turn business goals into engaging applications, intelligent
              workflows, and polished web experiences.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-semibold">Mission & vision</h2>
            <div className="mt-5 space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
              <div>
                <h3 className="font-semibold text-white">Mission</h3>
                <p>
                  Deliver thoughtful digital products quickly, while preserving
                  design excellence and technical confidence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Vision</h3>
                <p>
                  Be the trusted partner for founders and teams who need modern
                  software, clear execution, and long-term product momentum.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-semibold">Why choose Manova Softs</h2>
            <div className="mt-8 grid gap-4">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm leading-6">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <h2 className="text-3xl font-semibold">Leadership</h2>
            <div className="mt-8 space-y-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] items-center">
                  <img
                    src="/assets/Nayan.png"
                    className="h-28 w-28 rounded-2xl object-cover shadow-lg shadow-black/20"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Founder & CEO
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Nayan Nagpal
                    </h3>
                    <p className="mt-4 text-gray-300 leading-relaxed text-sm">
                      Hello! I'm Nayan Nagpal, a UI/UX designer and web product
                      lead. I bring creative design and practical development to
                      every project, focused on clear outcomes and polished
                      digital launches.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10">
                <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Co-Founder & Designing Head
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Shantanu Bayskar
                    </h3>
                    <p className="mt-4 text-gray-300 leading-relaxed text-sm">
                      Hi, I’m Shantanu, a creative designer who builds brand-led
                      website experiences and digital visuals that feel refined,
                      user-friendly, and launch-ready.
                    </p>
                  </div>
                  <img
                    src="/assets/Shantanu.jfif"
                    alt="Shantanu Bayskar"
                    className="h-28 w-28 rounded-2xl object-cover shadow-lg shadow-black/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
          <h2 className="text-3xl font-semibold">Our process</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Discover
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Discovery & strategy
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-6">
                We uncover product goals, user needs, and the optimal launch
                scope before any code is written.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Build
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Design, develop, ship
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-6">
                We combine premium UI with robust engineering so every product
                works beautifully and feels polished.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Validate
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Launch & optimize
              </h3>
              <p className="mt-3 text-gray-300 text-sm leading-6">
                After launch, we support performance checks, analytics, and
                roadmap refinement for sustained growth.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl shadow-black/20 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to define your next product?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300 leading-relaxed">
            Book a discovery call and let us translate your business goals into
            a premium digital product roadmap.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendly.com/manovasofts/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#FAF9F6] px-8 py-3 text-black font-semibold transition hover:bg-[#FAF9F6]/90"
            >
              Book a Free Consultation
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-white transition hover:bg-white/10"
            >
              Contact our team
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
