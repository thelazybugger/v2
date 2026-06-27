import {
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  LayoutGrid,
  Sparkles,
  Cpu,
} from "lucide-react";

const SERVICES = [
  {
    title: "Web Development",
    description:
      "High-performance websites that reflect your brand and convert visitors into customers.",
    benefits: [
      "Responsive SaaS-ready experiences",
      "Fast launch with modern frameworks",
      "Focused performance optimization",
    ],
    deliverables: ["Landing page", "Admin dashboard", "User flows"],
    icon: LayoutGrid,
  },
  {
    title: "Mobile App Development",
    description:
      "Native-feeling digital products built for iOS and Android with future-ready architecture.",
    benefits: [
      "Smooth UX for mobile customers",
      "Cross-platform consistency",
      "Scalable backend integration",
    ],
    deliverables: [
      "App prototype",
      "API integration",
      "App store-ready package",
    ],
    icon: Smartphone,
  },
  {
    title: "SaaS Development",
    description:
      "Turn your product idea into a secure, repeatable SaaS service with subscription-ready infrastructure.",
    benefits: [
      "Robust user management",
      "Billing-ready workflows",
      "Analytics & retention",
    ],
    deliverables: ["MVP SaaS product", "Admin portal", "Ops-ready deployment"],
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    description:
      "Premium interface systems and polished product design that build trust and guide action.",
    benefits: [
      "Product-first prototyping",
      "Brand-aligned visuals",
      "Usability testing",
    ],
    deliverables: [
      "Design systems",
      "Clickable prototypes",
      "UI handoff assets",
    ],
    icon: Sparkles,
  },
  {
    title: "AI Solutions",
    description:
      "Smart automation, custom intelligence, and workflow augmentation for faster business outcomes.",
    benefits: [
      "Pragmatic AI integrations",
      "Intelligent user experiences",
      "Data-driven recommendations",
    ],
    deliverables: [
      "AI proof of concept",
      "Chat / automation flows",
      "Custom model integration",
    ],
    icon: Cpu,
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored systems built to your exact process, industry, and growth objectives.",
    benefits: [
      "Flexible product fit",
      "Future-ready architecture",
      "Dedicated support",
    ],
    deliverables: [
      "Custom web apps",
      "Enterprise tooling",
      "Automation workflows",
    ],
    icon: Code2,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[] text-white px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto space-y-20">
        <section className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-cyan-500">
            Services
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Software services for founders who expect quality results.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-relaxed text-lg">
            We bring strategic product thinking, modern development practices,
            and polished design to every engagement. Choose the service that
            fits your goal, then let us handle the execution.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500 mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Benefits
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {service.benefits.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                      Deliverables
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {service.deliverables.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href="https://calendly.com/manovasofts/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-cyan-200 font-semibold hover:text-white"
                >
                  Schedule a discovery call <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
