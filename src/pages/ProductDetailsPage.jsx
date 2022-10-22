import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionGetProductDetail } from "../store/products";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionGetProductDetail(id));
  }, []);

  return <div>ProductDetails</div>;
}

export default ProductDetails;
