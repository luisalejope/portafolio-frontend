import React from "react";
import "./styles/Skills.css";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
export const Skills = () => {
  return (
    <>
    <div className="skillsContainer">
      <div className="skill">
        <DesignServicesOutlinedIcon
          style={{ fontSize: 60 }}
          className="iconColor"
        />
        <h2>UX/UI</h2>
        <h3>
          I prioritize user pain points to improve their experience through
          clean design patterns or innovative ideas.
        </h3>
        <div className="dataContainer">
          <h4>Things I like to design</h4>
          <h3>Web, Mobile, Apps, UX, Prototypes</h3>
        </div>
        <div className="dataContainer">
          <h4>Tools</h4>
          <h3>Marvel App</h3>
          <h3>Figma</h3>
          <h3>FlowMapp</h3>
        </div>
        <div className="dataContainer">
          <h4>What I do</h4>
          <h3>1. Investigtion</h3>
          <h3>2. Ideation</h3>
          <h3>3. Prototyping / Design</h3>
        </div>
      </div>
      <div className="skill separator">
        <CodeOutlinedIcon style={{ fontSize: 60 }} className="iconColor" />
        <h2>Front-end developer</h2>
        <h3>
          Interest in code from scratch innovative products and services that
          makes an easier life for users
        </h3>
        <div className="dataContainer">
          <h4>Languages</h4>
          <h3>Javascript, Html, Sass and CSS</h3>
        </div>
        <div className="dataContainer">
          <h4>Libraries</h4>
          <h3>Vuejs, Reactjs, Bootstrap, Vuetify, Material-ui </h3>
        </div>
        <div className="dataContainer">
          <h4>Frameworks</h4>
          <h3>Nuxt and Next</h3>
        </div>
        <div className="dataContainer">
          <h4>Dev Tools</h4>
          <h3>Visual studio code, Codepen,Github, GitlabTerminal</h3>
        </div>
      </div>
    </div>

    
    
    </>
  );
};
