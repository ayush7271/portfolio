import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import rodan from "../../img/rodan.png";
import Ajio from "../../img/Ajio.jpg";
import HOC from "../../img/hoc.png";
import geekbuying from "../../img/geek.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': '', marginTop:"-80px",marginRight:"20px",marginLeft:"480px"}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <div
       
        className="portfolio-slider"
      >
        <div>
          <img className="image" style={{marginRight:"20px"}} src={rodan} alt="" />
          <p>Cloning of Rodan+Field</p>
          <p>Rodan & Fields is an American manufacturer and multi-level marketing company specializing in skincare products</p>
          <p>Deployment Link: <a href="https://rodanfields.netlify.app/" target="_blank">RodanField</a></p>
          <p>GitHub Link: <a style={{textDecoration:"none"}} href="https://github.com/JAGRATIR/Rodanandfields" target="_blank" >click me</a></p>
        </div>
        <div>
          <img className="image"  style={{height:"200px"}} src={Ajio} alt="" />
          <p>Cloning of Ajio</p>
          <p>AJIO, a fashion and lifestyle brand, is Reliance Retail's digital commerce initiative and is the ultimate fashion destination for styles that are handpicked, on trend and at prices that are the best you'll find anywhere.</p>
          <p>Deployment Link: <a href="https://rad-wisp-02436f.netlify.app/" target="_blank">Ajio</a></p>
         <p>GitHub Link: <a style={{textDecoration:"none"}}  href="https://github.com/Shreyansh12Gupta/AJIO_CLONE" target="_blank" >click me</a>
           </p> 
        
        </div>
        <div>
          <img className="image"  src={geekbuying} alt="" />
          <p>Cloning of Geekbuying</p>
          <p>GeekBuying was built to offer the coolest gadgets to the whole world at incredible low prices. And we have realized that online shopping has been very popular world widely but all the same story, sometimes kind of bored, lots of funs in real shopping are missin</p>
          <p>Deployment Link: <a href="https://geekbuying-clone.netlify.app" target="_blank">geekbuying</a></p>
         <p>GitHub Link: <a style={{textDecoration:"none"}}  href="https://github.com/abhinavBisht94/geekbuying-clone/tree/main/geekbuying"target="_blank" >click me</a></p>  
        </div>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </div>
    </div>
  );
};

export default Portfolio;
