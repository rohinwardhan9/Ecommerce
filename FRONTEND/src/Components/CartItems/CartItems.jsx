import React, { useContext } from "react";
import style from "./CartItems.module.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className={style.cartitems}>
      <div className={style.cartitems_format_main}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className={`${style.cartitems_format} ${style.cartitems_format_main}`}
              >
                <img
                  src={e.image}
                  alt=""
                  className={style.carticon_product_icon}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={style.cartitems_quantity}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * [e.id]}</p>
                <img
                  className={style.cartitems_remove_icon}
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={style.cartitems_down}>
        <div className={style.cartitems_total}>
          <h1>Cart Totals</h1>
          <div>
            <div className={style.cartitems_total_item}>
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={style.cartitems_total_item}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={style.cartitems_total_item}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={style.cartitems_promocode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={style.cartitems_promobox}>
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
