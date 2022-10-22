import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectProductsLoading } from "../store/products";
import { ProductList } from "../features/products";
import { SearchBar } from "../components";

function ProductListPage() {
  const [inputString, setInputString] = useState("");
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);

  return (
    <main>
      <SearchBar func={setInputString} />
      {loading ? null : (
        <ProductList
          products={products}
          filterFields={["brand", "model"]}
          filterString={inputString}
        />
      )}
    </main>
  );
}

export default ProductListPage;
