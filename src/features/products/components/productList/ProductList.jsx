import React from "react";
import PropTypes from "prop-types";
import ProductItem from "../productItem/ProductItem";
import styles from "./ProductList.module.css";

const filter = (arr, filterFields, filterString) => {
  // split words of input and generate a RG for each one
  const regex = filterString.split(" ").map((w) => new RegExp(w, "i"));

  // filters for each word by requested fileds
  const filteredArr = arr.filter((item) => {
    const includesWords = regex.every((rx) => filterFields.some((field) => rx.test(item?.[field])));
    return includesWords;
  });

  // returns the filtered array
  return filteredArr;
};

function ProductList({ products, filterFields, filterString }) {
  const filteredProducts = filter(products, filterFields, filterString);

  return (
    <div className={styles.container} data-testid="productList">
      {filteredProducts.map(({ id, brand, imgUrl, model, price }) => (
        <ProductItem
          brand={brand}
          imgUrl={imgUrl}
          model={model}
          price={price}
          key={id}
          path={`/products/${id}`}
          id={id}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filterFields: PropTypes.arrayOf(PropTypes.string),
  filterString: PropTypes.string,
};

ProductList.defaultProps = {
  products: [],
  filterFields: [""],
  filterString: "",
};

export default ProductList;
