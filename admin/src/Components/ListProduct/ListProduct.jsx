import React, { useEffect, useState } from "react";
import style from "./ListProduct.module.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className={style.list_product}>
      <h1>All Product List</h1>
      <div className={style.listproduct_format_main}>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className={style.listproduct_allproducts}>
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div
              key={index}
              className={`${style.listproduct_format_main} ${style.listproduct_format} `}
            >
              <img
                src={product.image}
                alt=""
                className={style.listproduct_product_icon}
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                className={style.listproduct_remove_icon}
                src={cross_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
