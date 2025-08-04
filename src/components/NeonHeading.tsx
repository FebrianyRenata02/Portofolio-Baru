import React from "react";
import "./NeonHeading.css";

interface NeonHeadingProps {
  text: string;
}

const NeonHeading: React.FC<NeonHeadingProps> = ({ text }) => {
  return <h1 className="neon-heading">{text}</h1>;
};

export default NeonHeading;
