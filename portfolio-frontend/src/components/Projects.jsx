import { motion } from "framer-motion";

function Projects() {

  const projects = [
   {
  title: "Blood Bank Management System",
  description:
    "Developed a system to manage blood donor records, availability, and requests efficiently. Implemented database operations for storing and retrieving donor details. Designed a user-friendly interface for hospitals and users.",
  tech: [
    "Java", "JSP", "Servlets", "MySQL",
    "JDBC", "HTML", "CSS",
    "CRUD Operations", "Database Management"
  ],
 
  code: "https://github.com/Sindhu2513/BloodBankManagementSystem"
},
{
  title: "Yoga Trainer Website",
  description:
    "Built a responsive website for yoga training sessions with schedules and user engagement features. Focused on clean UI and accessibility. Designed pages for trainer details and session booking.",
  tech: [
    "HTML", "CSS", "JavaScript",
    "Responsive Design", "UI/UX Design",
    "Form Handling", "Frontend Development",
    "DOM Manipulation", "Web Design"
  ],
  
  code: "https://github.com/Sindhu2513/yoga_trainer"
},
{
  title: "Grayscale Image Colorization",
  description:
    "Implemented an AI-based model to convert grayscale images into color images. Used machine learning techniques to predict color values. Focused on image processing and model accuracy.",
  tech: [
    "Python", "Machine Learning", "OpenCV",
    "NumPy", "Deep Learning Basics",
    "Image Processing", "Data Preprocessing",
    "Model Training", "AI Concepts"
  ],
 
  code: "https://github.com/Sindhu2513/Grey_Scale_Image_Colourization"
},
  {
    title: "AI Personal Finance Tracker",
    
    description:
      "Developed a smart finance management system to track income and expenses with categorized insights. Integrated AI-based prediction to analyze future spending trends. Built an interactive dashboard with real-time analytics and visual reports.",
    tech: [
      "React", "Node.js", "MongoDB", "Express",
      "Chart.js", "REST API", "AI/ML Basics",
      "Authentication", "Data Visualization"
    ],
    
    code: "https://github.com/Sindhu2513/smart-expense-tracker"
    
  },
  {
    title: "Attendance Management System",
    description:
      "Designed a full-stack web application for managing student attendance with role-based authentication. Implemented CRUD operations with secure database handling. Followed MVC architecture for scalable backend structure.",
    tech: [
      "Java", "JSP", "Servlets", "MySQL",
      "JDBC", "MVC Architecture", "HTML",
      "CSS", "Session Management"
    ],
  
    code: "https://github.com/Sindhu2513/Student_login3d"
  },
  {
    title: "Helping Hands Platform",
    description:
      "Developed a community-driven platform connecting volunteers and users for social support. Enabled request posting, user interaction, and service tracking. Focused on accessibility and user-friendly design.",
    tech: [
      "HTML", "CSS", "JavaScript", "Java",
      "Backend Development", "Form Handling",
      "Responsive Design", "DOM Manipulation",
      "Basic Authentication"
    ],
    
    code: "https://github.com/Sindhu2513"
  },
  {
    title: "Portfolio Website",
    description:
      "Created a modern personal portfolio with smooth animations and responsive design. Showcased projects, skills, and contact features with a clean UI. Integrated full-stack capabilities and optimized performance.",
    tech: [
      "React", "Tailwind CSS", "Framer Motion",
      "JavaScript", "HTML", "CSS",
      "Responsive Design", "UI/UX Design",
      "Spring Boot Integration"
    ],
    live: "#",
    code: "#"
  },
  {
  title: "Upcoming AI-Based Projects",
  description:
    "Currently working on advanced AI-driven applications including smart prediction systems and automation tools. Exploring real-world problem solving using machine learning and full-stack integration.",
  tech: [
    "Python", "Machine Learning", "React",
    "Node.js", "MongoDB", "API Integration",
    "AI Models", "Data Analysis",
    "Full Stack Development"
  ],
  
  code: "#"
}
];


  return (
    <section id="projects" className="py-20 px-10">

      <div className="max-w-7xl mx-auto overflow-hidden">

        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-red-500">Projects</span>
        </h2>

        {/* 🔥 AUTO SLIDER */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >

          {/* 🔁 DUPLICATE FOR LOOP EFFECT */}
          {[...projects, ...projects].map((p, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[350px] p-6 border border-gray-700 rounded-xl bg-black/40 backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] transition"
            >

              <h3 className="text-xl font-bold mb-2">{p.title}</h3>

              <p className="text-gray-400 text-sm mb-3">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, i) => (
                  <span key={i} className="text-xs border px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={p.live}
                  target="_blank"
                  className="text-xs px-3 py-2 bg-red-500 rounded hover:scale-105 transition"
                >
                  Live
                </a>

                <a
                  href={p.code}
                  target="_blank"
                  className="text-xs px-3 py-2 border rounded hover:bg-white hover:text-black transition"
                >
                  Code
                </a>
              </div>

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;