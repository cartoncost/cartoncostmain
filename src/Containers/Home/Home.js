import classes from "./Home.module.css";
import React from "react";
import Banner from "./Banner/Banner";
import LeftCaption from "./LeftCaption/LeftCaption";
import Ad from "./Ad/Ad";
import firebase from '../../Firebase'
import Axios from "axios";

const Home = (props) => {


  let style={  
    backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/cartoncost-409cb.appspot.com/o/Rectangle%2081.png?alt=media&token=30c00cc8-b016-433d-98dc-87000e1d4a81" + ")",
    objectFit:"contain",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div className={classes.Home}>
      <div
        className={classes.Banner}
       
      >
        <Banner />
      </div>
      <div className={classes.LeftCaption}>
        <LeftCaption />
      </div>
      <div
        className={classes.Ads}
        style={style}
      >
        <Ad />
      </div>
    </div>
  );
};

export default Home;
