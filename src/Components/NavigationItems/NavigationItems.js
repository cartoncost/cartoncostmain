import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import TrialButton from "../UI/TrialButton/TrialButton";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/features" className={classes.NavItem}>
        Features
      </NavigationItem>
      <NavigationItem link="/pricing" className={classes.NavItem}>
        Pricing
      </NavigationItem>
      <NavigationItem link="/contact" className={classes.NavItem}>
        Contact Sales
      </NavigationItem>
      <NavigationItem link="/signin" className={classes.NavItem}>
        Sign In
      </NavigationItem>
      <TrialButton>Try for free</TrialButton>
    </ul>
  );
};

export default NavigationItems;
