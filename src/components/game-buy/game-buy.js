import React from "react";
import { useDispatch,useSelector } from "react-redux";
// import { setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import "./game-buy.css";
import { addCart, removeCart } from "../../redux/cart/reducer";

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.carts);
    const isItemInCart = items.some(item => item.id === game.id)
    // const addCash = () => {
    //     dispatch({ type: "ADD_CASH", payload: game.price });
    // }
    // const subCash = () => {
    //     dispatch({ type: "SUB_CASH", payload: game.price });
    // }
    // const addcartBasket = () => {
    //     dispatch(addCash(Number(game.price)));
    // }
    // const addCashToBasket = (e) => {
    //     e.stopPropagation();
    //     dispatch(addCart(game));
    // }
    // const removeCashFromBasket = (e) => {
    //     e.stopPropagation();
    //     dispatch(removeCart(game.id));
    // }
    
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
          dispatch(removeCart(game.id));
        } else {
          dispatch(addCart(game));
        }
      };
    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} rub.</span>
            <Button
                type={isItemInCart ? 'secondary' : 'primary'}
                // onClick={isItemInCart ? removeCashFromBasket : addCashToBasket }
                onClick={handleClick}
                >
                {isItemInCart ? 'from Basket' : 'to Basket'}
            </Button>

        </div>
    )
}