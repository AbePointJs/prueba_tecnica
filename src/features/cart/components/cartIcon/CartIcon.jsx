import React from "react";
import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectCartCount, selectCartLoading } from "../../../../store/cart";
import { Loader } from "../../../../components";
import styles from "./CartIcon.module.css";

function CartIcon({ color, size }) {
  const count = useSelector(selectCartCount);
  const loading = useSelector(selectCartLoading);

  return (
    <div className={`${styles.container}`}>
      <FiShoppingCart color={color} size={size} style={{ opacity: loading ? 0.4 : 1 }} />
      <div className={styles.count} style={{ opacity: loading ? 0.4 : 1 }}>
        {loading ? <Loader size="25px" /> : count}
      </div>
    </div>
  );
}

CartIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

CartIcon.defaultProps = {
  color: "white",
  size: "2.5rem",
};

export default CartIcon;
