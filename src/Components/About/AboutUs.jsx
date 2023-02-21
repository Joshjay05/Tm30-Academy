import React from "react";
import "./about.css";
import Footer from "../Footer/Footer";
import Button from "../Courses/Button";

export const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="aboutUs-img"></section>
      <article className="about-text">
        <h1 className="abtpage-title">About us</h1>
        <p>
          TM ACADEMY is a provider of innovative, cutting-edge technological
          training for Nigerians who are passionate about building a career in
          Software Development. We make building a career in IT affordable. We
          offer results-oriented and project based IT courses for personal
          career growth and corporate training in Nigeria. We have excelled in
          IT Consultancy,IT Solutions Development & Services. Our Training
          Centre is located in Lagos. Our Students can be assured of 100%
          satisfaction. We offer courses with world class curriculum, state of
          the art training infrastructure, highly trained, experienced and
          certified trainers. we bring real life scenarios into our training,
          help you learn in a progressive manner and teach you problem-solving
          reasoning with design thinking. More importantly, our students will
          have the opportunity to join the community and Network of
          knowledgeable mentors that will guide their learning and focus on
          answering all technical questions, motivating and keeping them on
          track as they proceed in their journey as a software developer.
        </p>
      </article>
      <article className="abt-page">
        <h4> Our Vision </h4>
        <p>
          Our vision is to be the foremost provider of quality,
          cost-effective,project-based IT training that is designed to increase
          individual and organizational productivity and enrichment. As part of
          our curriculum, we will expose our students to real-life applications
          and projects. This will give them verifiable work experience and the
          confidence to excel in their journey of being a software developers
        </p>
      </article>
      <article className="abt-page">
        <h4> Our Mission </h4>
        <p>
          Our mission is to contribute immensely to the personal development and
          growth of individuals or corporate bodies with the rightful IT skills
          needed to boost their career opportunity. To raise top-notch software
          developers that can ply the trade with excellence anywhere in the
          world . Our students will not only learn but they will be inducted in
          to the community of knowledgeable mentors that will guide their
          learning and are focused on answering all technical questions,
          motivating and keeping them on track.
        </p>
      </article>
      <Button />
      <Footer />
    </div>
  );
};
