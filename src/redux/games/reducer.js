import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null
  },
  reducers: {
    setCurrentGame(state, action) {
      state.currentGame = action.payload;
    }
  }
})

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;


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

