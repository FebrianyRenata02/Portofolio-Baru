import React from "react";
import AboutSnapCode from "./AboutSnapCode";

const AboutSection = () => {
  return (
    <section style={{ marginTop: "none" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}></div>

      {/* Garis vertikal + snap code */}
      <AboutSnapCode />
    </section>
  );
};

export default AboutSection;
