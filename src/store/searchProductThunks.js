import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductSearch } from "../api/productApi";




export const searchProductThunk = createAsyncThunk("search/products",
    async (name,{rejectWithValue}) => {
      try{
        const res = await ProductSearch(name);
        return res;
      }catch(e){
        return rejectWithValue(
          e.response?.data || {message : e.message}
        );
      }
    } 
)