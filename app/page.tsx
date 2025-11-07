import React from 'react';
import style from "./homeStyle.module.css";
import logo from "./../public/logoIcon.png";
import Image from 'next/image';
import Buy from "./../public/Buy.png";
import icon from "./../public/No.png";
import heart from "./../public/Heart.png";
import profile from "./../public/Profile.png";
import search from "./../public/search.png";

const Homepage = () => {
  return (
    <div>
      <div className={style.navi}>
        <div className={style.logo}>
          <Image src={logo} alt="image"/>
          <h1 className={style.logoTxt}>Comforty</h1>
        </div>
        <div>
          <input type="text" placeholder='Search here...' className={style.searchBox}/>
        </div>
        <div className={style.link}>
          <div className={style.cart}>
            <Image src={Buy} alt="cart"/>
            <p className={style.cartTxt}>Cart</p>
            <Image src={icon} alt="icon"/>
          </div>
          <div className={style.heart}>
            <Image src={heart} alt="heart"/>
          </div>
          <div className={style.profile}>
            <Image src={profile} alt="profile"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;