import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const img_url = "https://taliban.pythonanywhere.com/static/images/";

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(
                    "https://taliban.pythonanywhere.com/api/cart/",
                    { withCredentials: true } // ensure session or cookie auth if needed
                );
                setCartItems(response.data);
            } catch (err) {
                setError("Failed to load cart items.");
                console.error("Cart fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const totalCost = cartItems.reduce((sum, item) => {
        const cost = item.product?.vegetable_cost || 0;
        return sum + item.quantity * cost;
    }, 0);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Your Cart</h2>

            {loading && (
                <div className="text-center my-4">
                    <div className="spinner-border text-primary" role="status" aria-label="Loading">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {!loading && cartItems.length === 0 && (
                <div className="alert alert-info" role="alert">
                    Your cart is empty.
                </div>
            )}

            {!loading && cartItems.length > 0 && (
                <>
                    {cartItems.map((item) => {
                        const { product } = item;
                        return (
                            <div key={item.id} className="card mb-3 shadow-sm">
                                <div className="row g-0">
                                    <div className="col-md-2">
                                        <img
                                            src={img_url + product.vegetable_image}
                                            className="img-fluid rounded-start"
                                            alt={product.vegetable_name}
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.vegetable_name}</h5>
                                            <p className="card-text">
                                                KES {product.vegetable_cost} × {item.quantity}
                                            </p>
                                            <strong>Total: KES {product.vegetable_cost * item.quantity}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <h4 className="mt-4">Grand Total: KES {totalCost}</h4>
                    <button className="btn btn-success mt-2">Proceed to Checkout</button>
                </>
            )}

            <Footer />
        </div>
    );
};

export default Cart;
