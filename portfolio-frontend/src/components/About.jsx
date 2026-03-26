import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-10"
      
    >
      


      {/* ✅ MAIN CONTAINER */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl z-10 flex-1"
        >
          <p className="text-red-400 mb-2 tracking-widest">
            DISCOVERY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="text-red-500">
              The Architect
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            I'm Sindhu, a dedicated Full Stack Developer specializing in building
            scalable web applications using modern technologies like React,
            Spring Boot, and MySQL. I focus on creating responsive,
            user-centric interfaces and efficient backend systems. Passionate
            about continuous learning, I strive to deliver clean and optimized
            solutions.
          </p>

          {/* 🔥 STATS */}
          <div className="flex gap-10 mt-6 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold text-white">1+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">5+</h3>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">25+</h3>
              <p className="text-gray-500 text-sm">Technologies</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-[260px] md:w-[350px] h-[360px] md:h-[450px] object-cover"
>
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    className="relative"
  >

    {/* ✨ SPARKLES */}
    <div className="absolute -top-6 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-70"></div>
    <div className="absolute top-10 -left-6 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
    <div className="absolute bottom-10 -right-6 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
    <div className="absolute -bottom-6 right-10 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping"></div>

    {/* 🔥 Glow behind image */}
    <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 rounded-2xl"></div>

    {/* IMAGE */}
    <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-xl relative">
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-[320px] md:w-[350px] h-[420px] md:h-[450px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </motion.div>
</motion.div>
      </div>
    </section>
  );
}

export default About;