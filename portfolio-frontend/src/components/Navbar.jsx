import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("about");

  const links = ["about", "experience", "skills", "projects", "contact"];

  // 👇 Detect section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      links.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-md z-50">

      <h1 className="font-bold text-xl">Sindhu</h1>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`relative uppercase text-sm tracking-wide transition duration-300 ${
              active === link
                ? "text-red-400"
                : "hover:text-red-400"
            }`}
          >
            {link}

            {active === link && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500"></span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;