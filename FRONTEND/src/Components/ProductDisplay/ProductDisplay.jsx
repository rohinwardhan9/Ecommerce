import React, { useContext } from "react";
import style from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={style.productdisplay}>
      <div className={style.productdisplay_left}>
        <div className={style.productdisplay_img_list}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className={style.productdisplay_right}>
          <img
            className={style.productdisplay_main_img}
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className={style.productdisplay_right}>
        <h1>{product.name}</h1>
        <div className={style.productdisplay_right_stars}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className={style.productdisplay_right_prices}>
          <div className={style.productdisplay_right_price_old}>
            ${product.old_price}
          </div>
          <div className={style.productdisplay_right_price_new}>
            ${product.new_price}
          </div>
        </div>
        <div className={style.productdisplay_right_description}>
          a Lightweight, usually knitted,pullover shirt,close-fitting and a wide
          round neckline and sort sleeves,worn as an undershirt or outer garment
        </div>
        <div className={style.productdisplay_right_size}>
          <h1>Select Size</h1>
          <div className={style.productdisplay_right_sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={style.productdisplay_right_category}>
          <span>Category :</span>Women , T-Shirt,Crop Top
        </p>
        <p className={style.productdisplay_right_category}>
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
