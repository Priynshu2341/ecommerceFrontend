import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import orderReducer from "./orderSlice";
import { searchProductSlice } from "./searchProductSlice"
import productReducer from "./productSlice"

export const store = configureStore({
    reducer: {
          cart: cartReducer,
          orders: orderReducer,
          searchProducts: searchProductSlice.reducer,
          products : productReducer
    },
})