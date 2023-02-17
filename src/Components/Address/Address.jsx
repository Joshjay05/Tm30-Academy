import React from "react";
import "./address.css";

const Address = () => {
  return (
    <div className="ad">
      <section className="adress-container">
        <article className="address-description">
          <div className="office">
            <div className="line"></div>
            <h1>OFFICE Address</h1>
          </div>
          <h4>29A Berkley Street Onikan, Lagos Nigeria.</h4>

          <a href="/Register.js" className="o-btn">
            Open Map
          </a>
        </article>
        <article>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5810490803824!2d3.4033215739012146!3d6.447798524040671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b24edbffd9b%3A0x1f80489d23ec4190!2s29%20Berkley%20St%2C%20Lagos%20Island%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1672998101271!5m2!1sen!2sng"
            width="100%"
            height="400"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </section>
    </div>
  );
};

export default Address;
