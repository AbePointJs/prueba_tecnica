import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectProductsLoading } from "../store/products";
import { ProductList } from "../features/products";

function ProductListPage() {
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);

  return <main>{loading ? <h1>LOADING!</h1> : <ProductList products={products} />}</main>;
}

export default ProductListPage;
