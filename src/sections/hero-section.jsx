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
          AI Products for your Business.
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
          An AI driven Startup that researches, plans, and then executes tasks.
        </motion.p>

        {/* 
          Inline Calendar Element (Styled exactly like the reference image)
        */}
        <motion.div
          className="mt-14 w-full max-w-5xl text-left overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
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
          {/* Header Bar matching your image styling */}
          <div className="bg-[#f4f3ff] p-6 sm:px-8 border-b border-gray-200">
            <span className="inline-block text-xs font-bold tracking-wider text-[#57534e] bg-[#e7e5e4] px-3 py-1 rounded-full uppercase">
              30-MIN ACCOUNT AUDIT // DIRECT STRATEGY DESK
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              BOOK YOUR ACCOUNT AUDIT
            </h2>
            <p className="mt-1 text-sm md:text-base text-gray-600">
              Select an open time slot directly below. We'll run a screen-share audit of your real ad accounts.
            </p>
          </div>

          {/* Cal.com System Scheduler Block */}
          <div className="bg-white min-h-[650px] w-full">
            <Cal
              namespace="30min"
              calLink="manova-softs-hu6us8/30min"
              style={{ width: "100%", height: "100%", minHeight: "650px" }}
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
