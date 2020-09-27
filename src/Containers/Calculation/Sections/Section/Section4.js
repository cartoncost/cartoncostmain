import classes from "./Section1.module.css";
import React from "react";

const Section4 = () => {
  return (
    <React.Fragment>
      <thead>
        <tr className={classes.dataHead}>
          <th className={classes.head}>Reel Deckle</th>
          <th className={classes.head}>Cutting length</th>
          <th className={classes.head}>Gsm</th>
          <th className={classes.head}>Kg</th>
          <th className={classes.head}>No. of sheets</th>
        </tr>
      </thead>
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
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section4;
