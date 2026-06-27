import SectionTitle from "../components/section-title";
import { CheckIcon, CrownIcon, RocketIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

import React from 'react';
import { Sparkles, Rocket, Zap } from 'lucide-react';

const WaitlistCTA = () => {
  return (
    <>
      {/* Custom Styles for Keyframe Animations */}
    

      <section className="relative overflow-hidden  text-white px-6 py-20 md:py-32">
        {/* Ambient Glowing Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-[70%] h-[70%]  blur-[120px] rounded-full animate-pulse-slow" />
        </div>

        {/* Floating Sparkles Decorative Icon */}
        <div className="absolute top-10 left-10 opacity-20 hidden sm:block">
          <Sparkles className="w-8 h-8 text-orange-100 animate-pulse" />
        </div>

        {/* Floating Rocket Decorative Icon */}
        <div className="absolute bottom-10 right-10 opacity-20 hidden sm:block">
          <Rocket className="w-10 h-10 text-orange-100 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* Main Glassmorphism Card */}
          <div className="relative backdrop-blur-[120px] rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Soft Backglow Effect for Card */}
            <div className="absolute -inset-1 blur-2xl opacity-50 rounded-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Column: Text & Features */}
              <div className="flex-1 text-center lg:text-left">
                {/* Free Tool Badge */}
                <div className="inline-flex items-center gap-2  border border-white/20 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 " />
                  <span className="text-sm font-medium text-white">Free Tool Alert</span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Prove Demand <span className="text-cyan-500">Before You Build</span>
                </h2>

                {/* Description */}
                <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                  Don't build in the dark. Our <span className="text-white font-semibold">free waitlist builder</span> lets you capture real interest, track who signs up, and know your idea has legs — all before you write a line of code.
                </p>

                {/* Checklist Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-sm md:text-base">See signups as they happen</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-sm md:text-base">Only count real emails</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-sm md:text-base">100+ polished designs</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="text-sm md:text-base">Direct path to build your product</span>
                  </div>
                </div>

                {/* Interactive CTA Link */}
                <a 
                  href="https://supabase.com/dashboard/sign-in?method=github&returnTo=%2Fproject%2F_%2Fintegrations%2Fdata_api%2Foverview" 
                  className="inline-flex items-center border border-white/20 gap-2 glass rounded-xl px-6 py-3 md:px-8 md:py-4 h-auto md:h-[60px] hover:scale-105 hover:shadow-lg  transition-all duration-300 ease-out cursor-pointer group"
                >
                  <span className=" text-lg  leading-[150%] font-sans  transition-colors duration-300">
                    Start Collecting Signups — Free
                  </span>
                  
                  {/* Custom Arrow Container with Rotation on Hover */}
                 
                </a>
              </div>

              {/* Right Column: Visual Stacking Signup Counter (Large Screens Only) */}
              

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaitlistCTA;