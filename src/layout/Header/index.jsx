import React from "react";
import Logo from "./components/Logo/Logo";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import { CartIcon } from "../../features/cart";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoAndBread}>
        <Logo />
        <BreadCrumb />
      </div>
      <CartIcon />
    </header>
  );
}

export default Header;
