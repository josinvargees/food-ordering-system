import { Link, useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaShoppingCart,
  FaClipboardList,
  FaHome,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">

      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <FaUtensils className="text-warning me-2" />
          FoodExpress
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <FaHome className="me-2" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart className="me-2" />
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                <FaClipboardList className="me-2" />
                My Orders
              </Link>
            </li>

          </ul>

          <div className="nav-buttons">

            {token ? (
              <button
                className="btn logout-btn"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="me-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/"
                className="btn login-btn"
              >
                <FaSignInAlt className="me-2" />
                Login
              </Link>
            )}

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;