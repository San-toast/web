import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { REMOVE } from "../../action-types";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const removeFromCart = (dispatch, product) => {
    dispatch({ type: REMOVE, payload: product });
  };
  return (
    <div className="cartProduct">
      <div>
        <img className="productImage" src={props?.product?.img} alt="" />
      </div>

      <div>
        <h4>{props?.product?.name}</h4>
      </div>

      <div>
        <p>${props?.product?.price}</p>
      </div>

      <div>
        <button onClick={() => removeFromCart(dispatch, props.product)}>
          Remove
        </button>
      </div>
    </div>
  );
}
