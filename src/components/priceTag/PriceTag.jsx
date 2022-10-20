import React from "react";
import PropTypes from "prop-types";
// import styles from "PriceTag.module.css";

function PriceTag({ price, currency }) {
  return <div>{`${price}${currency}`}</div>;
}

PriceTag.propTypes = {
  price: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  currency: PropTypes.string,
};

PriceTag.defaultProps = {
  price: "",
  currency: "€",
};

export default PriceTag;
