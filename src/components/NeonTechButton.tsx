import React from "react";
import "./NeonTechButton.css";

interface NeonTechButtonProps {
  label: string;
  icon?: string;
}

const NeonTechButton: React.FC<NeonTechButtonProps> = ({ label, icon }) => {
  return (
    <button className="neon-tech-button">
      {icon && <img src={icon} alt="" className="tech-icon" />}
      <span>{label}</span>
    </button>
  );
};

export default NeonTechButton;
