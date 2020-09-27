import classes from "./Register.module.css";
import React from "react";
import Banner from "../Home/Banner/Banner";
import Aux from "../Hoc/Auxilary";
import RightPanel from "./RightPanel/RightPanel";
import LeftPanel from "./LeftPanel/LeftPanel";

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
        <LeftPanel />
        <Aux className="mobileview">
          <br />
          <br />
          <br />
        </Aux>
        <RightPanel />
      </div>
    </Aux>
  );
};

export default Register;
