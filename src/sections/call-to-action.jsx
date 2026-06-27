import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
   const PROCESS_STEPS = [
    {
        id: 1,
        tag: "Blueprint & Strategy",
        title: "Blueprint & Strategy",
        description: "Every successful product begins with a clear plan. At Manova Softs, our Blueprint & Strategy phase focuses on understanding your vision, identifying the core problem, and mapping the features that truly matter. We collaborate closely to turn your ideas into a structured product roadmap defining user journeys, key functionalities, and the technical architecture needed to bring your concept to life.This foundation ensures that every line of code we write aligns with your goals. With strategic planning and transparent communication, we minimize guesswork, save time, and set a clear direction for efficient development and a smooth product launch.",
      
    },
    {
        id: 2,
        tag: "Focused Sprints & Build",
        title: "Focused Sprints & Build",
        description: "Once the blueprint is in place, Manova Softs moves into execution with focused development sprints. Our agile approach ensures rapid progress while maintaining complete transparency you see exactly what’s being built and how it’s evolving. Each sprint is designed to deliver measurable outcomes, from core feature implementation to UI refinement and performance optimization.We believe in writing clean, scalable, and maintainable code that grows with your product. With a balance of speed and precision, our team transforms your roadmap into a functional, high-performing MVP — ready to impress users and validate your idea in the real world.",
        
    },
    {
        id: 3,
        tag: "Launch & Validate",
        title: "Launch & Validate",
        description: "With your product built and tested, Manova Softs ensures a seamless launch that gets your MVP into the hands of real users. We handle deployment, setup, and performance checks to make sure everything runs smoothly from day one. Our focus is on delivering a stable, user-ready product that reflects your vision and exceeds expectations.Once live, we help you validate your idea through user feedback, analytics, and real-world performance insights. This data-driven validation helps refine your product’s direction, guiding smarter decisions for future updates, scaling, and long-term success.",
        
    },
   
];
   
    return (
       <>
            {/* Custom Google Web Font for your highlighted header element */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
                .font-lobster { font-family: 'Lobster', cursive; }
            `}</style>

            <section id="process" className="relative w-full  pt-24 pb-32 text-white scroll-mt-24 md:pt-32">
                <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
                    
                    {/* Header */}
                    <div className="relative z-10 max-w-3xl mx-auto text-center mb-16 md:mb-24">
                        <h2 className="px-3 text-3xl font-semibold leading-tight tracking-tight md:px-0 md:text-5xl">
                            How We Bring Ideas to Life{' '}
                            <span className=" ">Founder Journey</span>
                        </h2>
                    </div>

                    {/* Stacking Card Container — FIXED: Removed flex layout constraints */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        {PROCESS_STEPS.map((step, index) => (
                            <div 
                                key={step.id}
                                // FIXED: Changed card spacing layout to simple margin-bottom so cards can rest on top of each other
                                className="sticky w-full h-[560px] md:h-[640px] rounded-[2rem] border overflow-hidden mb-16 last:mb-0"
                                style={{ 
                                    top: `calc(120px + ${index * 24}px)`,
                                    zIndex: 10 + index 
                                }}
                            >
                                {/* Frosted Radial Glass Background Overlay */}
                                <div 
                                    style={{
                                        background: 'radial-gradient(110% 96% at 50% 78%),',
                                        backdropFilter: 'blur(15px)'
                                    }} 
                                    className="absolute inset-0 glass rounded-[1.8rem]"
                                />

                                {/* Subtle dotted texture matrix asset */}
                                <div 
                                    className="absolute inset-0 opacity-[7%] pointer-events-none" 
                                    style={{ 
                                        backgroundImage: "url('/landingPg/dotsForCard.png')", 
                                        backgroundSize: 'cover' 
                                    }}
                                />

                                {/* Ambient bottom linear gradient wash */}
                                <div className="absolute inset-x-0 bottom-0 h-48 via-transparent to-transparent pointer-events-none" />

                                {/* Card Text Content Layer */}
                                <div className="relative z-10 flex h-full flex-col px-6 pb-10 pt-7 text-center md:px-16 md:pb-14 md:pt-9">
                                    <div className="flex justify-center">
                                        <div className="inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium tracking-[0.01em] text-white md:px-5 md:text-sm">
                                            {step.tag}
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col items-center justify-start pt-14 md:pt-20">
                                        <div className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-cyan-200/65 md:mb-6 md:text-xs">
                                            Step {step.id}
                                        </div>
                                        <h3 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-tight text-cyan-500 md:text-6xl subpixel-antialiased">
                                            {step.title}
                                        </h3>
                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:mt-5 md:text-lg md:leading-8">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Vector Graphic Details — Bottom Left */}
                                <div className="pointer-events-none absolute bottom-0 left-0">
                                    <div 
                                        style={{ backgroundImage: step.bgLeftIcon, backgroundSize: 'cover', opacity: '30%' }} 
                                        className="relative w-[6em] sm:w-[12em] h-[6em] sm:h-[10em]"
                                    />
                                </div>

                                {/* Vector Graphic Details — Bottom Right */}
                                <div className="pointer-events-none absolute bottom-0 right-0">
                                    <div 
                                        style={{ backgroundImage: step.bgRightIcon, backgroundSize: 'cover', opacity: '30%' }} 
                                        className="relative w-[6em] sm:w-[12em] h-[6em] sm:h-[10em]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};