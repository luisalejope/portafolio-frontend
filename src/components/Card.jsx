import React from "react";
import "./styles/Card.css";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png`}
              className="imgCard"
              alt="Avatar"
            />
          </div>
          <div className="flip-card-back">
            <div className="dataContainer">
              <h5>ssdfsdsdfsd</h5>
              <p>sfdsfsdfsd</p>
              <p>
                <small>asdasaddasd</small>
              </p>
              {/* <Link to={`./hero/${id}`}>Details...</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
