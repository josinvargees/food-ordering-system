import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedItems = items.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(updatedItems);
  }, []);

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].quantity++;
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];

    if (updated[index].quantity > 1) {
      updated[index].quantity--;
    }

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
    <div className="cart-page">

      <div className="container">

        <h1 className="cart-title">
          🛒 My Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your Cart is Empty</h3>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item-card" key={index}>

                <div className="cart-item-body">

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <h4 className="cart-price">
                    ₹{item.price}
                  </h4>

                  <div className="quantity-box">

                    <button
                      className="btn btn-danger"
                      onClick={() => decreaseQty(index)}
                    >
                      −
                    </button>

                    <span className="quantity">
                      {item.quantity}
                    </span>

                    <button
                      className="btn btn-success"
                      onClick={() => increaseQty(index)}
                    >
                      +
                    </button>

                  </div>

                  <h5 className="subtotal">
                    Subtotal : ₹{item.price * item.quantity}
                  </h5>

                  <button
                    className="btn btn-outline-danger mt-2"
                    onClick={() => removeItem(index)}
                  >
                    Remove Item
                  </button>

                </div>

              </div>
            ))}

            <div className="checkout-card">

              <h2>Total : ₹{total}</h2>

            <button className="btn btn-warning btn-lg mt-3" onClick={() => {
              const orders = JSON.parse(localStorage.getItem("orders")) || [];
                orders.push(...cartItems);
                localStorage.setItem("orders", JSON.stringify(orders));
                localStorage.removeItem("cart");
                setCartItems([]);
                alert("Order Placed Successfully!");}}>
              Proceed To Checkout
            </button>

            </div>

          </>
        )}

      </div>

    </div>
    <Footer />
    </>
  );
}

export default Cart;