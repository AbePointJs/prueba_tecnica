import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionGetProductList } from "./store/products";

import Layout from "./layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProductList());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
