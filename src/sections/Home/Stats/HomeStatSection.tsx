import HomeStatCard from "./HomeStatCard"; // sesuaikan path-nya
import IconWork from "../../../assets/icons/ic_work.svg";
import IconTechStack from "../../../assets/icons/ic_tech_stack.svg";
import IconClient from "../../../assets/icons/ic_client.svg";
import IconProject from "../../../assets/icons/ic_project.svg";

const stats = [
  {
    icon: IconWork,
    title: "1 Year",
    desc: "Work Experiences",
    alt: "Icon Work",
  },
  {
    icon: IconTechStack,
    title: "10 Tech Stack",
    desc: "Hands-On Experience With",
    alt: "Icon Tech Stack",
  },
  {
    icon: IconClient,
    title: "3+ Happy Clients",
    desc: "Successful Deliveries",
    alt: "Icon Client",
  },
  {
    icon: IconProject,
    title: "20+ Project Completed",
    desc: "Well Executed",
    alt: "Icon Project",
  },
];

const HomeStatsSection = () => {
  return (
    <div className="home-stats-slider">
      <div className="home-stats-track">
        {[...stats, ...stats].map((stat, index) => (
          <HomeStatCard
            key={index}
            icon={stat.icon}
            alt={stat.alt}
            title={stat.title}
            desc={stat.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeStatsSection;
