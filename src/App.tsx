import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import JobSnapCard from "./components/JobSnapCard";
import TrueFocus from "./components/TrueFocus";
import NeonLineUnderPhoto from "./components/NeonLineUnderPhoto";
import SnapCodeBlock from "./components/SnapCodeBlock";
import ShinyText from "./components/ShinyText";
import NeonTechButton from "./components/NeonTechButton";
import TechStackSection from "./components/TechStackSection";
import GlitchText from "./components/GlitchText";
import NeonHeading from "./components/NeonHeading";
import ProjectSection from "./components/ProjectSection";
import AboutSnapCode from "./components/AboutSnapCode";
import LetterGlitch from "./components/LetterGlitch";
import SplashCursor from "./components/SplashCursor";
import LightRays from "./components/LightRays";
import FallingText from "./components/FallingText";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      {/* BACKGROUND LETTER GLITCH */}
      <div className="letter-glitch-bg">
        <LetterGlitch
          glitchSpeed={40}
          smooth={true}
          centerVignette={true}
          outerVignette={false}
          glitchColors={["#00ff00", "#00cc66", "#00ff99"]}
        />
      </div>

      {/* OVERLAY GELAP */}
      <div className="dark-overlay">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ff00"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* HEADING */}
      <NeonHeading text="Selamat datang di Portofolio Saya 👨‍💻" />

      {/* JOB INFO CARD */}
      <JobSnapCard
        fileName="Febriany Renata"
        position="Design, Web Developer, Devops Engineer"
        company="Work From Home"
        period="2021 - 2025"
        responsibilities="Server Maintenance, Github Spesial Team Maintener, Spesial Team Administrator. Desain Devisi Koharu, Developer di Shadow Lounge | The Second Mask, Admin Let's Get Together and Cordial C. Moderator"
        status="Work"
      />

      {/* FOTO + SNAPCODE */}
      <div className="App">
        <NeonLineUnderPhoto />
        <SnapCodeBlock />
        <ShinyText
          text=""
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>

      {/* TECH BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        <NeonTechButton
          label="UI/UX Design CX "
          icon="https://cdn-icons-png.flaticon.com/512/3642/3642303.png"
        />
        <NeonTechButton
          label="HTML"
          icon="https://cdn-icons-png.freepik.com/512/5968/5968267.png"
        />
        <NeonTechButton
          label="CSS"
          icon="https://cdn-icons-png.freepik.com/512/5968/5968242.png"
        />
        <NeonTechButton
          label="JavaScript"
          icon="https://cdn-icons-png.freepik.com/512/5968/5968292.png"
        />
        <NeonTechButton
          label="PHP"
          icon="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
        />
        <NeonTechButton
          label="Python"
          icon="https://cdn-icons-png.flaticon.com/256/5968/5968350.png"
        />
        <NeonTechButton
          label="Express"
          icon="https://www.manektech.com/storage/developer/1646733543.webp"
        />
        <NeonTechButton
          label="React"
          icon="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
      </div>

      {/* TECH BUTTONS ROW 2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 0,
          flexWrap: "wrap",
        }}
      >
        <NeonTechButton
          label="Mongo DB"
          icon="https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png"
        />
        <NeonTechButton
          label="Node JS"
          icon="https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273750.png"
        />
        <NeonTechButton
          label="Golang"
          icon="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
        />
        <NeonTechButton
          label="TypeScript"
          icon="https://images.icon-icons.com/2415/PNG/512/typescript_plain_logo_icon_146316.png"
        />
        <NeonTechButton
          label="Bootstrap"
          icon="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
        />
        <NeonTechButton
          label="Pemrograman R"
          icon="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg"
        />
      </div>

      {/* TECH STACK */}
      <TechStackSection />

      {/* PROJECTS */}
      <div style={{ textAlign: "center" }}>
        <GlitchText
          speed={1}
          enableShadows
          enableOnHover
          className="custom-class"
        >
          Projects
        </GlitchText>
      </div>
      <ProjectSection />

      {/* ABOUT */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GlitchText
          speed={1}
          enableShadows
          enableOnHover
          className="glitch glitch-about"
        >
          About
        </GlitchText>
      </div>

      <section className="about-wrapper">
        <AboutSnapCode />
      </section>

      {/* CONTACT */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GlitchText
          speed={1}
          enableShadows
          enableOnHover
          className="glitch glitch-contact"
        >
          Contact
        </GlitchText>
      </div>

      <section className="contact-wrapper">
        <Contact />
      </section>

      {/* EFFECTS */}
      <SplashCursor />
      <SplashCursor />
      <FallingText
        text={` UI / UX Desain, Express JS, React JS, Python, PHP, Pemrograman R, Golang, Typescript, Bootstrap, Mongo DB, Node JS.`}
        highlightWords={[
          "Desain",
          "JS",
          "PHP",
          "Golang",
          "Bootstrap",
          "Mongo DB",
          "Node",
        ]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />

      {/* Footer benar-benar terpisah */}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
