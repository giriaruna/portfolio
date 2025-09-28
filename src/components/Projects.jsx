"use client";

import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./slide-up";

const projects = [
  {
    name: "Project Happiness – Interactive Data Science Dashboard",
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
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Section Header */}
      <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-800 dark:text-gray-100">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28 max-w-6xl mx-auto px-6 md:px-12">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:space-x-12 items-center">
                
                {/* Project Image */}
                <div className="md:w-1/2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>

                {/* Project Info */}
                <div className="mt-8 md:mt-0 md:w-1/2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-colors duration-500">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    {project.name}
                  </h2>
                  <p className="text-lg leading-7 mb-4 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {project.description}
                  </p>
                  <div className="flex flex-row items-center space-x-4">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-900 dark:text-gray-100"
                      />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-900 dark:text-gray-100"
                      />
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
