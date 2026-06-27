import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { ExternalLinkIcon } from "lucide-react";



export default function WorkflowSteps() {
    return (
        <section className="mt-32 relative">
            <SectionTitle
                title="Meet Our Team."
                description="Empower your business with skilled professionals."
            />

            <motion.div className="relative space-y-20 md:space-y-30 mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
              
              <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl  shadow-black rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://media.licdn.com/dms/image/v2/D4D03AQE5D7T1PSAnUg/profile-displayphoto-scale_400_400/B4DZo7cA.qGQAg-/0/1761933793864?e=1781136000&v=beta&t=cvCdrcVnh6YBEzaf_uF8Pe_w4WhF_SpZ1dtLzTaY3L4"
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8  glass p-4 rounded-xl">
                       
                        <p className="text-sm font-medium text-white">Nayan Nagpal</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-white">Founder & CEO</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                    <p className="mt-8 text-white">
                        Hello! I'm Nayan Nagpal UI/UX Designer & Web Development Enthusiast. I like to work with complex backend and good looking CSS frontends. As a Software Developer in the industry, I bring a special combination of technical and creative abilities to every project. I've six years of experience, and I have a love for creativity.
                    </p>
                    
                </div>
            </section>


            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
            
            {/* Text Content Block (Now on the Left for Desktop) */}
            <div className="text-sm text-slate-600 max-w-lg order-2 md:order-1">
                <h2 className="text-xl uppercase font-semibold text-white tracking-wide">
                     Co-Founder & Designing Head 
                </h2>
                
                {/* Decorative underline */}
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-blue-400 mt-1"></div>
                
                <p className="mt-8 text-white leading-relaxed">
                   Hi, I’m Shantanu, a freelance creative designer who helps in creating visually appealing website designs and graphics. I work on designing banners, website visuals, layouts, social media creatives, and other digital design elements that improve the overall look and feel of a brand.

                </p>
              
                
                {/* Call To Action Button */}
              
            </div>

            {/* Image Block (Now on the Right for Desktop) */}
            <div className="relative shadow-2xl shadow-black rounded-2xl overflow-hidden shrink-0 w-full max-w-md order-1 md:order-2">
                <img 
                    className="w-full h-auto object-cover  rounded-2xl aspect-square"
                    src="https://media.licdn.com/dms/image/v2/D5603AQGW6pJGJfKr_A/profile-displayphoto-scale_400_400/B56Z59Or32H0Ag-/0/1780217462503?e=1781740800&v=beta&t=rt7Qh5Jey5kQ-mA4NCMsdTnh3czTBdEMk3z-YJweFNs"
                    alt="Team working on UI layouts" 
                />
                
                {/* Community Badge Overlay */}
                <div className="flex items-center gap-2 max-w-[290px] absolute bottom-6 right-6 md:bottom-8 md:right-8 glass p-4 rounded-xl shadow-lg">
                    
                    <p className="text-xs font-semibold text-white leading-tight">
                        Shantanu Bayskar

                    </p>
                </div>
            </div>

        </section>
            </motion.div>
        </section>
    );
}
