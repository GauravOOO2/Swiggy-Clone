import { configureStore } from "@reduxjs/toolkit";
import resSlice from "./resSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        res: resSlice,
        cart: cartSlice,
    }
})

export default store;