import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({title, image, description, tools, liveDemoLink, sourceCodeLink, mainColor}) => {
  return (
    <div className="projectCard">
      <div className="projectTitle">{title}</div>
      <img className="projectImage" src={image} alt="project" />
      <div className="projectDescription">{description}</div>
      <div className="projectLinks">
        <div className="projectDemoLink">Link</div>
        <div className="projectSourceCodeLink">Link</div>
      </div>
    </div>
  );
};

export default ProjectCard;
