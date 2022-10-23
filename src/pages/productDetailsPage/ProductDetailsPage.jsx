import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetProductDetail,
  selectProductDetail,
  selectProductsLoading,
} from "../../store/products";
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
  const isLoading = useSelector(selectProductsLoading);

  useEffect(() => {
    dispatch(actionGetProductDetail(id));
  }, []);

  if (isLoading) {
    return <div>Hola!</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={imgUrl} alt={model} />
          <PriceTag price={price} className={styles.priceTag} />
        </div>
        <ProductSpecifications
          headers={["specification", "value"]}
          id={id}
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
      </div>
    </main>
  );
}

export default ProductDetailsPage;
