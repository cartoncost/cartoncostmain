import classes from "./LeftPanel.module.css";
import React from "react";
import Aux from "../../Hoc/Auxilary";
import Plan from "./Plan/Plan";
import { Link } from "react-router-dom";

const LeftPanel = () => {
  return (
    <Aux classes={classes.LeftPanel}>
      <p className={classes.desktopView}>
        Pick a plan that suits you
      </p>
      <Aux classes={classes.Mobile}>
      <p >
        See Pricing
      </p>
        <button><Link to="/pricing" className={classes.link}>Check Pricing</Link></button>
      </Aux>
      <Aux classes={classes.desktopView}>
      <Plan />
      <Plan />
      <Plan />
      <Plan />
      </Aux>
    </Aux>
  );
};

export default LeftPanel;
