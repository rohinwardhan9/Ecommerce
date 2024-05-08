import React, { useContext } from "react";
import style from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={style.shopcategory}>
      <img src={props.banner} alt="" />
      <div className={style.shopcategory_indexSort}>
        <p>
          <span>showing 1-12</span>out of 36 products
        </p>
        <div className={style.shopcategory_sort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
