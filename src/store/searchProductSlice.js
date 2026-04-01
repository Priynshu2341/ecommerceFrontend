import { createSlice } from "@reduxjs/toolkit";
import { searchProductsThunk } from "./searchProductThunks";


const initialValue = {
    products : [],
    loading : false,
    error : null
}



const searchProductSlice = createSlice({
    name: "searchProducts",
    initialValue,
    reducers: {},
    extraReducers: (builder) => {
       builder.
       addCase(searchProductsThunk.fulfilled,(state,action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
       })

        addCase(searchProductsThunk.pending,(state,action) => {
        state.loading = true;
        
       })

        addCase(searchProductsThunk.rejected,(state,action) => { 
        state.loading = false;
        state.error = action.payload;
       })
    }
})


export default searchProductSlice.reducer;