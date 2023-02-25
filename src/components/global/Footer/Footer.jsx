import React from "react";
import "./style.css";
import  LogoWhite from "../../svg/LogoWhite";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <LogoWhite />
        <div className="socialContainer">
          <InstagramIcon className="logos" />
          <LinkedInIcon className="logos" />
          <MailOutlineIcon className="logos" />
          <GitHubIcon className="logos" />
        </div>
        <p>Handcrafted by me © Luis Alejandro Peña</p>
        <p>
          Toons taken from{" "}
          <span>
            {" "}
            <button className="linkWindow" onClick={()=>window.open("https://www.figma.com/community/file/874561187582459048/GEE!-ME-100-Characters-Pack")}>
              GEE! ME 100 Characters Pack
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer
