import type { VolunteerType } from "./VolunteerType";

const VolunteerItem = ({
  exp,
  side,
  index,
}: {
  exp: VolunteerType;
  side: "left" | "right";
  index: number;
}) => (
  <div
    className={`my-journey-volunteer-item ${side} ${
      side === "right" && index === 0 ? "has-margin-top-volunteer" : ""
    }`}
  >
    <div className="my-journey-volunteer-content glass-effect">
      <div className="my-journey-volunteer-header-container">
        <img
          src={exp.companyImage}
          alt={`${exp.company} logo`}
          className="my-journey-volunteer-image"
        />
        <div>
          <p className="my-journey-volunteer-title">{exp.title}</p>
          <p className="my-journey-volunteer-company">{exp.company}</p>
          <p className="my-journey-volunteer-duration">{exp.duration}</p>
          <p className="my-journey-volunteer-date">{exp.date}</p>
          <p className="my-journey-volunteer-location">{exp.location}</p>
        </div>
      </div>
      <ol className="my-journey-volunteer-points">
        {exp.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ol>
    </div>
  </div>
);

export default VolunteerItem;
