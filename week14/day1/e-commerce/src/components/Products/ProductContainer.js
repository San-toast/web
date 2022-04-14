import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
import "./ProductContainer.css";

export default function ProductContainer() {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="pContainer">
      <h1>Products</h1>
      <div className="layoutContainer">
        <div className="productContainer">
          {products?.map((product) => (
            <Products product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
