import React from "react";
import constructionImg from "../../../assets/construction.png";
import './style.css'

const Construction = () => {
  return (
    <>
      <div className="constructionContainer">
        <img className="constructionImage" src={constructionImg} alt="construction" />
      </div>
    </>
  );
};

export default Construction
