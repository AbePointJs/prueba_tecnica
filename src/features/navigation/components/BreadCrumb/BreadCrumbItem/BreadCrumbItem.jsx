import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./BreadCrumbItem.module.css";

function BreadCrumbItem({ name, index, path, theme }) {
  const color = `rgb(${theme.r + index * 20}, ${theme.g + index * 20}, ${theme.b + index * 20})`;

  return (
    <li className={styles.container} style={{ "--color": color }}>
      <Link to={path} className={styles.textCont}>
        <p>{name}</p>
      </Link>
      <div className={styles.triangle} />
    </li>
  );
}

BreadCrumbItem.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  path: PropTypes.string,
  theme: PropTypes.exact({ r: PropTypes.number, g: PropTypes.number, b: PropTypes.number }),
};

BreadCrumbItem.defaultProps = {
  name: "home",
  index: 0,
  path: "/",
  theme: { r: 57, g: 72, b: 90 },
};

export default BreadCrumbItem;
