import React from "react";
import style from "./Footer.module.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterter_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_logo}>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={style.footer_link}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={style.footer_social_icon}>
        <div className={style.footer_icons_container}>
          <img src={instagram_icon} alt="" />
        </div>
        <div className={style.footer_icons_container}>
          <img src={pinterter_icon} alt="" />
        </div>
        <div className={style.footer_icons_container}>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={style.footer_copyright}>
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
