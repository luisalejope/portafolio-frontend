import React, { useState } from "react";

import { Card, CircularProgress, InputPassword, InvalidInput, MobileMenuButton, Modal } from "../../global/index";
import { Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

import './style.css'

const WorkList = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [first, setfirst] = useState(false)
  const handleModal = (e) => {
    console.log(modalStatus)
    setModalStatus(!modalStatus);
  }

  const handleFirst = (e) => {
    console.log(modalStatus)
    setfirst(!first);
  }


  return (
    <>
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
        <Card title='Information Modal' description='A information modal activated by a button' img='https://github.com/pineapplexpres/Images/blob/main/portafolio/modal-button.jpg?raw=true'>
          <Button
            id="myBtn"
            className="sendButton"
            variant="contained"
            endIcon={<LaunchIcon />}
            onClick={handleModal}
          >
            Open Modal
          </Button>
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
      </div>
      {modalStatus && 
      
        <Modal handleModal={handleModal}>
          <>
            <h4>
              This is a modal example
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sapiente quo, architecto illo, labore deserunt nesciunt ullam placeat nisi perspiciatis expedita dolore numquam cum quam possimus rerum error. Repudiandae, laboriosam
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta distinctio inventore autem, facilis vitae culpa animi, dolore exercitationem officia iusto molestias iste mollitia eaque atque. Quas laborum quaerat placeat quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, mollitia quo. Doloremque optio, eum nobis odit cum assumenda ipsa minima qui nisi minus, odio inventore cumque! Id fugit tempora nostrum?
            </p>
          </>
        </Modal>
      }
    </>
  );
};


export default WorkList