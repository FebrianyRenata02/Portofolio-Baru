import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

// ✅ Interface untuk pengetikan yang benar
interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  imageStyle?: React.CSSProperties; // styling khusus per project
}

const projectData = [
  {
    icon: "/icons/uiux.png",
    title: "UI/UX Design",
    description: "Desain antarmuka pengguna yang menarik dan fungsional.",
  },
  {
    icon: "/icons/appdesign.png",
    title: "Application Design",
    description: "Desain aplikasi mobile dan desktop dengan user-friendly.",
  },
  {
    icon: "/icons/webdesign.png",
    title: "Website Design",
    description: "Membuat layout web modern dan responsif.",
  },
  {
    icon: "/icons/uidesign.png",
    title: "UI Design",
    description: "Fokus pada tampilan visual dan kenyamanan pengguna.",
  },
  {
    icon: "/icons/designsystem.png",
    title: "Design System",
    description: "Komponen reusable dan konsistensi desain.",
  },
  {
    icon: "/icons/wireframe.png",
    title: "Wireframing",
    description: "Struktur awal sebelum desain final.",
  },
  {
    icon: "/icons/brand.png",
    title: "Brand Identity",
    description: "Membangun identitas visual perusahaan.",
  },
  {
    icon: "/icons/illustration.png",
    title: "Illustration",
    description: "Ilustrasi custom untuk berbagai kebutuhan.",
  },
  {
    icon: "/icons/webapp.png",
    title: "Web App Design",
    description: "Desain UI khusus untuk aplikasi berbasis web.",
  },
];

const projects = [
  {
    title: "Gallery Kelas Full-Stack",
    image:
      "https://febrianyrenata02.github.io/web-portofolio-saya/Rectangle%2081%20(3).png",
    description: "(Codepolitan)",
    link: "https://febrianyrenata02.github.io/web-portofolio-saya/index1.html",
    imageStyle: { width: "260px", height: "180px" }, // <== custom
  },
  {
    title: "Bootcamp Front-End Developer",
    image: "https://febrianyrenata02.github.io/Ninja%20Ken.png",
    description: "(Progate)",
    link: "https://febrianyrenata02.github.io/",
    imageStyle: { width: "200px", height: "200px" }, // <== custom
  },
  {
    title: "Spesial Team Groub",
    image: "https://specialteam.vercel.app/assets/img/main_icon2.svg",
    description: "Komunitas Curhat, Game, Belajar & Bercinta",
    link: "https://specialteam.vercel.app/",
    imageStyle: { width: "230px", height: "230px" }, // <== custom
  },
];

const ProjectSection = () => {
  return (
    <div className="project-section">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-icon"
              style={project.imageStyle}
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
