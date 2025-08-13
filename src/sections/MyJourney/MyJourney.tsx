import { useState, useRef, useEffect } from "react";
import IconShowLess from "../../assets/icons/ic_show_less.svg?react";
import IconShowMore from "../../assets/icons/ic_show_more.svg?react";

import { experiences } from "./Experience/ExperienceData";
import { educations } from "./Education/EducationData";
import { certifications } from "./Certification/CertificationData";
import { volunteers } from "./Volunteer/VolunteerData";
import { honorsAndAwards } from "./HonorsAndAwards/HonorsAndAwardsData";

import "./MyJourney.css";
import ExperienceItem from "./Experience/ExperienceItem";
import EducationItem from "./Education/EducationItem";
import CertificationItem from "./Certification/CertificationItem";
import CertificationPagination from "./Certification/CertificationPagination";
import VolunteerItem from "./Volunteer/VolunteerItem";
import HonorsAndAwardsItem from "./HonorsAndAwards/HonorsAndAwardsItem";

const TABS = [
  { label: "Experiences", key: "experiences" },
  { label: "Education", key: "education" },
  { label: "Certifications", key: "certifications" },
  { label: "Volunteer", key: "volunteer" },
  { label: "Honors & Awards", key: "honorsAndAwards" },
];

const MyJourneySection = () => {
  const [activeTab, setActiveTab] = useState("experiences");
  const [showMore, setShowMore] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const sectionRef = useRef<HTMLElement | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabWrapperRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const itemsPerPage = 6;

  const reversedCertifications = [...certifications].reverse();

  const totalPages = Math.ceil(reversedCertifications.length / itemsPerPage);
  const paginatedCertifications = reversedCertifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const isOverflowVisible =
    activeTab === "certifications" || activeTab === "education" || showMore;

  const isHeightMax =
    activeTab === "certifications" || activeTab === "education" || showMore;

  const handleShowMoreToggle = () => {
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

  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = TABS.findIndex((tab) => tab.key === activeTab);
      const activeBtn = tabButtonRefs.current[activeIndex];
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 540);
      setIsTablet(window.innerWidth > 540 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTabs = (offset = 94) => {
    if (tabsContainerRef.current) {
      const top =
        tabsContainerRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
    if (isMobile || isTablet) {
      scrollToTabs();
    }
  };

  return (
    <section id="my-journey" ref={sectionRef}>
      <div className="my-journey-container">
        <p className="my-journey-title-text">My Journey</p>
        <div className="my-journey-tabs glass-effect" ref={tabsContainerRef}>
          <div className="my-journey-tab-btn-wrapper" ref={tabWrapperRef}>
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
                  tabButtonRefs.current[idx] = el;
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
        </div>
        <div
          className={`my-journey-tab-container tab-content fade-in ${
            activeTab === "education" ||
            activeTab === "certifications" ||
            activeTab === "honorsAndAwards"
              ? "hide-before"
              : ""
          }`}
          style={{
            maxHeight: isHeightMax ? "none" : "1000px",
            overflow: isOverflowVisible ? "visible" : "hidden",
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
          {activeTab === "education" && (
            <div className="my-journey-education-container">
              {educations.map((edu, index) => (
                <EducationItem key={index} edu={edu} />
              ))}
            </div>
          )}
          {activeTab === "certifications" && (
            <div>
              <div className="my-journey-certification-container">
                {paginatedCertifications.map((cert, idx) => (
                  <CertificationItem cert={cert} key={idx} />
                ))}
              </div>
              <CertificationPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
          {activeTab === "volunteer" &&
            (isMobile ? (
              <div className="my-journey-volunteer-list">
                {volunteers.map((exp, index) => (
                  <VolunteerItem
                    key={index}
                    exp={exp}
                    side="left"
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="my-journey-volunteer-grid">
                <div className="my-journey-volunteer-left-column">
                  {volunteers
                    .filter((exp) => exp.side === "left")
                    .map((exp, index) => (
                      <VolunteerItem
                        key={index}
                        exp={exp}
                        side="left"
                        index={index}
                      />
                    ))}
                </div>

                <div className="my-journey-volunteer-right-column">
                  {volunteers
                    .filter((exp) => exp.side === "right")
                    .map((exp, index) => (
                      <VolunteerItem
                        key={index}
                        exp={exp}
                        side="right"
                        index={index}
                      />
                    ))}
                </div>
              </div>
            ))}
          {activeTab === "honorsAndAwards" && (
            <div className="my-journey-honors-and-awards-container">
              {honorsAndAwards.map((award, index) => (
                <HonorsAndAwardsItem key={index} award={award} />
              ))}
            </div>
          )}
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
