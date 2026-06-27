const stack = [
  { label: "React", category: "Frontend" },
  { label: "Next.js", category: "Frontend" },
  { label: "TypeScript", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
  { label: "Spring Boot", category: "Backend" },
  { label: "Python", category: "Backend" },
  { label: "PostgreSQL", category: "Database" },
  { label: "MongoDB", category: "Database" },
  { label: "AWS", category: "Cloud" },
  { label: "Docker", category: "Cloud" },
];

const categories = ["Frontend", "Backend", "Database", "Cloud"];

export default function TechStack() {
  return (
    <section className="mt-24 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
          Tech stack
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-white">
          The tools we use to build modern products.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300 leading-relaxed">
          Our team chooses frameworks and platforms that deliver performance,
          scalability, and maintainability for modern SaaS and web products.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/20"
            >
              <h3 className="text-xl font-semibold text-white">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {stack
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <span
                      key={item.label}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                    >
                      {item.label}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
