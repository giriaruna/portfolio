"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsArrowUpRightSquare, BsArrowLeft, BsArrowRight, BsPlayCircle } from "react-icons/bs";

const projects = [
  {
    name: "BTS: The Quantum Leap",
    subtitle: "Predictive Engineering Audit · Data Science",
    description: `Engineered an automated data pipeline using Python (Pandas, NumPy) to analyze world tour datasets and World Bank economic indicators. Developed a predictive revenue model forecasting USD 108M in revenue and a 15.1% tourism surge.`,
    github: "https://github.com/giriaruna/bts-tour-analysis",
    color: "from-orange-600 to-yellow-500",
    tech: ["Python", "Pandas", "Data Engineering"],
  },
  {
    name: "SmartCane – Intelligent Mobility Aid",
    subtitle: "Impact Innovation · Senior Design Project",
    description: `Developing an IoT device integrating ESP32 with IMU sensors for real-time gait analysis. Engineering fall-detection algorithms analyzing acceleration spikes to trigger autonomous emergency alerts.`,
    link: "https://docs.google.com/presentation/d/1-OQFd4vXVDVsDrPhBegKeSOI-KXySBJXEBTY7-uAC1A/edit",
    color: "from-blue-600 to-cyan-500",
    tech: ["ESP32", "IoT", "System Architecture"],
  },
  {
    name: "Bootcamp EDA Case Study",
    subtitle: "Data Science · Loan Default Analysis",
    description: `Identified that 89.68% of refused applicants successfully repaid current loans, revealing risk model over-tuning. Developed 10+ automation scripts for cleaning and statistical modeling using NumPy and Pandas.`,
    github: "https://github.com/qeoiruklavmle-ux/Bootcamp_EDA",
    link: "https://docs.google.com/presentation/d/1wZizGMSXZD_IH-Kq3x94iw-A8vr0Ud5URmRgX-Jx8KI/edit",
    color: "from-emerald-600 to-teal-500",
    tech: ["Python", "EDA", "Statistical Analysis"],
  },
  {
    name: "Multi-threaded Web Crawler",
    subtitle: "Systems Research · Concurrency",
    description: `Architected high-performance crawler using Java ExecutorService with 50 concurrent threads. Implemented thread-safe structures to resolve bottlenecks and achieved a 99% success rate against anti-scraping.`,
    github: "https://github.com/giriaruna/web_crawling",
    color: "from-purple-600 to-blue-500",
    tech: ["Java", "Concurrency", "SQL"],
  },
  {
    name: "E20 ISA & Cache Simulator",
    subtitle: "Computer Architecture · C++",
    description: `Built functional E20 ISA simulator in C++ to execute machine code. Developed Python-based cache simulator evaluating hit/miss rates, achieving a 23% reduction in system latency through optimization.`,
    github: "https://github.com/giriaruna/Computer-Arch",
    color: "from-indigo-600 to-blue-700",
    tech: ["C++", "Python", "Computer Arch"],
  },
  {
    name: "Creative Physical Computing (VIP)",
    subtitle: "NYU Vertically Integrated Projects",
    description: `Assembled hardware for interactive research installations using precision soldering and Arduino. Developed structural prototypes for the "Interactive Flower Bookshelf" using CAD and laser cutting.`,
    image: "/vip_showcase.png",
    videoLink: "https://drive.google.com/file/d/1ztDvzW6bAtKuHyXYZv-yYNMhfYJ-tLH8/view?usp=sharing",
    color: "from-pink-500 to-rose-500",
    tech: ["Arduino", "CAD", "HCI"],
  },
];

const ProjectsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const project = projects[activeIdx];

  const nextProject = () => setActiveIdx((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-[#020617] py-24 flex flex-col items-center justify-center font-['Space_Grotesk'] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl w-full px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center relative z-20 mb-16"
        >
          <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Projects
            <hr className="w-12 h-1 mx-auto my-6 bg-blue-500 border-0 rounded" />
          </h1>
        </motion.div>

        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1500px]">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r ${project.color} opacity-10 blur-[120px] rounded-full transition-all duration-1000`} />

          <div className="relative w-full max-w-[1000px] h-full flex items-center justify-center">
            {projects.map((project, i) => {
              const isCenter = i === activeIdx;
              const isLeft = i === (activeIdx - 1 + projects.length) % projects.length;
              const isRight = i === (activeIdx + 1) % projects.length;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    x: isCenter ? 0 : isLeft ? -350 : 350,
                    scale: isCenter ? 1 : 0.7,
                    z: isCenter ? 0 : -300,
                    rotateY: isCenter ? 0 : isLeft ? 45 : -45,
                    opacity: isCenter ? 1 : 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  onClick={() => setActiveIdx(i)}
                  className={`absolute w-full max-w-[750px] h-[500px] rounded-[3rem] p-10 md:p-16 cursor-pointer border border-gray-200 dark:border-white/10 shadow-2xl bg-gradient-to-br ${project.color} flex flex-col justify-between overflow-hidden`}
                >
                  {project.image && (
                    <img 
                      src={project.image} 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
                      alt=""
                    />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-4 py-1.5 bg-black/20 backdrop-blur-xl rounded-full text-[12px] font-bold text-white uppercase tracking-widest border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tight mb-4">
                      {project.name}
                    </h2>
                    <h3 className="text-xl md:text-2xl text-white/80 font-medium mb-6">{project.subtitle}</h3>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-8 items-center mt-6">
                    {project.github && (
                      <a href={project.github} target="_blank" className="text-white hover:scale-125 transition-transform flex items-center gap-2 font-bold">
                        <BsGithub size={32} />
                        <span className="hidden md:inline">GitHub</span>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" className="text-white hover:scale-125 transition-transform flex items-center gap-2 font-bold">
                        <BsArrowUpRightSquare size={32} />
                        <span className="hidden md:inline">Live Demo</span>
                      </a>
                    )}
                    {project.videoLink && (
                      <a href={project.videoLink} target="_blank" className="text-white hover:scale-125 transition-transform flex items-center gap-2 font-bold">
                        <BsPlayCircle size={32} />
                        <span className="hidden md:inline">Watch Video</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-16 mt-16">
          <button onClick={prevProject} className="p-6 rounded-full border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all active:scale-90">
            <BsArrowLeft size={32} />
          </button>
          
          <div className="flex gap-4">
            {projects.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIdx(i)} 
                className={`h-2 transition-all duration-700 rounded-full ${activeIdx === i ? "w-24 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]" : "w-4 bg-gray-300 dark:bg-white/10"}`} 
              />
            ))}
          </div>

          <button onClick={nextProject} className="p-6 rounded-full border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all active:scale-90">
            <BsArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
