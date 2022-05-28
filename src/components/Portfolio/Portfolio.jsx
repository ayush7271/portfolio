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
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={rodan} alt="" />
          <p>Cloning of Rodan+Field</p>
          <a style={{textDecoration:"none"}} href="https://github.com/JAGRATIR/Rodanandfields">click me</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ajio} alt="" />
          <p>Cloning of Ajio</p>
          <a style={{textDecoration:"none"}}  href="https://github.com/Shreyansh12Gupta/AJIO_CLONE">click me</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={geekbuying} alt="" />
          <p>Cloning of Geekbuying</p>
          <a style={{textDecoration:"none"}}  href="https://github.com/abhinavBisht94/geekbuying-clone/tree/main/geekbuying">click me</a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
