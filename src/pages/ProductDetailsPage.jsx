import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionGetProductDetail, selectProductDetail } from "../store/products";

function ProductDetails() {
  const dispatch = useDispatch();
  const pDetails = useSelector(selectProductDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionGetProductDetail(id));
  }, []);

  return <div>ProductDetails</div>;
}

export default ProductDetails;
