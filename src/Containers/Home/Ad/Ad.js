import React from "react";
import Aux from "../../Hoc/Auxilary";
import classes from "./Ad.module.css";

const Ad = () => {

  return (
    <Aux classes={classes.banner}>
      <p className={classes.para}>Packaging for all kinds of products</p>
      <button className={classes.Button}>BUY NOW</button>
    </Aux>
  );
};

export default Ad;
