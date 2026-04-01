import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import orderReducer from "./orderSlice";
import searchProductReducer from "./searchProductSlice"

export const store = configureStore({
    reducer: {
          cart: cartReducer,
          orders: orderReducer,
          searchProducts: searchProductReducer
    },
})