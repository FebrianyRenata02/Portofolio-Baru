import React from "react";
import "./AboutMeCard.css";
import AboutSnapCode from "./AboutSnapCode";

const AboutSection: React.FC = () => {
  return (
    <section style={{ marginTop: "none" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 className="glitch" data-text="About">
          About
        </h2>
      </div>

      <AboutSnapCode />
    </section>
  );
};

export default AboutSection;
