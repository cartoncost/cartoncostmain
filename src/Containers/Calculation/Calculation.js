import { TableContainer } from "@material-ui/core";
import React from "react";
import Aux from "../Hoc/Auxilary";
import classes from "./Calculation.module.css";
import Section1 from "./Sections/Section/Section1";
import Section2 from "./Sections/Section/Section2";
import Section3 from "./Sections/Section/Section3";
import Section4 from "./Sections/Section/Section4";
import Section5 from "./Sections/Section/Section5";
import Section6 from "./Sections/Section/Section6";

const Calculation = () => {
  return (
    <Aux classes={classes.Calculation} paper>
      <table className={classes.Table}>
        <TableContainer>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <button className={classes.calButton}>Calculate</button>
        </TableContainer>
      </table>
    </Aux>
  );
};

export default Calculation;
