import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-logo"><Link to="/">E-Shop</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart"><FaShoppingCart /> Cart ({cart.length})</Link></li>
        <li>{user ? (
          <span onClick={logout} className="user-btn"><FaUser /> {user.username} (Logout)</span>
        ) : (
          <Link to="/login"><FaUser /> Login</Link>
        )}</li>
      </ul>
    </nav>
  );
}
