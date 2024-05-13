import React from "react";
import style from "./Navbar.module.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img src={navlogo} alt="" className={style.nav_logo} />
      <img src={navProfile} alt="" className={style.nav_profile} />
    </div>
  );
};

export default Navbar;
