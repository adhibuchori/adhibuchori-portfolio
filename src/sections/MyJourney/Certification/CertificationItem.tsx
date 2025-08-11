import type { CertificationType } from "./CertificationType";
import IconArrowShow from "../../../assets/icons/ic_arrow_show.svg?react";

const CertificationItem = ({ cert }: { cert: CertificationType }) => {
  return (
    <div className="my-journey-certification-item glass-effect">
      <div className="my-journey-certification-header-container">
        <img
          src={cert.logo}
          alt={`${cert.issuer} logo`}
          className="my-journey-certification-image"
        />
        <div>
          <p
            className="my-journey-certification-title"
            data-full-text={cert.name}
          >
            {cert.name}
          </p>
          <div className="my-journey-certification-detail-info-wrapper">
            <p className="my-journey-certification-issuer">{cert.issuer}</p>
            <p className="my-journey-certification-dates">
              Issued {cert.issueDate}
              {cert.expirationDate && ` · Expires ${cert.expirationDate}`}
            </p>
            <p className="my-journey-certification-id">
              Credential ID {cert.credentialId}
            </p>
          </div>

          {cert.url ? (
            <a
              className="my-journey-certification-button glass-effect"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Credential
              <IconArrowShow className="my-journey-certification-button-icon" />
            </a>
          ) : (
            <div className="my-journey-certification-button-space" />
          )}
        </div>
      </div>
      {cert.skills && cert.skills.length > 0 && (
        <div className="my-journey-certification-skills-scroll">
          <div className="my-journey-certification-skills">
            {cert.skills.map((skill, i) => (
              <span
                key={i}
                className="my-journey-certification-skill-chip glass-effect"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationItem;
