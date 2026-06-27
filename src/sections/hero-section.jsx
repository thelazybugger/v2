import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <motion.div
        className="fixed inset-0 overflow-hidden -z-20 bg-[#0C1C4D] pointer-events-none"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute rounded-full top-80 left-1/3 -translate-x-1/2 w-96 h-96 bg-black blur-[120px] shadow-[0_0_100px_rgba(0,0,0,0.5)]" />
        <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 bg-black w-96 h-96 blur-[120px] shadow-[0_0_100px_rgba(0,0,0,0.5)]" />
        <div className="absolute rounded-full left-0 top-40 w-72 h-72 bg-black blur-[120px]" />
                <div className="absolute rounded-full right-0 top-40 w-72 h-72 bg-black blur-[120px]" />

      </motion.div>

      <motion.section className="flex flex-col items-center px-4 pt-24 text-center md:pt-32">
        <motion.p
          className="text-gray-300 text-sm md:text-base"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            type: "spring",
            stiffness: 320,
            damping: 70,
          }}
        >
          
        </motion.p>

        <motion.h1
          className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-tight"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 70,
          }}
        >
          Building MVPs for your Business.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-center text-gray-300 leading-relaxed text-base md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 240,
            damping: 70,
          }}
        >
          An AI drivenStartup that research, plan, and then execute tasks.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 240,
            damping: 70,
          }}
        >
          <a
            href="https://calendly.com/manovasofts/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center glass rounded-2xl bg-[#fff] px-8 py-3 text-black font-semibold transition hover:bg-[#FAF9F6]/90"
          >
            Book a Free Consultation
          </a>
          <a
            href="https://v2-phi-beige.vercel.app/Brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-3 text-white transition hover:bg-white/10"
          >
            Get Our Brochure 
          </a>
        </motion.div>

        <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/30 max-w-4xl w-full">
          <div className="grid gap-4 sm:grid-cols-3 text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Speed
              </p>
              <p className="mt-3 text-gray-300">
                Launch quickly without sacrificing premium design.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Scale
              </p>
              <p className="mt-3 text-gray-300">
                Architecture that supports future growth and feature velocity.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-500">
                Support
              </p>
              <p className="mt-3 text-gray-300">
                Clear collaboration and long-term product care.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
