import React from "react";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Everything you need for <span>Ghc 500 a month.</span>
            </h2>
            <p>
              Includes every feature we offer plus unlimited projects and
              unlimited users.
            </p>
          </div>

          <div className="btn-price">
            <button>Get Started Today</button>
          </div>
        </div>

        <div className="bottom-content">
          <div className="card left-side">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one-platform</h3>
            <p className="all-in-one">
              Lorem ipsum dolor, sit amet consectetur adipisicing. Perferendis
              alias voluptate distinctio reprehenderit aperiam est, iure velit
              natus praesentium quidem?
            </p>
          </div>

          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
