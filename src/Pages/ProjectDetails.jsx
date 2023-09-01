import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; 
import ProjectData from './ProjectData';
import SocialMedia from '../Components/SocialMedia';
import { Link } from 'react-router-dom';



const ProjectDetails = () => {
  const { id } = useParams(); 
  

  const project = ProjectData.find(item => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='project_details'>
      <div className="back">
        <Link to='/project' className='link'>
          <button className='backbtn'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>back
          </button>
        </Link>
      </div>
      <div className='pro'>
      <img src={project.img} alt={project.projectName} className="project_img"/>
      <h3 className='prjheading'>{project.projectName}</h3>
      <p className='description'>{project.description}</p>
      <a href={project.githublink}>Check</a>
      <a href={project.demo}>Demo</a>
      </div>
      <SocialMedia/>
    </div>
  );
}

export default ProjectDetails;
