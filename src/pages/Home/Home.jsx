import React from "react";
import "./style.css";
import "animate.css";
import { Contact, SkillsPPt } from "../../components/home-components/index";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="firstContainer">
        <h1>
          <mark>Hello</mark>
          <mark>,</mark> <mark>I</mark> <mark>{"am "}</mark>
          <mark>Luis</mark>
          <mark>,</mark>
        </h1>
        <h2>Computer Science Engineer and Minor in Basic Psychology</h2>
        <h2>Front-end developer</h2>
        <img className="profilePhoto" src='https://github.com/pineapplexpres/Images/blob/main/portafolio/hotdog.jpg?raw=true' alt="profilePhoto" />
      </div>
      <SkillsPPt />
      <Contact />
    </div>
  );
};

export default Home
