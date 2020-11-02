import classes from "./LeftCaption.module.css";
import React from "react";
import Aux from "../../Hoc/Auxilary";
import TrialButton from "../../../Components/UI/TrialButton/TrialButton";
import { Link } from "react-router-dom";

const LeftCaption = () => {
  return (
    <Aux classes={classes.LeftCaption}>
      <p className={classes.Heading}>
        Cloud-based Quote and Pricing- Automated for carton suppliers
      </p>
      <p className={classes.text}>
        Create more quotes instantly, and get paid faster
      </p>
      <button className={classes.button}><Link to="/register" style={{color:"white"}}>Try for free</Link></button>
    </Aux>
  );
};

export default LeftCaption;
