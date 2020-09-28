import React from "react";
import classes from "./Section1.module.css";

const Section5Head = () => {
  return (
    <React.Fragment>
      <tbody>
        <tr className={classes.dataRow}>
          <td className={classes.hdata}>
            <p className={classes.htableData}>No. of sheets</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Length</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Width</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Gsm</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Kg</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Tons</p>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section5Head;
