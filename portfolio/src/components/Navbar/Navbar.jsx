import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
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
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
            <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
            <Link to="works" spy={true} smooth={true}>
                Techstack
              </Link>
            </li>
            <li>
            <Link to="portfolio" spy={true} smooth={true}>
                Project
              </Link>
            </li>
           
            <li>
              <Link  to="about" spy={true} smooth={true} >
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
