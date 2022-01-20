import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div className="inner">
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                modi maiores quidem minima vero alias doloremque nemo sequi
                consectetur .
              </p>
            </div>
            <div className="address">
              <p>151 Radio City</p>
              <p>Iture, Elmina</p>
            </div>
            <div className="icons">
              <FaPhone />
              <p>+233 -(0)-241300851</p>
            </div>
            <div className="icons">
              <FaEnvelope />
              <p>support@aptive.com</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers? <span>View all job openings</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />

            <textarea
              name="message"
              id=""
              cols="40"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <p>
                By checking this box, you agree to <span>Privacy Policy</span>
                and <span>Cookie Policie</span>.
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
