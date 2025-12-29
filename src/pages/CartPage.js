import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <div className="container fade-in"><h2>Your Cart is Empty</h2><Link to="/">Go Shopping</Link></div>;

  return (
    <div className="container fade-in">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} style={{margin:"10px 0"}}>
            {item.title} - ${item.price.toFixed(2)} x {item.quantity}
            <button className="add-btn" onClick={() => removeFromCart(item.id)} style={{marginLeft:"10px"}}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout"><button className="add-btn">Proceed to Checkout</button></Link>
      <button className="add-btn" onClick={clearCart} style={{marginLeft:"10px"}}>Clear Cart</button>
    </div>
  );
}
