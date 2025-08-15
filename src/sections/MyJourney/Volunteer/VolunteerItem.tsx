import type { VolunteerType } from "./VolunteerType";

const VolunteerItem = ({
  volunteer,
  side,
  index,
}: {
  volunteer: VolunteerType;
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
          src={volunteer.companyImage}
          alt={`${volunteer.company} logo`}
          className="my-journey-volunteer-image"
        />
        <div>
          <p className="my-journey-volunteer-title">{volunteer.title}</p>
          <p className="my-journey-volunteer-company">{volunteer.company}</p>
          <p className="my-journey-volunteer-duration">{volunteer.duration}</p>
          <p className="my-journey-volunteer-date">{volunteer.date}</p>
          <p className="my-journey-volunteer-location">{volunteer.location}</p>
        </div>
      </div>
      <ol className="my-journey-volunteer-points">
        {volunteer.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ol>
    </div>
  </div>
);

export default VolunteerItem;
