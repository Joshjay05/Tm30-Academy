import React from 'react'
import logo from "../img/courses/logo.png";
import instagram from "../img/ig.png";
import facebook from "../img/fb.png";
import twitter from "../img/tt.png";
import "./footer.css";

const Footer = () => {

    const date = new Date().getFullYear();
    console.log(date);
    return (
      <div className="footer">
        <div className="left">
          <div>
            {" "}
            <img src={logo} className="logos" alt="" />
          </div>
  
          <li className="at">@{date} tm30,net</li>
        </div>
        <div className="middle">
          {" "}
          <li>Support</li>
          <li> Terms & Conditions</li>
        </div>
        <div className="right">
          <a href="/">
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </a>
          
        </div>
      </div>
    );
}

export default Footer
