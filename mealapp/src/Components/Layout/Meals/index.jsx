// Components
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const MealsSection = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default MealsSection;
