import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Mobile Developer",
  "UI/UX Designer",
  "Front-End Developer",
  "Machine Learning Engineer",
];

const TypingRole = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    const currentTitle = roles[roleIndex];
    const typingDelay = 30;
    const pauseBetweenRoles = 2000;

    let timeout: ReturnType<typeof setTimeout>;

    if (charIndex <= currentTitle.length) {
      setDisplayedTitle(currentTitle.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typingDelay);
    } else {
      timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setDisplayedTitle("");
        setCharIndex(0);
      }, pauseBetweenRoles);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <p className="home-role-info-text">
      <span className="home-role-text">
        {displayedTitle}
        <span className="typing-cursor" />
      </span>
    </p>
  );
};

export default TypingRole;
