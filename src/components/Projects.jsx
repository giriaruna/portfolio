"use client";

import React, { useState, useEffect, useRef } from "react";
import { BsGithub, BsArrowUpRightSquare, BsPlayCircle } from "react-icons/bs";

const projects = [
  {
    name: "SmartCane – Intelligent Mobility Aid",
    subtitle: "Impact Innovation · Senior Design Project",
    date: "Fall 2025 - Present",
    mode: "In-Person",
    location: "NYU Tandon, Brooklyn, NY",
    description: `Collaborating on a smart mobility device for senior design, focusing on safety features like fall detection and GPS tracking. Defined the system architecture and led the business proposal development to align technical goals with user accessibility needs.`,
    link: "https://docs.google.com/presentation/d/1-OQFd4vXVDVsDrPhBegKeSOI-KXySBJXEBTY7-uAC1A/edit",
  },
  {
    name: "Heart Disease Classification",
    subtitle: "Machine Learning · Team Course Project",
    date: "Spring 2025",
    mode: "In-Person",
    location: "NYU Tandon, Brooklyn, NY",
    description: `Engineered a diagnostic pipeline using the UCI Heart Disease dataset. Trained and evaluated Logistic Regression, KNN, and Random Forest models, identifying Random Forest as the optimal model with 88.5% Accuracy. Deployed the solution as a Streamlit web app for real-time risk visualization.`,
    github: "https://github.com/giriaruna/heart_disease",
    link: "https://mlprojectheartdiease.streamlit.app/",
  },
  {
    name: "Interactive Data Science Dashboard",
    subtitle: "Data Science for Everyone · Team Course Project",
    date: "Fall 2024",
    mode: "In-Person",
    location: "NYU Paris",
    description: `Developed an interactive Streamlit web app using the World Happiness Report 2023. Performed statistical data analysis to explore correlations between GDP, life expectancy, and social support using visual analytics and regression models.`,
    github: "https://github.com/giriaruna/project_happiness",
    link: "https://projecthappiness.streamlit.app/",
  },
  {
    name: "Creative Physical Computing (VIP)",
    subtitle: "NYU Vertically Integrated Projects · Team Member",
    date: "Spring 2023 – 2024",
    mode: "In-Person",
    location: "NYU Tandon, Brooklyn, NY",
    description: `Assembled hardware for an interactive mural using precision soldering and Arduino pin mapping for a project showcase. Additionally, developed structural prototypes for the "Interactive Flower Bookshelf" using CAD tools and laser cutting. Note: This project focused on the conceptual prototyping phase; it is a proof-of-concept rather than a final working model.`,
    image: "/vip_showcase.png",
    videoLink: "https://drive.google.com/file/d/1ztDvzW6bAtKuHyXYZv-yYNMhfYJ-tLH8/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = (delay) => 
    `transition-all duration-1000 ease-out transform ${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    }`;

  return (
    <section id="projects" ref={sectionRef} className="pt-24 pb-16 bg-white dark:bg-gray-800 overflow-hidden">
      <div className={getAnimationClass("delay-[100ms]")}>
        <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
          Projects
          <hr className="w-8 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16 mt-12">
        {projects.map((project, idx) => {
          const isReversed = idx % 2 !== 0;
          const delayClass = `delay-[${(idx + 2) * 150}ms]`;

          return (
            <div key={idx} className={getAnimationClass(delayClass)}>
              <div
                className={`rounded-2xl shadow-md hover:shadow-xl transition bg-gray-50 dark:bg-gray-900 p-8 ${
                  project.image
                    ? `flex flex-col ${
                        isReversed ? "md:flex-row-reverse" : "md:flex-row"
                      } gap-10 items-center`
                    : "block"
                }`}
              >
                {project.image && (
                  <div className="w-full md:w-2/5">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto object-cover rounded-xl shadow-md"
                    />
                  </div>
                )}

                <div className={project.image ? "w-full md:w-3/5" : "w-full"}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-4 text-sm">
                    {[project.date, project.mode, project.location].map(
                      (item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="italic text-blue-600 dark:text-blue-400 mb-6 font-medium text-sm">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
                      >
                        <BsGithub size={20} />
                        GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
                      >
                        <BsArrowUpRightSquare size={20} />
                        View Project
                      </a>
                    )}
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
                      >
                        <BsPlayCircle size={20} />
                        Watch Prototype Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
