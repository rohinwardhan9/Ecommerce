import React from "react";
import style from "./Hero.module.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_left}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={style.hero_hand_icon}>
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={style.hero_latest_btn}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className={style.hero_right}>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
