import {  configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/reducer';
import gamesSlice from './games/reducer';

export const store = configureStore({
    reducer: {
            cart: cartSlice,
            games: gamesSlice
    },
})

