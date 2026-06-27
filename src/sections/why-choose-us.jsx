import { CheckCircle, Clock, Layers, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    title: "Fast Delivery",
    description:
      "Rapid product launches without compromising polish or quality.",
    icon: Clock,
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems built to support growth, new features, and stable performance.",
    icon: Layers,
  },
  {
    title: "Transparent Communication",
    description:
      "Clear timelines, regular updates, and collaborative decision-making.",
    icon: Users,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Trusted frameworks and cloud platforms that keep your product future-ready.",
    icon: ShieldCheck,
  },
  {
    title: "Long-term Support",
    description:
      "Post-launch support and product iteration plans that protect your investment.",
    icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-24 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
          Why Choose Us
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-white">
          Built for founders who need trusted delivery.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300 leading-relaxed">
          Our team combines design excellence, engineering discipline, and
          practical delivery experience so your next project feels premium from
          launch day.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
