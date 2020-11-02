import classes from "./Register.module.css";
import React from "react";
import Banner from "../Home/Banner/Banner";
import Aux from "../Hoc/Auxilary";
import RightPanel from "./RightPanel/RightPanel";
import LeftPanel from "./LeftPanel/LeftPanel";
import { withRouter } from "react-router-dom";

const Register = (props) => {

  return (
    <Aux classes={classes.Register}>
      <div
        className={classes.Banner}
        style={{ backgroundImage: `(${props.bannerimage})` }}
      >
        <Banner />
      </div>
      <div className={classes.Regi}>
        <Aux classes={classes.LeftPanel}>
        <LeftPanel />
        </Aux>
        <Aux classes="mobileview">
          <br />
          <br />
          <br />
        </Aux>
        <Aux classes={classes.RightPanel}>
        <RightPanel />
        </Aux>
      </div>
    </Aux>
  );
};

export default withRouter(Register);
