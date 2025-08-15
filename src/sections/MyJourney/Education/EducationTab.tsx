import EducationItem from "./EducationItem";
import { educations } from "./EducationData";

const EducationTab = () => (
  <div className="my-journey-education-container">
    {educations.map((edu, index: number) => (
      <EducationItem key={index} edu={edu} />
    ))}
  </div>
);

export default EducationTab;
