import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* Royal-blue ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#0C1C4D]">
        <motion.div
          className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute right-0 top-80 h-96 w-96 rounded-full bg-indigo-700/20 blur-[120px]" />
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-black/40 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-black/40 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080F2B]/60" />
      </div>

      {/* Main hero content */}
      <motion.section className="relative flex min-h-[85vh] flex-col items-center px-4 pb-20 pt-28 text-center md:justify-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-100 sm:text-sm"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          AI-POWERED SOLUTIONS FOR GROWING BUSINESSES
        </motion.div>

        <motion.h1
          className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl"
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          AI Products for Your Business.
         
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-8 text-blue-100/75 md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          An AI-driven startup research, product planning, MVP development, scalable architecture design, and ongoing technical support.

        </motion.p>

        {/* Calls to action — no embedded calendar */}
        <motion.div
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="/services"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#4169E1] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#3155C8] hover:shadow-blue-500/20 sm:w-auto"
          >
            Explore Our Services
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <a
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            Discover Manova
          </a>
        </motion.div>

        <motion.p
          className="mt-5 text-xs tracking-wide text-blue-200/60 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Research. Strategy. Execution.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          className="mt-16 grid w-full max-w-5xl gap-4 text-left sm:grid-cols-3 md:mt-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.07]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-cyan-300">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 10-13h-7l0-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Speed</h3>
            <p className="mt-3 text-sm leading-7 text-blue-100/65">
              Launch faster with focused planning, smart workflows, and efficient execution.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.07]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-cyan-300">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-9M14 6h7v7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Scale</h3>
            <p className="mt-3 text-sm leading-7 text-blue-100/65">
              Build flexible digital products and systems that grow with your business.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.07]">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-cyan-300">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <p className="mt-3 text-sm leading-7 text-blue-100/65">
              Collaborate with a team focused on quality, reliability, and long-term product success.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
