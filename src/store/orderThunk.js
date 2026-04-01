import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from "../api/orderApi";


export const getOrdersThunk = createAsyncThunk("order/getOrder",
    async (_,{rejectWithValue}) => {
       try{
        const res = await getOrders();
        return res;
       } catch (err) {
        return rejectWithValue(err);
       };
    }
);