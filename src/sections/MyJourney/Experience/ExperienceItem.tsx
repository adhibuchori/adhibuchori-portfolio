import type { ExperienceType } from "./ExperienceType";

const ExperienceItem = ({
  exp,
  side,
  index,
}: {
  exp: ExperienceType;
  side: "left" | "right";
  index: number;
}) => (
  <div
    className={`my-journey-experience-item ${side} ${
      side === "right" && index === 0 ? "has-margin-top" : ""
    }`}
  >
    <div className="my-journey-experience-content glass-effect">
      <div className="my-journey-experience-header-container">
        <img
          src={exp.companyImage}
          alt={`${exp.company} logo`}
          className="my-journey-experience-image"
        />
        <div>
          <p className="my-journey-experience-title">{exp.title}</p>
          <p className="my-journey-experience-company">{exp.company}</p>
          <p className="my-journey-experience-duration">{exp.duration}</p>
          <p className="my-journey-experience-date">{exp.date}</p>
          <p className="my-journey-experience-location">{exp.location}</p>
        </div>
      </div>
      {exp.subExperiences ? (
        <div className="my-journey-sub-experience-list">
          {exp.subExperiences.map((sub, i) => (
            <div key={i} className="my-journey-sub-experience">
              <div className="my-journey-sub-experience-header">
                <p className="my-journey-experience-title">{sub.title}</p>
                <p className="my-journey-experience-date">{sub.date}</p>
                {sub.location && (
                  <p className="my-journey-experience-location">
                    {sub.location}
                  </p>
                )}
              </div>
              <ol className="my-journey-experience-points">
                {sub.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ol>
              <div className="my-journey-experience-skills">
                {sub.skills.map((skill, k) => (
                  <span
                    key={k}
                    className="my-journey-experience-skill-chip glass-effect"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <ol className="my-journey-experience-points">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ol>
          <div className="my-journey-experience-skills">
            {exp.skills.map((skill, i) => (
              <span
                key={i}
                className="my-journey-experience-skill-chip glass-effect"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
);

export default ExperienceItem;
