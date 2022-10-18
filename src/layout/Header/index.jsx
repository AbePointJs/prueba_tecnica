import React from "react";
import Logo from "./components/Logo/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  );
}

export default Header;
