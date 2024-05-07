import React from "react";
import style from "./Offers.module.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className={style.offers}>
      <div className={style.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={style.offers_right}>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
