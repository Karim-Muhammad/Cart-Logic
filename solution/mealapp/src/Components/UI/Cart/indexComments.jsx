// Lib
import React, { useContext } from "react";

// Components
import CartItem from "./CartItem";

// Styles
import classes from "./Cart.module.css";
import Modal from "../Modal";

// Context (consume)
import ctxCartUI from "../../../contexts/cart-show";
import { CartDataContext } from "../../../contexts/cart-data-ctx";

const Cart = (props) => {
  const { stateCart } = useContext(CartDataContext);

  const totalPrice = `$2.99`;
  // const ctxCart = React.useContext(ctxCartUI);
  // >> using props drilling here more wise and better

  // Old
  // const cartItems = [{ id: Math.random(), name: "Sushi", price: 2.99 }].map(

  // New
  // console.log(stateCart);
  const cartItems = stateCart.map((item, indx) => (
    <CartItem
      index={indx}
      key={item.id}
      id={item.id}
      title={item.name}
      price={item.price}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <main className={classes["cart-items"]}>{cartItems}</main>
      <div>
        <span>Total Amount</span>
        <span className={classes.total}>{totalPrice}</span>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
        {/* props.close not ctx.close because make this button more configurable not for specfic thing */}
      </footer>
    </Modal>
  );
};

export default Cart;
