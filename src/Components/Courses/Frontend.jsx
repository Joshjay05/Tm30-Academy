import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import mobile from "../img/Frontend.jpeg";
import "./courses.css";
import Form from "../Form/Form";
import Button from "./Button";

export const Frontend = () => {
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
      <div className="course-titles">WEB DEVELOPMENT (FRONT-END) </div>
      <main className="main-content">
        <section className="section-one">
          <article className="course-breakdown">
            <ul>
              <li>-Course Overview</li>
              <li>-Course Goals</li>

              <li>-Training Methodology</li>
              {/* <li>-Beginner Course Content</li>
              <li>-Advance Course Content</li> */}
            </ul>
          </article>
        </section>
        <section className="section-two">
          <article className="course-breakdown">
            <p>
              The Scope of the Front End Web Developer course is to equip
              learners with the unique skills they need to build and develop a
              variety of websites and applications using best practices to
              structure HTML, CSS and Javascript code, Using frameworks such as
              React to build powerful and modular applications, Using tests to
              monitor their applications and ensure the highest quality service,
              Providing technical and functional documentation of the site.
              {/* <br></br><br></br> */}
              <span className="course-price">
                Course Price : <strong>#800,000</strong>{" "}
              </span>
            </p>
            <p>
              At the end of this course participants will have mastered the
              fundamentals of front-end website development using REACT
              framework. A certificate of completion will be issued to
              candidates.
            </p>
            <p>
              Training is delivered by learned and seasoned trainers. The
              methods employed including Lectures, Demonstrations, Practical,
              Self Practice and workshop using real life case studies. The
              training is at least 90% practical.
            </p>

            {/* <br></br> */}
            <p>
              <h4 className="course-outline">Course Outline </h4>
              <ul>
                <li>Introduction to Web development</li>
                <li>Introduction to HTML</li>
                <li>Introduction to CSS and Javascript</li>
                <li>Introduction to React</li>
                <li>React Router and Single Page Applications</li>
            
                <li> Single page web application development (HTML5 | CSS3)</li>
                <li>Front-end Frameworks (React JS )</li>
                <li>Introduction to React</li>
                <li>React Router and Single Page Applications</li>
             
                <li>Back-end integration</li>
                <li>Complete ReactJS</li>
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
          <Link  onClick={()=>{
            ScrollToTop()
          }}  to="/frontend" className="courses-btn">
             Web (Front-End) Development
          </Link>
          <Link to="/backend" className="courses-btn">
            Backend Development
          </Link>
        </div>
      </section>
      <Button />
      <Footer />
    </section>
  );
};

export default Frontend;
