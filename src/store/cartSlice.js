import { createSlice } from "@reduxjs/toolkit";
import { fetchCart,  addItemToCart,updateCartItem, 
    deleteCartItem,
    refreshCartItems,
    checkoutThunk,} from "./cartThunks";



const initialState = {
    items: [],
    totalPriceCents: 0,
    totalQuantity: 0,
    loading: false,
    error: null
}


const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
       .addCase(refreshCartItems.fulfilled,(state,action) => {
         state.loading = false,
         state.items = action.payload.items;
         state.totalQuantity = action.payload.cartQuantity;
         state.totalPriceCents = action.payload.totalPriceCents;
       })

       .addCase(refreshCartItems.pending,(state,action) => {
         state.loading = true
       })

       .addCase(refreshCartItems.rejected,(state,action) => {
        state.error = action.payload;
        state.loading = false;
       })

       .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalQuantity = action.payload.cartQuantity;
        state.totalPriceCents = action.payload.totalPriceCents;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    
      .addCase(addItemToCart.fulfilled,(state,action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalQuantity = action.payload.cartQuantity;
        state.totalPriceCents = action.payload.totalPriceCents;
      })
    
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalQuantity = action.payload.cartQuantity;
        state.totalPriceCents = action.payload.totalPriceCents;
              
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalQuantity = action.payload.cartQuantity;
        state.totalPriceCents = action.payload.totalPriceCents;
      })

      .addCase(checkoutThunk.fulfilled,(state,action) => {       
         state.loading = false,
         state.items = [];
         state.totalQuantity = 0;
         state.totalPriceCents = 0;
      })

      .addCase(checkoutThunk.pending, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addCase(checkoutThunk.rejected, (state, action) => {
        return { ...state, ...action.payload };
      })

  },
});

export default cartSlice.reducer;