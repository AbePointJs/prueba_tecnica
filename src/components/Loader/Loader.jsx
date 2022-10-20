import React from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

function Loader({ size, className }) {
  return (
    <div className={className}>
      <div className={styles.container} style={{ width: size, height: size }} />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

Loader.defaultProps = {
  size: "48px",
  className: "",
};
export default Loader;
