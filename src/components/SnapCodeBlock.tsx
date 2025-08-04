import React from "react";
import "./SnapCodeBlock.css";
import ShinyText from "./ShinyText"; // karena sudah 1 folder

const SnapCodeBlock: React.FC = () => {
  return (
    <div className="snap-code-container">
      {/* Tombol Shiny di tengah */}
      <div className="shiny-center">
        <button className="shiny-button">
          <ShinyText text="View CV" speed={2.5} />
        </button>

        {/* Garis neon tambahan di bawah tombol */}
        <div className="neon-line under-button-line" />
      </div>
      {/* Titik neon */}
      <div className="neon-dot" />
    </div>
  );
};

export default SnapCodeBlock;
