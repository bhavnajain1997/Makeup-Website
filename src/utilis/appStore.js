import { configureStore } from "@reduxjs/toolkit";
import makeupReducer from "./makeupSlice";

const appStore = configureStore(
    {
        reducer : {
            makeup : makeupReducer
        }
    }
)
export default appStore;