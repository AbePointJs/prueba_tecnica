import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProductList, selectProducts } from "./store/products";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(actionGetProductList());
  }, []);

  const onClick = () => {
    console.log(products);
  };

  return (
    <div>
      <h1>HOLA QUE TAL!!!!</h1>
      <button type="button" onClick={onClick}>
        Hola
      </button>
    </div>
  );
}

export default App;
