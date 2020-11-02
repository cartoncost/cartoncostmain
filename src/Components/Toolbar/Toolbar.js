import classes from "./Toolbar.module.css";
import React from "react";
import DrawToggle from "../UI/DrawToggle/DrawToggle";
import Logo from "../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <div>
      <header className={classes.Toolbar}>
        <DrawToggle clicked={props.clicked} />

        <div className={classes.Logo}>
          <Link to="/">
          <Logo />
          </Link>
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
};

export default Toolbar;
