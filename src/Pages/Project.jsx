import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import ProjectData from "./ProjectData";
import dev from "../Assets/Images/developer.gif";
import workingdev from "../Assets/Images/workingdev2.gif";

import skills from "../Assets/Images/Skills.png";

const Project = () => {
  return (
    <div className="main">
      <div className="pro">
        <div className="project">
          {ProjectData.map((item) => (
            <Link to={`/project/${item.id}`} key={item.id} className="box-link">
              <div className="box">
                <img
                  src={item.img}
                  className="projectimg"
                  alt={item.projectName}
                />
                <h3>{item.projectName}</h3>
               
                
              </div>
            </Link>
          ))}
        </div>
        <div className="skills">
          <h1 className="mainheading">Skills</h1>
          <div className="gif">
            <img className="gifimg" src={dev} alt="dev" />
            <img className="gifimg" src={workingdev} alt="dev" />
          </div>
          <div className="skillsection">
            <img className="sk" src={skills} alt="skill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
