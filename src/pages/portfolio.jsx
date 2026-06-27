const caseStudies = [
  {
    title: "Arham Reality",
    industry: "Real Estate",
    tech: ["React", "Tailwind", "AWS"],
    link: "https://arhamrealty.com/",
    problem:
      "A traditional agency needed a modern digital presence that converted high-value leads.",
    solution:
      "We designed a premium website, optimized search, and connected lead capture directly to the client’s sales workflow.",
    result:
      "The launch delivered immediate market confidence, strong engagement, and a polished brand experience for property buyers.",
  },
  {
    title: "The Vitamin Medical Content ",
    industry: "Healthcare",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://thevitamincontent.com/",
    problem:
      "The client needed a clean, trust-building site for medical content and specialist booking.",
    solution:
      "We built a refined digital platform with easy navigation, authority messaging, and clear consultation CTAs.",
    result:
      "The product positioned the brand as a premium healthcare publisher and simplified the intake process for new clients.",
  },
  {
    title: "BallTime",
    industry: "Community & Sports",
    tech: ["Next.js", "TypeScript", "Docker"],
    link: "https://www.balltime.in/",
    problem:
      "A new SaaS concept needed a fast, scalable MVP with modern product polish.",
    solution:
      "We delivered an end-to-end MVP with subscription flows, dashboard access, and a launch-ready architecture.",
    result:
      "The product was ready for investor demos and customer validation within weeks.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[] text-white px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto space-y-20">
        <section className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-cyan-500">
            Portfolio
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Featured projects that showcase our premium digital delivery.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-relaxed text-lg">
            Each engagement blends strategy, design, and engineering to deliver
            measurable outcomes and modern product confidence.
          </p>
        </section>

        <section className="grid gap-8">
          {caseStudies.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20 hover:border-cyan-500/30 transition-colors group"
            >
              <article>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-semibold text-white group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-500">
                      {project.industry}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Problem
                    </p>
                    <p className="mt-3 text-gray-300 text-sm leading-6">
                      {project.problem}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Solution
                    </p>
                    <p className="mt-3 text-gray-300 text-sm leading-6">
                      {project.solution}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Result
                    </p>
                    <p className="mt-3 text-gray-300 text-sm leading-6">
                      {project.result}
                    </p>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
