import React from "react";
import { useDispatch } from "react-redux";
import "./ProductContainer.css";
import { ADD_TO_CART } from "../../action-types";

export default function Products(props) {
  const dispatch = useDispatch();

  const addToCart = (dispatch, product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <div>
      <div className="singleProduct">
        <img className="productImage" src={props?.product?.img} alt="" />
        <h4>{props?.product?.name}</h4>
        <p>${props?.product?.price}</p>
        <button
          onClick={() => {
            addToCart(dispatch, props.product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
