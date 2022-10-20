import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ProductItem from "../productItem/ProductItem";
import styles from "./ProductList.module.css";

function ProductList({ products }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {products.map(({ id, brand, imgUrl, model, price }) => (
        <ProductItem
          id={id}
          brand={brand}
          imgUrl={imgUrl}
          model={model}
          price={price}
          key={id}
          navigate={navigate}
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
