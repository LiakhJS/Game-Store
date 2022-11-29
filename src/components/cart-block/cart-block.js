import React from "react";
import {BiCartAlt} from "react-icons/bi";
import "./cart-block.css";

export const CartBlock = () => {
    return (
        <div className="cart-block">
          <BiCartAlt className="cart-block__icon"/>
          <span className="cart-block__total-price">2313 rub. </span>
        </div>
    )
}