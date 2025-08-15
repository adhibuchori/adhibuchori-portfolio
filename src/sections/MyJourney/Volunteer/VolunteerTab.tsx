import { useState, useEffect } from "react";
import VolunteerItem from "./VolunteerItem";
import { volunteers } from "./VolunteerData";

const VolunteersTab = () => {
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
        <div className="my-journey-volunteer-list">
          {volunteers.map((volunteer, index: number) => (
            <VolunteerItem
              key={index}
              volunteer={volunteer}
              side="left"
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="my-journey-volunteer-grid">
          <div className="my-journey-volunteer-left-column">
            {volunteers
              .filter((volunteer) => volunteer.side === "left")
              .map((volunteer, index: number) => (
                <VolunteerItem
                  key={index}
                  volunteer={volunteer}
                  side="left"
                  index={index}
                />
              ))}
          </div>
          <div className="my-journey-volunteer-right-column">
            {volunteers
              .filter((volunteer) => volunteer.side === "right")
              .map((volunteer, index: number) => (
                <VolunteerItem
                  key={index}
                  volunteer={volunteer}
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

export default VolunteersTab;
