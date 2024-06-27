import { BaseURL } from "@/utils/http";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk để lấy dữ liệu giỏ hàng
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const response = await axios.get(`${BaseURL}cart`);
    localStorage.setItem("dataCart", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message || error.message);
  }
});
export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async (product) => {
    try {
      const response = await axios.post(`${BaseURL}cart`, product);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message || error.message);
    }
  }
);
// Async thunk để cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ id, quantity }) => {
    try {
      const response = await axios.patch(`${BaseURL}cart/${id.toString()}`, {
        quantity,
      });
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message || error.message);
    }
  }
);

// Async thunk để xóa một sản phẩm khỏi giỏ hàng
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id) => {
    try {
      await axios.delete(`${BaseURL}cart/${id}`);
      return id;
    } catch (error) {
      throw Error(error.response.data.message || error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    removeCartItemLocally: (state, action) => {
      const id = action.payload;
      state.data = state.data.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCartQuantity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id, quantity } = action.payload;
        state.data = state.data.map((item) =>
          item.id == id ? { ...item, quantity } : item
        );
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        const idToDelete = action.payload;
        state.data = state.data.filter((item) => item.id !== idToDelete);
        localStorage.setItem("dataCart", JSON.stringify(state.data));

      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
        localStorage.setItem("dataCart", JSON.stringify(state.data));
      });
  },
});

export const { removeCartItemLocally, updateCartItemLocally } =
  cartSlice.actions;

export default cartSlice.reducer;
