import type { FC, SVGProps } from "react";

type HomeStatCardProps = {
  icon: FC<SVGProps<SVGSVGElement>>;
  alt: string;
  title: string;
  desc: string;
};

const HomeStatCard = ({ icon: Icon, alt, title, desc }: HomeStatCardProps) => {
  return (
    <div className="home-stats-wrapper glass-effect">
      <Icon className="home-stats-icon" width={32} height={32} aria-label={alt} color="#000000"/>
      <div className="home-stats-content-wrapper">
        <p className="home-stats-title-text">{title}</p>
        <p className="home-stats-desc-text">{desc}</p>
      </div>
    </div>
  );
};

export default HomeStatCard;
