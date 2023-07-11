import React, { useContext } from "react";
import "./Works.css";

import { themeContext } from "../../Context";


import html from "../../img/html.png";
import CSS from "../../img/CSS.png";
import redux from "../../img/REDUX.png";
import boot from "../../img/boot.png";
import javascript from "../../img/javascript.png";
import node from "../../img/node.png";
import react from "../../img/react.png";  
import cplus from "../../img/cplus.png";  

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
    <div className='container'>
      <p className='container1'>Tech Stack</p>

    <div className='Techstack'>
   
      <div className='html'>
        <img src={html} alt="" />
        <p>HTML5</p>
        </div>
      <div className='github'>
        <img src={CSS} alt="" />
        <p>CSS</p>
       </div>
      <div className='boot'>
        <img src={boot} alt="" />
        <p>Bootstrap</p></div>
      <div className='javascript'>
        <img src={javascript} alt="" />
<p>javascript</p>
        </div>
      <div className='nodejs'>
        <img src={node} alt="" />
        <p>NodeJS</p>
        </div>
      <div className='react'>
        <img src={react} alt="" />
        <p>React</p>
        </div>
        <div className='react'>
        <img src={redux} alt="" />
        <p>Redux</p>
        </div>
      <div className='cplus'>
        <img src={cplus} alt="" />
        <p>c++</p>
        </div>
    </div>  
    </div>
    </div>
  );
};

export default Works;
