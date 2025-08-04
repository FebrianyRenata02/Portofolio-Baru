import React from "react";
import "./AboutSnapCode.css";

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="snap-code-box">
    <div className="terminal-header">
      <span className="dot red" />
      <span className="dot yellow" />
      <span className="dot green" />
    </div>
    <pre className="code-content">{children}</pre>
  </div>
);

const AboutSnapCode = () => {
  return (
    <div className="about-container">
      <div className="center-line">
        <div className="glow-dot top-dot" />
        <div className="vertical-line" />
        <div className="glow-dot" />
        <div className="vertical-line" />
        <div className="glow-dot" />
        <div className="vertical-line" />
        <div className="glow-dot" />
        <div className="vertical-line" />
        <div className="glow-dot bottom-dot" />
      </div>

      <div className="box left" style={{ top: "4.8%" }}>
        <CodeBox>
          {`const aboutMe = {
  name: "Febriany Renata",
  role: ["Web Developer", "DevOps Engineer", "UI/UX Designer"],
  location: "Bandung"
};`}
        </CodeBox>
      </div>

      <div className="box right" style={{ top: "28%" }}>
        <CodeBox>
          {`const skills = {
  language: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "React JS"],
  backend: ["Laravel", "Node.js", "Express",],
  db: "MongoDB"
};`}
        </CodeBox>
      </div>

      <div className="box left" style={{ top: "53.5%" }}>
        <CodeBox>
          {`const hobbies = [
  "Playing Music", 
  "Designing",
  "Coding",
  "Learning new tech"
];`}
        </CodeBox>
      </div>

      <div className="box right" style={{ top: "80%" }}>
        <CodeBox>
          {`const contact = {
  email: "febrianyrenata350@gmail.com",
  github: "github.com/FebrianyRenata02"
};`}
        </CodeBox>
      </div>
    </div>
  );
};

export default AboutSnapCode;
