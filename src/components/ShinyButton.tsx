// src/components/ShinyButton.tsx
import React from "react";
import "./ShinyButton.css";

interface ShinyButtonProps {
  text: string;
  onClick?: () => void;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ text, onClick }) => {
  return (
    <button className="shiny-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ShinyButton;
