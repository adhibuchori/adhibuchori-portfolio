import "./AboutMe.css";
import IconMail from "../../assets/icons/ic_mail.svg?react";
import IconLanguage from "../../assets/icons/ic_language.svg?react";
import IconCat from "../../assets/icons/ic_cute_cat.svg?react";
import RadarScanner from "./RadarScanner/RadarScanner";

const AboutMeSection = () => {
  return (
    <section id="about-me">
      <div className="about-me-container">
        <p className="about-me-title-text">About Me</p>
        <div className="about-me-content-wrapper">
          <div className="about-me-summary-content-wrapper">
            <div className="about-me-summary-wrapper glass-effect">
              <p className="about-me-summary-title-text">
                Professional Summary
              </p>
              <p className="about-me-summary-desc-text">
                I am an Informatics graduate from Universitas Pembangunan
                Nasional Veteran Jakarta with a strong interest in{" "}
                <b>
                  Mobile Development, Web Development, Machine Learning, and
                  UI/UX Design
                </b>
                . Throughout college, I completed various tech projects and
                enhanced my skills through online courses, internships, and
                organizational activities. I am dedicated to gaining a deeper
                understanding of Information Technology, especially in Software
                Development, which serves as the foundation for effective
                decision-making and connectivity.
              </p>
            </div>
            <div className="about-me-detail-content-wrapper glass-effect">
              <IconLanguage className="about-me-detail-content-icon" />
              <div className="about-me-detail-content-text-wrapper">
                <p className="about-me-detail-content-title-text">Language</p>
                <p className="about-me-detail-content-desc-text">
                  Fluent in Indonesian and have a limited working proficiency in
                  English.
                </p>
              </div>
            </div>
          </div>
          <div className="about-me-location-wrapper glass-effect">
            <p className="about-me-location-label glass-effect">
              <b>Tangerang</b>, Indonesia
            </p>
            <div className="about-me-location-pin">
              <IconCat className="about-me-location-icon"/>
            </div>
          </div>
        </div>
        <div className="about-me-value-wrapper">
          <p className="about-me-value-desc-text glass-effect">
            Turn your imagination into digital reality.
          </p>
          <p className="about-me-value-desc-text glass-effect">
            Empowering digital solutions through collaboration, adaptability,
            teamwork and continuous growth.
          </p>
          <p className="about-me-value-desc-text glass-effect">
            Crafting high-performance and high-quality software.
          </p>
        </div>
        <div className="about-me-interest-wrapper">
          <div className="about-me-radar-wrapper">
            <RadarScanner />
          </div>
          <div className="about-me-interest-content-wrapper glass-effect">
            <p className="about-me-interest-title-text">Main Objective</p>
            <p className="about-me-interest-desc-text">
              Passionate about developing <b>meaningful digital experiences</b>{" "}
              through mobile and web technologies, enriched by strong
              foundations in UI/UX and machine learning.
            </p>
          </div>
        </div>
        <div className="about-me-cta-wrapper glass-effect">
          <p className="about-me-cta-title">
            Build with intent, design with empathy
          </p>
          <p className="about-me-cta-subtitle">
            Let’s start building something amazing together
          </p>
          <div className="about-me-button-wrapper glass-effect">
            <IconMail className="about-me-button-icon" />
            <p className="about-me-button-text">Get In Touch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
