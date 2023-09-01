import React from 'react'
import {Link} from 'react-router-dom';


import './Home.css';
import SocialMedia from '../Components/SocialMedia';
const Home = () => {
  const resumeLink ="https://drive.google.com/file/d/1wpCgl8_p9IntnUSe7A66WDsb5Lmwlzp8/view?usp=sharing";
  return (
    <div>
      
      <div className='home'>
        <div className="s1">
            <div className="text">
              <h1> Hi all 👋 I'm <span>Himanshu ;)</span></h1>
              <p>A passionate Software Developer 🐱‍🏍 having an experience of building Web Applications with JavaScript / Reactjs / Nodejs and some other cool libraries and Framework.</p>
            </div>
            <SocialMedia/>
            <div className='buttons'>
              <a href={resumeLink} download>
              <button className='smbtn'>Resume</button>
            </a>
              <Link to='/contact'>
              <button className='smbtn'>Contact</button>
              </Link>
            </div>
            
        </div>
        <div className="s2">
          <div class="image-container">
            <div class="image"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
