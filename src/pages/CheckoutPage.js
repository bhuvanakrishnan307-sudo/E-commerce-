import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/checkout.css";

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  /* ✅ ORDER SUCCESS PAGE */
  if (submitted) {
    return (
      <div className="order-success">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>
          Thank you <b>{form.name}</b>, your order will be delivered to:
        </p>
        <p>{form.address}, {form.city}</p>
        <p>Confirmation sent to <b>{form.email}</b></p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-card">

        {/* LEFT – USER DETAILS */}
        <div>
          <h2>Checkout</h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City / Location"
              value={form.city}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Full Delivery Address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              required
            />

            <button className="place-order-btn" type="submit">
              Place Order
            </button>
          </form>
        </div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div className="order-item" key={item.id}>
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="order-total">
            Total: ₹{totalAmount.toFixed(2)}
          </div>
        </div>

      </div>
    </div>
  );
}
