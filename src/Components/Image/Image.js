import React from "react";
// import image from "../img/Group 5.svg";
import image1 from "../img/R17.png";
import image2 from "../img/R18.png";
import image3 from "../img/R19.png";
import image4 from "../img/R24.png";
import image5 from "../img/R25.png";
import "./image.css";

function Image() {
  return (
    <section className="image-pic">
      <article className="courses">
        <div className="course-description">
          <h1>A Collection of our Students in Class</h1>
          <p>
          Conducive environment 
With us, you learn with comfort. You learn in a conducive environment with all basic amenities at your disposal.
          </p>
        </div>

        <section id="content">
          <div class="one" data-aos="zoom-in" data-aos-duration="2000">
            {" "}
            <img src={image1} alt="" />{" "}
          </div>
          <div class="two" data-aos="zoom-in" data-aos-duration="2000">
            {" "}
            <img src={image3} alt="" />
          </div>
          <div class="three" data-aos="zoom-in" data-aos-duration="2000">
            {" "}
            <img src={image5} classname="three" alt="" />
          </div>
          <div class="four" data-aos="zoom-in" data-aos-duration="2000">
            {" "}
            <img src={image2} alt="" />
          </div>
          <div class="five" data-aos="zoom-in" data-aos-duration="2000">
            {" "}
            <img src={image4} alt="" />
          </div>
        </section>

        {/* <div>
          <img src={image} className="student-image" alt="" />
        </div> */}
      </article>
    </section>
  );
}

export default Image;
