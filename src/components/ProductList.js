import React from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import "./ProductList.css";

export default function ProductList({ products, loading }) {
  if (loading) return <div className="product-list">{[...Array(8)].map((_, i) => <Loader key={i} />)}</div>;

  return (
    <div className="product-list">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
