import React from "react";
import PropTypes from "prop-types";
import styles from "./PriceTag.module.css";

// Returns "-" if price value is not valid
function parsePrice(price, currency) {
  let parsed;

  if (typeof price === "string") {
    parsed = price.replace(/\s/g, "");
  } else {
    parsed = price;
  }

  const newPrice = parsed || "-";
  return `${newPrice}${currency}`;
}

function PriceTag({ price, currency }) {
  return <div className={styles.container}>{parsePrice(price, currency)}</div>;
}

PriceTag.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string,
};

PriceTag.defaultProps = {
  price: "",
  currency: "€",
};

export default PriceTag;
