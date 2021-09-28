import React from "react";
import "./styles/Home.css";
import profileImg from "../assets/hotdog.jpg";
import "animate.css";
import { ReactComponent as MineSvg } from "../assets/mineGee.svg";
import { Skills } from "../components/Skills";

export const Home = () => {
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
        <img className="profilePhoto" src={profileImg} alt="profilePhoto" />
      </div>

      <div className="secondContainer">
        <div className="presentationContainer">
          <div className="animate__animated animate__backInLeft thought">
            <h3>
              As an adept Junior Developer, I have a well-rounded skill set in
              programming and honed talents in UX/UI updates and software
              testing, making me an ideal fit for the Junior Front End Developer
              position. Further, I am a recognized expert in teamwork and a
              communicative collaborator. My previous roles have strengthened my
              capabilities in innovation and motivation, including a keen
              attention to detail and accuracy. I am excited at the prospect of
              bringing my talents to you.
            </h3>
          </div>
          <MineSvg className="animate__animated animate__backInRight" />
        </div>
        <Skills />
      </div>

      
    </div>
  );
};
