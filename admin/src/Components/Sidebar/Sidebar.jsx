import React from "react";
import style from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className={style.sidebar_item}>
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className={style.sidebar_item}>
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
