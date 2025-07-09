import ImageProfile from "../../assets/images/iv_profile_picture.svg";
import IconCursor from "../../assets/icons/ic_cursor.svg";
import IconDocument from "../../assets/icons/ic_document.svg";
import IconMail from "../../assets/icons/ic_mail.svg";

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
          <div className="home-profile-picture-wrapper">
            <img className="home-profile-picture" src={ImageProfile} />
            <img src={IconCursor} ref={cursorRef} className="moving-cursor" />
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
        <div className="home-content-container">
          <h1 className="home-identity-text">Hello, I'm Mochammad Adhi Buchori</h1>
          <TypingRole />
          <p className="home-role-desc-text">
            I craft thoughtful experiences across{" "}
            <b>mobile, web, UI design, and intelligent systems</b>. Blending
            code with clarity, and design with intent — I bring quiet elegance
            to life on screen, where function meets feeling.
          </p>
          <p className="home-stats-text">Quick Stats</p>
          <HomeStatsSection />
          <div className="home-button-container">
            <div className="home-button-wrapper contained">
              <img src={IconDocument} alt="Icon Document" />
              <p>Download CV</p>
            </div>
            <div className="home-button-wrapper outlined">
              <img src={IconMail} alt="Icon Mail" />
              <p>Contact Me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
