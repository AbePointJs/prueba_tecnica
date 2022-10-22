import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

function SearchBar({ className, func, placeholder }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onInput={(e) => func(e.target.value)}
        placeholder={placeholder}
        className={`${styles.searchBar} ${className}`}
        data-testid="input"
      />
    </div>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  func: PropTypes.func,
};

SearchBar.defaultProps = {
  className: "",
  func: () => {},
  placeholder: "Search...",
};

export default SearchBar;
