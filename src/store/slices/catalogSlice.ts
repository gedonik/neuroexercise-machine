import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { CatalogInitialStateType } from '../../types';

const initialState: CatalogInitialStateType = {
  isLoading: true,
  products: [],
  error: null,
};

const PRODUCTS_API = 'http://localhost:3000/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function (_, { rejectWithValue }) {
    try {
      return await axios.get(PRODUCTS_API).then((res) => res.data);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return error;
    }
  }
);

export const catalogSlice = createSlice({
  name: 'catalogProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.isLoading = true;
      state.products = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, payload) => {
      if (payload) state.error = payload;
      state.isLoading = false;
    });
  },
});

// export const {} = catalogSlice.actions;

export const selectProducts = (state) => state.catalogProducts;
