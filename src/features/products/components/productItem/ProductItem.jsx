import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PriceTag from "../../../../components/priceTag/PriceTag";

import styles from "./ProductItem.module.css";

function ProductItem({ brand, imgUrl, model, price, path }) {
  return (
    <article className={styles.article}>
      <Link className={styles.container} to={path} data-testid="productItem">
        <div className={styles.imgContainer}>
          <img src={imgUrl} alt={model} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.brand}>{brand}</h2>
          <h3 className={styles.model}>{model}</h3>
          <PriceTag price={price} />
        </div>
      </Link>
    </article>
  );
}

ProductItem.propTypes = {
  path: PropTypes.string,
  brand: PropTypes.string,
  imgUrl: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string,
};

ProductItem.defaultProps = {
  path: "/",
  brand: "",
  imgUrl: "",
  model: "",
  price: "",
};

export default ProductItem;
