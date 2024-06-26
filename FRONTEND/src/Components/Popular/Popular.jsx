import React, { useState } from "react";
import style from "./Popular.module.css";
// import data_product from "../Assets/data";
import Item from "../Item/item";
import { useEffect } from "react";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <div className={style.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={style.popular_item}>
        {popularProducts.map((item, i) => {
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

export default Popular;
