import React from "react";
import Logo from "./components/Logo";
import { BreadCrumb } from "../../features/navigation";
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
