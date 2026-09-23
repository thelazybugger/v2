import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function HeroSection() {
  // Initialize the Cal.com SDK once the component mounts
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { eventTypeListItem: { backgroundColor: "#ffffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      {/* Background Ambient Glow Effects */}
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

      {/* Main Content Section */}
      <motion.section className="flex flex-col items-center px-4 pt-24 text-center md:pt-32 pb-24">
        {/* Animated Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-tight"
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
           Products for your Business.
        </motion.h1>

        {/* Animated Description */}
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
          An AI driven  Startup that researches, plans, and then executes tasks.
        </motion.p>

        {/* 
          Beautifully Styled Inline Calendar Layout Matching the Reference Image
        */}
        <motion.div
          className="mt-14 w-full max-w-5xl text-left overflow-hidden rounded-[2rem] bg-[#FAF9FF] shadow-2xl shadow-black/50 border border-white/10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 60,
          }}
        >
          {/* Header Bar matching screenshot colors and typography */}
          <div className="p-6 sm:p-8 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Badge Tag */}
              <span className="inline-block text-xs font-bold tracking-wider text-[#4A3AFF] bg-[#E8E6FF] px-4 py-1.5 rounded-full uppercase">
                30-MIN ACCOUNT AUDIT // DIRECT STRATEGY DESK
              </span>
              
              {/* Top Right Actions */}
              <div className="flex items-center gap-4 text-sm font-medium">
                <a 
                  href="https://cal.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#1A0B40]/70 hover:text-[#4A3AFF] inline-flex items-center gap-1 transition"
                >
                  Open in Cal.com
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1A0B40]/5 text-[#1A0B40]/70 hover:bg-[#1A0B40]/10 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Title & Context Descriptions */}
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-[#1A0B40] tracking-tight">
              BOOK YOUR ACCOUNT AUDIT
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#524B6E]">
              Select an open time slot directly below. We'll run a screen-share audit of your real ad accounts.
            </p>
          </div>

          {/* Cal.com System Scheduler Block nested inside an Inner Card Container */}
          <div className="bg-white mx-4 mb-4 rounded-2xl border border-gray-100 overflow-hidden shadow-inner min-h-[600px]">
            <Cal
              namespace="30min"
              calLink="manova-softs-hu6us8/30min"
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </motion.div>

        {/* Features Info Footer Row */}
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
