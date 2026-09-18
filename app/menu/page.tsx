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
      <h1>Total Food Menu:{foodData.length}</h1>
      <div className=" grid grid-cols-3 gap-5">
        {foodData.map((info) => (
          <FoodCard key={info.id} info={info}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default page;
