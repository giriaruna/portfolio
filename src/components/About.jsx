import React from "react";

const technicalSkills = [
  "C++",
  "Python",
  "Machine Learning",
  "Git & GitHub",
  "Jupyter Notebooks",
  "Verilog",
];

const tools = [
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Seaborn",
  "Microsoft Excel",
];

const languages = [
  "Nepali",
  "Hindi",
  "English",
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-white dark:bg-gray-800"> {/* Changed py-16 to pt-24 pb-16 */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white"> {/* Added mb-12 */}
          About Me
          <hr className="w-12 h-1 mx-auto my-6 bg-blue-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-12 items-stretch justify-center md:space-x-16 md:space-y-0 md:flex-row md:text-left">
          {/* Left Column - About */}
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-300 md:text-left">
              Get to know me!
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              I am <span className="font-semibold">Aruna Giri</span>, based in New York and Pennsylvania. I'm{" "}
              <span className="font-semibold">20 years old</span> and currently pursuing a{" "}
              <a
                href="https://bulletins.nyu.edu/undergraduate/engineering/programs/computer-science-bs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 dark:text-indigo-300 font-bold hover:underline"
              >
                Bachelor of Science in Computer Engineering
              </a>{" "} at NYU Tandon School of Engineering.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              From a young age, I've been fascinated by how things work and loved 
              solving problems. That curiosity led me to engineering, where I combine{" "}
              <span className="font-semibold">creativity, logic, and problem-solving</span>. 
              My interests span <span className="text-indigo-500 dark:text-indigo-300 font-semibold">machine learning</span>,{" "}
              <span className="text-indigo-500 dark:text-indigo-300 font-semibold">data science</span>, and{" "}
              <span className="text-indigo-500 dark:text-indigo-300 font-semibold">full-stack development</span>.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              Beyond coding, I love traveling, learning new skills, and finding creative ways 
              to turn concepts into impactful solutions. I believe in{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-300">continuous growth</span>.
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
                <p
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-600 px-4 py-2 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:scale-105 transform transition"
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
                  className="bg-gray-100 dark:bg-gray-600 px-4 py-2 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:scale-105 transform transition"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Languages */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
              Languages I Can Speak
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {languages.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-600 px-4 py-2 text-gray-800 dark:text-white rounded-lg font-medium shadow-sm hover:scale-105 transform transition"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
