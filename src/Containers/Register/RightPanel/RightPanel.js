import React from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import classes from "./RightPanel.module.css";
import {
  makeStyles,
  Checkbox,
  FormControlLabel,
  Avatar,
} from "@material-ui/core";
import Aux from "../../Hoc/Auxilary";

const RightPanel = () => {
  return (
    <Aux classes={classes.RightPanel}>
      <h3>Register a free single-user account</h3>
      <p>Account limited to one system, 30-day free trial</p>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        style={{ height: "5.69444444444vw", width: "5.69444444444vw" }}
      />
      <RegistrationForm />
    </Aux>
  );
};

export default RightPanel;
