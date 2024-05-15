import { Product } from "../../data/products";

interface Cartstate {
  cart: Product[];
}

const initialState: Cartstate = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Product;
}

export function cartReducer(
  state = initialState,
  action: CartAction
): Cartstate {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_TO_CART":
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      return {
        ...state,
        cart: cartFiltered,
      };
    default:
      return state;
  }
}
