import { useState } from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "🔗" },
  { label: "Twitter", href: "#", icon: "🔗" },
  { label: "Dribbble", href: "#", icon: "🔗" },
];

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thank you — we will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-[] text-white px-4 pt-32 pb-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Contact
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Talk with us and start your product journey.
              </h1>
              <p className="mt-5 text-gray-300 leading-relaxed text-lg max-w-2xl">
                Whether you need a new website, SaaS product, mobile app, or
                AI-enabled workflow, we help teams move faster with clarity and
                confidence.
              </p>
            </div>
            <a
              href="https://calendly.com/manovasofts/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-blue-900 transition"
            >
              Book a discovery call
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold">Drop your message</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Share a few details about your project and we'll get back to you
              with a tailored plan.
            </p>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/manovasofts@gmail.com" method="POST" className="mt-8 space-y-6">
               <label className="block text-sm text-gray-200">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </label>
              <label className="block text-sm text-gray-200">
                Email
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  placeholder="hello@company.com"
                />
              </label>
              <label className="block text-sm text-gray-200">
                Project overview
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  placeholder="What are you building and what problem are you solving?"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-yellow-50"
              >
                Send message
              </button>
              {status && <p className="text-sm text-cyan-200">{status}</p>}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">Business inquiries</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Email our partnerships team for new projects, enterprise work,
                or long-term collaborations.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-cyan-500" />
                  <span>manovasofts@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-cyan-500" />
                  <span>+91 8788007333</span>
                </div>
              </div>
            </div>
           
         
          </div>
        </section>
      </div>
    </div>
  );
}
