import React from "react";
import classes from "./TrialButton.module.css";

const TrialButton = (props) => {
  return <button className={classes.Button}>{props.children}</button>;
};

export default TrialButton;
