import React from "react";
import "./price.css";
import pointer from "../img/Vector.png";
import line from "../img/line.png";

const Pricing = () => {
  return (
    <div className="price-container">
      <div className="price-desc">
        <h4>Tuition and payment options</h4>
        <p>
          Flexible and considerate tutions and payment options towards aching
          your dream skill and honing them.
        </p>
      </div>

<div className="rowall">
      <div className="row">
        <div className="mycards">
          <h1>ZERO-COST <br></br>  UP-FRONT.</h1>
          <h4>#0.00</h4>
         
          <s style={{color: "black", fontSize: "1.6rem", }}>#800k</s>
          <div className="lineimgae">
            {" "}
            <img src={line} alt="" />{" "}
          </div>
         
          <p>
            Learn at Zero Cost. Pass and Qualify to be employed by TM30 and work
            with us on a full Salary for at least 15 Months.
          </p>

          <a href="#register" className="price-btn">
            Enroll now
            <img src={pointer} alt="" />
          </a>
        </div>

        <div className="mycards">
          <h1>ONE OFF PAYMENT WITH DISCOUNT.</h1>
          <h4>#720K</h4>
         
          <s style={{fontSize: "1.6rem", color: "rgba(255, 255,255, 0.3)"}}>#800k</s>
          <div  className="lineimgae">
            {" "}
            <img  src={line} alt="" />{" "}
          </div>
     
          <p>
            Get your course payments out of the way at once with our one-off
            payment option and get up to 10%. No fuss, no hassle
          </p>
          <a href="#register" className="price-btn">
            Enroll now
            <img src={pointer} alt="" />
          </a>
        </div>

        <div className="mycards">
          <h1>INSTALLMENT PAYMENT.</h1>
          <h4>#800K</h4>
          <div style={{fontSize: "1rem", padding: ".3rem 0", color: "rgba(255, 255,255, 0.3)"}}>Over a period of 3months</div>
          <div  className="lineimgae">
            {" "}
            <img src={line} alt="" />{" "}
          </div>
      
          <p>
            Complete your payment within the months of the program by paying the
            sum of #270k upfront, and 265k respectively over a period of 3
            months
          </p>

          <a href="#register" className="price-btn">
            Enroll now
            <img src={pointer} alt="" />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Pricing;
