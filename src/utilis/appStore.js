import { configureStore } from "@reduxjs/toolkit";
import makeupReducer from "./makeupSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore(
    {
        reducer : {
            makeup : makeupReducer,
            cart : cartReducer
        }
    }
)
export default appStore;