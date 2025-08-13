import type { HonorsAndAwardsType } from "./HonorsAndAwardsType";

const HonorsAndAwardsItem = ({ award }: { award: HonorsAndAwardsType }) => (
  <div className="my-journey-honors-and-awards-item glass-effect">
    <div className="my-journey-honors-and-awards-header-container">
      <img
        src={award.logo}
        alt={`${award.title} institution logo`}
        className="my-journey-honors-and-awards-image"
      />
      <div>
        <p className="my-journey-honors-and-awards-title">{award.title}</p>
        <p className="my-journey-honors-and-awards-issued-by">
          {award.issuedBy}
        </p>
        <p className="my-journey-honors-and-awards-date">{award.date}</p>
      </div>
    </div>
    <div className="my-journey-honors-and-awards-description">
      <p>{award.description}</p>
    </div>
    {award.details && (
      <ol className="my-journey-honor-and-awards-points">
        {award.details.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ol>
    )}
  </div>
);

export default HonorsAndAwardsItem;
