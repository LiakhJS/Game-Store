import React from "react";
import { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

export const CartBlock = () => {
  const items = useSelector(state => (state.cart.carts));
  const [isCartMenuVisible, setIsCartMenuVisible]=useState(false);
  // const cartt=useSelector(state=> state.cart.carts);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
         <ItemsInCart  quantity={items.length}/>
      <BiCartAlt className="cart-block__icon" onClick={()=> setIsCartMenuVisible(!isCartMenuVisible)}/>
     {totalPrice>0? (<span className="cart-block__total-price">{totalPrice} rub. </span>) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={()=>null}/> }

    </div>
  )
}