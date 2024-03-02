import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],

    },
    reducers:{
        additem:(state , action)=>{
            state.items.push(action.payload)
        },
        removeitems:(state, action)=>{
            state.items.pop(action.payload)
        },
        clearitems:(state, action)=>{
            state.items.length=0;
        }
    }

})


export default cartSlice.reducer;
export const {additem, removeitems, clearitems} = cartSlice.actions