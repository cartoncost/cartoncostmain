import React from "react";
import classes from "./Section1.module.css";

const Section6Head = () => {
  return (
    <React.Fragment>
      <tbody>
        <tr className={classes.dataRow}>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Ply</p>
          </td>
          <td className={classes.hdata}>
            <p className={classes.htableData}>Deckle</p>
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
            <p className={classes.htableData}>Tons</p>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section6Head;
