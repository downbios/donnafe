import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface Cartstate {
  cart: Product[];
}

const initialState: Cartstate = {
  cart: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProdcut: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      state.cart = cartFiltered;
    },
  },
});

export const { addProdcut, removeProduct } = cartSlice.actions;
