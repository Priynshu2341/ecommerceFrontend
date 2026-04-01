import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk } from "./orderThunk.js";


const initialState = {
    orders: [],
    loading: false,
    error: null
}



const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(getOrdersThunk.fulfilled,(state,action) => {
          state.orders = action.payload;
          state.loading =false;
          state.error = null;
        })
        .addCase(getOrdersThunk.pending,(state,action) => {
          state.loading = true;
          state.error = null;
        })

        .addCase(getOrdersThunk.rejected,(state,action) =>{         
          state.loading = false;
          state.error = action.payload;
        })
    }

})

export default orderSlice.reducer;