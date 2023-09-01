import React from "react";
import "./Contact.css";
import Ctc from "../Assets/Images/cc.png";
import SocialMedia from "../Components/SocialMedia";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="section1">
          <img src={Ctc} className="ctc_img" alt="contact" />
        </div>
        <div className="section2">
          <h1 className="head">How can I help you?</h1>
          <form>
            <label className="lbl" htmlFor="Name">Name</label>
            <br></br>
            <input type="text" className="input"  id="Name" placeholder="enter your name " />
            <br></br>
            <label className="lbl" htmlFor="email">email</label>
            <br></br>
            <input type="email" className="input" id="email" placeholder="enter your email" />
            <br></br>
            <label className="lbl">Message</label>
            <br></br>
            <textarea className="tarea"></textarea>
            <br />
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

          </form>
        </div>
      </div>
      <div className="cntct">
        <h1>Contact Info</h1>
        <p>himanshujoshi02001</p>
        <p>+91:8218680211</p>
        <p>Bhimtal,Nainital,Uttarakhand,India</p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
