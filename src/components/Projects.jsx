"use client";

import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./slide-up";

const projects = [
  {
    name: "Interactive Data Science Dashboard",
    subtitle: "Project Happiness",
    description: `
      An interactive web app built with Streamlit using the World Happiness Report 2023 dataset. 
      It explores factors affecting happiness (GDP, life expectancy, freedom), 
      visualizes data through heatmaps, pair plots, and regression graphs, 
      and predicts life expectancy from happiness scores using machine learning models.
    `,
    image: "/project-happiness.png", 
    github: "https://github.com/giriaruna/project_happiness",
    link: "https://projecthappiness.streamlit.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="pt-24 pb-16 bg-white dark:bg-gray-800" // Changed py-16 to pt-24 pb-16 and added background
    >
      {/* Section Header */}
      <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
                
                {/* Project Image - LEFT SIDE - RESIZED */}
                <div className="md:w-2/5 mb-6 md:mb-0 flex-shrink-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                    />
                  </a>
                </div>

                {/* Project Info - RIGHT SIDE - ADJUSTED FONTS */}
                <div className="md:w-3/5">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
                    {project.name}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  {/* Project Subtitle - Italics Below Description */}
                  <p className="text-lg md:text-xl italic text-teal-600 dark:text-teal-400 mb-6 font-medium">
                    {project.subtitle}
                  </p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm md:text-base"
                    >
                      <BsGithub size={20} />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2 text-gray-900 dark:text-gray-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm md:text-base"
                    >
                      <BsArrowUpRightSquare size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>

              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
