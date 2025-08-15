import HonorsAndAwardsItem from "./HonorsAndAwardsItem";
import { honorsAndAwards } from "./HonorsAndAwardsData";

const HonorsAndAwardsTab = () => (
  <div className="my-journey-honors-and-awards-container">
    {honorsAndAwards.map((award, index: number) => (
      <HonorsAndAwardsItem key={index} award={award} />
    ))}
  </div>
);

export default HonorsAndAwardsTab;
