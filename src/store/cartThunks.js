import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, getCart, refreshCart } from "../api/productApi";
import { checkout, removeCartItem, updateCart } from "../api/orderApi";

export const fetchCart = createAsyncThunk(
    "cart/fetchCart", 
    async (_,{rejectWithValue }) => {
    try{
        const res = await getCart(); 
        return res;   
        
    }catch(e){
        return rejectWithValue(e.response?.data);
    }
}

)

export const addItemToCart = createAsyncThunk(
  "cart/addItem",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const res = await addToCart({productId,quantity}); 
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);


export const updateCartItem = createAsyncThunk(
  "cart/updateItem",
  async ({ productID, quantity }, { rejectWithValue }) => {
    try {
      const res = await updateCart({productID,quantity})
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);


export const deleteCartItem = createAsyncThunk(
  "cart/deleteItem",
  async (productID, { rejectWithValue }) => {
    try {
      const res = await removeCartItem(productID);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);


export const refreshCartItems = createAsyncThunk("cart/refreshCart",
  async (_,{rejectWithValue}) => {
    try{
      const res = await refreshCart();
      return res;
    }catch(e){
      return rejectWithValue(e.response?.data);
    }
  }
)


export const checkoutThunk = createAsyncThunk("cart/checkout",
  async (_,{rejectWithValue}) => {
     try {
      const res = await checkout();
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);