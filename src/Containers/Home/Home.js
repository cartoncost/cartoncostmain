import classes from "./Home.module.css";
import React from "react";
import Banner from "./Banner/Banner";
import LeftCaption from "./LeftCaption/LeftCaption";
import Ad from "./Ad/Ad";

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <div
        className={classes.Banner}
        style={{ backgroundImage: `(${props.bannerimage})` }}
      >
        <Banner />
      </div>
      <div className={classes.LeftCaption}>
        <LeftCaption />
      </div>
      <div
        className={classes.Ads}
        style={{ backgroundImage: `(${props.Adimage})` }}
      >
        <Ad />
      </div>
    </div>
  );
};

export default Home;
