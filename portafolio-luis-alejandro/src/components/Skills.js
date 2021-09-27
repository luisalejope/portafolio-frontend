import React from "react";
import "./styles/Skills.css";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
export const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skill">

        <DesignServicesOutlinedIcon style={{ fontSize: 60 }} className="iconColor"/>
        <h2>UX/UI</h2>
        <h3>I prioritize user pain points to improve their experience clean design patterns.</h3>
      </div>
      <div className="skill separator">
          <CodeOutlinedIcon style={{ fontSize: 60 }} className="iconColor"/>
          <h2>Front-end developer</h2>
          <h3>Interest in code from scratch innovative products and services that makes an easier life for users</h3>
      </div>
    </div>
  );
};
