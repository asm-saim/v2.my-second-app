import FoodCard from "../components/FoodCard";
import { FoodData } from "../types";

const page = async () => {
  //Fetching Data:
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods");
  const data = await res.json();
  const foodData: FoodData[] = data.data;
  //   console.log("Food data:",data)

  return (
    <div>
      {foodData.map((info) => (
        <FoodCard key={info.id} info={info}></FoodCard>
      ))}
    </div>
  );
};

export default page;
