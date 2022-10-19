import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";
import Icon from "../../../../components/Icon/Icon";

function Logo() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate("/");
  };

  const onEnterKeyHandler = (e) => {
    if (e.key === "Enter") redirectHandler();
  };

  const onMouseEnterHandler = () => {
    setAnimate(true);
  };

  const onMouseLeaveHandler = () => {
    setAnimate(false);
  };

  return (
    <div
      className={styles.container}
      onClick={redirectHandler}
      onKeyDown={onEnterKeyHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      role="button"
      tabIndex="0"
    >
      <Icon animate={animate} />
      <p>MobileX</p>
    </div>
  );
}

export default Logo;
