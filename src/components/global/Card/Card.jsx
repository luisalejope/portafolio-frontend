import React, { useState } from "react";
import "./style.css";

const Card = ({ title, description, children, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const background = {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    filter: 'blur(8px)',
    height: '100%',
  }

  return (
    <>
      <div className="flip-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-text">
                <h3>
                  {title}
                </h3>
                <p>
                  {description}
                </p>
              </div>
            <div style={background}></div>
            {/* <img
              src={img}
              className="imgCard"
              alt="image-card"
            /> */}
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
