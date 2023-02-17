import React from "react";
import Form from "../Form/Form";
import "./register.css";

function Register() {
  return (
    <>
      <section className="registration">
        <article className="contact">
          <div>
            <h3>Register Now</h3>
            <p>
              To get started please fill the registration form and you will be
              contacted shortly.
            </p>
            <h5>Contact us via email</h5>

            <span>
              academy@tm30.net
            </span>

         <div className="divider"></div>
            <h5>
              or call <strong> Funke</strong>
            </h5>

            <span>
              <h5>08062470985</h5>
            </span>
          </div>
        </article>
        <article className="registration-form">
          <Form />  
        </article>
        </section>
    </>
  );
}

export default Register;
