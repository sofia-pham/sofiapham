import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="bg-gradient-to-tr from-green-800 to-green-500 inline-block text-transparent bg-clip-text text-center">
          SOFIA PHAM
        </p>
      </NavLink>
      {isMobile ? (
        // Mobile Menu
        <>
          <button
            className="text-2xl font-bold text-green-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
          {isOpen && (
            <nav className="absolute top-16 left-0 w-full z-50 font-semibold bg-white shadow-lg flex flex-col items-center space-y-6 py-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          )}
        </>
      ) : (
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
