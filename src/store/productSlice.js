import { createSlice } from "@reduxjs/toolkit"
import { productsThunk } from "./productThunk";


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
    reducers : {
      setPage: (state, action) =>
     {
        const newPage = action.payload;
        if (newPage >= 0 && newPage < state.totalPages) {
            state.pageNumber = newPage;
            console.log("setting page number to ",newPage)
        }
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(productsThunk.fulfilled,(state,action) => {
            state.loading = false;
            state.content = action.payload.content;
            state.totalPages = action.payload.totalPages;
            state.first = action.payload.first;
            state.last = action.payload.last;
            state.pageNumber = action.payload.number;
            state.totalElements = action.payload.totalElements;
        })

         .addCase(productsThunk.pending,(state,action) => {
            state.loading = true;
        })

         .addCase(productsThunk.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })


    }
})

export const {setPage} = productSlice.actions;
export default productSlice.reducer;
