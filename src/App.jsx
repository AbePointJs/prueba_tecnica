import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductList } from "./store/products";

function App() {
  const dispatch = useDispatch();

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
