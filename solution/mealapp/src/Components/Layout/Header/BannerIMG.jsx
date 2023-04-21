import mealsIMG from "./../../../assets/images/meals.jpg";
// is import CSS files and IMGs javascript features??!
// No, it isn't.
// it is a provided feature in project setup(webpack, create-react-app, vite)
// that do transformation process and abstraction actions(behind the scenes)
// it include the imported img to finished project which could deploy on a server
// and generate link for this img

// Styles
// import classes from "./../Meals/MealItem/MealItem.module.css";

const BannerIMG = (props) => {
  return (
    <div className={props.styles}>
      {/* <img src="./assets/images/meals.jpg" alt="Meals" /> */}
      <img src={mealsIMG} alt="Meals" />
    </div>
  );
};

export default BannerIMG;
