import React, { useContext } from "react";
import style from "./CSS/ShopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={style.shopcategory}>
      <img className={style.shopcategory_banner} src={props.banner} alt="" />
      <div className={style.shopcategory_indexSort}>
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className={style.shopcategory_sort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={style.shopcategory_product}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={style.shopcategory_loadmore}>Explore More</div>
    </div>
  );
};

export default ShopCategory;
