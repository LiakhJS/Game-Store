

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cash: [],
    carts: [],
  },
  reducers: {
    addCart(state, action) {
      state.carts.push(action.payload);
    },
    removeCart(state,action) {
    state.carts = state.carts.filter(game => game.id !== action.payload)
          },
  }
})
export default cartSlice.reducer;
export const {addCart,removeCart}=cartSlice.actions;


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

    // addCash(state, action) {
    //   state.cash = Number(state.cash) + Number((action.payload));
    // },

