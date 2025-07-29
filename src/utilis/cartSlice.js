import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartList : [],
    },
    reducers : {
        addCartList : (state,action) => {
            state.cartList.push(action.payload);
        },
        removeCartList : (state) => {
            state.cartList.pop();
        },
        clearCartList : (state) => {
            state.cartList.length = 0;
        } 

    }
})
export const {addCartList,removeCartList,clearCartList} = cartSlice.actions;
export default cartSlice.reducer;