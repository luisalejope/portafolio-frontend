import React from 'react'
import { Caroussel } from '../components/withContent/Caroussel';
import "./styles/MyWork.css";


export const MyWork = () => {
    return (
        <div className="myWorkContainer">
      <div className="myWorkFirst">
        <h1>
          <mark>Hello</mark>
        </h1>
        <h2>You can find a taste of my work</h2>
      </div>

      <Caroussel />
      

      
    </div>
    )
}
