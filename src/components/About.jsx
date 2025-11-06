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


const languages = ["English", "Nepali", "Hindi"];

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
              I am <span className="font-semibold">Aruna Giri</span>, based in New York and Pennsylvania. I'm 20 years old and currently pursuing a{" "}
              <a
                href="https://bulletins.nyu.edu/undergraduate/engineering/programs/computer-engineering-bs/#curriculumtext"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-blue-700 dark:text-blue-400 hover:text-blue-800"
              >
                Bachelor of Science in Computer Engineering
              </a>{" "}
              at NYU Tandon School of Engineering.
            </p>
            <br />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              From a young age, I've been fascinated by how things work and loved solving problems. That curiosity led me to engineering, where I combine creativity, logic, and problem-solving. My interests span{" "}
              <a
                href="https://github.com/nikopj/introml/tree/master"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-blue-400 hover:text-blue-500"
              >
                Machine Learning
              </a>
              ,{" "}
              <a
                href="https://www.nyu.edu/content/dam/nyu/globalPrgms/documents/paris/academics/Syllabi/fall-2025/Syl_Paris_DS-UA%209111_Instructor_Semester.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-blue-400 hover:text-blue-500"
              >
                Data Science
              </a>
              , and{" "}
              <span className="font-semibold text-blue-400">Full-Stack Development</span>.
            </p>
            <br />

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              Beyond coding, I love traveling, learning new skills, and finding creative ways to turn concepts into impactful solutions. I believe in continuous growth.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="md:w-1/2 text-center md:text-left relative">
            {/* Technical Skills */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {technicalSkills.map((item, idx) => (
                <p key={idx} className="bg-gray-100 dark:bg-gray-700 px-4 py-2 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:scale-105 transform transition">
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
                <p key={idx} className="bg-gray-100 dark:bg-gray-700 px-4 py-2 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:scale-105 transform transition">
                  {item}
                </p>
              ))}
            </div>

            {/* Languages */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Languages I Speak
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {languages.map((item, idx) => (
                <p key={idx} className="bg-gray-100 dark:bg-gray-700 px-4 py-2 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:scale-105 transform transition">
                  {item}
                </p>
              ))}
            </div>

            {/* Footer */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
