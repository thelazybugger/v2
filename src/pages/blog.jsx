import { useMemo, useState } from "react";

const POSTS = [
  {
    id: 1,
    title: "Designing SaaS experiences that convert",
    category: "Design",
    excerpt:
      "Best practices for premium product interfaces and clear user journeys.",
    date: "June 2026",
  },
  {
    id: 2,
    title: "How to launch a fast MVP without sacrificing quality",
    category: "Product",
    excerpt:
      "A practical approach to shipping polished digital products under tight timelines.",
    date: "May 2026",
  },
  {
    id: 3,
    title: "Choosing the right architecture for modern web apps",
    category: "Engineering",
    excerpt:
      "A comparison of React, Next.js, Node.js, and cloud-first deployment patterns.",
    date: "April 2026",
  },
];

const CATEGORIES = ["All", "Design", "Product", "Engineering"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="min-h-screen bg-[] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-cyan-500">
            Insights
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Stories from our product delivery process.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-relaxed text-lg">
            Actionable ideas, launch lessons, and agency-grade product thinking
            to help founders build better digital experiences.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:w-[420px]">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles"
                  className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full px-4 py-2 text-sm transition ${category === item ? "bg-cyan-400 text-black" : "bg-white/5 text-gray-200 hover:bg-white/10"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.25em] text-cyan-500">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-white">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </article>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-gray-300">
                  <p className="text-lg font-medium">
                    No matching articles found.
                  </p>
                  <p className="mt-3 text-sm">
                    Try a different keyword or category to explore our insights.
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
              <h2 className="text-2xl font-semibold">Featured article</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Designing SaaS experiences that convert — practical tips for
                product teams who want polished, trust-building interfaces.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Stay in the loop</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Subscribe to updates when we publish new product insights and
                launch playbooks.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
