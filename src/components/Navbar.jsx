import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  // Fetch the cart items count from the API
  const fetchCartCount = async () => {
    try {
      const response = await axios.get("https://taliban.pythonanywhere.com/api/cart/");
      setCartCount(response.data.length); // Set count based on cart items length
    } catch (error) {
      console.error("Failed to fetch cart count", error);
    }
  };

  // Call the fetchCartCount function whenever the Navbar loads
  useEffect(() => {
    fetchCartCount();
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
      {/* Brand Logo */}
      <Link to="/" className="navbar-brand fw-bold">
        veduras<span className="text-danger">farm</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <b><Link to="/" className="nav-link">Get Vegetables</Link></b>
          </li>
          <li className="nav-item">
            <b><Link to="/addproducts" className="nav-link">Add Vegetable</Link></b>
          </li>
        </ul>

        {/* View Cart Link with Badge */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/cart" className="btn btn-outline-secondary position-relative">
              🛒 View Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          {/* Authorization Links */}
          <li className="nav-item">
            <b><Link to="/aboutus" className="nav-link">About Us</Link></b>
          </li>
          <li className="nav-item">
            <b><Link to="/chat" className="nav-link">Chat Us</Link></b>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="btn btn-outline-primary me-2">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
