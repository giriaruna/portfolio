import React, { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
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
    <section id="about" ref={sectionRef} className="pt-24 pb-16 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className={getAnimationClass("delay-[100ms]")}>
          <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            About Me
            <hr className="w-12 h-1 mx-auto my-6 bg-blue-500 border-0 rounded" />
          </h1>
        </div>

        <div className="flex flex-col space-y-12 items-stretch justify-center md:space-x-16 md:space-y-0 md:flex-row md:text-left">
          
          {/* Left Column - Bio */}
          <div className="md:w-1/2 space-y-6">
            <h2 className={`text-center text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-300 md:text-left ${getAnimationClass("delay-[200ms]")}`}>
              Get to know me!
            </h2>

            <p className={`text-lg leading-relaxed text-gray-700 dark:text-gray-200 ${getAnimationClass("delay-[300ms]")}`}>
              I am <span className="font-semibold">Aruna Giri</span>, based in New York and Pennsylvania, and currently pursuing a{" "}
              <a
                href="https://bulletins.nyu.edu/undergraduate/engineering/programs/computer-engineering-bs/#curriculumtext"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-blue-700 dark:text-blue-400 hover:text-blue-800"
              >
                Bachelor of Science in Computer Engineering
              </a>{" "}
              at NYU Tandon School of Engineering. I am <span className="font-bold text-blue-700 dark:text-blue-400">fully open to relocating</span> for new opportunities.
            </p>

            <p className={`text-lg leading-relaxed text-gray-700 dark:text-gray-200 ${getAnimationClass("delay-[400ms]")}`}>
              I am driven by a strong interest in building efficient, reliable, and impactful systems. My academic experience has allowed me to develop a solid foundation in software development, data-driven analysis, and hardware-software integration through projects and collaborative coursework.
            </p>

            <p className={`text-lg leading-relaxed text-gray-700 dark:text-gray-200 ${getAnimationClass("delay-[500ms]")}`}>
              My technical interests include{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">Machine Learning</span>,{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">Data Science</span>, and{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">Full-Stack Development</span>. I enjoy working in team environments, learning new technologies, and continuously improving my technical and problem-solving abilities.
            </p>
          </div>

          {/* Right Column - Skills & Coursework */}
          <div className="md:w-1/2 text-center md:text-left relative space-y-8">
            
            {/* Technical Skills */}
            <div className={getAnimationClass("delay-[300ms]")}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {technicalSkills.map((item, idx) => (
                  <p key={idx} className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-gray-800 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-100 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Tools & Libraries */}
            <div className={getAnimationClass("delay-[450ms]")}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
                Tools & Libraries
              </h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {tools.map((item, idx) => (
                  <p key={idx} className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-gray-800 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-100 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>

             {/* Relevant Coursework */}
            <div className={getAnimationClass("delay-[600ms]")}>
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
      </div>
    </section>
  );
};

export default AboutSection;
