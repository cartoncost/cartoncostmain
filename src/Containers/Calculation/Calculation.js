import { TableContainer } from "@material-ui/core";
import React from "react";
import Aux from "../Hoc/Auxilary";
import classes from "./Calculation.module.css";
import Section1 from "./Sections/Section/Section1";
import Section1Head from "./Sections/Section/Section1Head";
import { makeStyles } from "@material-ui/core";
import Section2 from "./Sections/Section/Section2";
import Section2Head from "./Sections/Section/Section2Head";
import Section3 from "./Sections/Section/Section3";
import Section3Head from "./Sections/Section/Section3Head";
import Section4Head from "./Sections/Section/Section4Head";
import Section4 from "./Sections/Section/Section4";
import Section5Head from "./Sections/Section/Section5Head";
import Section5 from "./Sections/Section/Section5";
import Section6 from "./Sections/Section/Section6";
import Section6Head from "./Sections/Section/Section6Head";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "40%",
      marginTop: "6%",
      marginRight: "3%",
      marginLeft: "3%",
      ["@media(max-width:600px)"]: {
        width: "80%",
        marginTop: "10%",
      },
    },
  },
}));
const Calculation = () => {
  return (
    <Aux classes={classes.Calculation} paper>
      <table className={classes.TableHead}>
        <Section1Head />
      </table>
      <table className={classes.Table}>
        <Section1 />
      </table>
      <table className={classes.TableHead}>
        <Section2Head />
      </table>
      <table className={classes.Table}>
        <Section2 />
      </table>
      <table className={classes.TableHead}>
        <Section3Head />
      </table>
      <table className={classes.Table}>
        <Section3 />
      </table>
      <table className={classes.TableHead}>
        <Section4Head />
      </table>
      <table className={classes.Table}>
        <Section4 />
      </table>
      <table className={classes.TableHead}>
        <Section5Head />
      </table>
      <table className={classes.Table}>
        <Section5 />
      </table>
      <table className={classes.TableHead}>
        <Section6Head />
      </table>
      <table className={classes.Table}>
        <Section6 />
      </table>
      <button className={classes.calButton}>Calculate</button>
    </Aux>
  );
};

export default Calculation;
