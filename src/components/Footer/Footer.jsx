import React from "react";
import "./Footer.css";
import LinkedIn from "../../img/linkedin.png";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%",height:"300px" }} />
      <div className="f-content">
        <span>ak0735000@gmail.com
          <p>Mobile:9798529442</p>
        </span>
        <div className="f-icons">
        
          {/* <Facebook color="white" size={"3rem"} /> */}
          <a href="https://github.com/ayush7271">
            <Gitub color="white" size={"3rem"} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-kumar-12129613a/">
            <img style={{width:"50px"}} src={LinkedIn} alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
