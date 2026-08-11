import biryani from "../assets/biryani.jpg";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import friedrice from "../assets/friedrice.jpg";
import shawarma from "../assets/shawarma.jpg";
import icecream from "../assets/icecream.jpg";

function FoodCard({ food }) {

  const images = {
    "Chicken Biryani": biryani,
    "Veg Pizza": pizza,
    "Chicken Burger": burger,
    "Fried Rice": friedrice,
    "Shawarma": shawarma,
    "Chocolate Ice Cream": icecream,
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(food);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${food.name} added to cart!`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100 food-card">

        <img
          src={images[food.name]}
          className="card-img-top"
          alt={food.name}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">

          <h4>{food.name}</h4>

          <p className="text-muted">
            {food.description}
          </p>

          <p className="text-warning fs-5">
            ⭐⭐⭐⭐⭐ 4.8
          </p>

          <h3 className="text-success">
            ₹{food.price}
          </h3>

          <button
            className="btn btn-warning w-100"
            onClick={addToCart}
          >
            🛒 Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default FoodCard;