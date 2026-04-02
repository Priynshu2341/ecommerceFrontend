import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductPage } from "../api/productApi";




export const productsThunk = createAsyncThunk("products/all",
    async ({page,size}, {rejectWithValue}) => {
     try{
        const response = await getProductPage({page,size});
        return response.data;
     }catch(e){
        return rejectWithValue(e.response?.data);
     };
    }
)