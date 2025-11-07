<<<<<<< HEAD
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
=======
import React from "react";
import styles from "./homeStyle.module.css";
import Image from "next/image";

import logo from "./../public/logo.png";
import heartIcon from "./../public/heart.svg";
import cartIcon from "./../public/buy.svg";
import profileIcon from "./../public/profile.svg";
import searchIcon from "./../public/searchIcon.svg";

const HomePage = () => {
	return (
		<div>
			{/* TOP BAR */}
			<div className={styles.topBar}>
				<div className={styles.topBarContainer}>
					{/* LOGO */}
					<div className={styles.logoContainer}>
						<Image src={logo} alt="image" />

						<h1 className={styles.logoText}>Comforty</h1>
					</div>

					{/* SEARCH BAR */}
					<div className={styles.searchContainer}>
						<input
							type="text"
							placeholder="Search here..."
							className={styles.searchInput}
						/>

            <Image src={searchIcon} alt="search-icon" width={22} height={22} />
					</div>

					{/* FEATURE */}
					<div className={styles.featureContainer}>
						{/* Cart Btn */}
						<div className={styles.featureBtn}>
							<div className={styles.cartBtnLeft}>
								<Image src={cartIcon} alt="cart-icon" />

								<span>Cart</span>
							</div>

							<div className={styles.cartBtnQuantity}>1</div>
						</div>

						{/* Favorite */}
						<div
							className={`${styles.featureBtn} ${styles.squareBtn}`}
						>
							<Image
								src={heartIcon}
								alt="heart-icon"
								width={22}
								height={22}
							/>
						</div>

						{/* User */}
						<div
							className={`${styles.featureBtn} ${styles.squareBtn}`}
						>
							<Image src={profileIcon} alt="user-icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
>>>>>>> main
