import classes from "./Section1.module.css";
import React from "react";

const Section4 = () => {
  return (
    <React.Fragment>
      <tbody>
        <tr className={classes.dataRow}>
          <td className={classes.data}>
            <p className={classes.tableData}>499</p>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>1</p>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>1</p>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>1</p>
          </td>
          <td className={classes.data}>
            <p className={classes.tableData}>1</p>
          </td>
          <td className={classes.rdata}>
            <p className={classes.rData}>Bs</p>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section4;
