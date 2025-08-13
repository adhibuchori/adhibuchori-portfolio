import "./FloatingBottomNav.css";

import IconLinkedin from "../../assets/icons/ic_linkedin.svg?react";
import IconGithub from "../../assets/icons/ic_github.svg?react";
import IconYoutube from "../../assets/icons/ic_youtube.svg?react";
import IconTiktok from "../../assets/icons/ic_tiktok.svg?react";

const socialIcons = [
  { icon: <IconLinkedin />, href: "https://linkedin.com" },
  { icon: <IconGithub />, href: "https://github.com" },
  { icon: <IconYoutube />, href: "https://youtube.com" },
  { icon: <IconTiktok />, href: "https://tiktok.com" },
];

const FloatingBottomNav = () => {
  return (
    <div className="bottom-nav-wrapper">
      <div className="floating-bottom-nav glass-effect backdrop-filter">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-bottom-nav-icon"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingBottomNav;
