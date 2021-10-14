import React, { useState } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import {
  OutlinedInput,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Button
} from "@mui/material";
import "./styles/Contact.css";
import { useForm } from "../hooks/useForm";

export const Contact = () => {
  const [values, handleInputChange, reset] = useForm({
    name: "",
    mail: "",
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

  return (
    <div>
      <h1>Contact</h1>
      <form className="formContainer" action="https://formsubmit.co/luisalejandropena425@gmail.com" method="POST">
        <OutlinedInput
          placeholder="Name"
          startAdornment={
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          }
        />
        <OutlinedInput
          placeholder="Email"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          }
        />
        <div>
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
          placeholder="Message"
          id="input-with-icon-adornment"
          maxRows={6}
          minRows={4}
          multiline
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
};
