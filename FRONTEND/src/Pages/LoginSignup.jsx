import React from "react";
import style from "./CSS/LoginSignup.module.css";
const LoginSignup = () => {
  return (
    <div className={style.loginsignup}>
      <div className={style.loginsignup_container}>
        <h1>Sign Up</h1>
        <div className={style.loginsignup_fields}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={style.loginsignup_login}>
          Already have an account? <span>Login here</span>
        </p>
        <div className={style.loginsignup_agree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
