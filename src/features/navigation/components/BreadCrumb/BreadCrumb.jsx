import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumbItem from "./BreadCrumbItem/BreadCrumbItem";
import styles from "./BreadCrumb.module.css";

function BreadCrumb() {
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  if (!pathArr[pathArr.length - 1]) pathArr.shift();

  return (
    <nav className={styles.container}>
      <ol>
        {pathArr.map((name, i) => (
          <BreadCrumbItem
            name={name || "home"}
            index={i}
            key={name}
            path={pathArr.slice(0, i + 1).join("/") || "/"}
          />
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
