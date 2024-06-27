// productsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "@/utils/http";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${BaseURL}products`);
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
  }
);

// Async thunk to update a product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${BaseURL}products/${updatedProduct.id}`,
        updatedProduct
      );
      return response.data; // Return the updated product data from the API response
    } catch (error) {
      throw Error(error.response.data.message); // Throw an error with the message from the server response
    }
  }
);

// Async thunk to update product sizes and quantitySize
export const updateProductSizes = createAsyncThunk(
  "products/updateProductSizes",
  async ({ id, sizes }) => {
    try {
      const response = await axios.patch(`${BaseURL}products/${id}`, { sizes });
      return response.data; // Return the updated product with sizes and quantitySize
    } catch (error) {
      throw Error(error.response.data.message); // Throw an error with the message from the server response
    }
  }
);
export const deleteDBItem = createAsyncThunk(
  "cart/deleteDBItem",
  async (id) => {
    try {
      await axios.delete(`${BaseURL}products/${id}`);
      return id;
    } catch (error) {
      throw Error(error.response.data.message || error.message);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    dataDetail: null,
    valueSearch: "",
    dataSearch: [],
    dataFilter: [],
    dataCheckDB: null,
    status: "idle",
    error: null,
  },
  reducers: {
    // Reducer to set product database data
    setDataProductDB: (state, action) => {
      localStorage.setItem("Data-Product-DB", JSON.stringify(action.payload));
      state.dataDetail = action.payload;
    },
    // Reducer to set detailed product data
    setDataDetail: (state, action) => {
      localStorage.setItem("dataDetail", JSON.stringify(action.payload));
      state.dataDetail = action.payload;
    },
    // Reducer to set search value
    setValueSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
    // Reducer to set search result data
    setDataSearch: (state, action) => {
      state.dataSearch = action.payload;
    },
    // Reducer to set filtered data
    setDataFilter: (state, action) => {
      state.dataFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the product in the state data array
        state.data = state.data.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProductSizes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductSizes.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the product in the state data array with new sizes and quantitySize
        localStorage.setItem("Data-Product-DB", JSON.stringify(action.payload));

        state.data = state.data.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      })
      .addCase(updateProductSizes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to update product sizes.";
      })
      .addCase(deleteDBItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDBItem.fulfilled, (state, action) => {
        const idToDelete = action.payload;
        state.data = state.data.filter((item) => item.id !== idToDelete);
        localStorage.setItem("products", JSON.stringify(state.data));
      })
      .addCase(deleteDBItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export action creators
export const {
  setDataProductDB,
  setDataDetail,
  setValueSearch,
  setDataSearch,
  setDataFilter,
} = productsSlice.actions;

// Export reducer function
export default productsSlice.reducer;
