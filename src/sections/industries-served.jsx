const industries = [
  {
    title: "Healthcare",
    description:
      "Secure, patient-first digital experiences for modern medical brands.",
  },
  {
    title: "Real Estate",
    description:
      "Conversion-focused sites that elevate property storytelling and lead capture.",
  },
  {
    title: "Education",
    description:
      "Learning platforms and portals built for engagement and clarity.",
  },
  {
    title: "Startups",
    description:
      "Lean MVPs and product launches that prove market potential quickly.",
  },
  {
    title: "E-Commerce",
    description:
      "Commerce experiences optimized for trust, ease, and revenue growth.",
  },
  {
    title: "Enterprise",
    description:
      "Robust digital tools for complex workflows and team collaboration.",
  },
];

export default function IndustriesServed() {
  return (
    <section className="mt-24 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
          Industries We Serve
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-white">
          Experience across the businesses that move fast.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300 leading-relaxed">
          From enterprise workflows to high-growth startups, our work helps
          modern brands launch digital products with confidence.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl shadow-2xl shadow-black/20"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                {industry.title}
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
