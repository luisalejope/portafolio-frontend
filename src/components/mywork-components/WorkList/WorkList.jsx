import React from "react";

import { Card, CircularProgress, InputPassword, InvalidInput, MobileMenuButton } from "../../global/index";

import './style.css'

const WorkList = () => {
  
  return (
    <div className="gridCards animate__animated animate__fadeIn">
        <Card title='Circular Progress Loader Component' description='A simple circular progress loader' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/Progress-loader-img.PNG?raw=true'>
          <CircularProgress />
        </Card>
        <Card title='Input Password Component' description='A simple password input with hide and show, you can use it on your login or registration forms' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/password-input-img.PNG?raw=true'>
          <InputPassword />
        </Card>
        <Card title='Invalid Input Component' description='A invalid input behavior when you type numbers, capital letters and symbols' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/Invalid-input-img.PNG?raw=true'>
          <InvalidInput />
        </Card>
        <Card title='Hamburger Menu' description='A simple Hamburger menu behavior' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/hamburger-menu-img.PNG?raw=true'>
          <MobileMenuButton />
        </Card>

        <Card title='Information Modal' description='A information modal activated by a button' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true'>
          <div>
            <h3>
              Not ready / In progress...
            </h3>
          </div>
        </Card>
        <Card title='Simple button with animation' description='A button with animation when to call atention' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true'>
          <div>
            <h3>
              Not ready / In progress...
            </h3>
          </div>
        </Card>
        <Card title='Light / Dark Mode toggle' description='A Light / Dark Mode toggle that changes the aspect of a site' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true'>
          <div>
            <h3>
              Not ready / In progress...
            </h3>
          </div>
        </Card>
        <Card title='I dont know' description='' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/logoSimpleSinFondo.png?raw=true'>
          <div>
            <h3>
              Not ready / In progress...
            </h3>
          </div>
        </Card>

        
      {/* {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })} */}
    </div>
  );
};


export default WorkList