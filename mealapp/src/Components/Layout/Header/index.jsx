// Lib
import React from "react";

// Components
import HeaderCart from "./HeaderCart";
import BannerIMG from "./BannerIMG";

// Styes
import styles from "./Header.module.css";

const Header = (props) => {
  console.log("[Header.js] Function");

  return (
    <>
      <header className={styles.header}>
        <h1 className="logo">ReactMeals</h1>
        <HeaderCart />
      </header>
      <BannerIMG styles={styles["main-image"]} />
    </>
  );
};

export default Header;
