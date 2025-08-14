import ImageProfile from "../../assets/images/iv_profile_picture.jpeg";
import IconCursor from "../../assets/icons/ic_cursor.svg?react";
import IconDownload from "../../assets/icons/ic_download.svg?react";
import IconMail from "../../assets/icons/ic_mail.svg?react";

import "./Home.css";

import TypingRole from "./TypingRole";
import HomeStatsSection from "./Stats/HomeStatSection";
import BubbleCursor from "./Bubbles/BubbleCursor";
import { useHomeBubbleCursor } from "./hooks/useHomeBubbleCursor";

const HomeSection = () => {
  const { cursorRef, bubbles } = useHomeBubbleCursor();

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-profile-container">
          <div className="home-profile-picture-wrapper glass-effect">
            <img
              className="home-profile-picture"
              src={ImageProfile}
              alt="Home Profile"
            />
            <IconCursor ref={cursorRef} className="moving-cursor"/>
            {bubbles.map((bubble, index) => (
              <BubbleCursor
                key={index}
                label={bubble.label}
                className={bubble.className}
                top={bubble.top}
                left={bubble.left}
                right={bubble.right}
              />
            ))}
          </div>
        </div>
        <div className="home-content-container glass-effect">
          <h1 className="home-identity-text">
            Hello, I'm Mochammad Adhi Buchori
          </h1>
          <TypingRole />
          <p className="home-role-desc-text">
            I craft thoughtful experiences across{" "}
            <b>mobile, web, UI design, and intelligent systems</b>. Blending
            code with clarity, and design with intent — I bring quiet elegance
            to life on screen, where function meets feeling.
          </p>
          <p className="home-stats-text">Quick Stats</p>
          <HomeStatsSection />
          {/* TODO: Add action for buttons. */}
          <div className="home-button-container">
            <button className="home-button-wrapper glass-effect contained">
              <IconDownload className="home-button-icon" />
              <p className="home-button-text">Download CV</p>
            </button>
            <button className="home-button-wrapper glass-effect outlined">
              <IconMail className="home-button-icon" />
              <p className="home-button-text">Contact Me</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
