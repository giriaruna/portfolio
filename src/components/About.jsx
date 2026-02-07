import React from "react";

const technicalSkills = [
  "C++",
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "React",
  "Verilog",
];

const tools = [
  "Git & GitHub",
  "Pandas",
  "NumPy",
  "Streamlit",
  "Scikit-learn",
  "Matplotlib",
  "Excel",
  "Figma",
];

const courses = [
  { name: "Data Structures & Algorithms", link: "https://bulletins.nyu.edu/courses/cs_uy/" },
  { name: "Calculus III", link: "https://bulletins.nyu.edu/courses/ma_uy/" },
  { name: "Fundamentals of Electric Circuits", link: "https://bulletins.nyu.edu/courses/ece_uy/" },
  { name: "Digital Logic & State Machine Design", link: "https://bulletins.nyu.edu/courses/cs_uy/" },
  { name: "Computer Architecture & Organization", link: "https://bulletins.nyu.edu/courses/cs_uy/" },
  { name: "Data Analysis", link: "https://bulletins.nyu.edu/courses/ma_uy/" },
  { name: "Data Science for Everyone", link: "https://bulletins.nyu.edu/courses/ds_ua/" },
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
          About Me
          <hr className="w-12 h-1 mx-auto my-6 bg-blue-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-12 items-stretch justify-center md:space-x-16 md:space-y-0 md:flex-row md:text-left">
          {/* Left Column - Bio */}
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-300 md:text-left">
              Get to know me!
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              I am <span className="font-semibold">Aruna Giri</span>, based in New York and Pennsylvania, and currently pursuing a{" "}
              <a
                href="https://bulletins.nyu.edu/undergraduate/engineering/programs/computer-engineering-bs/#curriculumtext"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-blue-700 dark:text-blue-400 hover:text-blue-800"
              >
                Bachelor of Science in Computer Engineering
              </a>{" "}
              at NYU Tandon School of Engineering. I am <span className="font-bold text-indigo-600 dark:text-indigo-300">fully open to relocating</span> for new opportunities.
            </p>
            <br />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              I am driven by a strong interest in building efficient, reliable, and impactful systems. My academic experience has allowed me to develop a solid foundation in software development, data-driven analysis, and hardware-software integration through projects and collaborative coursework.
            </p>
            <br />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              My technical interests include{" "}
              <span className="font-semibold text-blue-400">Machine Learning</span>,{" "}
              <span className="font-semibold text-blue-400">Data Science</span>, and{" "}
              <span className="font-semibold text-blue-400">Full-Stack Development</span>. I enjoy working in team environments, learning new technologies, and continuously improving my technical and problem-solving abilities.
            </p>
          </div>

          {/* Right Column - Skills & Coursework */}
          <div className="md:w-1/2 text-center md:text-left relative">
            {/* Technical Skills */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {technicalSkills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-gray-800 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-100 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Tools & Libraries */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Tools & Libraries
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {tools.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-gray-800 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-100 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {item}
                </p>
              ))}
            </div>

             {/* Relevant Coursework - Fixed Spacing and Layout */}
            <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {courses.map((course, idx) => (
                <a
                  key={idx}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-gray-800 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-100 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  {course.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
