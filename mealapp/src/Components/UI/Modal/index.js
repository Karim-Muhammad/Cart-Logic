// Lib
import React from "react";
import { createPortal } from "react-dom";

// Styles
import classes from "./Modal.module.css";

// Context (consume)
import ctxCartUI from "../../../contexts/cart-show";

const Modal = (props) => {
  // const ctxCart = React.useContext(ctxCartUI);
  // using a Context here in this component (reusable component)
  // make this component more specific and not general
  // so best practise and more sense using `props` for this component to be more configurable
  // so using a context here not recommended!
  return createPortal(
    <>
      <div onClick={props.onClose} className={classes.backdrop} />
      <div className={classes.modal}>{props.children}</div>,
    </>,
    document.body
  );
};

export default Modal;
