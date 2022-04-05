import React from "react";

export default function CartItem(props) {
  return (
    <div className="cartProduct">
      <img className="productImage" src={props?.product?.img} alt="" />
      <h4>{props?.product?.name}</h4>
    </div>
  );
}
