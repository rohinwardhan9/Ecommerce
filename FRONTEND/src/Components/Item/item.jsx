import React from "react";
import style from "./item.module.css";
const Item = (props) => {
  return (
    <div className={style.item}>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className={style.item_prices}>
        <div className={style.item_price_new}>${props.new_price}</div>
        <div className={style.item_price_old}>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
