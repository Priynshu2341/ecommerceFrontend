import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductPage } from "../api/productApi";




export const productThunk = createAsyncThunk("products/all",
    async (_, {rejectWithValue}) => {
     try{
        const response = await getProductPage();
        return response;
     }catch(e){
        return rejectWithValue(e.response?.data);
     };
    }
)