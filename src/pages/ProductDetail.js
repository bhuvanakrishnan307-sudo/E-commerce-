import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import Loader from "../components/Loader";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="container fade-in" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
      <img src={product.image} alt={product.title} style={{width:"300px", objectFit:"contain"}}/>
      <div>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button className="add-btn" onClick={() => addToCart({...product, quantity:1})}>Add to Cart</button>
      </div>
    </div>
  );
}
