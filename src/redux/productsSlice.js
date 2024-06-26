import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "@/utils/http";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${BaseURL}products`);
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
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
    setDataProductDB: (state, action) => {
      localStorage.setItem("Data-Product-DB", JSON.stringify(action.payload));
      state.dataDetail = action.payload;
    },
    setDataDetail: (state, action) => {
      localStorage.setItem("dataDetail", JSON.stringify(action.payload));
      state.dataDetail = action.payload;
    },
    setValueSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
    setDataSearch: (state, action) => {
      state.dataSearch = action.payload;
    },
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
      });
  },
});
export const { setDataProductDB,setDataDetail, setValueSearch, setDataSearch, setDataFilter } =
  productsSlice.actions;
export default productsSlice.reducer;
