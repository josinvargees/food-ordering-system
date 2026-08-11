import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleReorder = (order) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...order,
      quantity: order.quantity || 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="order-container">
        <h2 className="order-title">My Orders</h2>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h4>No Orders Found</h4>
            <p>Your order history will appear here.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div className="order-card" key={index}>

              {/* Top Row */}
              <div className="order-header">
                <h4>{order.name}</h4>

                <h4 className="price">
                  ₹{order.price}
                </h4>
              </div>

              {/* Description */}
              <p className="description">
                {order.description}
              </p>

              {/* Quantity & Status */}
              <div className="order-details">
                <span>
                  <strong>Quantity:</strong>{" "}
                  {order.quantity ? order.quantity : 1}
                </span>

                <span className="status">
                  Delivered ✅
                </span>
              </div>

              {/* Date */}
              <div className="order-date">
                Ordered on:{" "}
                {new Date().toLocaleDateString("en-GB")}
              </div>

              {/* Button */}
              <button
                className="btn btn-outline-danger mt-2"
                onClick={() => handleReorder(order)}
              >
                Reorder
              </button>

            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default OrderHistory;