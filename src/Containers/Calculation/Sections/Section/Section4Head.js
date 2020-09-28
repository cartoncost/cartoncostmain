import React from "react";
import classes from "./Section1.module.css";

const Section4Head = () => {
  return (
    <React.Fragment>
      <tbody>
        <tr className={classes.dataRow}>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Reel Deckle</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Cutting length</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Gsm</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Kg</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>No. of sheets</p>
          </td>
          <td className={classes.rdata}>
            <p className={classes.rData}>Bs</p>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section4Head;
