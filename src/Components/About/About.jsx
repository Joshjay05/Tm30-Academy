import React from "react";
import aboutimage from "../img/R16.png";
import "./about.css";
import { Link } from "react-router-dom";
import halfcircle from "../img/half-circle.png";

const About = () => {
  return (
    <section className="about">
      <article className="about-desc">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          About TM30 Academy
        </h1>

        <p data-aos="fade-up" data-aos-duration="2000">
          TM ACADEMY is a provider of innovative, cutting-edge technological
          training for Nigerians who are passionate about building a career in
          Software Development. we make building a career in IT affordable.We
          offer results-oriented and project based IT courses for personal
          growth and corporate training in Nigeria.
        </p>

        <Link to="/about-us" className="about-btn">
          <button>Read More</button>
        </Link>
      </article>
      <article className="about-image">
        <img src={aboutimage} alt="" className="student" />
        <img src={halfcircle} className="half-circle" alt="" />
      </article>
    </section>
  );
};

export default About;
