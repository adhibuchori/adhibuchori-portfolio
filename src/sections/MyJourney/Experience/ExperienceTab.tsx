import { useState, useEffect } from "react";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "./ExperienceData";

const ExperienceTab = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 540);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="my-journey-experience-list">
          {experiences.map((exp, index: number) => (
            <ExperienceItem key={index} exp={exp} side="left" index={index} />
          ))}
        </div>
      ) : (
        <div className="my-journey-experience-grid">
          <div className="my-journey-experience-left-column">
            {experiences
              .filter((exp) => exp.side === "left")
              .map((exp, index: number) => (
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
              .map((exp, index: number) => (
                <ExperienceItem
                  key={index}
                  exp={exp}
                  side="right"
                  index={index}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceTab;
