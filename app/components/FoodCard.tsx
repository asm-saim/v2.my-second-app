import Image from "next/image";
import { FoodData } from "../types";

interface IFood {
  info: FoodData;
}

const FoodCard = ({ info }: IFood) => {
  const { image_link, dish_name, category, rating, price } = info;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <Image src={image_link} width={200} height={200} alt="Food Image"></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
