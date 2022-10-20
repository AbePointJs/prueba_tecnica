import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import Icon from "../../../components/Icon/Icon";

function Logo() {
  const [animate, setAnimate] = useState(false);

  const onMouseEnterHandler = () => {
    setAnimate(true);
  };

  const onMouseLeaveHandler = () => {
    setAnimate(false);
  };

  return (
    <Link
      to="/"
      className={styles.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <Icon animate={animate} />
      <p>MobileX</p>
    </Link>
  );
}

export default Logo;
