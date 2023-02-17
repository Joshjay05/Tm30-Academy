import React from "react";
import "./header.css";
import logo from "../img/courses/logo.png";
import dotted from "../img/doted2.png";
import circle from "../img/half-circle.png";

const Header = () => {
  return (
    <section className="header">
      <div className="header-top">
        <img src={logo} alt="" />

        <a className="btn" href="./#">
          Register Now
        </a>
      </div>
      <h4>
        JOIN OUR COMMUNITY OF TECHIES AND LEARN, EMPLOYMENT OPPORTUNITY DRIVEN,
        PROJECT BASED AND AFFORDABLE TECH SKILLS.
      </h4>
      <div className="space"></div>
      <p>
        Your career is defined by what you know and how well you know it. Take
        your Tech skills to the next level. Learn the latest in technology stack
        from experts with real-world exercises & projects on all courses. Learn
        through applicative real-life projects developed by industry experts
      </p>

      <article>
        <div className="image">
          <img src={circle} className="circle" alt="" />
        </div>
        <div>
          <img src={dotted} className="dotted" alt="" />
        </div>
      </article>
    </section>
  );
};

export default Header;
