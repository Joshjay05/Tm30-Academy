import React from "react";
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
      </div>
      <div className="middle">
        {" "}
        <li>Support</li>
        <li> Terms & Conditions</li>
      </div>
      <div className="right">
        <a href="/">
          <a
            href="https://www.instagram.com/tmacademyng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />{" "}
          </a>
          <a
            href="https://www.facebook.com/tmacademyng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebook} alt="" />
          </a>
          <a
            href="https://www.twitter.com/TMAcademyng"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={twitter} alt="" />
          </a>
        </a>
        <li className="at">@{date} tm30,net</li>
      </div>
    </div>
  );
};

export default Footer;
