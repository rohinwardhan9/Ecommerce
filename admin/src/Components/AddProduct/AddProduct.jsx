import React from "react";
import style from "./AddProduct.module.css";
import upload_area from "../../assets/upload_area.svg";
import { useState } from "react";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={style.add_product}>
      <div className={style.addproduct_itemfield}>
        <p>Product Title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
      <div className={style.addproduct_price}>
        <div className={style.addproduct_itemfield}>
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type Here" />
        </div>
        <div className={style.addproduct_itemfield}>
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type Here" />
        </div>
      </div>
      <div className={style.addproduct_itemfield}>
        <p>Product Category</p>
        <select type="category" className={style.add_product_selector}>
          <option value="women">Women</option>
          <option value="momen">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className={style.addproduct_itemfield}>
        <label htmlFor="file_input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className={style.addproduct_thumnail_img}
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file_input"
          hidden
        />
      </div>
      <button className={style.addproduct_btn}>ADD</button>
    </div>
  );
};

export default AddProduct;
