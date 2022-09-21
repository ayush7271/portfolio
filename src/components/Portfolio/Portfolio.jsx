import React, { useContext,useState,useEffect,useRef } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import rodan from "../../img/rodan.png";
import Ajio from "../../img/Ajio.jpg";
import HOC from "../../img/hoc.png";
import geekbuying from "../../img/geek.png";
import { themeContext } from "../../Context";
import SimpleImageSlider from "react-simple-image-slider";

import Project1 from "./project1";
import Project2 from "./Project2";
import Project3 from "./Project3";


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const images1 = [
    { url: "https://user-images.githubusercontent.com/56001279/155868693-32562dc5-7a38-457b-ad46-57a7ee7e99b1.png" },
    { url: "https://user-images.githubusercontent.com/56001279/155868732-939f33b0-fbae-41bc-af19-8e420b64d865.png" },
    { url: "https://user-images.githubusercontent.com/56001279/155868742-a400ee5a-9d71-4dcc-a4ea-04f76cd6fb21.png" },
    { url: "https://user-images.githubusercontent.com/56001279/155868754-4b405e49-1f02-4a7b-9e34-b729718e4e75.png" },
      {url:"https://user-images.githubusercontent.com/56001279/155868767-21c9e962-74d4-4f8c-9357-3d2f30386361.png"},
      {url:"https://user-images.githubusercontent.com/56001279/155868779-c6ae44ec-8e64-47d6-b2d3-b485c2b98e9f.png"},
      {url:"https://user-images.githubusercontent.com/56001279/155868788-4a165325-3499-4568-9cc3-4d7760234dcc.png"},
      {url:"https://user-images.githubusercontent.com/56001279/155868801-7b866ed3-f50c-49a1-b788-a2f8bfa42fa4.png"}
  ]

const image2=[
  {url:"https://user-images.githubusercontent.com/99814289/189310641-b1dbb09f-41d3-4959-8a54-5b6218042de6.png"},
  {url:"https://user-images.githubusercontent.com/99814289/189309687-905973af-e55e-4856-998c-8858fb38e880.png"},
  {url:"https://user-images.githubusercontent.com/99814289/189309777-2e27615f-fe4b-4edd-addf-3e55a43fcdf4.png"},
  {url:"https://user-images.githubusercontent.com/99814289/189309890-8f60d4d1-067b-4c45-b1ad-1dc6d1ba39aa.png"},
  {url:"https://user-images.githubusercontent.com/99814289/189310132-facceed2-4903-46ab-b9f6-96f9d0dd33c7.png"}
]

const image3=[
{url:"https://user-images.githubusercontent.com/99814289/189511137-0ef08021-aa3c-46f7-b003-eba9c8848142.png"},
{url:"https://user-images.githubusercontent.com/99814289/189511449-aa1c298d-fcfa-4251-9053-04f95b3b91ff.png"},
{url:"https://user-images.githubusercontent.com/99814289/189511164-36725055-5031-459e-9772-643f688c32e8.png"},
{url:"https://user-images.githubusercontent.com/99814289/189511177-f9f9f096-2b63-4f58-a6b9-445ebf473537.png"},
{url:"https://user-images.githubusercontent.com/99814289/189511191-b8be141a-abf7-4284-8c1a-d074e8aa45a1.png"},
{url:"https://user-images.githubusercontent.com/99814289/189511200-2cdab1e9-be2e-45a6-b1d1-2604e9b218a7.png"}



]



  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
    <div style={{textAlign:"center"}}>

      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
    </div>

      <div
       
        className="portfolio-slider"
      >
       
        <div className="project1">
        <img className="image" style={{marginRight:"20px"}} src={rodan} alt="" />
        <p style={{marginTop:"-50px",fontWeight:"bold"}} >Cloning of Rodan+Field</p>
          <p>Rodan & Fields, LLC, known as Rodan + Fields or R+F, is an American manufacturer and multi-level marketing company specializing in skincare products. Katie Rodan and Kathy A. Fields, creators of Proactiv, started the Rodan + Fields brand in 2002 and sold it a year later. They relaunched the brand in 2007 as a multi-level marketing firm.</p>
       <div className="slidediv">
         <SimpleImageSlider 
     
     width={"60%"}
     height={"50vh"}
     images={images1}
     showBullets={true}
     showNavs={true}
     
     slideDuration={0.5}
     loop={true}
     autoPlay={true}
     />
     </div> 
     <div className="sliderdiv">
      <Project1/>
     </div>
         <p >Deployment Link: <a className="dp" href="https://rodanfields.netlify.app/" target="_blank">RodanField</a></p>
     <p>GitHub Link: <a style={{textDecoration:"none",fontSize:"16px"}} href="https://github.com/JAGRATIR/Rodanandfields" target="_blank" >RODAN+FIELDS</a></p>
        </div>
        <hr />
        <div className="project2">
          <div>

          </div>
        <img className="image" style={{marginRight:"20px",width:"250px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="" />
        <p style={{marginTop:"",fontWeight:"bold"}} >Cloning of MyNetDairy</p>
        <p>MyNetDiary as simply the best calorie counter app in the world. MyNetDiary has the largest verified food database with over 1.2 million items!</p>
                <div className="slidediv">
                  <SimpleImageSlider 
              
              width={"60%"}
              height={"50vh"}
              images={image2}
              showBullets={true}
              showNavs={true}
              
              slideDuration={0.5}
              loop={true}
              autoPlay={true}
              />
              </div> 
     <div className="sliderdiv">
      <Project2/>
     </div>
         <p>Deployment Link: <a className="dp" href="https://sunny-squirrel-302446.netlify.app/" target="_blank">MyNetDairy</a></p>
     <p>GitHub Link: <a style={{textDecoration:"none",fontSize:"18px"}} href="https://github.com/ayush7271/forlorn-idea-5335/tree/main/forlorn-idea-5335" target="_blank" >MyNetDairy</a></p>
        </div>
        <hr />
        <div className="project3">
        <img className="image" style={{marginRight:"20px",width:"200px",height:"100px"}} src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
        <p style={{marginTop:"",fontWeight:"bold"}} >Cloning of Shine.com</p>
        <p>Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, 
          Shine.com connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings.</p>
                <div className="slidediv">
                  <SimpleImageSlider 
              
              width={"60%"}
              height={"50vh"}
              images={image3}
              showBullets={true}
              showNavs={true}
              
              slideDuration={0.5}
              loop={true}
              autoPlay={true}
              />
              </div> 
     <div className="sliderdiv">
      <Project3/>
     </div>
         <p>Deployment Link: <a a className="dp" href="https://jazzy-faloodeh-c0e3de.netlify.app" target="_blank">shine.com</a></p>
        <p>GitHub Link: <a style={{textDecoration:"none",fontSize:"22px"}} href="https://github.com/AshishAgnihotri96/futuristic-boundary-6014" target="_blank" >shine.com</a></p>
           </div>
      </div>
    </div>
  );
};

export default Portfolio;
