import React from "react";
import Logo from "../../Components/UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidedrawer.module.css";
// import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../Containers/Hoc/Auxilary";

const Sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.show) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }

  return (
    <Aux>
      {/* <Backdrop show={props.show} clicked={props.clicked} /> */}
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default Sidedrawer;
