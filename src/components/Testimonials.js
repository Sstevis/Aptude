import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              repellat vero labore, ut qui ullam facere esse earum quos autem?
            </p>
            <div className="name">
              <p> Georgia Eshun</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
