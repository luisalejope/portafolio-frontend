import React from "react";
import constructionImg from "../assets/construction.png";
import './styles/Construction.css'
export const Construction = () => {
  return (
    <>
      <div className="constructionContainer">
        <img src={constructionImg} alt="construction" />
      </div>
    </>
  );
};
