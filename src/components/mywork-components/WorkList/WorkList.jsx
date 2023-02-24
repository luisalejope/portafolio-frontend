import React from "react";

import { Card, CircularProgress, InputPassword } from "../../global/index";

import './style.css'

const WorkList = () => {
  
  return (
    <div className="gridCards animate__animated animate__fadeIn">
        <Card title='Circular Progress Loader' description='A simple circular progress loader'>
          <CircularProgress />
        </Card>
        <Card title='Circular Progress Loader' description='A simple circular progress loader'>
          <InputPassword />
        </Card>
      {/* {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })} */}
    </div>
  );
};


export default WorkList