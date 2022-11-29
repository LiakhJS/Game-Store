import React from "react";
import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} rub.</span>
            <Button 
            onClick={()=>null}>
            To Basket
            </Button>
        </div>
    )
}