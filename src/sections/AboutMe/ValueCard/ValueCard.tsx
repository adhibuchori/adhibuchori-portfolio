import React from "react";
import "./ValueCard.css";
import IconInnovation from "../../../assets/icons/ic_innovation.svg?react";

interface ValueCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="value-card">
      <div className="value-card-icon glass-effect">
        {icon ? icon : <IconInnovation />}
      </div>
      <div className="value-card-content glass-effect">
        <p className="value-card-title">{title}</p>
        <p className="value-card-desc">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
