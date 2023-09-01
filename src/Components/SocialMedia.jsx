import React from 'react';
import './SocialMedia.css';
import { Link } from 'react-router-dom';
import insta from '../Assets/Images/insta.png';
import github from '../Assets/Images/github.png';
import linkedIn from '../Assets/Images/linkedin.png';
import twitter from '../Assets/Images/twitterlogo.png';

const SocialMedia = () => {
  return (
    <div className='mediaicons'>
      <Link to='https://www.instagram.com/himanshujoshi710/' target='_blank'>
        <img className='smedia' src={insta} alt='instagram' />
      </Link>
      <Link to='https://github.com/himanshujoshi12' target='_blank'>
        <img className='smedia' src={github} alt='github' />
      </Link>
      <Link to='https://www.linkedin.com/in/himanshu-joshi-1a93111b7/' target='_blank'>
        <img className='smedia' src={linkedIn} alt='linkedIn' />
      </Link>
      <Link to='https://twitter.com/himanshuj012' target='_blank'>
        <img className='smedia' src={twitter} alt='twitter' />
      </Link>
    </div>
  );
};

export default SocialMedia;
