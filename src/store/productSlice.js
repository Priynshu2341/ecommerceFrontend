import { createSlice } from "@reduxjs/toolkit"
import { productThunk } from "./productThunk";


const initialState = {
    content : [],
    totalPages: 0,
    first : true,
    last : false,
    pageNumber : 0 ,
    totalElements: 0,
    loading : false,
    error : null

}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(productThunk.fulfilled,(state,action) => {
            state.content = action.payload.content;
            state.totalPages = action.payload.totalPages;
            state.first = action.payload.first;
            state.last = action.payload.last;
            state.pageNumber = action.payload.pageable.pageNumber;
            state.totalElements = action.payload.totalElements;
        })

         .addCase(productThunk.pending,(state,action) => {
            state.loading = true;
        })

         .addCase(productThunk.fulfilled,(state,action) => {
          state.error = action.payload;
        })
    }
})


export default productSlice.reducer;