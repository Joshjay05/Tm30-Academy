import React, { useState } from "react";
import "./Question.css";

const Questions = ({ title, body }) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="fq"
      onMouseEnter={() => {
        setShowInfo(false);
      }}
      onMouseLeave={() => {
        setShowInfo(true);
      }}
    >
      {showInfo ? (
        <div className="inactive-faq">
          <h3>{title}</h3>
        </div>
      ) : (
        <div className="faq">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default Questions;
