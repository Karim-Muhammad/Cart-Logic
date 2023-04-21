// Lib
import { useContext, useState } from "react";

// Styles
import Input from "../../../UI/Input";
import classes from "./MealItemForm.module.css";

// Context
import { CartDataContext } from "../../../../contexts/cart-ctx";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(0);

  const cartCtx = useContext(CartDataContext);

  const { dispatchCart } = cartCtx;
  const { id } = props.meal;

  const increaseAmount = (event) => {
    event.preventDefault();
    console.log(id, amount);
    dispatchCart({
      type: "set-amount",
      payload: { id, item: props.meal, amount },
    });
  };

  return (
    <form onSubmit={increaseAmount} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount-meal-" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          value: amount,
          onChange: (evt) => setAmount(evt.target.value),
        }}
      />
      <button>
        <span>+</span> Add
      </button>
    </form>
  );
};

export default MealItemForm;
