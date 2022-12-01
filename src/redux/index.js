import {  configureStore } from '@reduxjs/toolkit';
import tollkitSlice from './cart/reducer';




export const store = configureStore({
    reducer: {
            cart: tollkitSlice
    },
})

