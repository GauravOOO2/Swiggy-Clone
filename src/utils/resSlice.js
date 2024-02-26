import { createSlice } from "@reduxjs/toolkit";

const resSlice = createSlice({
    name: 'res',
    initialState: {
        resList: [],
        resData: [],
        resMenu: [],
    },
    reducers: {
        updateResList: (state, action) => {
            state.resList = action.payload
        },
        updateCaresData: (state, action) => {
            state.resData = action.payload
        },
        updateMenuData: (state, action) =>{
            state.resMenu = action.payload
        }


    }
})

export default resSlice.reducer;
export const { updateResList, updateCaresData, updateMenuData } = resSlice.actions;