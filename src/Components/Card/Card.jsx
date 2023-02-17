import React, { useState } from "react";
import "./card.css"

const Card = ({ cardData }) => {
  const [cardFlip, setCardFlip] = useState(false);

  const flipCard = () => {
    setCardFlip(!cardFlip);
  };
  return (
    <section>
      <article>
        {" "}
        <h4>Available Courses</h4>
        <p>
          All courses are formulated for both basic and advanced levels and each
          will be completed independently by the students
        </p>
      </article>

      <div className="container">
        <section>
          <article
            className={cardFlip ? "card clicked" : "card"}
            onClick={flipCard}
          >
            <div
              className="front-card"
              style={{ background: `  url(${cardData.background})` }}
            >
              <div className="front-text">
                <span className="span1">{cardData.Fh1} </span>
                <span className="span2"> {cardData.fspan}</span>
              </div>
            </div>
            <div className="back-card">
              <article className="course-overview">
                <h4>{cardData.Bh4}</h4>
                <strong> {cardData.overview} </strong>
                <p className="course-title"> {cardData.courseDetails} </p>
                <h5>{cardData.h5}</h5>
                <div className="tool">
                  {cardData.img1 && <img src={cardData.img1} alt="" />}
                  <div>
                    {cardData.img2 && <img src={cardData.img2} alt="" />}
                  </div>
                  <div>
                    {" "}
                    {cardData.img3 && <img src={cardData.img3} alt="" />}
                  </div>{" "}
                  <div>
                    {" "}
                    {cardData.img4 && <img src={cardData.img4} alt="" />}
                  </div>
                </div>
                <p>Durations</p>
                <li>Beginner ourse: 40HRS Over 8weeks</li>
                <li>Advance course: 20HRS over 4weeks</li>

                <a href="../Pricing.js" className="learn">
                  {cardData.spanB}
                </a>
              </article>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Card;
