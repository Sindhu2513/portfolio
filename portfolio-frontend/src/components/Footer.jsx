function Footer() {
  return (
    <footer className="p-10 border-t border-gray-800">

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div>
          <h2 className="text-xl font-bold mb-3">Sindhu</h2>
          <p className="text-gray-400">
            Full Stack Developer building modern  creative applications with React, Node.js, and MongoDB. Passionate about creating seamless user experiences and scalable solutions. Always eager to learn and collaborate on innovative projects.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <p className="text-gray-400">paladhisindhu258@gmail.com</p>
          <p className="text-gray-400">+91 9949526157</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 Sindhu | All rights reserved.
      </div>

      
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 px-4 py-2 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-sm hover:bg-white hover:text-black transition z-50"
      >
        ↑ Back to top
      </button>

    </footer>
  );
}

export default Footer;