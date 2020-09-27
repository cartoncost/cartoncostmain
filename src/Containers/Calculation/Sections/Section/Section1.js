import classes from "./Section1.module.css";
import React from "react";

const Section1 = () => {
  return (
    <React.Fragment>
      <thead className={classes.THead}>
        <tr className={classes.dataHead}>
          <th className={classes.head}>Length (mm)</th>
          <th className={classes.head}>Width (mm)</th>
          <th className={classes.head}>Height (mm)</th>
          <th className={classes.head}>Ply</th>
          <th className={classes.head}>Bs</th>
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

export default Section1;
