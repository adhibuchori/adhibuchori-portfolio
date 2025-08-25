import { useEffect, useState } from "react";
import "./Navbar.css";
import IconNightMode from "../../assets/icons/ic_night_mode.svg?react";
import IconLightMode from "../../assets/icons/ic_light_mode.svg?react";
import IconMenu from "../../assets/icons/ic_menu.svg?react";
import IconClose from "../../assets/icons/ic_close.svg?react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

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
      const middle = window.innerHeight / 2;
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");
        if (!id) return;

        if (
          id !== "contact-me" &&
          rect.top <= middle &&
          rect.bottom >= middle
        ) {
          currentSection = id;
        }

        if (
          id === "contact-me" &&
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const applyTheme = (newTheme: "light" | "dark") => {
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };

    if (storedTheme) {
      applyTheme(storedTheme);
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      applyTheme(systemTheme);

      const handleChange = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? "dark" : "light";
        applyTheme(newTheme);
      };

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <nav className={`navbar glass-effect backdrop-filter`}>
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
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <div className="toggle-slider">
                  <div className="toggle-knob">
                    {theme === "dark" ? (
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
              {theme === "dark" ? "Night Mode" : "Light Mode"}
            </p>
            <label className="theme-toggle">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="toggle-slider">
                <div className="toggle-knob">
                  {theme === "dark" ? (
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
