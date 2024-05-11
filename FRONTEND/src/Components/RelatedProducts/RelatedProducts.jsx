import React from "react";
import style from "./RelatedProducts.module.css";
import data_product from "../Assets/data";
import Item from "../Item/item";

const RelatedProducts = () => {
  return (
    <div className={style.relatedproducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={style.relatedproducts_item}>
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
