// Lib

// Data Constants (instead of fetching from DB)
import DUMMY_MEALS from "./dummy-meals";

// Components
import MealItem from "./MealItem/MealItem";
import Card from "./../../UI/Card";

// Styles
import classes from "./AvailableMeals.module.css";

// Context

const AvailableMeals = (props) => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem meal={meal} key={meal.id} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
