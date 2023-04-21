import { createContext } from "react";

const showCart = {
  isOpen: false,
  open: () => {},
  close: () => {},
};

const showCartContext = createContext(showCart);

export default showCartContext;
