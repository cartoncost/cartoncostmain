import classes from "./LeftPanel.module.css";
import React from "react";
import Aux from "../../Hoc/Auxilary";
import Plan from "./Plan/Plan";

const LeftPanel = () => {
  return (
    <Aux classes={classes.LeftPanel}>
      <p>
        Pick a plan that suits xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        xxxxxxxxxxxxxxxxxxxx you
      </p>
      <Plan />
      <Plan />
      <Plan />
      <Plan />
    </Aux>
  );
};

export default LeftPanel;
