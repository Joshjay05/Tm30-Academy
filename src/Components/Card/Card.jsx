import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";
// import Arrow from "../img/pointer.png";
import cancel from "../img/Cancel.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { BiRightArrowCircle } from "react-icons/bi";

const Card = ({ cardData }) => {
  AOS.init();
  const [cardFlip, setCardFlip] = useState(false);

  const flipCard = () => {
    setCardFlip(!cardFlip);
  };
  return (
    <section
      data-aos="flip-left"
      data-aos-duration="2000"
      data-aos-easing="ease-out-cubic"
      className="flippable-card-container"
    >
      <article
        className={cardFlip ? "card clicked" : "card"}
        onClick={flipCard}
      >
        <div
          className="front-card"
          style={{
            backgroundImage: `  url(${cardData.background})`,
            backgroundColor: "blue",
          }}
        >
          <div className="card-overlay"></div>
          <div className="front-text">
            <h6 className="span1">{cardData.Fh1} </h6>
            <span className="arrowIco">
              <BiRightArrowCircle size={35} style={{ color: "#61d0ff" }} />
            </span>
            {/* <i class="far fa-arrow-alt-circle-right"></i> */}
            {/* <img src={Arrow} className="Arrow" alt="" /> */}
            {/* <span className="span2"> {cardData.fspan}</span> */}
          </div>
        </div>
        <div className="back-card">
          <article className="course-overview">
            <div className="card-header">
              {" "}
              <h4>{cardData.Bh4} </h4>{" "}
              <img src={cancel} className="cancel" alt="" />
            </div>

            <strong> {cardData.overview} </strong>
            <p className="course-title"> {cardData.courseDetails} </p>
            <h5>{cardData.h5}</h5>
            <div className="tool">
              {cardData.img1 && <img src={cardData.img1} alt="" />}
              <div>{cardData.img2 && <img src={cardData.img2} alt="" />}</div>
              <div>{cardData.img3 && <img src={cardData.img3} alt="" />}</div>
              <div>{cardData.img4 && <img src={cardData.img4} alt="" />}</div>
            </div>
            {/* <p>Durations</p> */}
            {/* <li>Beginner ourse: 40HRS Over 8weeks</li>
            <li>Advance course: 20HRS over 4weeks</li> */}
            <br></br>
            <Link to={cardData.Link} className="learn">
              {cardData.spanB}
            </Link>
          </article>
        </div>
      </article>
    </section>
  );
};

export default Card;
