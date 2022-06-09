import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Mobile } from "./mobile";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
    <Mobile/>
      <div className="n-left">
        <div className="n-name">Ayush</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link  to="" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services">
                Services
              </Link>
            </li>
            <li>
              <Link to="experience" >
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="techstack" >
                TechStack
              </Link> 
            </li>
            <li>
              <Link to="about" >
                About
              </Link> 
            </li>
          </ul>
        </div>






        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>





  );
};

export default Navbar;
