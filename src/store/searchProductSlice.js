import { createSlice } from "@reduxjs/toolkit";
import { searchProductThunk } from "./searchProductThunks";



const initialState = {
    products : [],
    loading : false,
    error : null
}



export const searchProductSlice = createSlice({
    name: "searchProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.
       addCase(searchProductThunk.fulfilled,(state,action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
       })

        .addCase(searchProductThunk.pending,(state,action) => {
        state.loading = true;
        
       })

       .addCase(searchProductThunk.rejected,(state,action) => { 
        state.loading = false;
        state.error = action.payload;
       })
    }
})


