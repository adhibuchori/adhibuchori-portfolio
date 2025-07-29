import { useState, useRef, useEffect } from "react";
import "./Projects.css";

const TABS = [
  { label: "Mobile Development", key: "mobile_development" },
  { label: "Web Development", key: "web_development" },
  { label: "Machine Learning", key: "machine_learning" },
  { label: "UI/UX Design", key: "ui_ux_design" },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("mobile_development");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = TABS.findIndex((tab) => tab.key === activeTab);
      const activeBtn = tabRefs.current[activeIndex];
      if (activeBtn) {
        setIndicatorStyle({
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <section id="projects">
      <div className="projects-container">
        <p className="projects-title-text">Projects</p>
        <div
          className="projects-tabs glass-effect"
          style={{ position: "relative" }}
        >
          <div
            className="projects-tab-indicator-pill"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
          {TABS.map((tab, idx) => (
            <button
              key={tab.key}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              className={`projects-tab-btn ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content fade-in">
          {/* TODO: Input Projects */}
          <p>Coming Soon</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
