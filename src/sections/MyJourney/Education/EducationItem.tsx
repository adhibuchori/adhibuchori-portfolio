import type { EducationType } from "./EducationType";

const EducationItem = ({ edu }: { edu: EducationType }) => {
  return (
    <div className="my-journey-education-item glass-effect">
      <div className="my-journey-education-header-container">
        <img
          src={edu.logo}
          alt={`${edu.institution} logo`}
          className="my-journey-education-image"
        />
        <div>
          <p className="my-journey-education-title">{edu.institution}</p>
          <p className="my-journey-education-degree">
            {edu.degree}, {edu.field}
          </p>
          <p className="my-journey-education-duration">
            {edu.startDate} - {edu.endDate}
          </p>
          {edu.grade && (
            <p className="my-journey-education-grade">Grade: {edu.grade}</p>
          )}
        </div>
      </div>
      {edu.details && (
        <ol className="my-journey-experience-points">
          {edu.details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ol>
      )}
      {edu.activities && (
        <p className="my-journey-education-activities">
          Activities and societies: {edu.activities.join(", ")}
        </p>
      )}
    </div>
  );
};

export default EducationItem;
