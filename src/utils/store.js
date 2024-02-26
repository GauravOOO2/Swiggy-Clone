import { configureStore } from "@reduxjs/toolkit";
import resSlice from "./resSlice";

const store = configureStore({
    reducer:{
        res: resSlice
    }
})

export default store;