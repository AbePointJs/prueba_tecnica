import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  actionGetProductDetail,
  selectProductDetail,
  selectProductsLoading,
} from "../../store/products";
import { ProductSpecifications, ProductOptions } from "../../features/products";
import { PriceTag } from "../../components";
import styles from "./ProductDetailsPage.module.css";

function ProductDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(selectProductDetail);
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
          <img src={data.imgUrl} alt={data.model} />
          <PriceTag price={data.price} className={styles.priceTag} />
        </div>
        <ProductSpecifications
          headers={["specification", "value"]}
          className={styles.table}
          id={data.id}
          content={{
            marca: data.brand,
            modelo: data.model,
            cpu: data.cpu,
            ram: data.ram,
            sistemaOperativo: data.os,
            tamañoDePantalla: data.displaySize,
            batería: data.battery,
            displayType: data.displayType,
            camaraPrincipal: data.primaryCamera,
            camaraSecundaria: data.secondaryCmera,
            memoriaInterna: data.internalMemory,
            dimensiones: data.dimentions,
            sensores: data.sensors,
          }}
        />
      </div>
      <ProductOptions options={data.options} className={styles.productOptions} />
    </main>
  );
}

export default ProductDetailsPage;
