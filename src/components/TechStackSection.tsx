import React from "react";
import "./TechStackSection.css";

const TechStackSection: React.FC = () => {
  return (
    <div className="tech-stack-wrapper">
      {/* Titik atas */}
      <div className="neon-dot" />

      {/* Garis vertikal */}
      <div className="neon-line neon-line-below" />

      {/* Titik bawah */}
      <div className="neon-dot" />
    </div>
  );
};

export default TechStackSection;
