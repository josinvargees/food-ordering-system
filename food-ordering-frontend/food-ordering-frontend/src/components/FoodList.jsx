import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

function FoodList() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error("Error fetching foods:", error);
      });
  }, []);

  return (
  <div className="row">
    {foods.map((food) => (
      <FoodCard
        key={food.id}
        food={food}
      />
    ))}
  </div>
);
}

export default FoodList;