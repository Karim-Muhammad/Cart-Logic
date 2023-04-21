// Lib
import React, { createContext, useReducer } from "react";

// Reducers
import cartReducer, {
  DEFAULT_STATE as cartState,
} from "../stores/cart-reducer";

// Context (Create)
const CartDataContext = createContext(cartState);

const CartDataProvider = (props) => {
  // using care reducer
  const [stateCart, dispatchCart] = useReducer(cartReducer, cartState);

  const cartController = {
    stateCart,
    dispatchCart,
  };

  return (
    <CartDataContext.Provider value={cartController}>
      {props.children}
    </CartDataContext.Provider>
  );
};

export default CartDataProvider;
export { CartDataContext };
