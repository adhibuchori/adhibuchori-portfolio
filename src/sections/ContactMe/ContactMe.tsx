import React, { useEffect, useRef } from "react";
import "./ContactMe.css";
import IconMail from "../../assets/icons/ic_mail.svg?react";
import IconLinkedin from "../../assets/icons/ic_linkedin.svg?react";
import IconGithub from "../../assets/icons/ic_github.svg?react";
import IconYoutube from "../../assets/icons/ic_youtube.svg?react";
import IconTiktok from "../../assets/icons/ic_tiktok.svg?react";

interface ContactMeSectionProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

const ContactMeSection: React.FC<ContactMeSectionProps> = ({
  onVisibilityChange,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [onVisibilityChange]);

  return (
    <section id="contact-me" ref={sectionRef}>
      <div className="contact-me-container">
        <div className="contact-me-card">
          <div>
            <h2 className="contact-me-heading">
              Let's create something amazing together
            </h2>
            <p className="contact-me-subtext">
              Ready to bring your next project to life? Let&apos;s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div className="contact-me-buttons">
            <a
              href="mailto:4dh1DOTbuch0r1@gmail.com"
              className="contact-me-btn-primary glass-effect"
            >
              <IconMail className="contact-me-btn-primary-icon" /> Mail Me
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me-btn-outline glass-effect"
            >
              <IconLinkedin className="contact-me-btn-online-icon" /> LinkedIn
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me-btn-outline glass-effect"
            >
              <IconGithub className="contact-me-btn-online-icon" /> GitHub
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me-btn-outline glass-effect"
            >
              <IconYoutube className="contact-me-btn-online-icon" /> YouTube
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me-btn-outline glass-effect"
            >
              <IconTiktok className="contact-me-btn-online-icon" /> TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
