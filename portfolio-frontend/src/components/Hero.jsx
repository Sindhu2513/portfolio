import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-10">

      {/* ✅ SAME CONTAINER AS ABOUT */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10 flex-1"
        >
          <p className="text-red-400 mb-3 tracking-[3px] text-sm">
            WELCOME TO MY UNIVERSE
          </p>

          <motion.h1
            className="font-bold mb-6 leading-tight text-[clamp(2rem,5vw,4rem)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Masterpieces
          </motion.h1>

          <p className="text-gray-400 mb-8 text-[clamp(1rem,2vw,1.2rem)] max-w-lg">
            I'm Sindhu, a Full Stack Developer building modern, scalable web applications with stunning UI.
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-5 mb-8">
            <a href="https://github.com/Sindhu2513" target="_blank">
              <FaGithub className="text-2xl hover:text-red-500 hover:scale-110 transition" />
            </a>

            <a href="https://www.linkedin.com/in/sindhu-paladi-545002262" target="_blank">
              <FaLinkedin className="text-2xl hover:text-red-500 hover:scale-110 transition" />
            </a>

            <a href="https://leetcode.com/_Sindhu_" target="_blank">
              <SiLeetcode className="text-2xl hover:text-red-500 hover:scale-110 transition" />
            </a>
          </div>

          {/* 🔥 BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 
              hover:shadow-[0_0_40px_rgba(255,80,80,0.9)] 
              hover:scale-105 transition duration-300"
            >
              Let's Collaborate
            </button>

            <a
              href="/Sindhu.mainresume - Copy.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-white 
              hover:bg-white hover:text-black 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] 
              transition duration-300"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* 🔥 RIGHT SIDE CODE CARD (ADD FLOAT LIKE ABOUT IMAGE) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-1 justify-center z-10 mt-10 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >

            {/* ✨ SMALL GLOW */}
            <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 rounded-xl"></div>

            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-2xl w-[350px] 
            hover:scale-105 transition duration-300 relative">

              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <pre className="text-sm text-gray-300 leading-relaxed">
{`const developer = {
  name: "Sindhu",
  role: "Full Stack Developer",
  skills: ["React", "Spring Boot", "MySQL"],
  passion: true,
  motto: "Build with Purpose"
};`}
              </pre>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;