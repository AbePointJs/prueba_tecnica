import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, selectProducts, selectError } from "./store/products";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  console.log(products);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div>
      <button type="button">Hola</button>
    </div>
  );
}

export default App;
