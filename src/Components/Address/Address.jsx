import React from "react";
import "./address.css";
import arrow from "../img/pointer.png";

const Address = () => {
  return (
    <div className="ad">
      <article className="address-description">
        <div className="office">
          <div className="line"></div>
          <h1>OFFICE Address</h1>
        </div>
        <h4>29A Berkley Street Onikan, Lagos Nigeria.</h4>

        <a
          href="https://www.google.com/maps/dir//29+Berkley+St+Lagos+Island+102273+Lagos/@6.4477932,3.4058965,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8b24edbffd9b:0x1f80489d23ec4190!2m2!1d3.4058965!2d6.4477932 "
          className="direction"
        >
          <h6 className="o-btn">Open Map</h6> <img src={arrow} alt="" />
        </a>
      </article>
      <article className="map">
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
    </div>
  );
};

export default Address;
