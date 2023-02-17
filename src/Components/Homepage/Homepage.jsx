import React from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import mobile from "../img/R4.png";
import Frontend from "../img/R1.png";
import Backend from "../img/R5.png";
import python from "../img/courses/python.png";
import java from "../img/courses/java.png";
import php from "../img/courses/php.png";
import html from "../img/courses/html.png";
import react from "../img/courses/react.png";
import aws from "../img/courses/aws.png";
import angular from "../img/courses/angular.png";
import android from "../img/courses/android.png";
import flutter from "../img/courses/flutter.png";
import Pricing from "../Pricing/Pricing";
import Image from "../Image/Image";
import About from "../About/About";
import Faq from "../Faq";
import Register from "../Register/Register";
import Address from "../Address/Address";
import Footer from "../Footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
// import { Route, Routes } from "react-router-dom";

const Homepage = () => {
  AOS.init();
  const cardData = [
    {
      id: 1,
      Fh1: " Web Application(Frontend) Development",
      fspan: "View",
      Bh4: "Web Application Development",
      overview: "overview",
      h5: "Tools",
      courseDetails:
        "The Scope of the Front end web development course is to equip learners with the unique skills they need to build and develop a variety of websites and applications using best practices to structure HTML, CSS and Javascript and using frameworks such as React to build powerful and modular applications ",
      background: Frontend,
      img1: html,
      img2: angular,
      img3: react,
      spanB: "Learn More",
      Link: "/frontend",
    },
    {
      id: 2,
      Fh1: " Backend Development",
      fspan: "View",
      Bh4: "Backend Development",
      overview: "overview",
      h5: "Tools",
      courseDetails:
        "  The main focus of this course is to understand application architecture, coding in different languages like python,NodeJs e.t.c and also to design and build APIs ",

      background: Backend,
      img1: aws,
      img2: python,
      img3: java,
      img4: php,
      spanB: "Learn More",
      Link: "/backend",
    },
    {
      id: 3,
      Fh1: " Mobile Development",
      fspan: "View",
      Bh4: "Mobile Development",
      overview: "overview",
      h5: "Tools",
      courseDetails:
        "  Mobile Development refrs to reating applications and any other kind of software development speific to mobile devices, including tablets and smart watches. Mobile Development seeks to optimize functionality and user experience on mobile devices ",

      background: mobile,
      img1: flutter,

      img3: android,
      spanB: "Learn More",
      Link: "/course",
    },
  ];

  return (
    <div>
      <Header />
      <article className="course-section">
        <div className="course-details">
          <h4>Available Courses</h4>
          <p>
            All courses are formulated for both basic and advanced levels and
            each will be completed independently by the students
          </p>
        </div>

        <div className="course-card">
          {cardData.map((d) => {
            return <Card key={cardData.id} cardData={d} />;
          })}
        </div>
      </article>
      <Pricing />
      <About />
      <Image />
      <Faq />
      <section id="register">
        <Register />
      </section>
      <Address />
      <Footer />
    </div>
  );
};

export default Homepage;
