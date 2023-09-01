import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { VscChromeClose } from 'react-icons/vsc';
import { TfiAlignJustify } from 'react-icons/tfi';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className='logo'><span className='logofirst'>P</span>ortfolio🦸🏼‍♂️</div>
        
        <div id='listitem' className={`lists ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/about">About</NavLink></li>
            <li><NavLink exact to="/project">Project</NavLink></li>
            <li><NavLink exact to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <button className='btn' onClick={toggleNavbar}>
          {isOpen ? <VscChromeClose /> : <TfiAlignJustify />}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
