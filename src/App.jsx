import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionGetProductList } from "./store/products";

import Layout from "./layout";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProductList());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
