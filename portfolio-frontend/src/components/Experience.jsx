import { motion } from "framer-motion";

function Experience() {
  const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Edunet Foundation",
    duration: "Feb 2023 – Mar 2023",
    points: [
      "Developed responsive frontend interfaces using React.js and modern UI practices.",
      "Built RESTful APIs using Node.js and Express.js for handling application logic.",
      "Integrated MongoDB database for efficient data storage and retrieval.",
      "Worked on full-stack development concepts including routing, API integration, and CRUD operations."
    ]
  },
  {
    role: "AI-ML Intern",
    company: "EduSkills",
    duration: "Jan 2024 – Mar 2024",
    points: [
      "Performed data preprocessing and exploratory data analysis (EDA) on real-world datasets.",
      "Built machine learning models for prediction and classification tasks.",
      "Improved model performance using validation techniques and optimization strategies.",
      "Gained hands-on experience in Python, data handling, and ML workflows."
    ]
  },
  {
    role: "Self Employed / Full Stack Learner",
    company: "Personal Projects & Practice",
    duration: "2022 – Present",
    points: [
      "Built full-stack applications using React, Spring Boot, and MySQL.",
      "Developed projects like AI Finance Tracker, Stock Market Dashboard, and Portfolio Website.",
      "Worked on backend development including REST APIs, authentication, and database design.",
      "Practicing Data Structures & Algorithms and solving problems on platforms like LeetCode.",
      "Continuously learning modern technologies and improving development skills."
    ]
  }
];

  return (
    <section id="experience" className="p-10 pt-24 md:pt-10 min-h-screen relative z-10">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-red-500">Journey</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-red-500/30"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-12 flex ${
  index % 2 === 0
    ? "justify-start"
    : "justify-start md:justify-end"
}`}
          >

            {/* Card */}
            <div className="w-full md:w-[45%] ml-10 md:ml-0 p-6 rounded-xl border border-gray-700 bg-black/40 backdrop-blur-md relative hover:scale-105 transition duration-300">

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-xl border border-red-500 opacity-20 animate-pulse"></div>

              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-red-400 text-sm">{exp.company}</p>
              <p className="text-gray-400 text-xs mb-3">{exp.duration}</p>

              <ul className="text-gray-300 text-sm space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Experience;