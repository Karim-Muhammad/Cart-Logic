// Lib

// Components
import MealItemForm from "./MealItemForm";

// Styles
import classes from "./MealItem.module.css";

// Context

const MealItem = (props) => {
  const { title, desc, price } = props.meal;
  const priceText = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h2>{title}</h2>
        <div className={classes.description}>{desc}</div>
        <div className={classes.price}>{priceText}</div>
      </div>
      <div>
        <MealItemForm meal={props.meal} />
      </div>
    </li>
  );
};

export default MealItem;
