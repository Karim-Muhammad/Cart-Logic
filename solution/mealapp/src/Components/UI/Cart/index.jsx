// Lib
import React, { useContext } from "react";

// Components
import CartItem from "./CartItem";

// Styles
import classes from "./Cart.module.css";
import Modal from "../Modal";

// Context (consume)
import { CartDataContext } from "../../../contexts/cart-ctx";

const Cart = (props) => {
  const { stateCart } = useContext(CartDataContext);

  const cartItems = stateCart.items.map((item, indx) => (
    <CartItem
      key={item.id}
      item={item}
      index={indx}
      id={item.id}
      title={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));

  const totalPrice = stateCart.items.reduce(
    (res, itm) => res + itm.amount * itm.price,
    0
  );

  return (
    <Modal onClose={props.onClose}>
      <main className={classes["cart-items"]}>{cartItems}</main>
      <div>
        <span>Total Amount</span>
        <span className={classes.total}>{`$${totalPrice.toFixed(2)}`}</span>
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
