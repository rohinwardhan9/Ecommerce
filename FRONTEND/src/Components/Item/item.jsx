import React from "react";
import style from "./item.module.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className={style.item}>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className={style.item_prices}>
        <div className={style.item_price_new}>${props.new_price}</div>
        <div className={style.item_price_old}>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
