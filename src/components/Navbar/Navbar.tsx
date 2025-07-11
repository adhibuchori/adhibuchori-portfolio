import { useEffect, useState } from "react";
import "./Navbar.css";
import NightModeIcon from "../../assets/icons/ic_night_mode.svg";

// TODO: Implement the functionality for switch theme.
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About Me" },
    { id: "my-journey", label: "My Journey" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact-me", label: "Contact Me" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let maxVisibleHeight = 0;
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleHeight && visibleHeight > 100) {
          maxVisibleHeight = visibleHeight;
          const id = section.getAttribute("id");
          if (id) currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar glass-effect`}>
      <div className="navbar-container">
        <h1 className="navbar-title">adhibuchori’s Portfolio</h1>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`navbar-item ${
                activeSection === item.id ? "active glass-effect" : ""
              }`}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
          <li className="navbar-item">
            <img
              src={NightModeIcon}
              alt="Icon Night Mode"
              width={32}
              height={32}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
