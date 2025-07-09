type HomeStatCardProps = {
  icon: string;
  alt: string;
  title: string;
  desc: string;
};

const HomeStatCard = ({ icon, alt, title, desc }: HomeStatCardProps) => {
  return (
    <div className="home-stats-wrapper">
      <img src={icon} alt={alt} width={32} height={32} />
      <div className="home-stats-content-wrapper">
        <p className="home-stats-year-text">{title}</p>
        <p className="home-stats-desc-text">{desc}</p>
      </div>
    </div>
  );
};

export default HomeStatCard;
