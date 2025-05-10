import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "font-awesome/css/font-awesome.min.css";

const Navbar = ({ cartItemCount }) => {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();



  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    };

    // Initial load
    updateCartCount();

    // Listen for custom "cartUpdated" event
    window.addEventListener("cartUpdated", updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [location]);
  return (
    <motion.nav
      className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="navbar-brand fw-bold">
        veduras<span className="text-primary">Farm</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <b><Link to="/" className="nav-link">MY SOKO</Link></b>
          </li>
          <li className="nav-item">
            <b><Link to="/addproducts" className="nav-link">Add veges </Link></b>
          </li>
          <li className="nav-item">
            <b><Link to="/aboutus" className="nav-link">know verduras</Link></b>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
        

          {/* Cart Icon with Dynamic Badge */}
          <li className="nav-item">
              <b>
                <Link to="/cart" className="nav-link d-flex align-items-center">
                  <i className="fas fa-shopping-cart me-1"></i>
                  Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger ms-2">{cartCount}</span>
                  )}
                </Link>
              </b>
            </li>
            <li className="nav-item">
            <Link to="/signin" className="btn btn-outline-primary me-2">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-outline-primary me-2">Register</Link>
          </li>

          <li className="nav-item">
            <Link to="/profile" className="btn btn-outline-primary">
              <i className="fa fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;