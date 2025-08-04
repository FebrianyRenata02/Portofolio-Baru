import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="project-card">
      <img src={icon} alt={title} className="project-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="view-more" href="#">
        Learn more →
      </a>
    </div>
  );
};

export default ProjectCard;
