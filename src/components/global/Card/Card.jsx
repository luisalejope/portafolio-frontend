import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({ title, description, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="flip-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>
              {title}
            </h3>
            <p>
              {description}
            </p>
          </div>
          <div className="flip-card-back">
            <div className="card-container">
              {/* {children} */}
              {isHovered && children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card
