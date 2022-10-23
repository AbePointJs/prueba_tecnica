import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionGetProductList } from "./store/products";

import Layout from "./layout";
import { ProductDetailsPage, ProductListPage } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProductList());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
