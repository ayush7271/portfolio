import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import ayush1 from'../../img/ayush1.jpg'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <h1 style={{fontSize:"50px",color:"orange",marginTop:"-100px"}}>About</h1>
      <div className="mdiv">

        <div className="div1">
          <img style={{border:"4px",borderColor:"black",width:"275px",height:"389px",marginTop:"6px",marginLeft:"5px"}} src={ayush1} alt="" />
        </div>
        <div className="div2">
          <p  style={{color:"grey"}}>
            <h1>Hi there! I am <span style={{fontWeight:"bold"}}>Ayush Kumar</span></h1>
            Frontend Developer with hands on experience in web designing and development With Technical Skill React Js, Redux, Node.JS, HTML5, JavaScript and Keen to learn more and more.
            Looking forward to work in challanging environment where I can push my limit to a greater extend.
          </p>
        </div>
      </div>

        </div>
  );
};

export default Testimonial;
