import React from "react";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";

export default function Home() {
  const { products, loading } = useProducts();
  return (
    <div className="container fade-in">
      <h2>Latest Products</h2>
      <ProductList products={products} loading={loading} />
    </div>
  );
}
