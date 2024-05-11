import React from "react";
import style from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={style.descriptiobox}>
      <div className={style.descriptiobox_navigator}>
        <div className={style.descriptiobox_nav_box}>Description</div>
        <div className={style.descriptiobox_nav_box_fade}> Reviews (122)</div>
      </div>
      <div className={style.descriptiobox_description}>
        <p>
          An Ecommerce website is an online platforn that facilitate buying and
          selling of product or services over the internet and serve as virtual
          marketplace where buisness and individual showcase their products
        </p>
        <p>
          Ecommerce website typically display products or services detailed
          description , image,prices and any available vareity (e.g sizes,color)
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
