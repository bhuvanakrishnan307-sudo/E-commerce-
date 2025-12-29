import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({ ...product, quantity: 1 });
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="product-card slide-in">
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy"/>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <div className="product-footer">
          <span>${product.price.toFixed(2)}</span>
          <button className={`add-btn ${isAdding ? "adding" : ""}`} onClick={handleAddToCart}>
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
