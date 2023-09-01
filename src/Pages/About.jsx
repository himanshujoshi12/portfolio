import React from "react";
import "./About.css";
import KU from "../Assets/Images/KU.png";
import Gehu from "../Assets/Images/Gehu.png";
import himanshu from "../Assets/Images/himanshuone.png";



const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about_info">
          <div className="info_left">
            <p className="para">
              
              Hi, I'm Himanshu, a passionate and dedicated Software Developer. I
              recently graduated with a degree in MCA and am eager to start my
              career in the tech industry. Throughout my academic journey, I've
              developed a strong foundation in software development, with a
              focus on technologies such as JavaScript, ReactJS, NodeJs, and
              SQL. I love building web applications and am always excited to
              learn and explore new technologies and frameworks.
            </p>
          </div>
          <div className="info_right">
            <img src={himanshu} className="himimg" alt="heroImg" />
          </div>
        </div>
        <h1 className="heading">Education</h1>
        <div className="education">
          <div className="one">
            <p>Graphic Era Hill University</p>
            <br></br>
            <p>Master of Computer Application</p>
            <br></br>
            <p>2021-2023</p>
          </div>
          <div className="two">
            <img className='clg' src={Gehu} alt="gehu" />
          </div>
          <div className="three">
          <img className='clg' src={KU} alt="ku" />
          </div>
          <div className="four">
            <p>Kumaun University DSB Campus Nainital</p>
            <br></br>
            <p>Bachelor of Science</p>
            <br></br>
            <p>2018-2021</p>
          </div>
        </div>
        <div className="Personal_dt">
          <h1 className="mainHeading">Personal Details</h1>
          <p>Name : Himanshu Joshi</p>
          <br />
          <p>Email : himanshujoshi02001@gmail.com</p>
          <br />
          <p>Phone : +91:8218680211</p>
          <br />
        </div>
      </div>
      
    </div>
  );
};

export default About;
