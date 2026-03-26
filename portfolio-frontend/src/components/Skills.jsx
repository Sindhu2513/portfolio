import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit
} from "react-icons/fa";
import {
  SiCplusplus, SiC, SiMysql, SiMongodb, SiExpress, SiSpringboot, SiPostman
} from "react-icons/si";

function Skills() {

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Problem Solving", icon: <FaJava /> },
    { name: "AI/ML", icon: <FaPython /> },
    { name: "UI/UX Design", icon: <FaCss3Alt /> },
    { name: "AI Automation", icon: <FaPython /> }

  ];

  return (
    <section id="skills" className="py-20 px-10">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Tech <span className="text-red-500">Stack</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center gap-3 p-5 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-md hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition"
            >

              {/* 🔥 ICON */}
              <div className="text-3xl text-red-400">
                {skill.icon}
              </div>

              {/* TEXT */}
              <p className="text-sm">{skill.name}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;