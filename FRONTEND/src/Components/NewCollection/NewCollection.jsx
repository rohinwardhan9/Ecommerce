import React from "react";
import style from "./NewCollection.module.css";
import new_collections from "../Assets/new_collections";
import Item from "../Item/item";

const NewCollection = () => {
  return (
    <div className={style.new_collection}>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className={style.collection}>
        {new_collections.map((item, i) => {
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

export default NewCollection;
