import { use } from "react";
import { FoodData } from "../types";
interface SearchFoodPromise {
  foodPromise: Promise<FoodData[]>;
}

const SearchFood = ({ foodPromise }: SearchFoodPromise) => {
  const foodData = use(foodPromise);

  //Fetching data using useEffect:
  //   const [foodMenu, setFoodMenu] = useState();
  // useEffect(()=>{
  //     fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
  //     .then(res=>res.json()
  //     .then(data=>setFoodMenu(data.data))
  // )
  // },[])

  return (
    <div>
      <h1>{foodData.length}</h1>
    </div>
  );
};

export default SearchFood;
