import React from "react";
import PropTypes from "prop-types";
import PriceTag from "../../../../components/priceTag/PriceTag";

import styles from "./ProductItem.module.css";

function ProductItem({ id, brand, imgUrl, model, price, navigate }) {
  const onNavigationHandler = () => {
    navigate(`/products/:${id}`);
  };

  const onKeyDownHandler = (event) => {
    if (event.key === "enter") onNavigationHandler();
  };

  return (
    <article
      className={styles.container}
      onClick={onNavigationHandler}
      onKeyDown={onKeyDownHandler}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="link"
      tabIndex="0"
    >
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={model} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.brand}>{brand}</h2>
        <h3 className={styles.model}>{model}</h3>
        <PriceTag price={price} />
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string,
  brand: PropTypes.string,
  imgUrl: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
  navigate: PropTypes.func,
};

ProductItem.defaultProps = {
  id: "",
  brand: "",
  imgUrl: "",
  model: "",
  price: "",
  navigate: () => {},
};

export default ProductItem;
