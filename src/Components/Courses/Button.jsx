import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";
import redirect from "../img/pointer.png";

const Button = () => {
  return (
    // <div className="return">
    <Link to="/" style={{ textDecoration: "none" }}>
      <button className="return-btn">
        Back to Homepage <img src={redirect} alt="" />
      </button>
    </Link>
  );
};

export default Button;
