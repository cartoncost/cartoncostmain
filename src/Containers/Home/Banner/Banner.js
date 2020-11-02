import React from "react";
import Aux from "../../Hoc/Auxilary";
import classes from "./Banner.module.css";

const Banner = () => {
let style={  
  backgroundImage: "url(" + "https://firebasestorage.googleapis.com/v0/b/cartoncost-409cb.appspot.com/o/Rectangle%2068.png?alt=media&token=1fec322a-57f3-4eb9-97c4-25fa50d3fb16" + ")",
  width: '50.5555555vw',
  height:"6.25vw",
  objectFit:"contain",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}
  return (

    <div className={classes.banner} style={style}>
      <p className={classes.para}>Packaging for all kinds of products</p>
      <button className={classes.Button}>BUY NOW</button>
    </div>
  );
};

export default Banner;
