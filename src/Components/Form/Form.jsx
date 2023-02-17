import React, { useState } from "react";
import "./form.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Form() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setphoneNumber] = useState("");
  const [courses, setCourses] = useState("");
  const [additionalInformation, setadditionalInformation] = useState("");
  const [paymentOptions, setpaymentOptions] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const details = {
    firstName,
    lastName,
    email,
    // phoneNumber,
    courses,
    additionalInformation,
    paymentOptions,
  };

  const [value, setValue] = useState();

  const RegisterStudent = async (payload) => {
    try {
      setisLoading(true);
      const response = await fetch("http://194.32.79.199:5000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
      setisLoading(false);
    } catch (err) {
      console.log(err);
      setisLoading(false);
    }
  };

  const handler = (e) => {
    e.preventDefault();
    // alert("successful")
    console.log(details);
    RegisterStudent(details);
  };

  return (
    <form>
      <section className="forms">
        <div className="names">
          <li className="form-details">
            <label>
              FirstName <sup>*</sup>{" "}
            </label>{" "}
            <input
              required
              placeholder="John"
              type="text"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </li>

          <li className="form-details">
            <label>
              LastName<sup>*</sup>
            </label>
            <input
              required
              placeholder="Doe"
              type="text"
              onChange={(e) => setlastName(e.target.value)}
            />
          </li>
        </div>

        <div className="contact-details">
          <li className="form-details">
            <label for="email">
              Email Address<sup>*</sup>
            </label>
            <input
              required
              placeholder="johndoe@gmail.com"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="form-details">
            <label for="phone">
              Phone Number<sup>*</sup>
            </label>
            <PhoneInput
              required
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              // onChange={(e) => setphoneNumber(e.target.value)}
            />
          </li>
        </div>

        <div className="selectArea">
          <li className="form-details">
            <label>
              Courses <sup>*</sup>
            </label>{" "}
            <select
              // value={courses}
              onChange={(e) => setCourses(e.target.value)}
            >
              <option value="Backend_web_development">
                Backend Web Development
              </option>
              <option value="Mobile_development">Mobile Development</option>
              <option value="Frontend_web_development">
                Frontend Web Development
              </option>
            </select>
          </li>
          <li className="form-details">
            <label>
              Select Payment Option <sup>*</sup>
            </label>
            <select
              // value={courses}
              onChange={(e) => setpaymentOptions(e.target.value)}
            >
              <option value="Zero_cost">Zero-Cost</option>
              <option value="One_off_payment_with_discount">
                One-off Payment
              </option>
              <option value="Installment_payment"> Installment payment</option>
            </select>
          </li>
        </div>
        <div className="form-details">
          <label>Additional Information(Optional)</label>
          <textarea
            className="comment"
            value={additionalInformation}
            onChange={(e) => setadditionalInformation(e.target.value)}
          ></textarea>
        </div>
      </section>
      <button onClick={handler} className="btN" type="submit">
        {isLoading ? "processing..." : "Submit"}
      </button>
    </form>
  );
}

export default Form;
