import { useState, useRef, useEffect } from "react";
import IconShowLess from "../../assets/icons/ic_show_less.svg?react";
import IconShowMore from "../../assets/icons/ic_show_more.svg?react";

import { experiences } from "./Experience/ExperiencesData";

import "./MyJourney.css";
import ExperienceItem from "./Experience/ExperienceItem";

const TABS = [
  { label: "Experiences", key: "experiences" },
  { label: "Education", key: "education" },
  { label: "Certifications", key: "certifications" },
  { label: "Volunteer", key: "volunteer" },
];

const MyJourneySection = () => {
  const [activeTab, setActiveTab] = useState("experiences");
  const [showMore, setShowMore] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    if (!showMore && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showMore]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 540);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="my-journey" ref={sectionRef}>
      <div className="my-journey-container">
        <p className="my-journey-title-text">My Journey</p>
        <div
          className="my-journey-tabs glass-effect"
          style={{ position: "relative" }}
        >
          <div
            className="my-journey-tab-indicator-pill glass-effect"
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
              className={`my-journey-tab-btn ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={`my-journey-experience-container tab-content fade-in`}
          style={{
            maxHeight: showMore ? "none" : "1000px",
            overflow: showMore ? "visible" : "hidden",
          }}
        >
          {activeTab === "experiences" &&
            (isMobile ? (
              <div className="my-journey-experience-list">
                {experiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    exp={exp}
                    side="left"
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="my-journey-experience-grid">
                <div className="my-journey-experience-left-column">
                  {experiences
                    .filter((exp) => exp.side === "left")
                    .map((exp, index) => (
                      <ExperienceItem
                        key={index}
                        exp={exp}
                        side="left"
                        index={index}
                      />
                    ))}
                </div>

                <div className="my-journey-experience-right-column">
                  {experiences
                    .filter((exp) => exp.side === "right")
                    .map((exp, index) => (
                      <ExperienceItem
                        key={index}
                        exp={exp}
                        side="right"
                        index={index}
                      />
                    ))}
                </div>
              </div>
            ))}
          {activeTab === "education" && <p>Education</p>}
          {activeTab === "certifications" && <p>Certifications</p>}
          {activeTab === "volunteer" && <p>Volunteer</p>}
        </div>
        {(activeTab === "experiences" || activeTab === "volunteer") &&
          !showMore && <div className="my-journey-gradient-fade" />}

        {(activeTab === "experiences" || activeTab === "volunteer") && (
          <div className="my-journey-show-more-btn-container">
            <button
              className="my-journey-show-btn glass-effect"
              onClick={() => setShowMore((prev) => !prev)}
              type="button"
            >
              {showMore ? (
                <IconShowLess className="my-journey-button-show-icon" />
              ) : (
                <IconShowMore className="my-journey-button-show-icon" />
              )}
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyJourneySection;
