import React from "react";
import styles from "./Logo.module.css";
import logo from "../../../../assets/logo_header.svg";

function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="MobileX logo" />
    </div>
  );
}

export default Logo;
