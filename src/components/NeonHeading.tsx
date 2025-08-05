import React from "react";
import "./NeonHeading.css";

interface NeonHeadingProps {
  text: string;
}

const NeonHeading: React.FC<NeonHeadingProps> = ({ text }) => {
  return (
    <div className="neon-heading-wrapper">
      <h1 className="neon-heading">{text}</h1>
    </div>
  );
};

export default NeonHeading;
