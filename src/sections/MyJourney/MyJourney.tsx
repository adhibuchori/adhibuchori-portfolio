import "./MyJourney.css";
import { useState, useRef } from "react";
import IconShowLess from "../../assets/icons/ic_show_less.svg?react";
import IconShowMore from "../../assets/icons/ic_show_more.svg?react";

import BaseTabs from "../../components/BaseTabs/BaseTabs";
import ExperienceTab from "./Experience/ExperienceTab";
import EducationTab from "./Education/EducationTab";
import CertificationsTab from "./Certification/CertificationTab";
import VolunteersTab from "./Volunteer/VolunteerTab";
import HonorsAndAwardsTab from "./HonorsAndAwards/HonorAndAwardsTab";

const TABS = [
  { label: "Experiences", key: "experiences" },
  { label: "Education", key: "education" },
  { label: "Certifications", key: "certifications" },
  { label: "Volunteer", key: "volunteer" },
  { label: "Honors & Awards", key: "honorsAndAwards" },
];

const MyJourneySection = () => {
  const [activeTab, setActiveTab] = useState<string>("experiences");
  const [showMore, setShowMore] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const tabWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleShowMoreToggle = (): void => {
    setShowMore((prev) => {
      if (prev && sectionRef.current) {
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 0);
      }
      return !prev;
    });
  };

  const shouldExpand: boolean =
    activeTab === "certifications" || activeTab === "education" || showMore;

  const renderTabContent = () => {
    switch (activeTab) {
      case "experiences":
        return <ExperienceTab />;
      case "education":
        return <EducationTab />;
      case "certifications":
        return <CertificationsTab />;
      case "volunteer":
        return <VolunteersTab />;
      case "honorsAndAwards":
        return <HonorsAndAwardsTab />;
      default:
        return null;
    }
  };

  return (
    <section id="my-journey" ref={sectionRef}>
      <div className="my-journey-container">
        <p className="my-journey-title-text">My Journey</p>
        <BaseTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabContainerRef={tabContainerRef}
          tabWrapperRef={tabWrapperRef}
        />
        <div
          className={`base-tab-container tab-content fade-in ${
            !["experiences", "volunteer"].includes(activeTab)
              ? "hide-before"
              : ""
          }`}
          style={{
            maxHeight: shouldExpand ? "none" : "1000px",
            overflow: shouldExpand ? "visible" : "hidden",
          }}
        >
          {renderTabContent()}
        </div>
        {(activeTab === "experiences" || activeTab === "volunteer") &&
          !showMore && <div className="my-journey-gradient-fade" />}
        {(activeTab === "experiences" || activeTab === "volunteer") && (
          <div className="my-journey-show-more-btn-container">
            <button
              className="my-journey-show-btn glass-effect"
              onClick={handleShowMoreToggle}
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
