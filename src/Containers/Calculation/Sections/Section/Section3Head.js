import React from "react";
import classes from "./Section1.module.css";

const Section3Head = () => {
  return (
    <React.Fragment>
      <tbody>
        <tr className={classes.dataRow}>
          <td className={classes.hdata}>
            <p className={classes.htableData}>ECT</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Length (mm)</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Width (mm)</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Height (mm)</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Ply</p>
          </td>
          <td className={classes.rdata}>
            <p className={classes.rData}>Bs</p>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section3Head;
