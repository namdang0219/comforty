import Image from "next/image";
import React from "react";
import logo from "./../public/LogoIcon.png";
import shop from "./../public/Buy 2.svg";
import style from "../app/homeStyle.module.css";
import Heart from "../public/Heart 1.svg";
import Profile from "../public/Profile.svg";

const HomePage = () => {
  return (
    <div className={style.background}>
      <div className={style.logotext}>
        <div>
          <Image src={logo} alt="image" />
        </div>
        <div>
          <h1>Comforty</h1>
        </div>
      </div>

      <div className={style.Cart}>
        <Image src={shop} alt="image" />
        <p>Cart</p>
        <div className={style.notification}>
          <p>2</p>
        </div>
      </div>
      <div className={style.Heart}>
        <Image src={Heart} alt="image" />
      </div>
      <div className={style.Profile}>
        <Image src={Profile} alt="image" />
      </div>
    </div>
  );
};

export default HomePage;
