import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionGetProductDetail, selectProductDetail } from "../../store/products";
import { ProductSpecifications } from "../../features/products";
import { PriceTag } from "../../components";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displaySize,
    battery,
    displayType,
    primaryCamera,
    secondaryCmera,
    internalMemory,
    dimentions,
    sensors,
    imgUrl,
  } = useSelector(selectProductDetail);
  useEffect(() => {
    dispatch(actionGetProductDetail(id));
  }, []);

  return (
    <main>
      <ProductSpecifications
        headers={["specification", "value"]}
        content={{
          marca: brand,
          modelo: model,
          cpu,
          ram,
          sistemaOperativo: os,
          tamañoDePantalla: displaySize,
          batería: battery,
          displayType,
          camaraPrincipal: primaryCamera,
          camaraSecundaria: secondaryCmera,
          memoriaInterna: internalMemory,
          dimensiones: dimentions,
          sensores: sensors,
        }}
      />
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt="" />
        <PriceTag price={price} />
      </div>
    </main>
  );
}

export default ProductDetailsPage;
