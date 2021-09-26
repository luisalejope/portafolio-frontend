import React from "react";
import "./styles/Home.css";
import profileImg from '../assets/elVino.jpg'
export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="firstContainer">
        <h1>Computer Science Engineer and Minor in Basic Psychology</h1>
        <h2>Front-end developer</h2>
        <img className="profilePhoto" src={profileImg} alt="profilePhoto"/>
      </div>
    </div>
  );
};
