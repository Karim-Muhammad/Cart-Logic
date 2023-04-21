// Lib
import { useContext } from "react";

// Context (use)
import { CartDataContext, CartDataProvider } from "../../../contexts/cart-ctx";

// Styles
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { dispatchCart } = useContext(CartDataContext);
  const { id, name, price, amount } = props.item;
  const priceItem = `$${price.toFixed(2)}`;

  const increaseAmount = (evt) => {
    dispatchCart({
      type: "set-amount",
      payload: { id, item: props.item, amount: Number(amount) + 1 },
    });
  };

  const decreaseAmount = (evt) => {
    dispatchCart({
      type: "set-amount",
      payload: { id, item: props.item, amount: Number(amount) - 1 },
    });
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceItem}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseAmount}>−</button>
        <button onClick={increaseAmount}>+</button>
      </div>
      {/*onClick={props.onAdd}*/}
    </li>
  );
};

export default CartItem;
