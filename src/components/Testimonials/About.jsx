import React from "react";
import "./About.css";

import "swiper/css";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "../../img/linkedin.png";


import "swiper/css/pagination";
import ayush1 from'../../img/ayush1.jfif'


const About = () => {
 

  return (
    <div className="t-wrapper">
      <h1 className="about" style={{fontSize:"50px",color:"orange"}}>About</h1>
      <div className="mdiv">

        <div className="div1">
          <img style={{border:"4px",borderColor:"black",width:"100%"}} src={ayush1} alt="" />
        </div>
        <div className="div2">
          <p  style={{color:"grey"}}>
            <h1>Hi there! I am <span style={{fontWeight:"bold"}}>Ayush Kumar</span></h1>
            Frontend Developer with hands on experience in web designing and development With Technical Skill React Js, Redux, Node.JS, HTML5, JavaScript and Keen to learn more and more.
            Looking forward to work in challenging environment where I can push my limit to a greater extend.
          </p>

        <div className="contact">
          <p>Contact me: </p>
        <a href="https://github.com/ayush7271">
            <Gitub size={"3rem"} />
            </a>
            <a style={{marginTop:"-15px"}} href="https://www.linkedin.com/in/ayush-kumar-12129613a/">
            <img style={{width:"50px"}} src={LinkedIn} alt="" />
            </a>
        </div>
        </div>
      </div>

        </div>
  );
};

export default About;
