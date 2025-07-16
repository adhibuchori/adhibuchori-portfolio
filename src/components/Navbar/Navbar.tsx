import { useEffect, useState } from "react";
import "./Navbar.css";
import IconNightMode from "../../assets/icons/ic_night_mode.svg?react";
import IconLightMode from "../../assets/icons/ic_light_mode.svg?react";
import IconMenu from "../../assets/icons/ic_menu.svg?react";
import IconClose from "../../assets/icons/ic_close.svg?react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "night">("light");

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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "night"
      | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      const prefersNight = window.matchMedia(
        "(prefers-color-scheme: night)"
      ).matches;
      const systemTheme = prefersNight ? "night" : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "night" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <nav className={`navbar glass-effect`}>
        <div className="navbar-container">
          <h1 className="navbar-title">adhibuchori’s Portfolio</h1>

          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <IconMenu className="navbar-icon" />
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
              <label className="theme-toggle">
                <input
                  type="checkbox"
                  checked={theme === "night"}
                  onChange={toggleTheme}
                />
                <div className="toggle-slider">
                  <div className="toggle-knob">
                    {theme === "night" ? (
                      <IconLightMode className="navbar-icon" />
                    ) : (
                      <IconNightMode className="navbar-icon" />
                    )}
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>adhibuchori’s Portfolio</h2>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <IconClose className="navbar-icon" />
          </button>
        </div>

        <ul className="sidebar-menu">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar-item ${
                activeSection === item.id ? "active glass-effect" : ""
              }`}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
          <li className="sidebar-item-theme-toggle">
            <p className="theme-toggle-text">
              {theme === "night" ? "Night Mode" : "Light Mode"}
            </p>
            <label className="theme-toggle">
              <input
                type="checkbox"
                checked={theme === "night"}
                onChange={toggleTheme}
              />
              <div className="toggle-slider">
                <div className="toggle-knob">
                  {theme === "night" ? (
                    <IconLightMode className="navbar-icon" />
                  ) : (
                    <IconNightMode className="navbar-icon" />
                  )}
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
