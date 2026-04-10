import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "./productThunk";

const initialState = {
  content: [],
  totalPages: 0,
  first: true,
  last: false,
  pageNumber: 0,
  totalElements: 0,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(productsThunk.fulfilled, (state, action) => {
          state.loading = false;

          const incomingPage = action.payload.page;

          if (
            incomingPage !== 0 &&
            incomingPage !== state.pageNumber + 1
          ) {
            return;
          }

          if (incomingPage === 0) {
            state.content = action.payload.products;
          } else {
            const existingIds = new Set(state.content.map(item => item.id));

            const filteredNewData = action.payload.products.filter(
              item => !existingIds.has(item.id)
            );

            state.content = [
              ...state.content,
              ...filteredNewData,
            ];
          }

          state.pageNumber = incomingPage;
          state.totalPages = action.payload.totalPages;
          state.first = action.payload.first;
          state.last = action.payload.last;
          state.totalElements = action.payload.totalElements;
        })

      .addCase(productsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;