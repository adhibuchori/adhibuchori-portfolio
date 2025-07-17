import { experiences } from "./ExperiencesData";
import "./MyJourney.css";

const MyJourneySection = () => {
  return (
    <section id="my-journey">
      <div className="my-journey-container">
        <p className="my-journey-title-text">My Journey</p>
        {/* Create a tab layout */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                exp.side === "right" ? "right" : "left"
              }`}
            >
              <div className="timeline-content glass-effect">
                <p className="timeline-title">{exp.title}</p>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-date">{exp.date}</p>
                <p className="timeline-location">{exp.location}</p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourneySection;
