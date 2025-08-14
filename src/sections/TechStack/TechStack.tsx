import { useState, useRef } from "react";
import "./TechStack.css";
import BaseTabs from "../../components/BaseTabs/BaseTabs";

const TABS = [
  { label: "Multi-Platform App", key: "multi_platform_app" },
  { label: "Android", key: "android" },
  { label: "Front-End Web", key: "frontend_web" },
  { label: "Machine Learning", key: "machine_learning" },
  { label: "UI/UX Design", key: "ui_ux" },
  { label: "Back-End", key: "backend" },
];

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("multi_platform_app");

  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const tabWrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="tech-stack">
      <div className="tech-stack-container">
        <p className="tech-stack-title-text">Tech Stack</p>
        <BaseTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabContainerRef={tabContainerRef}
          tabWrapperRef={tabWrapperRef}
        />
        <div className="tab-content fade-in">
          {activeTab === "multi_platform_app" && <p>Multi-Platform App</p>}
          {activeTab === "android" && <p>Android</p>}
          {activeTab === "frontend_web" && <p>Front-End Web</p>}
          {activeTab === "machine_learning" && <p>Machine Learning</p>}
          {activeTab === "ui_ux" && <p>UI/UX Design</p>}
          {activeTab === "backend" && <p>Back-End</p>}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
