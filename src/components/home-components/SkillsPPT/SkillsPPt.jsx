import React from "react";
import { Skills } from "../Skills/Skills";
import "./style.css";
import  MineGeeThumb from "../../svg/MineGeeThumb";
import "animate.css";
export const SkillsPPt = () => {
  return (
    <div className="secondContainer">
      <div className="presentationContainer">
        <div className="animate__animated animate__backInLeft thought">
          <h3>
            As an adept Junior Developer, I have a well-rounded skill set in
            programming and honed talents in UX/UI updates and software testing,
            making me an ideal fit for the Junior Front End Developer position.
            Further, I am a recognized expert in teamwork and a communicative
            collaborator. My previous roles have strengthened my capabilities in
            innovation and motivation, including a keen attention to detail and
            accuracy. I am excited at the prospect of bringing my talents to
            you.
          </h3>
        </div>
        <MineGeeThumb className="mineSvgMobile animate__animated animate__backInRight" />
      </div>
      <Skills />
    </div>
  );
};
