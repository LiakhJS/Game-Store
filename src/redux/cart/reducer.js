// import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//   name: 'map',
//   initialState: {
//     itemsInCart: [],
//   },
//   reducers: {
//     setItemInCart: (state, action) => {
//       state.itemsInCart.push(action.payload)
//     },
//     deleteItemFromCart: (state, action) => {
//       state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
//     },
//   }
// });

// export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

// const defaultState = {
//     cash: [],
//   }
//   export const cartReducer = (state = defaultState, action) => {
//     switch (action.type) {
//       case "ADD_CASH":
//         return { cash: Number(state.cash) + Number((action.payload)) }
//       case "SUB_CASH":
//         return { cash: Number(state.cash) - Number((action.payload)) }
//       default:
//         return state;
//     }
//   }

const tollkitSlice = createSlice({
  name: 'cashSlice',
  initialState: {
    cash: [],
    carts: [],
  },
  reducers: {
    // addCash(state, action) {
    //   state.cash = Number(state.cash) + Number((action.payload));
    // },
    addCart(state, action) {
      state.carts.push(action.payload);
    },
    removeCart(state,action) {
    state.carts = state.carts.filter(game => game.id !== action.payload)
          },
  }
})
export default tollkitSlice.reducer;
export const {addCart,removeCart}=tollkitSlice.actions;



