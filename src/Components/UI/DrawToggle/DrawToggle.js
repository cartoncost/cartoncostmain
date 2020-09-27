import classes from "./DrawToggle.module.css";
import React from "react";

const DrawToggle = (props) => {
  return (
    <div className={classes.DrawToggle} onClick={props.clicked}>
      <div className={classes.toggler}></div>
      <div className={classes.toggler}></div>
      <div className={classes.toggler}></div>
    </div>
  );
};

export default DrawToggle;
