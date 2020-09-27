import classes from "./Plan.module.css";
import React from "react";
import Aux from "../../../Hoc/Auxilary";

const Plan = () => {
  return (
    <Aux>
      <p className={classes.users}>single user</p>
      <p className={classes.price}>
        500<span className={classes.users}>/mo</span>
      </p>

      <button>Buy now</button>
    </Aux>
  );
};

export default Plan;
