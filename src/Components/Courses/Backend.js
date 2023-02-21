import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import mobile from "../img/BACKEND.png";

import "./courses.css";

export const Backend = () => {
  const [showForm, setShowForm] = useState(false);
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
};

  const submitForm = () => {
    setShowForm(!false);
  };

  return (
    <section className="course-header-desc">
      <header className="course-header">
        <img src={mobile} alt="" />
      </header>
      <div className="course-titles">BACKEND DEVELOPMENT</div>
      <main className="main-content">
        <section className="section-one">
          <article className="course-breakdown">
            <ul>
              <li>-Course Overview</li>
              <li>-Course Goals</li>

              <li>-Training Methodology</li>
            </ul>
          </article>
        </section>
        <section className="section-two">
          <article className="course-breakdown">
            <p>
              The main focus of this course is to understand application
              architecture, coding in different languages like python, NodeJs
              etc and also to design and build APIs.
           
              <span className="course-price">
                Course Price : <strong>#800,000</strong>{" "}
              </span>
            </p>
          
            <p>
              At the end of this course participants will know how to: Build
              websites with all the latest standards, Code with Python and
              NodeJS programming language.
            </p>
          
            <p>
              Training is delivered by learned and seasoned trainers. The
              methods employed including Lectures, Demonstrations, Practical,
              Self Practice and workshop using real life case studies. The
              training is at least 90% practical.
            </p>
          
            <p>
              <h4 className="course-outline">Course Outline</h4>
              <ul>
                <li> Introduction to Python </li>
                <li>Variables</li>
                <li>String Operations and Concatenation</li>
                <li>Boolean and Conditionals</li>
                <li>Logical Operators</li>
                <li>Conditionals</li>
                <li>Loops</li>
                <li>Python Lists, Dictionary, Tuple and set</li>
                <li>List Methods</li>
                <li>Python Scripts and Modules</li>
                <li>Introduction to Node </li>
                <li>Advantages of Node JS </li>
                <li>Node.js Process Model </li>
                <li>Module.Exports </li>
                <li>Node Package Mananger </li>
                <li>Installing Packages Locally </li>
                <li>Installing packages globally </li>
                <li>Creating Web server </li>
                <li>Handling http requests </li>
                {/* </ul>
            <p>
              <h4 className="course-outline">Course Outline For Advance</h4>
              <ul> */}
                <li>Functional Programming</li>
                <li>Systems Programming</li>
                <li>Classes and Objects</li>
                <li>Persistence and Databases</li>
                <li>Project</li>
                <li>
                  File System in Node, Writing a file and other IO Operations
                </li>
                <li>Debugging Node JS Application</li>
                <li>Express.JS and Serving Static Resources</li>
              </ul>

              <button className="course-btn" onClick={submitForm}>
                Register Now
              </button>

              {showForm && <Form />}
            </p>
          </article>
        </section>
      </main>

      <section>
        <div className="more">
          {" "}
          <p>Check Out More Courses...</p>
        </div>
        <div className="others">
          <Link to="/course" className="courses-btn">
            Mobile Development
          </Link>
          <Link to="/frontend" className="courses-btn">
            Web (Front-End) Development
          </Link>
          <Link onClick={()=>{
            ScrollToTop()
          }} to="/backend" className="courses-btn">
            Backend Development
          </Link>
        </div>
      </section>
      <Button />

      <Footer />
    </section>
  );
};

export default Backend;
