import React, { useState } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import emailjs from "emailjs-com";

import {
  OutlinedInput,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import "./styles/Contact.css";
import { useForm } from "../../hooks/useForm";
import { ReactComponent as MineSvgThumb } from "../../assets/mineGeeThumb.svg";
// import { ReactComponent as Separator } from "../assets/separator.svg";

export const Contact = () => {
  const userId = process.env.REACT_APP_USER_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;

  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const [myServices, setMyServices] = useState({
    css: false,
    html: false,
    vue: false,
    react: false,
    ux: false,
    ui: false,
  });

  const { css, html, vue, react, ux, ui } = myServices;

  const allServices = [
    { name: "css", checked: css, label: "CSS" },
    { name: "html", checked: html, label: "HTML" },
    { name: "vue", checked: vue, label: "Vue js" },
    { name: "react", checked: react, label: "React Js" },
    { name: "ux", checked: ux, label: "UX" },
    { name: "ui", checked: ui, label: "UI" },
  ];
  const handleServices = (e) => {
    e.preventDefault();
    const type = e.target.name;
    setMyServices({ ...myServices, [type]: e.target.checked });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const servicesChecked = allServices
      .filter((service) => service.checked)
      .map((serv) => serv.label);

    const data = {
      name: values.name,
      email: values.email,
      message: values.message,
      services: servicesChecked.join(", "),
    };

    try {
      const result = await emailjs.send(serviceId, templateId, data, userId);
      console.log(result.text);
      setMyServices({
        css: false,
        html: false,
        vue: false,
        react: false,
        ux: false,
        ui: false,
      });
      reset();
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <div className="contactContainer">
      <h3>Contact</h3>
      <div className="allContentContact">
        <form className="formContainer" onSubmit={submitForm}>
          <OutlinedInput
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="inputBorder marginTop"
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            }
          />

          <OutlinedInput
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className="inputBorder marginTop"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            }
          />
          <div>
            <h3>Select the services you want (optional)</h3>
            {allServices.map((serv, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={serv.name}
                    checked={serv.checked}
                    onChange={handleServices}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite className="checkBoxActive" />}
                  />
                }
                label={serv.label}
              />
            ))}
          </div>
          <OutlinedInput
            name="message"
            value={values.message}
            onChange={handleInputChange}
            className="inputBorder marginTop"
            placeholder="Message"
            id="input-with-icon-adornment"
            maxRows={6}
            minRows={4}
            multiline
          />
          <div className="buttonContainer marginTop">
            <Button
              className="sendButton"
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
      <div className="mineGeeContainer">
        <MineSvgThumb className="animate__animated animate__backInRight" />
      </div>
    </div>
  );
};
