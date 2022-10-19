import React from "react";
import PropTypes from "prop-types";
import { useSpring, a, config } from "react-spring";
import styles from "./Icon.module.css";

function Icon({ className, animate }) {
  const animProps = useSpring({
    fill: animate ? "white" : "transparent",
    config: config.wobbly,
  });

  return (
    <div className={`${styles.container} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="30"
        fill="none"
        viewBox="0 0 34 30"
      >
        <a.path
          stroke="#EEEEEE"
          strokeLinejoin="round"
          d="M3 23V11h9.5v12H3z"
          style={animProps}
          className={styles.window}
          data-testid="first-path"
        />
        <path stroke="#EEEEEE" strokeLinejoin="round" d="M1 26V9h13v17H1z" />

        <circle cx="7.5" cy="24.5" r="0.5" fill="#EEEEEE" />

        <a.path
          stroke="#EEEEEE"
          strokeLinejoin="round"
          d="M26 26v-9h5v9h-5z"
          style={animProps}
          data-testid="second-path"
        />

        <path stroke="#EEEEEE" strokeLinejoin="round" d="M24 29V15h9v14h-9z" />
        <circle cx="28.5" cy="27.5" r="0.5" fill="#EEEEEE" />
        <circle cx="16.5" cy="19.5" r="0.5" fill="#EEEEEE" />
        <path stroke="#EEEEEE" strokeLinejoin="round" d="M3 9V1h26v14m-14.5 6H24" />
        <a.path
          stroke="#EEEEEE"
          strokeLinejoin="round"
          d="M5 3v6h9v9h10v-3h3V3H5z"
          style={animProps}
          data-testid="second-path"
        />
      </svg>
    </div>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  animate: PropTypes.bool,
};

Icon.defaultProps = {
  className: "",
  animate: false,
};

export default Icon;
