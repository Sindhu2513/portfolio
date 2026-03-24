import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative text-white overflow-hidden">

      {/* 🔥 GLOBAL ANIMATED BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-black to-orange-900 bg-[length:200%_200%] animate-gradient"></div>

        {/* Glow blobs */}
        <div className="absolute w-[500px] h-[500px] bg-red-500 blur-[150px] opacity-20 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-500 blur-[150px] opacity-20 bottom-10 right-10 animate-pulse"></div>

        {/* ✨ Sparkles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>

        {/* 🔥 Moving light bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slide"></div>

      </div>

      {/* CONTENT */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;