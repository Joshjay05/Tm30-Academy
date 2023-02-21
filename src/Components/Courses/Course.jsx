import { useState } from "react";
import Footer from "../Footer/Footer";
import mobile from "../img/mobile.jpg";
import { Link } from "react-router-dom";
import "./courses.css";
import Form from "../Form/Form";
import Button from "./Button";

export const Course = () => {
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
      <div className="course-titles">MOBILE APP DEVELOPMENT</div>
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
              Mobile development refers to creating applications and any other
              kind of software development specific to mobile devices, including
              tablets and smart watches. Mobile development seeks to optimize
              functionality and user experience on mobile devices, as there are
              important differences between mobile and desktop UX.
              <span className="course-price">
                Course Price : <strong>#800,000</strong>{" "}
              </span>
            </p>

            <p>
              At the end of this course participants will learn the process of
              mobile app creation, from beginning to end. In this course, you
              will also learn all the steps that are necessary to go from the
              “big idea” to app store success. You will discover exactly what a
              viable app idea entails and how to get started on developing your
              own app. A training certificate of accomplishment will also be
              issued.
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
                <li>- Data Programming Language</li>
                <li>- Variables</li>
                <li>- Operators</li>
                <li>- Data structures</li>
                <li>- Functions</li>
                <li>-Basic flutter widgets </li>
                <li>- State Functions</li>
                <li>- Api Calls </li>
                <li>-Database interations </li>
                <li>
                  - Flutter packages <br></br> e.t.c .......
                </li>
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
          <Link
            onClick={() => {
              ScrollToTop();
            }}
            to="/course"
            className="courses-btn"
          >
            Mobile Development
          </Link>
          <Link to="/frontend" className="courses-btn">
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
