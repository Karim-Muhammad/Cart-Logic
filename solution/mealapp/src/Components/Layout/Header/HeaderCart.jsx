// Lib
import React from "react";

// Components
import CartIcon from "./../../UI/Cart/CartIcon";

// Styles
import style from "./HeaderCartButton.module.css";

// import classes from "./Header.module.css";
// doesn;t generate a new <style> tag for this component!
// maybe because it is a child for parent that already import same css file?

// Context (consume)
import showCartContext from "../../../contexts/cart-show";
import { CartDataContext } from "../../../contexts/cart-ctx";

const HeaderCart = (props) => {
  const ctxCartUI = React.useContext(showCartContext);
  const ctxCart = React.useContext(CartDataContext);

  const numOfItems = ctxCart.stateCart.items.reduce(
    (res, itm) => res + Number(itm.amount),
    0
  );
  // here we can use context, because header cart always deal with cart as cart
  console.log(props.showCart);

  return (
    <div onClick={ctxCartUI.open} className={style.button}>
      <CartIcon style={style.icon} />
      Your cart <span className={style.badge}>{numOfItems}</span>
    </div>
  );
};

export default HeaderCart;
