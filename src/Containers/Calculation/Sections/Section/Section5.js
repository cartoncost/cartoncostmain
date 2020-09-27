import classes from "./Section1.module.css";
import React from "react";

const Section5 = () => {
  return (
    <React.Fragment>
      <thead>
        <tr className={classes.dataHead}>
          <th className={classes.head}>No. of sheets</th>
          <th className={classes.head}>Length</th>
          <th className={classes.head}>Width</th>
          <th className={classes.head}>Gsm</th>
          <th className={classes.head}>Kg</th>
          <th className={classes.head}>Tons</th>
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
          <td className={classes.data}>
            <p className={classes.tableData}>1</p>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default Section5;
