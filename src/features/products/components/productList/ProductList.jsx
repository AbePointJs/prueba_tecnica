import React from "react";
import PropTypes from "prop-types";
import ProductItem from "../productItem/ProductItem";
import styles from "./ProductList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles.container} data-testid="productList">
      {products.map(({ id, brand, imgUrl, model, price }) => (
        <ProductItem
          brand={brand}
          imgUrl={imgUrl}
          model={model}
          price={price}
          key={id}
          path={`/products/${id}#name=${model}`}
          id={id}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
