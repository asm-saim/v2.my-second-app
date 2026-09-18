import { use } from "react";
import { FoodData } from "../types";

interface SearchFoodPromise {
  foodPromise: Promise<FoodData[]>;
}

const SearchFood = ({ foodPromise }: SearchFoodPromise) => {
  const foodData = use(foodPromise);
  return (
    <div>
      <h1>{foodData.length}</h1>
    </div>
  );
};

export default SearchFood;
