import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./BreadCrumbItem.module.css";

function BreadCrumbItem({ name, index, path }) {
  const navigate = useNavigate();
  const color = `rgb(${57 + index * 20}, ${72 + index * 20}, ${90 + index * 20})`;

  const onChangePathHandler = () => {
    navigate(path);
  };

  const onKeyHandler = (event) => event.key === "enter" && onChangePathHandler();

  return (
    <li className={styles.container} style={{ "--color": color }}>
      <div
        className={styles.textCont}
        onClick={onChangePathHandler}
        onKeyDown={onKeyHandler}
        role="button"
        tabIndex="0"
      >
        <p>{name}</p>
      </div>
      <div className={styles.triangle} />
    </li>
  );
}

BreadCrumbItem.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  path: PropTypes.string,
};

BreadCrumbItem.defaultProps = {
  name: "home",
  index: 0,
  path: "/",
};

export default BreadCrumbItem;
