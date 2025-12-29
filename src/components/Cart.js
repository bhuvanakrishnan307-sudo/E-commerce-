import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <div className="cart-container fade-in">
      {cart.map(item => (
        <div className="cart-item slide-in" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <button
            className="add-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
