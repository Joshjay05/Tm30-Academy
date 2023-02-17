import React from "react";
import fq from "./img/faq.png";
import Questions from "../Components/Questions/Questions";
import FAQS from "../Components/FaqData";

function Faq() {


  return (
    <section className="f-que">
      <article className="faqs">
        <h1 className="faq-heading"> Frequently Asked Queries</h1>
        {FAQS.map((faq, index) => {
          return <Questions key={faq.id} {...faq} />;
        })}
      </article>
      <article className="image-div">
        <div >
        <img  data-aos="zoom-in-up" data-aos-duration="2000" src={fq} className="fq-image" alt="" />
      </div></article>
      
    </section>
  );
}

export default Faq;
