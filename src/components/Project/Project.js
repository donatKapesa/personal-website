import React, { Component } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Project.css";

import vaguesImage from "../../assets/images/projects/vagues.png";
import codeUImage from "../../assets/images/projects/codeU.png";
import driveShareImage from "../../assets/images/projects/driveshare.png";
import clothingSiteImage from "../../assets/images/projects/clothing-site.png";

class Project extends Component {
  state = {
    projects: [
      {
        title: "Vagues",
        image: vaguesImage,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        tools: [
          "JavaScript/ES6",
          "React",
          "HTML5",
          "CSS3",
          "Firebase",
          "Bootstrap"
        ],
        liveDemoLink: "www.google.com",
        sourceCodeLink: "www.github.com",
        mainColor: "#0099ff"
      },
      {
        title: "SportsPal",
        image: vaguesImage,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        tools: [
          "JavaScript/ES6",
          "React",
          "HTML5",
          "CSS3",
          "Firebase",
          "Bootstrap"
        ],
        liveDemoLink: "www.google.com",
        sourceCodeLink: "www.github.com",
        mainColor: "#0099ff"
      },
      {
        title: "Driveshare",
        image: vaguesImage,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        tools: [
          "JavaScript/ES6",
          "React",
          "HTML5",
          "CSS3",
          "Firebase",
          "Bootstrap"
        ],
        liveDemoLink: "www.google.com",
        sourceCodeLink: "www.github.com",
        mainColor: "#0099ff"
      },
      {
        title: "Clothing Site",
        image: vaguesImage,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        tools: [
          "JavaScript/ES6",
          "React",
          "HTML5",
          "CSS3",
          "Firebase",
          "Bootstrap"
        ],
        liveDemoLink: "www.google.com",
        sourceCodeLink: "www.github.com",
        mainColor: "#0099ff"
      }
    ]
  };

  render() {
    let renderProjects = "loading...";
    renderProjects = this.state.projects.map((project, index) => {
      return (
        <div className="projectCardParentDiv">
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            tools={project.tools}
            liveDemoLink={project.liveDemoLink}
            sourceCodeLink={project.sourceCodeLink}
            mainColor={project.mainColor}
          />
        </div>
      );
    });

    const style = {
      flexDirection: "column",
      overflow: "scroll",
      display: "block",
      height: "100%"
    };

    return (
      <div className="home-child" style={style}>
        {renderProjects}
      </div>
    );
  }
}

export default Project;
