import React from 'react';
import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const OPEN_POSITIONS = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote ",
    type: "Full-Time",
    compensation: "Internship"
  },
  {
    id: 2,
    title: "Full-Stack Developer (React / Node)",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    compensation: "Internship"
  },
  {
    id: 3,
    title: "Graphic Designer",
    department: "Design",
    location: "Remote",
    type: "Part-Time",
    compensation: "Internship"
  }
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[] text-white relative overflow-hidden px-4 pt-12 pb-16">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute rounded-full top-20 left-1/4 w-96 h-96 bg-black blur-[120px]" />
        <div className="absolute rounded-full bottom-20 right-1/4 w-96 h-96 bg-black blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-cyan-500">
            We are hiring
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-10 tracking-tight">
            Build the Future of AI Assistants
          </h1>
          <p className="text-gray-300 mt-6 text-lg font-light leading-relaxed">
            We're a fast-moving team dedicated to turning complex business logic
            into lightning-fast MVPs. Join us and work on cutting-edge agentic
            workflows.
          </p>
        </div>

        {/* Culture / Perks Grid */}
      

        {/* Positions Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-cyan-400 " />
            Open Roles ({OPEN_POSITIONS.length})
          </h2>

          <div className="space-y-4">
            {OPEN_POSITIONS.map((role) => (
              <div
                key={role.id}
                className="group p-6 bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-2">
                  <span className="text-xs text-cyan-400 font-medium font-mono uppercase tracking-wider">
                    {role.department}
                  </span>
                  <h3 className="text-xl font-medium group-hover:text-cyan-200 transition-colors">
                    {role.title}
                  </h3>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-4  text-sm text-gray-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0 text-gray-500" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 shrink-0 text-gray-500" />
                      {role.type}
                    </span>
                    <span className="font-mono text-gray-300 bg-white/5 px-2 py-0.5  rounded text-xs">
                      {role.compensation}
                    </span>
                  </div>
                </div>

             
              </div>

              
            ))}

            <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-10 bg-white/5 rounded-2xl backdrop-blur-[60px] flex flex-col justify-start items-center gap-6 border border-white/10">
          <div className="text-white text-2xl md:text-3xl lg:text-4xl text-center">
            Apply Here
          </div>

          <div className="w-full max-w-full">
            <form action="https://formsubmit.co/manovasofts@gmail.com" method="POST" className="mx-auto grid w-full max-w-full gap-7 max-w-none">
              
            
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Your Details</h3>
                  <span className="text-xs uppercase tracking-wider text-gray-400/60">Section 1</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="min-w-0">
                    <label htmlFor="name" className="block text-sm text-gray-300 mb-2.5">Full Name*</label>
                    <input id="name" required placeholder="Jane Doe" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="text" name="name" />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-2.5">Email*</label>
                    <input id="email" required placeholder="jane@example.com" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="email" name="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="min-w-0">
                    <label htmlFor="phone" className="block text-sm text-gray-300 mb-2.5">Phone Number*</label>
                    <input id="phone" required placeholder="+91 9876543210" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="tel" name="phone" />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="location" className="block text-sm text-gray-300 mb-2.5">Current Location</label>
                    <input id="location" placeholder="Mumbai, India" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="text" name="location" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Resume</h3>
                  <span className="text-xs uppercase tracking-wider text-gray-400/60">Section 2</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                  <span>Upload your resume (PDF, DOC, DOCX)</span>
                  <span className="text-xs uppercase tracking-wider text-gray-400/60">PDF, DOC, DOCX</span>
                </div>
                <div className="relative rounded-xl border-2 border-dashed border-white/15 bg-white/5 p-4 md:p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-200">
                  <input id="resume" required accept=".pdf,.doc,.docx" className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-3 md:file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500/20 file:text-blue-300 hover:file:bg-blue-500/30 file:cursor-pointer file:transition-colors cursor-pointer focus:outline-none" type="file" name="resume" />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Section 3 */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Links</h3>
                  <span className="text-xs uppercase tracking-wider text-gray-400/60">Section 3</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="min-w-0">
                    <label htmlFor="portfolio" className="block text-sm text-gray-300 mb-2.5">Portfolio URL</label>
                    <input id="portfolio" placeholder="https://yourportfolio.com" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="url" name="portfolio" />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="linkedin" className="block text-sm text-gray-300 mb-2.5">LinkedIn Profile</label>
                    <input id="linkedin" placeholder="https://linkedin.com/in/..." className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="url" name="linkedin" />
                  </div>
                  <div className="md:col-span-2 min-w-0">
                    <label htmlFor="github" className="block text-sm text-gray-300 mb-2.5">GitHub Profile</label>
                    <input id="github" placeholder="https://github.com/username" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="url" name="github" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Section 4 */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Professional Details</h3>
                  <span className="text-xs uppercase tracking-wider text-gray-400/60">Section 4</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                  <div className="min-w-0">
                    <label htmlFor="experience" className="block text-sm text-gray-300 mb-2.5">Years of Experience</label>
                    <input id="experience" step="1" min="0" max="50" placeholder="2" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="number" name="experience" />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="salary" className="block text-sm text-gray-300 mb-2.5">Expected Salary</label>
                    <input id="salary" step="1" min="0" placeholder="" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="number" name="salary" />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="notice" className="block text-sm text-gray-300 mb-2.5">Notice Period (days)</label>
                    <input id="notice" step="1" min="0" placeholder="30" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="number" name="notice" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Section 5 */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Additional Information</h3>
                  <span className="text-xs uppercase tracking-wider text-gray-400/60">Section 5</span>
                </div>
                <div className="min-w-0">
                  <label htmlFor="skills" className="block text-sm text-gray-300 mb-2.5">Skills (comma separated)</label>
                  <input id="skills" placeholder="React, Node.js, Python, MongoDB" className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200" type="text" name="skills" />
                  <p className="mt-2 text-xs text-gray-400">For example: React, TypeScript, Tailwind, Node.js</p>
                </div>
                <div className="min-w-0">
                  <label htmlFor="message" className="block text-sm text-gray-300 mb-2.5">Cover Letter / Why are you a good fit?*</label>
                  <textarea id="message" name="message" rows="6" required placeholder="Tell us why you're excited about this role..." className="w-full rounded-xl bg-white/5 text-white placeholder-gray-400 px-4 md:px-5 py-3 md:py-3.5 ring-1 ring-white/10 focus:ring-2 focus:ring-white outline-none transition-all duration-200 resize-none"></textarea>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-4">
                <button type="submit" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-white to-white px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-medium text-black shadow-lg shadow-black glass transition-all duration-300 hover: hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Application
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
   
  );
}