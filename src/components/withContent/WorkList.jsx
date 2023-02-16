import React from "react";

import { Card } from "../Card";
import './styles/WorkList.css'
export const WorkList = () => {
  
  return (
    <div className="gridCards animate__animated animate__fadeIn">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      {/* {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })} */}
    </div>
  );
};
