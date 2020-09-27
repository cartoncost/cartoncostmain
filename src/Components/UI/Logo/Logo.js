import React from "react";
import classes from "./Logo.module.css";
import NavLogo from "../../../Assets/Images/logo.png";
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={NavLogo} alt="Cartoon Cost" />
    </div>
  );
};

export default Logo;
